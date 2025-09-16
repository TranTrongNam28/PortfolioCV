import React, { useEffect, useRef, useState } from 'react';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      title: "Full Stack Technologies",
      skills: [
        { name: "React", level: 20 },
        { name: "TypeScript", level: 20 },
        { name: "JavaScript ", level: 50 },
        { name: "HTML5 & CSS3", level: 80 },
        { name: "Tailwind CSS", level: 30 },
        { name: ".Net Core MVC", level: 40 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Azure Devops", level: 90 },
        { name: "Proto.io", level: 90 },
        { name: "Draw.io", level: 95 },
        { name: "JetBrains Rider", level: 85 },
        { name: "SQL Server", level: 65 }
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        { name: "Analyzing requirements", level: 95 },
        { name: "Testing", level: 70 },
        { name: "Teamwork & Independent Work", level: 90 },
        { name: "Proficient in Microsoft Office ", level: 90 },
        { name: "English", level: 65 },
        { name: "Public speaking and presentation skills", level: 95 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive overview of my technical expertise and proficiency levels
            in various technologies, user interface tools, as well as soft skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`section-fade ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className={`mt-16 text-center section-fade ${isVisible ? 'visible' : ''}`}>
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 mb-6">
              Technology evolves rapidly, and I'm committed to continuous improvement. 
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;