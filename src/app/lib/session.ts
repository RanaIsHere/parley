'use server'

import { SignJWT, jwtVerify } from "jose";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const token = new TextEncoder().encode(process.env.JWT_SECRET_TOKEN!);
const cookie = {
    name: 'session',
    options: {
        httpOnly: true,
        secure: true,
        path: '/',
        sameSite: false
    },
    // millisecond
    duration: 604800000
};


export async function encryptToken(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("36h")
        .sign(token);
}

export async function decryptToken(session: string) {
    try {
        const { payload } = await jwtVerify(session, token, { algorithms: ["HS256"] });

        return payload;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function createSession(id: number) {
    if (!id) throw new Error("ID is required to create a session");
    const expires = new Date(Date.now() + cookie.duration);
    const session = await encryptToken({
        id, expires
    });

    if (!session) throw new Error("Failed to encrypt session");

    const cookieStorage = await cookies();
    if (!cookieStorage) throw new Error("Failed to access cookies object");

    cookieStorage.set(cookie.name, session, { ...cookie.options, expires })

    redirect('/chat');
}

export async function deleteSession() {
    const cookieStorage = await cookies();
    cookieStorage.delete(cookie.name);
}
export async function verifySession() {
    const cookieStorage = await cookies();
    const storedSession: string | undefined = cookieStorage.get(cookie.name)?.value;

    if (!storedSession) {
        redirect('/login');
    }

    const session = await decryptToken(storedSession!);

    if (!session?.id) {
        redirect('/login');
    }

    return { id: session.id };
}

export type SessionPayload = | {
    id: number,
    expires: Date,
} | undefined;