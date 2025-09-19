import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    let token;
    let authHeaders = req.headers.Authorization || req.headers.authorization;

    if (authHeaders && authHeaders.startsWith("Bearer")) {
        token = authHeaders.split(" ")[1];

        console.log(token);

        if (!token) {
            res.status(400).json({ message: "No Token , Auth denied" });
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;

            console.log('Decoded user:', req.user);
            next();
        } catch (error) {
            res.status(401).json({ message: "Token Not Valid" });
        }
    }
    else {
        return res.status(401).json({ message: "No Token" });
    }
};

export default verifyToken;