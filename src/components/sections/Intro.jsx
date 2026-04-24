const Intro = () => {
    return (
      <section className="py-16 md:py-32 w-full relative">
          <div className="max-w-[1100px] mx-auto px-6 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-16 items-start">
                  <div className="reveal reveal-left mb-2 md:mb-0">
                      <img src="/Assets/arrow-hero-section.png" alt="Hero Arrow Logo" className="w-[80px] md:w-[130px] h-auto drop-shadow-[0_0_15px_rgba(167,230,187,0.3)]" />
                  </div>
                  <div>
                      <p className="reveal text-text-secondary text-sm md:text-xl font-normal leading-relaxed mb-8 md:mb-12 text-justify">
                          I am a UI/UX Designer with a strong focus on designing user-centered digital experiences for websites and mobile applications. I have hands-on experience in creating intuitive interfaces, clear user flows, and functional designs that balance aesthetics with usability. I have worked on various digital projects, including educational platforms, service-based applications, and AI-powered systems.
                      </p>
                      
                      <div className="reveal reveal-delay-2 flex flex-col gap-4 md:gap-6">
                           <div className="flex items-center gap-2 md:gap-3 text-text-secondary text-sm md:text-lg font-main font-medium tracking-wide">
                               <svg className="w-4 h-4 md:w-6 md:h-6 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                                   <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                               </svg>
                               <span>UI/UX Designer</span>
                           </div>
                          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                              <span className="font-heading text-lg md:text-3xl font-medium text-white">Currently, I'm a UI Designer Intern at</span>
                              <img src="/Assets/logo-erp.png" alt="Lion Parcel Logo" className="h-6 md:h-10 w-auto" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          {/* Native Text Marquee Ribbon - Changed to relative flow */}
          <div className="w-[105%] md:w-[110%] relative mt-12 md:mt-32 -ml-[2.5%] md:-ml-[5%] rotate-[-2deg] bg-accent-green z-0 h-9 md:h-14 flex items-center shadow-[0_0_20px_rgba(167,230,187,0.2)]">
              <div className="flex animate-marquee w-max whitespace-nowrap items-center font-heading font-bold text-bg-color text-xs md:text-[15px] tracking-[0.15em]">
                  {/* Duplicated arrays to guarantee endless scrolling loop */}
                  {[...Array(4)].map((_, arrayIndex) => (
                      <div key={arrayIndex} className="flex items-center space-x-6 md:space-x-12 px-3 md:px-6">
                          {['ACCESSIBILITY', 'USER FRIENDLY', 'DESIGN THINKING', 'EMPATHY'].map((word, wordIndex) => (
                              <div key={wordIndex} className="flex items-center space-x-6 md:space-x-12">
                                  <span>{word}</span>
                                  {/* 4-point spark/star icon matching the asset */}
                                  <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                                  </svg>
                              </div>
                          ))}
                      </div>
                  ))}
              </div>
          </div>
      </section>
    );
  }
  export default Intro;
