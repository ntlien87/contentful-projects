import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="w-full bg-white  px-8 lg:px-16 2xl:px-56 ">
      <div className="flex flex-col md:flex-row items-center gap-16  py-20">
        <div className="flex-1">
          <h1 className="text-3xl lg:text-5xl 2xl:text-6xl text-center md:text-start tracking-wider text-slate-800 font-bold mb-8">
            Contentful CMS
          </h1>
          <p className="text-slate-700  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            excepturi magni nesciunt accusantium maxime inventore quo ea
            asperiores deleniti, commodi aperiam provident a debitis,
            perspiciatis omnis molestiae nam repudiandae est? excepturi magni
            nesciunt accusantium maxime inventore quo ea asperiores deleniti,
            commodi aperiam provident a debitis, perspiciatis omnis molestiae
            nam repudiandae est?
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={heroImg} alt="hero img" className="w-3/4 xl:w-2/4 object-cover" />
        </div>
      </div>
    </section>
  )
}
export default Hero
