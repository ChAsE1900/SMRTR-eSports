"use client";
import React, { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/utils/supabase'
import { FaDiscord } from 'react-icons/fa'
import logo from "@/assets/images/SMRTR8.webp"
import Image from 'next/image'
import { Footer } from '@/components/Footer';

const LoginPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [redirectTo, setRedirectTo] = useState<string | null>(null)

  useEffect(() => {
    const redirectToParam = searchParams.get('redirectTo')
    setRedirectTo(redirectToParam ? decodeURIComponent(redirectToParam) : '/default')
    setLoading(false)
  }, [searchParams])

  const signInWithDiscord = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      console.error('Error logging in:', error.message)
    }
  }

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const redirectUrl = redirectTo || '/app/default'
        router.push(redirectUrl)
      }
    }

    if (!loading && redirectTo) {
      checkUser()
    }
  }, [loading, redirectTo, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="px-8 py-6 mt-4 text-left bg-gray-900 shadow-lg rounded-lg w-full max-w-md">
        <div className="flex justify-center">
          <Image src={logo} alt="Logo" width={120} height={120} className="invert" />
        </div>
        <h3 className="text-2xl font-bold text-center mt-4 text-white">Login to SMRTR eSports Website</h3>
        <div className="mt-4">
          <button
            onClick={signInWithDiscord}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
          >
            <FaDiscord />
            Sign in with Discord
          </button>
        </div>
        <div className="flex justify-center mt-10">
            <p className='text-white/30'>Secured by Ryze</p>
        </div>
      </div>
    </div>
  )
}

const PageWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LoginPage />
    <Footer/>
  </Suspense>
)

export default PageWithSuspense;
