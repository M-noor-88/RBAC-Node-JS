import { Router } from "express";
import verifyToken from "../middleware/authMiddleware.js";
import authorizeRole from "../middleware/roleMiddleware.js";
const router = Router();


// Only Admin can Access 
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
    res.json({ message: "Welcome Admin" });
})

// Admin and Manager can Access
router.get("/manager", verifyToken, authorizeRole("admin", "manager"), (req, res) => {
    res.json({ message: "Welcome Manager" });
})

// All Can Access 

router.get("/user", verifyToken, authorizeRole("admin", "manager", "user"), (req, res) => {
    res.json({ message: "Welcome User" });
})


export default router;