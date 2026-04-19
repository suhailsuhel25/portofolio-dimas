import React from 'react';

const Services = () => {
    const serviceList = [
        {
            title: "User Interface (UI) & User Experience (UX)",
            desc: "I i design simple, responsive, and user-friendly applications and websites. I ensure the user flow is clear, easy to understand, and meets the needs of the system being developed."
        },
        {
            title: "Mobile App",
            desc: "Develop mobile applications with structured features and focus on user needs, such as service applications, financial management, education, and role-based systems (users & partners)."
        },
        {
            title: "Web Development",
            desc: "Building system-based websites and web applications with complex features such as authentication, data management, AI integration, and real-time processing according to project needs."
        }
    ];

    return (
        <section id="services" className="bg-[#081B28] py-16 md:py-32">
            <div className="max-w-[1300px] mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column */}
                    <div className="reveal-left bg-white/[0.03] border border-white/5 rounded-[24px] md:rounded-[40px] p-6 md:p-14 backdrop-blur-md relative overflow-hidden h-fit">
                        {/* Subtle Glow */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-green/10 blur-[80px] pointer-events-none"></div>
                        
                        <h2 className="text-white text-2xl md:text-6xl font-manrope font-bold leading-tight mb-4 md:mb-8">
                            Why Hire Me For Your Next <span className="text-accent-green">Project?</span>
                        </h2>
                        <p className="text-white/40 text-sm md:text-lg leading-relaxed mb-6 md:mb-10 max-w-[400px]">
                            I'm specialist in UI/UX Design. My passion is designing & solving problems through user experience and research.
                        </p>
                        <a href="#contact" className="inline-block bg-[#2d3e40] hover:bg-[#3a4f51] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-xl transition-all shadow-lg active:scale-95 text-sm md:text-base">
                            Say Hello!
                        </a>
                    </div>

                    {/* Right Column: Stacked Cards */}
                    <div className="reveal-right flex flex-col gap-4 md:gap-6">
                        {serviceList.map((service, index) => (
                            <div 
                                key={index} 
                                className="bg-gradient-to-r from-[#93C289] to-[#76B4A9] rounded-[20px] md:rounded-[30px] p-6 md:p-10 transition-transform hover:-translate-y-1 cursor-default shadow-xl"
                            >
                                <h3 className="text-[#081B28] text-lg md:text-3xl font-manrope font-extrabold mb-2 md:mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-[#081B28]/80 text-sm md:text-lg leading-relaxed font-medium">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
