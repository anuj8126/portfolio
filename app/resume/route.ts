import { type NextRequest, NextResponse } from 'next/server';

// Must stay dynamic — `force-static` would cache the redirect at build time
// using a localhost request URL, which Vercel would then serve forever.
export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL('/resume.pdf', request.url), 302);
}
