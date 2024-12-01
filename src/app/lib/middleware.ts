import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
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

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}