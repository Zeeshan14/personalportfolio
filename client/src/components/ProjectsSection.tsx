import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ProjectsSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-slate-50" ref={elementRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing key projects that demonstrate technical expertise and business impact in digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Project 1: Pharma Digitalization */}
          <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden scroll-animate-left ${isVisible ? 'animate' : ''}`}>
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-pills text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Pharma Digitalization & CI/CD</h3>
                    <p className="text-slate-500">Multi-Technology Stack Integration</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Designed and managed comprehensive CI/CD pipelines for internal Laravel and Node.js applications 
                  using GitLab CI/CD. Led DevOps initiatives for non-SAP projects while optimizing SAP-side 
                  interfaces for seamless data synchronization across platforms.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-chart-line text-amber-500 mr-3"></i>
                    <span className="text-slate-600">40% reduction in time-to-release</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-rocket text-amber-500 mr-3"></i>
                    <span className="text-slate-600">Automated build and deployment processes</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt text-amber-500 mr-3"></i>
                    <span className="text-slate-600">Docker-based testing environments</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">GitLab CI/CD</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Laravel</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">SAP Integration</span>
                </div>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Digital transformation technology" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project 2: API Integration */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Financial technology and banking systems" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-university text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">SAP-Banking API Integration</h3>
                    <p className="text-slate-500">Payment Automation System</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Developed secure RESTful API integrations between SAP and two private banks for automated 
                  payment posting. Implemented comprehensive data validation, encryption protocols, and audit 
                  logging to meet pharmaceutical industry compliance standards.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-clock text-amber-500 mr-3"></i>
                    <span className="text-slate-600">2 days reduction in financial closing time</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-double text-amber-500 mr-3"></i>
                    <span className="text-slate-600">Enhanced accuracy and traceability</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-lock text-amber-500 mr-3"></i>
                    <span className="text-slate-600">Bank-grade security implementation</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">REST API</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">SAP Gateway</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Banking Integration</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Security</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Payroll Transformation */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-users text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Digital Payroll Transformation</h3>
                    <p className="text-slate-500">SAP HCM Integration</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Integrated SAP HCM with banking APIs to automate monthly salary disbursement processes and 
                  handle complex tax deduction rules. Created a comprehensive system that ensures accurate, 
                  timely, and compliant payroll processing for the entire organization.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-tachometer-alt text-green-600 mr-3"></i>
                    <span className="text-slate-600">Processing time: 2 days → 4 hours</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt text-green-600 mr-3"></i>
                    <span className="text-slate-600">100% accurate direct deposits</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-calculator text-green-600 mr-3"></i>
                    <span className="text-slate-600">Automated tax calculation compliance</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">SAP HCM</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Banking APIs</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Payroll Automation</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Tax Integration</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Process Optimization</span>
                </div>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="HR technology and digital workplace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
