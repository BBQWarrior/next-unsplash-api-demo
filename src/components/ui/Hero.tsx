/* eslint-disable @next/next/no-img-element */
type HeroType = {
  title: string;
  description: string;
  coverImage: string;
}

export const Hero = ({title, description, coverImage}: HeroType) => {

  return (
    <div className="relative w-full left-0 h-96 overflow-hidden">
      <div className="absolute flex flex-col gap-2 left-0 top-0 pt-12 pl-10">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <img className="absolute object-contain object-center brightness-75 -z-40" src={coverImage} alt={title}/>
    </div>
  );
};
