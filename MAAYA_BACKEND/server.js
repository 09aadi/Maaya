// these are my package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// these are my file imports
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messages.js";
import userRoutes from "./routes/users.js";
import connectMongoDB from "./Database/connectMongoDB.js";

dotenv.config();

// Variables
const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(port, () => {
    connectMongoDB();
    console.log(`Server running on port ${port}`)
});