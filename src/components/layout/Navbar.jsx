import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#project', label: 'Project' },
    { href: '#achievement', label: 'Achivement' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <header className="flex justify-center fixed top-0 pt-4 left-0 w-full z-50 px-4 md:px-8">
        {/* Desktop Nav */}
        <nav className="w-full max-w-[900px] hidden md:flex justify-center bg-[#081B28]/60 backdrop-blur-md rounded-full border border-white/5">
            <ul className="flex w-full justify-between py-4 px-12 font-poppins">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className={`${i === 0 ? 'text-white' : 'text-text-secondary'} font-medium text-base transition-all hover:text-white`}>
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
        </nav>

        {/* Mobile Nav */}
        <nav className="w-full md:hidden flex flex-col items-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 rounded-full bg-[#081B28]/60 backdrop-blur-md border border-white/5 flex items-center justify-center text-white text-xl transition-all active:scale-90"
            >
              <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>

            {isOpen && (
              <ul className="mt-3 w-full bg-[#081B28]/90 backdrop-blur-md rounded-2xl border border-white/5 py-4 px-6 font-poppins flex flex-col gap-4 animate-[fadeIn_0.2s_ease-out]">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`${i === 0 ? 'text-white' : 'text-text-secondary'} font-medium text-base transition-all hover:text-white block py-1`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
        </nav>
    </header>
  );
};
export default Navbar;
