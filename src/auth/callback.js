import { supabase } from '@/utils/supabase';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      if (!code) return router.push('/auth/auth-code-error'); // Redirect if there's no code.

      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error('Error exchanging code for session:', error.message);
        return router.push('/auth/auth-code-error');
      }

      router.push('/default'); // Redirect to home page on success.
    };

    handleOAuthCallback();
  }, [router]);

  return <p>Loading...</p>;
}