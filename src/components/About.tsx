import React, { useEffect, useRef, useState } from 'react';



const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`section-fade ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a Software Engineering graduate from Van Lang University with nearly one year of experience developing web applications using ASP.NET Core MVC. In addition, I am a fast learner, eager to acquire new technologies, skills, and programming languages. I have participated in two real-world projects, which have helped me develop systematic thinking, communication skills, teamwork, and a strong sense of responsibility. I am currently seeking a professional environment where I can further develop my expertise and explore the most suitable career path in the IT 
              </p>
             
            </div>

            <div className="mt-8">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Image and Highlights */}
          <div className={`section-fade ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="w-[400px] mx-auto">
                <img
                    src="/Picture1.png"
                    alt="Developer at work"
                    className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;