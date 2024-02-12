/* eslint-disable @next/next/no-img-element */
import appConfig from "@/config/appConfig";

export default async function Topic ({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const photos = await getTopic(slug)

  return (
    <main className="lg:w-[980px] mx-4 lg:mx-auto">
      <h2 className="text-xl font-medium">Topic listing page</h2>
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

async function getTopic(param: string) {
  const res = await fetch(`${appConfig.apiUrl}/topics/${param}/photos`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}