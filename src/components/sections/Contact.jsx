import { useRef } from 'react';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.full_name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const instagram = form.instagram.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInstagram: ${instagram}\n\nMessage:\n${message}`
    );

    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1'
      + '&to=alfadimas97@gmail.com'
      + '&su=' + subject
      + '&body=' + body;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="pt-0 pb-40 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        {/* Contact Badge & Heading */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-1.5 border border-accent-green rounded-full mb-8">
            <span className="text-accent-green text-sm font-medium tracking-wider">Contact</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Let's Discuss Your <span className="text-[#00c853]">Project</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto leading-relaxed">
            Let's make something new, different and more meaningful or make
            thing more visual or conceptual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-10 items-stretch">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Phone Card */}
            <div className="bg-[#0DB760] p-6 rounded-xl flex items-center gap-6 shadow-lg shadow-[#00c853]/10">
              <div className="text-white text-2xl">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="text-white">
                <span className="text-sm font-medium opacity-90 block mb-0.5">Call me</span>
                <p className="font-bold text-lg">+628978283967</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#0DB760] p-6 rounded-xl flex items-center gap-6 shadow-lg shadow-[#00c853]/10">
              <div className="text-white text-2xl">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="text-white">
                <span className="text-sm font-medium opacity-90 block mb-0.5">Email me</span>
                <p className="font-normal text-base break-all">alfadimas97@gmail.com</p>
              </div>
            </div>

            {/* Address Card */}
            <a href="https://www.google.com/maps/place/DIMAS+MOTOR/@-6.2079446,106.9527883,19z/data=!4m6!3m5!1s0x2e698bddba5e8a8b:0xb754c78c35e28ea4!8m2!3d-6.207999!4d106.9533872!16s%2Fg%2F11gl540hf1?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-[#0DB760] p-6 rounded-xl flex items-center gap-6 shadow-lg shadow-[#00c853]/10 cursor-pointer transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95">
              <div className="text-white text-2xl">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="text-white">
                <span className="text-sm font-medium opacity-90 block mb-0.5">Address</span>
                <p className="font-normal text-base">Jakarta Timur, Indonesia</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col h-full gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="full_name"
                placeholder="Full name"
                className="w-full bg-white text-[#1a2c3a] rounded-lg p-4 font-main text-base outline-none border-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#00c853]/50 transition-all font-medium"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full bg-white text-[#1a2c3a] rounded-lg p-4 font-main text-base outline-none border-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#00c853]/50 transition-all font-medium"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className="w-full bg-white text-[#1a2c3a] rounded-lg p-4 font-main text-base outline-none border-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#00c853]/50 transition-all font-medium"
              />
              <input
                type="text"
                name="instagram"
                placeholder="Instagram"
                className="w-full bg-white text-[#1a2c3a] rounded-lg p-4 font-main text-base outline-none border-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#00c853]/50 transition-all font-medium"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="w-full bg-white text-[#1a2c3a] rounded-lg p-5 font-main text-base outline-none border-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#00c853]/50 transition-all flex-grow resize-none font-medium min-h-[140px]"
            ></textarea>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#0DB760] text-white rounded-xl font-bold text-lg transition-all hover:bg-[#00a846] hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#00c853]/20"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

