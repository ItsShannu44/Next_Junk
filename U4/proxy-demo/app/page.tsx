import { NextRequest, NextResponse } from "next/server";
// import Dashboard from "./dashboard/page";

export function middleware(request:NextRequest) {
    // <Dashboard/>
    const token = request.cookies.get("token");
    const pathname = request.nextUrl.pathname;
    if(!token && pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if(token && pathname ===("/login")){
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
}