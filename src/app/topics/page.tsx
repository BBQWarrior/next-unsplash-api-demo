import appConfig from "@/config/appConfig";

/* eslint-disable @next/next/no-img-element */
export default async function Home () {
  const topics = await getTopics()

  return (
  <>
  <h1 className="m-auto p-12 text-4xl text-center mb-12">Topics page</h1>
    <ul className='grid w-3/4 self-center justify-items-center content-center m-auto mb-5 grid-cols-5 gap-2'>
      {
      topics.map((topic: any) => (
        <a className="relative max-w-sm rounded-3xl overflow-hidden shadow-lg mb-12" href={'topics/'+topic.slug} key={topic.id}>
          <img className="object-none h-56 object-center w-56 block opacity-90 brightness-75" src={topic.cover_photo.urls.regular} alt="asd" /> 
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-white">
            {topic.title}
          </div>
        </a>
      ))}
    </ul>
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