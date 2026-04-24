const Footer = () => {
    return (
        <footer className="py-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="w-full h-[1px] bg-white/10 mb-8 blur-[0.5px]"></div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-secondary">
                    <p>@ 2026. All Rights Reserved</p>
                    <p className="font-semibold text-white/70">Designed by Dimas Alfa Rizky</p>
                    <p className="font-semibold text-white/70">Developed by Muhammad Suhail Ramadhany</p>
                    <div className="flex gap-5">
                        <a href="https://www.instagram.com/dimasalfa.rizky/" className="text-xl transition-all hover:-translate-y-1 hover:text-white"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/dimas-alfa-rizky-6b0291291/" className="text-xl transition-all hover:-translate-y-1 hover:text-white"><i className="bi bi-linkedin"></i></a>
                        <a href="https://dribbble.com/Dimas_1006" className="text-xl transition-all hover:-translate-y-1 hover:text-white"><i className="bi bi-dribbble"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
