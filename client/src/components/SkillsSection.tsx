import { useEffect, useRef, useState } from "react";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const SkillBar = ({ skill, percentage, color }: { skill: string; percentage: number; color: string }) => (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-slate-500">{percentage}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full skill-progress ${color}`}
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning enterprise SAP systems, modern development practices, and cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* SAP & Enterprise */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-building text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800">SAP & Enterprise</h3>
            </div>
            <div className="space-y-4">
              <SkillBar skill="ABAP" percentage={95} color="bg-blue-600" />
              <SkillBar skill="FIORI/UI5" percentage={90} color="bg-blue-600" />
              <SkillBar skill="OData/BAPIs" percentage={85} color="bg-blue-600" />
              <SkillBar skill="SAP BTP" percentage={80} color="bg-blue-600" />
            </div>
          </div>

          {/* DevOps & Infrastructure */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-server text-amber-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800">DevOps & Infrastructure</h3>
            </div>
            <div className="space-y-4">
              <SkillBar skill="GitLab CI/CD" percentage={88} color="bg-amber-600" />
              <SkillBar skill="Docker" percentage={85} color="bg-amber-600" />
              <SkillBar skill="Linux/CentOS" percentage={90} color="bg-amber-600" />
              <SkillBar skill="REST APIs" percentage={92} color="bg-amber-600" />
            </div>
          </div>

          {/* Modern Development */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Modern Development</h3>
            </div>
            <div className="space-y-4">
              <SkillBar skill="Laravel/Node.js" percentage={75} color="bg-green-600" />
              <SkillBar skill="Python/AI" percentage={80} color="bg-green-600" />
              <SkillBar skill="Power Automate" percentage={85} color="bg-green-600" />
              <SkillBar skill="Git/Agile" percentage={88} color="bg-green-600" />
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Technology Stack</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-sap text-3xl text-blue-600 mb-2"></i>
              <span className="text-sm font-medium">SAP</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-docker text-3xl text-blue-500 mb-2"></i>
              <span className="text-sm font-medium">Docker</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-gitlab text-3xl text-orange-600 mb-2"></i>
              <span className="text-sm font-medium">GitLab</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-linux text-3xl text-gray-800 mb-2"></i>
              <span className="text-sm font-medium">Linux</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-node-js text-3xl text-green-600 mb-2"></i>
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-python text-3xl text-yellow-500 mb-2"></i>
              <span className="text-sm font-medium">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
