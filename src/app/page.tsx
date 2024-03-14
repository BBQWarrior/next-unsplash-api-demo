/* eslint-disable @next/next/no-img-element */
import { Hero } from "@/components/ui/Hero"
import { ResponsiveSection } from "@/components/ui/ResonsiveSection"
import appConfig from "@/config/appConfig"

export default async function Home() {
  const photos = await getPhotos()
  const randomPhoto = await getRandomPhoto()

  return (
    <main>
      <Hero title="Landing page" description="Welcome to the landing page" coverImage={randomPhoto.urls.full} />
      <ResponsiveSection className="columns-2 lg:columns-3 gap-2 mt-10">
        {
          photos.map((photo: any) => (
            <div key={photo.id} className="mb-2">
              <img src={photo.urls.regular} alt={photo.id}/>
            </div>
          ))
        }
      </ResponsiveSection>
    </main>
  )
}

async function getPhotos() {
  const res = await fetch(`${appConfig.apiUrl}/photos?per_page=50`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}

async function getRandomPhoto() {
  const res = await fetch(`${appConfig.apiUrl}/photos/random?topics='wallpapers'`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}