import { NextResponse, type NextRequest } from "next/server";
import { checkPreviewAuth } from "@/lib/preview-auth";

export function middleware(request: NextRequest) {
  const gate = checkPreviewAuth(request);
  if (gate) return gate;
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
