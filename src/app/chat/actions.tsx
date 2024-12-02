'use server'

import { deleteSession, verifySession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import { getUserAccount } from "@/app/lib/database";

export async function logout() {
    await deleteSession();
    redirect('/');
}

export async function sendMessage() {
    await verifySession();
}

export async function fetchAccountData() {
    await verifySession();

    const response = await getUserAccount();

    if (!response) return null;

    return response;
}