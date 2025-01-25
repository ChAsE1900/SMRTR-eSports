import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { StreamerImagePacks } from '@/components/streamer-image-packs'

export default function Home() {
  return (
    <main className="min-h-screen bg-black dark:bg-gray-800">
      <Navbar/>  
      <StreamerImagePacks />
      <Footer/>
    </main>
  )
}

