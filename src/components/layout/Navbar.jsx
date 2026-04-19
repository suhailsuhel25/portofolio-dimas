const Navbar = () => {
  return (
    <header className="flex justify-center fixed top-0 pt-4 left-0 w-full z-50 px-8">
        <nav className="w-full max-w-[900px] flex justify-center bg-[#081B28]/60 backdrop-blur-md rounded-full border border-white/5">
            <ul className="flex w-full justify-between py-4 px-12 font-poppins">
                <li><a href="#home" className="text-white font-medium text-base transition-all hover:text-white">Home</a></li>
                <li><a href="#about" className="text-text-secondary font-medium text-base transition-all hover:text-white">About</a></li>
                <li><a href="#blog" className="text-text-secondary font-medium text-base transition-all hover:text-white">Blog</a></li>
                <li><a href="#project" className="text-text-secondary font-medium text-base transition-all hover:text-white">Project</a></li>
                <li><a href="#achievement" className="text-text-secondary font-medium text-base transition-all hover:text-white">Achivement</a></li>
                <li><a href="#contact" className="text-text-secondary font-medium text-base transition-all hover:text-white">Contact Us</a></li>
            </ul>
        </nav>
    </header>
  );
};
export default Navbar;
