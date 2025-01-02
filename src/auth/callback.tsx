import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabase'; // Ensure the path is correct to your supabase.js configuration

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const extractTokenFromURL = () => {
      // Check if the URL contains an access token fragment
      const hashFragment = window.location.hash;
      const params = new URLSearchParams(hashFragment.substring(1)); // Remove the `#`
      const accessToken = params.get('access_token');
      
      if (!accessToken) {
        console.error('Access token not found in URL');
        return router.push('/login');  // Redirect to login page if no token
      }

      // Use the token to complete user sign-in with Supabase
      const handleAuthentication = async () => {
        try {
          // Set the session using the access token
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: localStorage.getItem('refresh_token') || '', // Optionally get refresh token if saved
          });

          if (error) {
            console.error('Error authenticating user:', error.message);
            router.push('/auth/login');  // Redirect to login page in case of error
            return;
          }

          // Redirect to default page (or any other page once authenticated)
          router.push('/default');
        } catch (err) {
          console.error('Error during authentication:', err);
          router.push('/auth/login');  // Redirect to login on failure
        }
      };

      handleAuthentication();
    };

    extractTokenFromURL();
  }, [router]);

  return (
    <div>
      <p>Authenticating...</p>
    </div>
  );
};

export default AuthCallback;