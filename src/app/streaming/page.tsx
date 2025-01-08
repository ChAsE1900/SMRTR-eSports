import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { StreamerImagePacks } from '@/components/streamer-image-packs'

export default function Home() {
  return (
    <main className="min-h-screen bg-black dark:bg-gray-800">
      <Banner/>
      <Navbar/>  
      <StreamerImagePacks />
      <Footer/>
    </main>
  )
}

