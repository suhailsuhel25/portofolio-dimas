import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "UI Designer",
            company: "Lion Parcel",
            duration: "Des 2025 - Feb 2026 / Jakarta, Indonesia",
            desc: "Serve as a UI Design Intern in the internal website design process. Involved in creating user interfaces, developing user flows, and adjusting designs to meet user needs and company standards."
        },
        {
            role: "UI/UX Designer",
            company: "Redikref",
            duration: "Juni - Saat ini / Remote, Indonesia",
            desc: "Involved in website development for clients with various needs, from landing pages to web-based systems. Responsible for interface (UI) design, user experience (UX), and feature implementation according to client requirements."
        },
        {
            role: "UI/UX Designer",
            company: "Sintech",
            duration: "April - Juni 2025 / Semarang, Indonesia",
            desc: "Contribute as part of a bootcamp-led team to website and application-based projects. Participate in the design, development, and presentation of projects as a simulation of working in the industrial world."
        }
    ];

    return (
        <section id="experience" className="bg-[#081B28] relative">

            <div className="max-w-[1300px] mx-auto px-8 pt-20 pb-32 relative">

                {/* Header Section */}
                <div className="text-center mb-24 relative z-10">
                    <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm block mb-4">MY EXPERIENCES</span>
                    <h2 className="text-white text-5xl md:text-6xl font-serif">Where I've Been Employed</h2>
                </div>

                {/* Experience List */}
                <div className="max-w-[1100px] mx-auto flex flex-col">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`flex flex-col md:grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-20 py-16 ${index !== experiences.length - 1 ? 'border-b border-white/10' : ''}`}>
                            {/* Left Side: Role & Date */}
                            <div>
                                <h3 className="text-2xl font-manrope font-bold text-white mb-2">
                                    {exp.role}, <span className="text-accent-green font-medium">{exp.company}</span>
                                </h3>
                                <p className="text-white/40 text-[15px] italic">{exp.duration}</p>
                            </div>

                            {/* Right Side: Description */}
                            <div>
                                <p className="text-white/60 text-lg leading-relaxed font-light">
                                    {exp.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
