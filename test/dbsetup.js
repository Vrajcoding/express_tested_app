import mongoose from "mongoose";

//const TEST_DB_URI = "mongodb://127.0.0.1:27017/test-db";


export const connectTestDB = async () => {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }
    await mongoose.connect(process.env.TEST_DB_URI);
}

export const clearTest = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany();
    }
}

export const closeTestDB = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
}