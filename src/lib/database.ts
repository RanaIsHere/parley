import mongoose from "mongoose";
export default async function connectDB() {
    try {
        mongoose.connect(process.env.DATABASE_URL!);
        console.log("Server connected with database");
    } catch (e) {
        console.log(e);
    }
};