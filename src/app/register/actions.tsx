"use server";

import { AuthFormSchema, FormState } from "@/lib/auth";
import connectDB from "@/lib/database";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function register(_state: FormState, payload: FormData) {
    const data = AuthFormSchema.safeParse({
        email: payload.get("email"),
        password: payload.get("password"),
    });

    if (!data.success) {
        return {
            errors: data.error.flatten().fieldErrors,
        } as FormState;
    }

    const { email, password } = data.data;
    const encryptedPassword = await bcrypt.hash(password, 10);

    await connectDB();

    const existingAccount = await mongoose.model('Account').findOne({ email });
    if (existingAccount) {
        return {
            errors: {
                email: ['Account already exists!'],
            },
        } as FormState;
    }

    const account = await mongoose.model('Account').create({
        email,
        password: encryptedPassword,
    });

    const user = account[0];

    if (!user) {
        return {
            errors: {
                message: "An error occured while creating your account.",
            }
        }
    }
}
