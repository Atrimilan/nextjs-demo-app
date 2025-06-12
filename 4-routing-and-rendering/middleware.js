import { NextResponse } from "next/server";

// This is not useful in this project, but it might be useful to edit an incoming request,
// to block it, to add authentication, etc.
// See :
// - https://nextjs.org/docs/app/api-reference/file-conventions/middleware
// - https://nextjs.org/docs/app/building-your-application/routing/middleware

export function middleware(request) {
    console.log(request);
    return NextResponse.next(); // Can also be NextResponse.redirect() or even new NextResponse
}

export const config = {
    matcher: '/api/:path*',
};