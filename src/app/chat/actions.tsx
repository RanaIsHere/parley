'use server'

import { deleteSession, verifySession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import connectDB, { getUserAccount } from "@/app/lib/database";
import accountModel from "@/models/account";

export async function logout() {
    await deleteSession();
    redirect('/');
}

export async function sendMessage() {
    await verifySession();
}

export async function fetchMessages() {
    await verifySession();
}

type FormState = {
    email?: string,
    errors?:
    {
        email?: string[];
    }
};

export async function addContacts(_state: FormState, payload: FormData) {
    await verifySession();

    const data = payload.get('email');

    if (!data) {
        return {
            errors: {
                email: ['Email is required.'],
            }
        } as FormState
    }

    await connectDB();

    const contactedAccount = await accountModel.findOne({ email: data });
    if (!contactedAccount) {
        return {
            errors: {
                email: ['Account does not exist!'],
            }
        } as FormState
    }

    const user = await getUserAccount();
    if (user?.email === contactedAccount.email) {
        return {
            errors: {
                email: ['You cannot add yourself as a contact!'],
            }
        } as FormState
    }

    const contacted = await accountModel.updateOne({ _id: contactedAccount._id }, { $push: { contacts: contactedAccount._id } });
    if (!contacted) {
        return {
            errors: {
                email: ['Failed to add contact!'],
            }
        } as FormState
    }

    redirect('/chat');
}

export async function fetchAccountData() {
    await verifySession();

    const response = await getUserAccount();

    if (!response) return null;

    return response;
}