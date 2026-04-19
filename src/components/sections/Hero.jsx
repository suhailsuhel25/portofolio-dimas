const Hero = () => {
  return (
    <section id="home" className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      <div className="w-full max-w-[1100px] relative z-10 px-8 flex justify-center items-center">
        {/* Portofolio Text */}
        <div className="relative w-full flex justify-center items-center">
          {/* Stacked Eclipse Glow Background Asset */}
          <img src="/Assets/Ellipse 1.png" alt="Eclipse Glow" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] max-w-none h-auto pointer-events-none z-[-1] mix-blend-screen opacity-80" />

          <h1 className="font-heading text-5xl md:text-[5rem] lg:text-[6.5rem] font-medium tracking-tight text-white leading-none text-center uppercase relative z-10">
            PORTOFOLIO
          </h1>
        </div>
      </div>
    </section>
  );
}
export default Hero;
