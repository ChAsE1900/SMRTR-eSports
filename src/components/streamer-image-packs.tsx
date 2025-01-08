'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'

interface ImagePack {
  id: string
  name: string
  description: string
  imageCount: number
  downloadUrl: string
}

const imagePacks: ImagePack[] = [
  {
    id: '1',
    name: 'Overlay Pack',
    description: 'Professional overlays to enhance your stream\'s visual appeal',
    imageCount: 3,
    downloadUrl: '/downloads/streaming-pack.zip'
  },
]

export function StreamerImagePacks() {
  const [downloadingPacks, setDownloadingPacks] = useState<Set<string>>(new Set())

  const handleDownload = (pack: ImagePack) => {
    setDownloadingPacks(prev => new Set(prev).add(pack.id))
    
    // Simulating download delay for UX
    setTimeout(() => {
      setDownloadingPacks(prev => {
        const newSet = new Set(prev)
        newSet.delete(pack.id)
        return newSet
      })

      // Trigger file download
      window.location.href = pack.downloadUrl
    }, 2000)
  }

  return (
    <section className="py-12 bg-black dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Streamer Image Pack</h2>
        <Card key={imagePacks[0].id} className="transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle>{imagePacks[0].name}</CardTitle>
            <CardDescription>{imagePacks[0].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Contains {imagePacks[0].imageCount} images
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => handleDownload(imagePacks[0])}
              disabled={downloadingPacks.has(imagePacks[0].id)}
              className="w-full"
            >
              {downloadingPacks.has(imagePacks[0].id) ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </span>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" /> Download Pack
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}