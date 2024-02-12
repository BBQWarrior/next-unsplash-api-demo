/* eslint-disable @next/next/no-img-element */
type HeroType = {
  title: string;
  description: string;
  coverImage: string;
}

export const Hero = ({title, description, coverImage}: HeroType) => {

  return (
    <div className="relative w-full left-0 h-96 overflow-hidden">
      <div className="absolute flex flex-col gap-2 left-0 top-0 pt-12 pl-10 w-full h-full backdrop-blur-lg">
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
        <p className="text-lg text-white">{description}</p>
      </div>
      <img className="absolute object-contain object-center -z-40 w-full" src={coverImage} alt={title}/>
    </div>
  );
};
