import { connect as _connect } from "mongoose";

const dbConnect = async () => {
    try {
        const connect = await _connect(process.env.CONNECTION_STRING);
        console.log(`Database Connected : ${connect.connection.host} , ${connect.connection.name}`)
    }catch(error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit process with failure
    }

}

export default dbConnect;