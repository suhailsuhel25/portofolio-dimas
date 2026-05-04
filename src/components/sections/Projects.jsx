import { useRef } from 'react';

const Projects = () => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);

  const scroll = (direction) => {
    if (scrollRef.current && !isScrolling.current) {
      isScrolling.current = true;
      const container = scrollRef.current;
      const gap = parseInt(getComputedStyle(container).columnGap) || 24;
      const cardWidth = container.querySelector('.project-card').offsetWidth;
      container.scrollBy({
        left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
        behavior: 'smooth',
      });
      setTimeout(() => { isScrolling.current = false; }, 600);
    }
  };

  return (
    <section id="project" className="pt-0 pb-10 md:pb-20 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="reveal flex justify-between items-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl md:text-5xl font-bold text-accent-green tracking-tight uppercase">
            MY PROJECT
          </h2>
          <div className="flex gap-2 md:gap-4">
            <button onClick={() => scroll('left')} className="bg-[#1a2c3a] border border-white/5 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent-green hover:text-black hover:scale-105 active:scale-95 group shadow-lg">
              <i className="bi bi-chevron-left text-base md:text-xl transition-transform group-hover:-translate-x-0.5"></i>
            </button>
            <button onClick={() => scroll('right')} className="bg-[#1a2c3a] border border-white/5 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent-green hover:text-black hover:scale-105 active:scale-95 group shadow-lg">
              <i className="bi bi-chevron-right text-base md:text-xl transition-transform group-hover:translate-x-0.5"></i>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="reveal reveal-delay-2 flex gap-x-6 md:gap-x-12 overflow-x-hidden scroll-smooth">
          {/* Project - Peminjaman Ruangan */}
          <div className="project-card group min-w-full md:min-w-[calc(50%-24px)]">
            <div className="relative bg-[#162734] p-5 md:p-10 rounded-[40px] mb-8 overflow-hidden transition-all duration-500 border border-white/[0.03] shadow-2xl group-hover:shadow-accent-green/5 group-hover:border-white/[0.08]">
              {/* Inner Mockup Frame */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl max-h-[300px] group-hover:max-h-[2000px] transition-all duration-700 ease-in-out group-hover:scale-[1.02]">
                <img
                  src="/Assets/peminjaman-ruang.jpeg"
                  alt="Peminjaman Ruangan UIN Walisongo Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="pl-2">
              <span className="text-accent-green font-semibold text-sm mb-4 block tracking-wide">
                Featured Project
              </span>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                Redefining room reservation at UIN Walisongo ✨
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed text-left max-w-[95%]">
                Kami merancang ulang website reservasi ruangan dengan fokus pada pengalaman yang lebih cepat, intuitif, dan efisien—menghilangkan friksi di setiap langkah pemesanan.
                <br /><br />
                Dari struktur informasi yang lebih jelas hingga alur booking yang seamless, semuanya dirancang untuk membantu pengguna menemukan dan memesan ruang dalam hitungan detik.
                <br /><br />
                ⚡ Streamlined booking experience &nbsp; 🧭 Intuitive navigation &nbsp; 🎯 Purpose-driven design
                <br /><br />
                A small redesign with a big impact.
              </p>
            </div>
          </div>

          {/* Project - Lion Parcel */}
          <div className="project-card group min-w-full md:min-w-[calc(50%-24px)]">
            <div className="relative bg-[#162734] p-5 md:p-10 rounded-[40px] mb-8 overflow-hidden transition-all duration-500 border border-white/[0.03] shadow-2xl group-hover:shadow-accent-green/5 group-hover:border-white/[0.08]">
              {/* Inner Mockup Frame */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl max-h-[300px] group-hover:max-h-[2000px] transition-all duration-700 ease-in-out group-hover:scale-[1.02]">
                <img
                  src="/Assets/lion-parcel.jpeg"
                  alt="Lion Parcel Website Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="pl-2">
              <span className="text-accent-green font-semibold text-sm mb-4 block tracking-wide">
                Featured Project
              </span>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                Lion Parcel Website Redesign
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed text-left max-w-[95%]">
                Proyek ini merupakan eksplorasi desain website untuk Lion Parcel sebagai salah satu layanan logistik di Indonesia yang terus berkembang dalam menghadirkan kemudahan pengiriman bagi masyarakat.
                <br /><br />
                Website ini dirancang dengan fokus pada peningkatan pengalaman pengguna dalam mengakses layanan utama seperti cek tarif, pelacakan paket (tracking), pencarian lokasi agen, serta informasi layanan pengiriman yang cepat dan transparan.
                <br /><br />
                Melihat kebutuhan pengguna yang mengutamakan kecepatan dan kejelasan informasi, desain ini mengedepankan tampilan yang clean dan modern, navigasi yang sederhana, akses cepat ke fitur utama, struktur informasi yang terorganisir, serta visual yang mendukung kepercayaan dan profesionalitas brand.
                <br /><br />
                Pendekatan desain yang digunakan berfokus pada bagaimana menyederhanakan proses logistik yang kompleks menjadi pengalaman digital yang efisien, intuitif, dan mudah diakses dari berbagai perangkat.
              </p>
            </div>
          </div>

          {/* Project - SDGs UNDIP */}
          <div className="project-card group min-w-full md:min-w-[calc(50%-24px)]">
            <div className="relative bg-[#162734] p-5 md:p-10 rounded-[40px] mb-8 overflow-hidden transition-all duration-500 border border-white/[0.03] shadow-2xl group-hover:shadow-accent-green/5 group-hover:border-white/[0.08]">
              {/* Inner Mockup Frame */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl max-h-[300px] group-hover:max-h-[2000px] transition-all duration-700 ease-in-out group-hover:scale-[1.02]">
                <img
                  src="/Assets/sdgs-undip.jpeg"
                  alt="SDGs UNDIP Website Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="pl-2">
              <span className="text-accent-green font-semibold text-sm mb-4 block tracking-wide">
                Featured Project
              </span>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                SDGs UNDIP Website
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed text-left max-w-[95%]">
                Sebuah desain website modern yang dikembangkan untuk menampilkan komitmen Universitas Diponegoro dalam mendukung Sustainable Development Goals (SDGs).
                <br /><br />
                Proyek ini berfokus pada bagaimana menyajikan informasi yang kompleks—seperti data keberlanjutan, program kampus, dan dampak sosial—menjadi pengalaman digital yang jelas, menarik, dan mudah dipahami.
                <br /><br />
                Pendekatan desain yang digunakan: layout yang bersih dan terstruktur, hierarki visual yang kuat, navigasi yang intuitif dan mudah diakses, serta penyajian informasi SDGs yang informatif dan engaging.
                <br /><br />
                Website ini dirancang untuk menjembatani komunikasi antara institusi, mahasiswa, peneliti, dan masyarakat luas dalam memahami peran UNDIP terhadap pembangunan berkelanjutan.
                <br /><br />
                Tujuan utama: Meningkatkan awareness, transparansi, dan partisipasi publik terhadap inisiatif SDGs melalui pengalaman digital yang modern dan impactful.
              </p>
            </div>
          </div>

          {/* Project - EduAI */}
          <div className="project-card group min-w-full md:min-w-[calc(50%-24px)]">
            <div className="relative bg-[#162734] p-5 md:p-10 rounded-[40px] mb-8 overflow-hidden transition-all duration-500 border border-white/[0.03] shadow-2xl group-hover:shadow-accent-green/5 group-hover:border-white/[0.08]">
              {/* Inner Mockup Frame */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl max-h-[300px] group-hover:max-h-[2000px] transition-all duration-700 ease-in-out group-hover:scale-[1.02]">
                <img
                  src="/Assets/eduai.jpeg"
                  alt="EduAI Platform Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="pl-2">
              <span className="text-accent-green font-semibold text-sm mb-4 block tracking-wide">
                Featured Project
              </span>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                Reimagining digital learning with EduAI 🤖📚
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed text-left max-w-[95%]">
                Sebuah platform edukasi yang menggabungkan pembelajaran interaktif, AI chatbot, dan virtual lab dalam satu pengalaman yang seamless—terinspirasi dari kebutuhan belajar modern yang lebih fleksibel dan personal.
                <br /><br />
                Tidak hanya sekadar belajar, pengguna bisa:
                <br />
                💬 Berdiskusi langsung dengan AI chatbot kapan saja
                <br />
                🧪 Eksplorasi konsep melalui virtual lab interaktif
                <br />
                📖 Akses materi yang terstruktur dan adaptif
                <br /><br />
                EduAI dirancang untuk membuat proses belajar jadi lebih engaging, praktis, dan relevan dengan perkembangan teknologi saat ini.
                <br /><br />
                Where education meets intelligence.
              </p>
            </div>
          </div>

          {/* Project - Antrean Online */}
          <div className="project-card group min-w-full md:min-w-[calc(50%-24px)]">
            <div className="relative bg-[#162734] p-5 md:p-10 rounded-[40px] mb-8 overflow-hidden transition-all duration-500 border border-white/[0.03] shadow-2xl group-hover:shadow-accent-green/5 group-hover:border-white/[0.08]">
              {/* Inner Mockup Frame */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl max-h-[300px] group-hover:max-h-[2000px] transition-all duration-700 ease-in-out group-hover:scale-[1.02]">
                <img
                  src="/Assets/antrean-onlen.jpeg"
                  alt="Antrean Online Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="pl-2">
              <span className="text-accent-green font-semibold text-sm mb-4 block tracking-wide">
                Featured Project
              </span>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                Antrean Online
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed text-left max-w-[95%]">
                Antrean Online adalah solusi digital yang dirancang untuk mengatasi masalah antrean fisik yang melelahkan dan tidak teratur. Proyek ini bertujuan untuk menciptakan jembatan yang efisien antara penyedia layanan dan pelanggan melalui sistem pemesanan tempat secara real-time.
                <br /><br />
                Fokus utama dari desain ini adalah mengubah pengalaman menunggu yang membosankan menjadi lebih produktif dengan memberikan transparansi informasi yang jelas melalui perangkat seluler.
              </p>
            </div>
          </div>

          {/* Project 1 */}
          <div className="project-card group min-w-full md:min-w-[calc(50%-24px)]">
            <div className="relative bg-[#162734] p-5 md:p-10 rounded-[40px] mb-8 overflow-hidden transition-all duration-500 border border-white/[0.03] shadow-2xl group-hover:shadow-accent-green/5 group-hover:border-white/[0.08]">
              {/* Inner Mockup Frame */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl max-h-[300px] group-hover:max-h-[2000px] transition-all duration-700 ease-in-out group-hover:scale-[1.02]">
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
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                UNITASK
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed text-left max-w-[95%]">
                UNiTask is a digital-based website and mobile app that integrates
                various user services into one unified platform. UNiTask connects
                users (customers) with service partners (drivers/partners) and
                professional mentors, simplifying service access, personal
                development, and job search within a single ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
