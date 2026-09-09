import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('focusos_token')?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = pathname.startsWith('/app') || pathname.startsWith('/onboarding');
  const isAuthRoute = pathname === '/login' || pathname === '/signup';

  // 1. Unauthenticated user trying to access protected workspace -> Redirect to /login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Authenticated user trying to access /login or /signup -> Redirect to /app
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/app', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/app/:path*', '/onboarding', '/login', '/signup'],
};
