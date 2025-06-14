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
              <SkillBar skill="ABAP Development" percentage={95} color="bg-blue-600" />
              <SkillBar skill="FIORI/UI5 Apps" percentage={90} color="bg-blue-600" />
              <SkillBar skill="SAP S/4HANA" percentage={92} color="bg-blue-600" />
              <SkillBar skill="OData/BAPIs" percentage={88} color="bg-blue-600" />
              <SkillBar skill="SAP BTP Cloud" percentage={85} color="bg-blue-600" />
              <SkillBar skill="SAP Gateway" percentage={87} color="bg-blue-600" />
              <SkillBar skill="CDS Views" percentage={83} color="bg-blue-600" />
              <SkillBar skill="SAP HCM/HR" percentage={80} color="bg-blue-600" />
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
              <SkillBar skill="GitLab CI/CD" percentage={90} color="bg-amber-600" />
              <SkillBar skill="Docker & Containers" percentage={88} color="bg-amber-600" />
              <SkillBar skill="Kubernetes" percentage={85} color="bg-amber-600" />
              <SkillBar skill="AWS Cloud Services" percentage={82} color="bg-amber-600" />
              <SkillBar skill="Azure DevOps" percentage={87} color="bg-amber-600" />
              <SkillBar skill="Linux/CentOS Admin" percentage={92} color="bg-amber-600" />
              <SkillBar skill="Infrastructure as Code" percentage={80} color="bg-amber-600" />
              <SkillBar skill="Monitoring (Grafana/Prometheus)" percentage={78} color="bg-amber-600" />
            </div>
          </div>

          {/* Integrations & Automations */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Integrations & Automations</h3>
            </div>
            <div className="space-y-4">
              <SkillBar skill="REST/SOAP APIs" percentage={94} color="bg-green-600" />
              <SkillBar skill="Power Automate/Flow" percentage={88} color="bg-green-600" />
              <SkillBar skill="Banking API Integration" percentage={92} color="bg-green-600" />
              <SkillBar skill="Webhook Development" percentage={85} color="bg-green-600" />
              <SkillBar skill="Microservices Architecture" percentage={82} color="bg-green-600" />
              <SkillBar skill="Event-Driven Systems" percentage={80} color="bg-green-600" />
              <SkillBar skill="ETL/Data Pipelines" percentage={87} color="bg-green-600" />
              <SkillBar skill="Process Automation" percentage={90} color="bg-green-600" />
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Technology Stack</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* SAP & Enterprise */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <img src="@assets/image_1749922057198.png" alt="SAP Logo" className="w-10 h-6 object-contain" />
              </div>
              <span className="text-sm font-medium">SAP</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-database text-3xl text-orange-600 mb-2"></i>
              <span className="text-sm font-medium">SAP HANA</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-desktop text-3xl text-blue-600 mb-2"></i>
              <span className="text-sm font-medium">FIORI/UI5</span>
            </div>
            
            {/* Cloud Platforms */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-aws text-3xl text-orange-500 mb-2"></i>
              <span className="text-sm font-medium">AWS</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-microsoft text-3xl text-blue-600 mb-2"></i>
              <span className="text-sm font-medium">Azure</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-google text-3xl text-red-500 mb-2"></i>
              <span className="text-sm font-medium">GCP</span>
            </div>
            
            {/* DevOps & CI/CD */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-docker text-3xl text-blue-500 mb-2"></i>
              <span className="text-sm font-medium">Docker</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-dharmachakra text-3xl text-blue-600 mb-2"></i>
              <span className="text-sm font-medium">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-gitlab text-3xl text-orange-600 mb-2"></i>
              <span className="text-sm font-medium">GitLab CI/CD</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-jenkins text-3xl text-gray-700 mb-2"></i>
              <span className="text-sm font-medium">Jenkins</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-github text-3xl text-gray-800 mb-2"></i>
              <span className="text-sm font-medium">GitHub Actions</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-cube text-3xl text-green-600 mb-2"></i>
              <span className="text-sm font-medium">Terraform</span>
            </div>
            
            {/* Monitoring & Observability */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-chart-line text-3xl text-purple-600 mb-2"></i>
              <span className="text-sm font-medium">Prometheus</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-chart-bar text-3xl text-orange-600 mb-2"></i>
              <span className="text-sm font-medium">Grafana</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-search text-3xl text-yellow-600 mb-2"></i>
              <span className="text-sm font-medium">ELK Stack</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-wave-square text-3xl text-blue-700 mb-2"></i>
              <span className="text-sm font-medium">Jaeger</span>
            </div>
            
            {/* Databases */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-database text-3xl text-blue-800 mb-2"></i>
              <span className="text-sm font-medium">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-database text-3xl text-green-700 mb-2"></i>
              <span className="text-sm font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-fire text-3xl text-red-600 mb-2"></i>
              <span className="text-sm font-medium">Redis</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-table text-3xl text-blue-900 mb-2"></i>
              <span className="text-sm font-medium">InfluxDB</span>
            </div>
            
            {/* Programming Languages */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-python text-3xl text-yellow-500 mb-2"></i>
              <span className="text-sm font-medium">Python</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-node-js text-3xl text-green-600 mb-2"></i>
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-js-square text-3xl text-yellow-400 mb-2"></i>
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-golang text-3xl text-cyan-600 mb-2"></i>
              <span className="text-sm font-medium">Go</span>
            </div>
            
            {/* Frameworks & Libraries */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-react text-3xl text-blue-400 mb-2"></i>
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-vue text-3xl text-green-500 mb-2"></i>
              <span className="text-sm font-medium">Vue.js</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-laravel text-3xl text-red-600 mb-2"></i>
              <span className="text-sm font-medium">Laravel</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-leaf text-3xl text-green-700 mb-2"></i>
              <span className="text-sm font-medium">Spring Boot</span>
            </div>
            
            {/* Message Queues & Streaming */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-stream text-3xl text-purple-700 mb-2"></i>
              <span className="text-sm font-medium">Apache Kafka</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-envelope text-3xl text-orange-700 mb-2"></i>
              <span className="text-sm font-medium">RabbitMQ</span>
            </div>
            
            {/* Operating Systems */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-linux text-3xl text-gray-800 mb-2"></i>
              <span className="text-sm font-medium">Linux</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-ubuntu text-3xl text-orange-500 mb-2"></i>
              <span className="text-sm font-medium">Ubuntu</span>
            </div>
            
            {/* Version Control & Collaboration */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-git-alt text-3xl text-orange-600 mb-2"></i>
              <span className="text-sm font-medium">Git</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fab fa-atlassian text-3xl text-blue-600 mb-2"></i>
              <span className="text-sm font-medium">Jira</span>
            </div>
            
            {/* Automation & Integration */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-robot text-3xl text-green-600 mb-2"></i>
              <span className="text-sm font-medium">Power Automate</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-cogs text-3xl text-gray-600 mb-2"></i>
              <span className="text-sm font-medium">Ansible</span>
            </div>
            
            {/* API & Integration Tools */}
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-exchange-alt text-3xl text-blue-500 mb-2"></i>
              <span className="text-sm font-medium">Postman</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <i className="fas fa-plug text-3xl text-purple-500 mb-2"></i>
              <span className="text-sm font-medium">GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
