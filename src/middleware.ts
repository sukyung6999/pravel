import { NextRequest, NextResponse } from 'next/server';

import { verifyAuth } from './lib/auth';

export async function middleware(request: NextRequest) {
  const session = await verifyAuth();
  const { pathname } = request.nextUrl;

  if (pathname === '/login') {
    if (session) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  }

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/mypage/:path*',
    '/search/:path*',
    '/onboarding/:path*',
  ],
};
