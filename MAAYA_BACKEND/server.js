// these are my package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// these are my file imports
import authRouts from "./routes/auth.js";
import messageRouts from "./routes/messages.js";
import connectMongoDB from "./Database/connectMongoDB.js";

dotenv.config();

// Variables
const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouts);
app.use("/api/messages", messageRouts);


app.listen(port, () => {
    connectMongoDB();
    console.log(`Server running on port ${port}`)
});