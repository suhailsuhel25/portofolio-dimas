import { useRef } from 'react';

const Achievements = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="achievement" className="pt-0 pb-40 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent-green tracking-tight uppercase">
            MY ACHIVEMENT
          </h2>
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="bg-[#1a2c3a] border border-white/5 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent-green hover:text-black hover:scale-105 active:scale-95 group shadow-lg">
              <i className="bi bi-chevron-left text-xl transition-transform group-hover:-translate-x-0.5"></i>
            </button>
            <button onClick={() => scroll('right')} className="bg-[#1a2c3a] border border-white/5 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent-green hover:text-black hover:scale-105 active:scale-95 group shadow-lg">
              <i className="bi bi-chevron-right text-xl transition-transform group-hover:translate-x-0.5"></i>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-x-12 overflow-x-hidden scroll-smooth">
          {/* Achievement 1 */}
          <div className="group min-w-[calc(50%-24px)]">
            <div className="relative aspect-[4/3] md:aspect-[1.4/1] mb-10 overflow-hidden rounded-[140px_25px_140px_25px] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent-green/20 group-hover:shadow-accent-green/5">
              <img
                src="/Assets/silver-medal-iiiex.png"
                alt="Silver Medal IIIEX"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pl-4">
              <p className="text-white/60 text-sm mb-4 font-medium tracking-wide">
                Semarang, Agust 2024
              </p>
              <h3 className="text-accent-green font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight tracking-tight">
                SILVER MEDAL IIIEX ( Indonesia International Invention Expo )
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[95%]">
                Diselenggarakan oleh Indonesian Young Scientist Association (IYSA)
                in dengan lebih dari 250 peserta dari berbagai negara asia dan timur
                tengah
              </p>
            </div>
          </div>

          {/* Achievement 2 */}
          <div className="group min-w-[calc(50%-24px)]">
            <div className="relative aspect-[4/3] md:aspect-[1.4/1] mb-10 overflow-hidden rounded-[140px_25px_140px_25px] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent-green/20 group-hover:shadow-accent-green/5">
              <img
                src="/Assets/bronze-medal-iwsc.png"
                alt="Bronze Medal IWSC"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pl-4">
              <p className="text-white/60 text-sm mb-4 font-medium tracking-wide">
                Semarang, Aug 2024
              </p>
              <h3 className="text-accent-green font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight tracking-tight">
                BRONZE MEDAL IWSC ( International Walisongo Science Competition )
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[95%]">
                Diselenggarakan oleh Fakultas Sains dan Teknologi UIN Walisongo
                dengan lebih dari 100 Peserta
              </p>
            </div>
          </div>

          {/* Achievement 3 */}
          <div className="group min-w-[calc(50%-24px)]">
            <div className="relative aspect-[4/3] md:aspect-[1.4/1] mb-10 overflow-hidden rounded-[140px_25px_140px_25px] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent-green/20 group-hover:shadow-accent-green/5">
              <img
                src="/Assets/Best Champion Sintech.png"
                alt="Best Champion Sintech"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pl-4">
              <p className="text-white/60 text-sm mb-4 font-medium tracking-wide">
                Semarang, Mei 2025
              </p>
              <h3 className="text-accent-green font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight tracking-tight">
                BEST CHAMPION SINTECH ( Study Club Information Technology )
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[95%]">
                Diselenggarakan oleh HMJ Teknologi Informasi
                dengan lebih dari 70 Mahasiswa dari Prodi Teknologi Informasi
              </p>
            </div>
          </div>

          {/* Achievement 4 */}
          <div className="group min-w-[calc(50%-24px)]">
            <div className="relative aspect-[4/3] md:aspect-[1.4/1] mb-10 overflow-hidden rounded-[140px_25px_140px_25px] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent-green/20 group-hover:shadow-accent-green/5">
              <img
                src="/Assets/mapres-ti.png"
                alt="Best Champion Sintech"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pl-4">
              <p className="text-white/60 text-sm mb-4 font-medium tracking-wide">
                Semarang, Nov 2025
              </p>
              <h3 className="text-accent-green font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight tracking-tight">
                Mahasiswa Berprestasi Teknologi Informasi
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[95%]">
                Diselenggarakan oleh HMJ Teknologi Informasi
              </p>
            </div>
          </div>
          
          {/* Achievement 5 */}
          <div className="group min-w-[calc(50%-24px)]">
            <div className="relative aspect-[4/3] md:aspect-[1.4/1] mb-10 overflow-hidden rounded-[140px_25px_140px_25px] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent-green/20 group-hover:shadow-accent-green/5">
              <img
                src="/Assets/silver-medal.png"
                alt="Best Champion Sintech"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pl-4">
              <p className="text-white/60 text-sm mb-4 font-medium tracking-wide">
                Semarang, Nov 2025
              </p>
              <h3 className="text-accent-green font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight tracking-tight">
                SILVER MEDAL & BEST PERFORMANCE 2 WORK EXHIBITION & INNOVATION COMPETITION FST UINWS SE JAWA TENGAH
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[95%]">
                Diselenggarakan oleh Fakultas Sains dan Teknologi UIN Walisongo
                dengan lebih dari 7 Tim dari himpunan dan eksternal
              </p>
            </div>
          </div>

          {/* Achievement 6 */}
          <div className="group min-w-[calc(50%-24px)]">
            <div className="relative aspect-[4/3] md:aspect-[1.4/1] mb-10 overflow-hidden rounded-[140px_25px_140px_25px] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent-green/20 group-hover:shadow-accent-green/5">
              <img
                src="/Assets/3rd-place.png"
                alt="Best Champion Sintech"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pl-4">
              <p className="text-white/60 text-sm mb-4 font-medium tracking-wide">
                Semarang, Nov 2025
              </p>
              <h3 className="text-accent-green font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight tracking-tight">
                3rd place UI/UX Competition Switchfest
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[95%]">
                Diselenggarakan oleh HMJ Teknologi Informasi UINWS
                dengan lebih dari 30 Mahasiswa dari berbagai kalangan Universitas
              </p>
            </div>
          </div>

          {/* Achievement 7 */}
          <div className="group min-w-[calc(50%-24px)]">
            <div className="relative aspect-[4/3] md:aspect-[1.4/1] mb-10 overflow-hidden rounded-[140px_25px_140px_25px] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent-green/20 group-hover:shadow-accent-green/5">
              <img
                src="/Assets/harapan-1.png"
                alt="Best Champion Sintech"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="pl-4">
              <p className="text-white/60 text-sm mb-4 font-medium tracking-wide">
                Semarang, Nov 2025
              </p>
              <h3 className="text-accent-green font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight tracking-tight">
                Harapan 1 WEB Development Switchfest Competition
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[95%]">
                Diselenggarakan oleh HMJ Teknologi Infromasi
                dengan lebih dari 140 peserta dari 28 Tim di berbagai kalangan Univeritas di Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
