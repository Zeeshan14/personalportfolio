export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Driving Digital Transformation in Enterprise Systems
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              As a Manager SAP-ABAP at Highnoon Laboratories Limited, I specialize in end-to-end SAP S/4HANA implementations 
              and digital transformation initiatives. My expertise spans across enterprise SAP systems, modern application 
              development, and DevOps practices.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I've successfully led projects that improved operational efficiency by up to 80% through intelligent automation, 
              API integrations, and containerized environments. My approach combines deep SAP technical knowledge with 
              modern development practices to deliver scalable, maintainable solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-slate-600">System Uptime</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">80%</div>
                <div className="text-slate-600">Efficiency Improvement</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Digital technology and data visualization dashboard" 
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Core Philosophy</h4>
              <p className="text-slate-600">
                "Technology should enhance human capability, not replace it. I focus on creating intelligent 
                systems that empower teams to achieve more while maintaining the highest standards of security and compliance."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
