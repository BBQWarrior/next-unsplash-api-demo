import appConfig from "@/config/appConfig"

export default async function Home() {
  const photos = await getPhotos()

  return <div>
    <span className="text-white">{photos[0].id}</span>
  </div>
}

async function getPhotos() {
  const res = await fetch(`${appConfig.apiUrl}/photos`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}