'use server'

import { deleteSession, verifySession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function logout() {
    await deleteSession();
    redirect('/');
}

export async function sendMessage() {
    await verifySession();
}