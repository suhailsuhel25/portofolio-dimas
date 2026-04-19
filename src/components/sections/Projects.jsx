const Projects = () => {
  return (
    <section id="project" className="pt-0 pb-40 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent-green tracking-tight uppercase">
            MY PROJECT
          </h2>
          <div className="flex gap-4">
            <button className="bg-[#1a2c3a] border border-white/5 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent-green hover:text-black hover:scale-105 active:scale-95 group shadow-lg">
              <i className="bi bi-chevron-left text-xl transition-transform group-hover:-translate-x-0.5"></i>
            </button>
            <button className="bg-[#1a2c3a] border border-white/5 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent-green hover:text-black hover:scale-105 active:scale-95 group shadow-lg">
              <i className="bi bi-chevron-right text-xl transition-transform group-hover:translate-x-0.5"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {/* Project 1 */}
          <div className="group">
            <div className="relative bg-[#162734] p-5 md:p-10 rounded-[40px] mb-8 overflow-hidden transition-all duration-500 border border-white/[0.03] shadow-2xl group-hover:shadow-accent-green/5 group-hover:border-white/[0.08]">
              {/* Inner Mockup Frame */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <img
                  src="/Assets/screenshot-unitask.png"
                  alt="UNITASK Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="pl-2">
              <span className="text-accent-green font-semibold text-sm mb-4 block tracking-wide">
                Featured Project
              </span>
              <h3 className="font-heading text-4xl font-bold text-white mb-6 tracking-tight">
                UNITASK
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed text-left max-w-[95%]">
                UNiTask is a digital-based website and mobile app that integrates
                various user services into one unified platform. UNiTask connects
                users (customers) with service partners (drivers/partners) and
                professional mentors, simplifying service access, personal
                development, and job search within a single ecosystem.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group">
            <div className="relative bg-[#162734] p-5 md:p-10 rounded-[40px] mb-8 overflow-hidden transition-all duration-500 border border-white/[0.03] shadow-2xl group-hover:shadow-accent-green/5 group-hover:border-white/[0.08]">
              {/* Inner Mockup Frame */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <img
                  src="/Assets/screenshot-edu-ai.png"
                  alt="EDU AI Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="pl-2">
              <span className="text-accent-green font-semibold text-sm mb-4 block tracking-wide">
                Featured Project
              </span>
              <h3 className="font-heading text-4xl font-bold text-white mb-6 tracking-tight">
                EDU AI
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed text-left max-w-[95%]">
                A digital education website that utilizes Artificial Intelligence
                (AI) technology to make the learning process more interactive,
                effective, and personalized. The platform is designed to assist
                students in understanding course material through intelligent
                chatbots and an AI-based quiz system that adapts to the user's
                abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

