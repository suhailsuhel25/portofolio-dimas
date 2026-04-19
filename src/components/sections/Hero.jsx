import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create grid dots
    const createParticles = () => {
      particles = [];
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: i * spacing,
            y: j * spacing,
            baseX: i * spacing,
            baseY: j * spacing,
            size: 1.2,
            opacity: 0,
            targetOpacity: 0.15 + Math.random() * 0.15,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };
    createParticles();

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      particles.forEach((p) => {
        // Breathing animation
        const breathe = Math.sin(time + p.phase) * 0.5 + 0.5;
        p.opacity = p.targetOpacity * (0.4 + breathe * 0.6);

        // Mouse interaction - expand away
        const dx = mouse.x - p.baseX;
        const dy = mouse.y - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 20;
          p.x = p.baseX - (dx / dist) * force;
          p.y = p.baseY - (dy / dist) * force;
          p.opacity = Math.min(0.6, p.opacity + (1 - dist / maxDist) * 0.4);
        } else {
          p.x += (p.baseX - p.x) * 0.1;
          p.y += (p.baseY - p.y) * 0.1;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 230, 187, ${p.opacity})`;
        ctx.fill();

        // Draw connecting lines to nearby dots near mouse
        if (dist < maxDist * 1.5) {
          particles.forEach((p2) => {
            const d2x = mouse.x - p2.baseX;
            const d2y = mouse.y - p2.baseY;
            const d2 = Math.sqrt(d2x * d2x + d2y * d2y);
            if (d2 < maxDist * 1.5) {
              const px = p.x - p2.x;
              const py = p.y - p2.y;
              const pDist = Math.sqrt(px * px + py * py);
              if (pDist < 80 && pDist > 0) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(167, 230, 187, ${0.06 * (1 - pDist / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      {/* Interactive Particle Grid */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Radial glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle,rgba(13,183,96,0.08)_0%,transparent_70%)] pointer-events-none z-0"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-[15%] left-[10%] w-16 h-16 md:w-24 md:h-24 border border-accent-green/20 rounded-full animate-float pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[12%] w-10 h-10 md:w-16 md:h-16 border border-accent-green/15 rotate-45 animate-float pointer-events-none z-0" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-[20%] left-[15%] w-6 h-6 md:w-10 md:h-10 bg-accent-green/10 rounded-full animate-float pointer-events-none z-0" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[25%] right-[10%] w-12 h-12 md:w-20 md:h-20 border border-accent-green/10 rounded-lg rotate-12 animate-float pointer-events-none z-0" style={{ animationDelay: '1.5s' }}></div>

      {/* Small sparkle dots */}
      <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-accent-green/40 rounded-full animate-pulse pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-accent-green/50 rounded-full animate-pulse pointer-events-none z-0" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-[35%] left-[30%] w-1 h-1 bg-white/20 rounded-full animate-pulse pointer-events-none z-0" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[55%] right-[30%] w-1.5 h-1.5 bg-accent-green/30 rounded-full animate-pulse pointer-events-none z-0" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content */}
      <div className="w-full max-w-[1100px] relative z-10 px-6 md:px-8 flex flex-col justify-center items-center gap-6">
        
        {/* Subtitle */}
        <div className="hero-fade-in hero-fade-in-1 flex items-center gap-3">
          <div className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-accent-green/60"></div>
          <span className="text-accent-green/70 text-xs md:text-sm font-medium tracking-[0.3em] uppercase font-poppins">Creative Designer & Developer</span>
          <div className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-accent-green/60"></div>
        </div>

        {/* Main Heading */}
        <div className="hero-fade-in hero-fade-in-2 relative w-full flex justify-center items-center">
          <img src="/Assets/Ellipse 1.png" alt="Eclipse Glow" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] max-w-none h-auto pointer-events-none z-[-1] mix-blend-screen opacity-60" />
          
          <h1 className="font-heading text-4xl md:text-[5rem] lg:text-[6.5rem] font-medium tracking-tight text-white leading-none text-center uppercase relative z-10">
            PORTOFOLIO
          </h1>
        </div>

        {/* Bottom accent line */}
        <div className="hero-fade-in hero-fade-in-3 flex items-center gap-4 mt-2">
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-accent-green/40"></div>
          <svg className="w-3 h-3 md:w-4 md:h-4 text-accent-green/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-accent-green/40"></div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-fade-in hero-fade-in-4 absolute -bottom-20 md:-bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase font-poppins">Scroll</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
export default Hero;