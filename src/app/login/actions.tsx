"use server";

import { comparePassword, FormState } from "@/app/lib/auth";
import { createSession } from "@/app/lib/session";
import accountModel from "@/models/account";
import connectDB from "@/app/lib/database";

export async function login(_state: FormState, payload: FormData) {
    const email = payload.get("email");
    const password = payload.get("password");

    if (!email || !password) {
        return {
            errors: {
                email: ["Email is required."],
                password: ["Password is required."],
            },
        } as FormState;
    }

    await connectDB();

    const existingAccount = await accountModel.findOne({ email });
    if (!existingAccount) {
        return {
            errors: {
                email: ['Account does not exist!'],
            },
        } as FormState;
    }

    const passwordMatch = await comparePassword(password.toString(), existingAccount.password);

    if (!passwordMatch) {
        return {
            errors: {
                password: ['Incorrect password!'],
            },
        } as FormState;
    }

    await createSession(existingAccount._id);
}
