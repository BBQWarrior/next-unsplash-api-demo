/* eslint-disable @next/next/no-img-element */
import appConfig from "@/config/appConfig"

export default async function Home() {
  const photos = await getPhotos()

  return (
    <main className="lg:w-[980px] mx-4 lg:mx-auto">
      <h2 className="text-xl font-medium">Landing page</h2>
      <div className="columns-2 lg:columns-3 gap-2">
        {
          photos.map((photo: any) => (
            <div key={photo.id} className="mb-2">
              <img src={photo.urls.regular} alt={photo.id}/>
            </div>
          ))
        }
      </div>
    </main>
  )
}

async function getPhotos() {
  const res = await fetch(`${appConfig.apiUrl}/photos`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}