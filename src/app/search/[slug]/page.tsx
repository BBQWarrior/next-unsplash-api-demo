/* eslint-disable @next/next/no-img-element */
import { ResponsiveSection } from "@/components/ui/ResonsiveSection";
import appConfig from "@/config/appConfig";

export default async function SearchPage ({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const photos = await getSearchResults(slug)

  return (
    <main>
      <ResponsiveSection className="sm:columns-2 lg:columns-3 gap-2">
        {
          photos.results.map((photo: any) => (
            <div key={photo.id} className="mb-2">
              <img src={photo.urls.regular} alt={photo.id}/>
            </div>
          ))
        }
      </ResponsiveSection>
    </main>
  )
}

async function getSearchResults(param: string) {
  const res = await fetch(`${appConfig.apiUrl}/search/photos?query=${param}`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}