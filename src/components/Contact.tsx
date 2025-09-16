import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, } from 'lucide-react';

const Contact: React.FC = () => {
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

 

  

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "trantrongnam02082001@gmail.com",
      href: "mailto:trantrongnam02082001@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0912131482",
      href: "tel:0912131482"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hoang Hoa Tham Street, Binh Loi Trung Ward, Ho Chi Minh City",
      href: ""
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I am always interested in opportunities and wish to stay long-term. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="flex justify-center gap-12">
          {/* Contact Information */}
          <div className={`section-fade ${isVisible ? 'visible' : ''}`}>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Let's Connect!</h4>
                <p className="text-gray-600 text-sm">
                  Hope to receive contact from your company. Thank you very much!!!
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Contact;