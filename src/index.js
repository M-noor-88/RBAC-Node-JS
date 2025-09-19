import express from "express";
import { json } from "express";
import dotenv from "dotenv";
import dbConnect from '../src/config/dbConnect.js'
import authRoutes from "../src/routes/authRoutes.js";
import userRoutes from '../src/routes/userRoutes.js'


dotenv.config();

dbConnect();

const app = express();


// Moddleware
app.use(json());


// Routes 
app.use("/api/auth", authRoutes);
app.use("/api/user/role", userRoutes);



// Start The Server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is Running on PORT : ${PORT}`);
})

