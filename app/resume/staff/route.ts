import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL('/resume-staff.pdf', request.url), 302);
}
