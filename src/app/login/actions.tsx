"use server";

import comparePassword, { FormState } from "@/lib/auth";
import mongoose from "mongoose";

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

    const existingAccount = await mongoose.model('Account').findOne({ email });
    if (!existingAccount) {
        return {
            errors: {
                email: ['Account does not exist!'],
            },
        } as FormState;
    }

    const passwordMatch = await comparePassword(password, existingAccount.password);

    if (!passwordMatch) {
        return {
            errors: {
                password: ['Incorrect password!'],
            },
        } as FormState;
    }
}
