/* eslint-disable @next/next/no-img-element */
import { Hero } from "@/components/ui/Hero";
import { ResponsiveSection } from "@/components/ui/ResonsiveSection";
import appConfig from "@/config/appConfig";

export default async function Topic ({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const photos = await getTopicPhotos(slug)
  const topic = await getTopic(slug)

  return (
    <main>
      <Hero title={topic.title} description={topic.description} coverImage={topic.cover_photo.urls.full} />
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

async function getTopicPhotos(param: string) {
  const res = await fetch(`${appConfig.apiUrl}/topics/${param}/photos?per_page=50`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}

async function getTopic(param: string) {
  const res = await fetch(`${appConfig.apiUrl}/topics/${param}`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}