import { ResponsiveSection } from "@/components/ui/ResonsiveSection";
import appConfig from "@/config/appConfig";

/* eslint-disable @next/next/no-img-element */
export default async function Home () {
  const topics = await getTopics()

  return (
  <>
    <h1 className="m-auto p-12 text-4xl text-center mb-12">Topics page</h1>
    <ResponsiveSection className='grid items-center justify-center content-center mb-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 xl:w-[1200px]'>
      {
      topics.map((topic: any) => (
        <a className="relative max-w-sm rounded-3xl overflow-hidden shadow-lg mb-12 min-w-52 h-52 justify-self-center w-full" href={'topics/'+topic.slug} key={topic.id}>
          <img className="object-none object-center block opacity-90 brightness-75 h-full w-full" src={topic.cover_photo.urls.regular} alt="asd" /> 
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-white">
            {topic.title}
          </div>
        </a>
      ))}
    </ResponsiveSection>
  </>
  )
}

async function getTopics() {
  const res = await fetch(`${appConfig.apiUrl}/topics`, {
    headers: new Headers({
      'Authorization': `Client-ID ${appConfig.apiKey}`
    })
  })

  return res.json();
}