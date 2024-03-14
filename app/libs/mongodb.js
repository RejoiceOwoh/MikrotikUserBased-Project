import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Successfully Connected to the Mongodb database");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;