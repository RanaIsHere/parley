import 'server-only';
import mongoose from "mongoose";
import accountModel from '@/models/account';
import { verifySession } from "./session";
import { cache } from 'react';

export default async function connectDB() {
    try {
        if (mongoose.connection.readyState === 0) {
            mongoose.connect(process.env.DATABASE_URL!);
        }
        console.log("Server connected with database");
    } catch (e) {
        console.log(e);
    }
};

export const getUserAccount = cache(async () => {
    const session = await verifySession();
    await connectDB();

    const account = await accountModel.findOne({ _id: session.id });
    const user = account[0];

    const filteredData = Object.fromEntries(Object.entries(user).filter(([key]) => key !== "password"));

    return filteredData;
})