import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decryptToken } from "./session";

const authorizedRoutes = ['/chat'];
const exposedRoutes = ['/', '/register', '/login'];

export async function middleware(request: NextRequest) {
    const currentPath = request.nextUrl.pathname;
    const isAuthorized = authorizedRoutes.includes(currentPath);
    const isExposed = exposedRoutes.includes(currentPath);
    const cookie = (await cookies()).get('session')?.value;
    const session = await decryptToken(cookie!);

    if (isExposed && session?.id) {
        return NextResponse.redirect(new URL('/chat', request.url));
    }

    if (isAuthorized && !session?.id) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}
