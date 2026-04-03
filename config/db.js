import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
        console.log("DB Connected");
    } catch (err) {
        console.error("DB Connection Failed!", err);
        process.exit(1);
    }
};

export default connectDB;