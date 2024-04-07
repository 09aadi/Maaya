import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDB");
        
    } catch (err) {
        console.log("Error connecting MongoDB", err.message)
    }
}

export default connectMongoDB; 