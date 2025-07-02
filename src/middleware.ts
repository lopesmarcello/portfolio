import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'pt-BR'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log("pathname", pathname)

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  console.log("pathnameHasLocale", pathnameHasLocale)

  if (pathnameHasLocale) return;

  // Redirect to the default locale
  const defaultLocale = 'en';
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    '/',
  ],
};
