import React, { useEffect, useRef, useState } from 'react';
import { Github, Calendar, Code } from 'lucide-react';
const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "Website MeetingVL",
      description: "The website helps students record minutes when meeting with advisors and was developed by a team of 6 members.",
      image: "/sep.jpg",
      technologies: ["Member","Document","HTML", "CSS"],
      githubUrl: "https://github.com/QuocNam29/MeetingVL.git",
      date: "2022"
    },
    {
      title: "Website Academic Advisor Management",
      description: "This is a website that manages academic advising activities during the school year, built with a team of 5 members.",
      image: "/Login.png",
      technologies: ["Scrum Master", "Leader", "Full Stack", "Document", "Business Analytics" ,"Tester"],
      githubUrl: "https://github.com/KyleValkyrie/CAPSTONE_TEAM01_2024.git",
      date: "2024-2025"
    },
   
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Projects and roles undertaken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`section-fade ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`mt-16 text-center section-fade ${isVisible ? 'visible' : ''}`}>
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <Code className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-4">More Projects on GitHub</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore my complete collection of projects, experiments, and contributions 
              to open-source repositories on my GitHub profile.
            </p>
            <a 
              href="https://github.com/TranTrongNam28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;