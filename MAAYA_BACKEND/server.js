// these are my package imports
import express from "express";
import dotenv from "dotenv";

// these are my file imports
import authRouts from "./routes/auth.js";
import connectMongoDB from "./Database/connectMongoDB.js";

dotenv.config();

// Variables
const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use("/api/auth", authRouts);


app.listen(port, () => {
    connectMongoDB();
    console.log(`Server running on port ${port}`)
});