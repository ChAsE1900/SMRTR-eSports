import { NextResponse } from 'next/server';
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });

  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser();

  // If user is not logged in and trying to access restricted routes
  if (!user && req.nextUrl.pathname === '/') {
    const loginUrl = new URL('/login', req.url); // Redirect to login
    return NextResponse.redirect(loginUrl);
  }

  return res;
}