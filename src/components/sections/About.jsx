const About = () => {
    return (
      <section id="about" className="pt-0 pb-16 md:pb-40 relative scroll-mt-20">
          <div className="max-w-[1300px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 lg:gap-16 items-stretch">
              
              {/* Left Column: Heading & Photo */}
              <div className="reveal-left relative h-full flex flex-col pt-0">
                  <span className="text-[14px] md:text-[20px] font-main font-semibold leading-[130%] tracking-normal uppercase block mb-3 md:mb-4 bg-gradient-to-r from-accent-green to-[#a7e6bb]/60 bg-clip-text text-transparent">BEYOND PORTFOLIO</span>
                  <h2 className="font-poppins text-[24px] md:text-[40px] font-medium leading-tight md:leading-[48.2px] tracking-[-0.02em] mb-0 text-white">Let's know more <br /> about me</h2>
                  
                  <div className="relative w-full max-w-[280px] md:max-w-[400px] mt-0 flex-grow flex items-start mx-auto md:mx-0">
                      <div className="relative w-full">
                          {/* Glow Behind Photo Asset - Bigger and more to the Left */}
                          <img src="/Assets/Ellipse 1.png" alt="Eclipse Glow" className="absolute -bottom-20 -left-40 w-[600px] max-w-none h-auto pointer-events-none z-0 mix-blend-screen opacity-50" />
                          
                          <img src="/Assets/foto-orang.png" alt="Dimas Photo" className="w-full h-auto object-cover relative z-10" />
                          
                          {/* Social Icons Floating Card - Bottom Left */}
                          <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white/95 backdrop-blur-md py-2 px-3 md:py-3 md:px-4 rounded-lg md:rounded-xl flex items-center gap-2 md:gap-4 z-20 shadow-xl border border-white/20">
                              <a href="https://www.instagram.com/dimasalfa.rizky/" className="text-[#1a1a1a] transition-all hover:scale-110 opacity-60 hover:opacity-100">
                                  <i className="bi bi-instagram text-sm md:text-lg"></i>
                              </a>
                              <a href="https://www.linkedin.com/in/dimas-alfa-rizky-6b0291291/" className="w-7 h-7 md:w-9 md:h-9 bg-[#6aa38d] text-white flex items-center justify-center rounded-md transition-all hover:scale-110 shadow-lg">
                                  <i className="bi bi-linkedin text-sm md:text-lg"></i>
                              </a>
                              <a href="#" className="text-[#1a1a1a] transition-all hover:scale-110 opacity-60 hover:opacity-100">
                                  <i className="bi bi-facebook text-sm md:text-lg"></i>
                              </a>
                              <a href="#" className="w-7 h-7 md:w-9 md:h-9 bg-[#6aa38d] text-white flex items-center justify-center rounded-md transition-all hover:scale-110 shadow-lg">
                                  <i className="bi bi-dribbble text-sm md:text-lg"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
  
              {/* Right Column: Grid Cards */}
              <div className="reveal-right flex flex-col gap-3 md:gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {/* Software Card */}
                      <div className="bg-white/[0.03] border border-white/5 rounded-[20px] md:rounded-[35px] p-4 md:p-5 relative backdrop-blur-md overflow-hidden group flex flex-col">
                          <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-accent-green/40 to-transparent blur-[60px] pointer-events-none mix-blend-lighten"></div>
                          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                              </svg>
                              <h3 className="text-base md:text-xl font-manrope font-bold text-white">My Software</h3>
                          </div>
                          <p className="text-white/50 text-sm md:text-[17px] leading-relaxed mb-2">Designed key features for embedding in-platform data widgets, charts,</p>
                          <div className="flex-grow flex items-center justify-center py-2">
                              <div className="grid grid-cols-3 gap-3 w-full">
                                  {[
                                    { img: '/Assets/logo-figma.png', name: 'Figma' },
                                    { img: '/Assets/logo-canva.png', name: 'Canva' },
                                    { img: '/Assets/logo-photoshop.png', name: 'Photoshop' },
                                    { img: '/Assets/logo-capcut.png', name: 'Capcut' },
                                    { img: 'https://cdn.worldvectorlogo.com/logos/flutter.svg', name: 'Flutter' },
                                    { img: '/Assets/logo-vs-code.png', name: 'VS Code' }
                                  ].map((tool, i) => (
                                    <div key={i} className="bg-[#121c22] border border-white/5 aspect-square rounded-xl md:rounded-2xl flex items-center justify-center transition-all hover:border-accent-green/30 hover:bg-[#16252d] group/icon p-2 md:p-3">
                                      <img src={tool.img} alt={tool.name} className="w-full h-full object-contain transition-all" />
                                    </div>
                                  ))}
                              </div>
                          </div>
                      </div>
  
                      {/* Personal Card */}
                      <div className="bg-white/[0.03] border border-white/5 rounded-[20px] md:rounded-[35px] p-4 md:p-5 relative backdrop-blur-md overflow-hidden flex flex-col">
                          <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-accent-green/40 to-transparent blur-[60px] pointer-events-none mix-blend-lighten"></div>
                          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                              </svg>
                              <h3 className="text-base md:text-xl font-manrope font-bold text-white">My Personal</h3>
                          </div>
                          <p className="text-white/50 text-sm md:text-[17px] leading-relaxed mb-2">Designed key features for embedding</p>
                          <div className="flex flex-col gap-6 relative mt-2 pb-2">
                              <span className="self-start bg-gradient-to-r from-[#a7e6bb] to-[#82c9a1] text-[#081B28] py-2 px-5 md:py-3 md:px-8 rounded-full text-[13px] md:text-[16px] font-extrabold shadow-xl border-2 border-white/10 transition-transform hover:scale-105 -rotate-[9deg] -ml-4">Chairman HMJ TI'25 🦉</span>
                              <div className="flex justify-end -mt-2">
                                  <span className="bg-gradient-to-r from-[#a7e6bb] to-[#82c9a1] text-[#081B28] py-2 px-5 md:py-3 md:px-8 rounded-full text-[13px] md:text-[16px] font-extrabold shadow-xl border-2 border-white/10 transition-transform hover:scale-105 rotate-[8deg] -mr-2">Mawapres TI 😍</span>
                              </div>
                              <span className="self-start bg-gradient-to-r from-[#a7e6bb] to-[#82c9a1] text-[#081B28] py-2 px-5 md:py-3 md:px-8 rounded-full text-[13px] md:text-[16px] font-extrabold shadow-xl border-2 border-white/10 transition-transform hover:scale-105 -rotate-[7deg] ml-4 -mt-1">Traveller ✈️</span>
                              <div className="flex justify-end pr-8 -mt-1">
                                  <span className="bg-gradient-to-r from-[#a7e6bb] to-[#82c9a1] text-[#081B28] py-3 px-9 rounded-full text-[16px] font-extrabold shadow-xl border-2 border-white/10 transition-transform hover:scale-105 rotate-[4deg]">Design</span>
                              </div>
                          </div>
                      </div>
                  </div>
  
                  {/* Education Card - Spanning bottom */}
                  <div className="bg-white/[0.03] border border-white/5 rounded-[20px] md:rounded-[30px] p-5 md:p-7 flex items-center gap-4 md:gap-6 backdrop-blur-md relative overflow-hidden group">
                      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-accent-green/30 to-transparent blur-[60px] pointer-events-none mix-blend-lighten"></div>
                      <div className="bg-white w-[55px] h-[55px] md:w-[75px] md:h-[75px] rounded-[16px] md:rounded-[22px] flex items-center justify-center text-2xl md:text-3xl text-[#0d9488] shrink-0 shadow-lg relative z-10">
                          <i className="bi bi-book"></i>
                      </div>
                      <div className="flex flex-col relative z-10">
                          <h4 className="text-[16px] md:text-[22px] font-bold text-white mb-1">UIN Walisongo Semarang</h4>
                          <p className="text-white/70 text-[13px] md:text-[15px] mb-3 md:mb-4">Teknologi Informasi - IPK 3.88</p>
                          <div className="flex items-center gap-2 text-white/40 text-[13px] font-medium">
                              <i className="bi bi-calendar3"></i>
                              <span>2023 - Present</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
}

export default About;
