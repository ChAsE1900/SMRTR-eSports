import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabase'; // Ensure Supabase client is initialized

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      // Extract the authorization code from URL
      const code = new URL(window.location.href).searchParams.get('code');
      
      // If there's no code, it means the OAuth flow failed or was canceled
      if (!code) {
        return router.push('/auth/auth-code-error'); // Redirect to error page if no code
      }

      // Exchange the code for a session
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      // Handle error while exchanging the code for a session
      if (error) {
        console.error('Error exchanging code for session:', error.message);
        return router.push('/auth/auth-code-error'); // Redirect to error page if an issue occurred
      }

      // Fetch the `redirectTo` query param if present, else default to '/default'
      const redirectTo = new URL(window.location.href).searchParams.get('redirectTo') || '/default';

      // Redirect to the desired page (or default if no `redirectTo`)
      router.push(redirectTo);
    };

    // Initiate the callback process
    handleOAuthCallback();
  }, [router]);

  return <p>Loading...</p>; // Show loading message while processing
}