import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";
import { COOKIE_NAME } from "./constant";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Run next-intl middleware first
  const response = intlMiddleware(request);

  // Extract locale from URL (first segment after /)
  const locale = request.nextUrl.pathname.split("/")[1];

  // If no lang cookie exists, set it
  if (!request.cookies.has(COOKIE_NAME) && locale) {
    response.cookies.set(COOKIE_NAME, locale);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
