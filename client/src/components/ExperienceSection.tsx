export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A track record of delivering impactful solutions across enterprise systems and digital transformation initiatives.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {/* Current Role */}
            <div className="relative md:pl-16">
              <div className="timeline-item bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Manager SAP-ABAP</h3>
                    <p className="text-blue-600 font-semibold">Highnoon Laboratories Limited</p>
                  </div>
                  <div className="text-slate-500 mt-2 md:mt-0">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    May 2019 - Present
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                      alt="Professional business environment" 
                      className="rounded-lg shadow-md w-full h-48 object-cover mb-4"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Led end-to-end SAP S/4HANA implementations for two major projects</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Improved production order efficiency by 25% with FIORI barcode scanner</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Reduced payment processing time by 80% through API integrations</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Maintained 99.9% uptime on critical middleware servers</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Automated payroll processing reducing time from 2 days to 4 hours</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Technical Responsibilities</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">SAP S/4HANA Implementation</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">ABAP Development</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">FIORI Apps</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">GitLab CI/CD</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Docker</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">REST API Development</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Linux Administration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="relative md:pl-16">
              <div className="timeline-item bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">MIS Executive</h3>
                    <p className="text-blue-600 font-semibold">H. Karim Buksh & Sons</p>
                  </div>
                  <div className="text-slate-500 mt-2 md:mt-0">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    March 2019 - May 2019
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  Focused on process automation and data pipeline optimization during this transitional role, 
                  building foundational experience in enterprise system management.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Projects</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <i className="fas fa-cog text-amber-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Automated inventory workflows using PowerShell</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-cog text-amber-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Built SQL Server ETL jobs for order processing</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-cog text-amber-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Consolidated cross-departmental reporting</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-gradient-to-r from-amber-50 to-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-white px-2 py-1 rounded text-sm">PowerShell</span>
                        <span className="bg-white px-2 py-1 rounded text-sm">SQL Server</span>
                        <span className="bg-white px-2 py-1 rounded text-sm">ETL</span>
                        <span className="bg-white px-2 py-1 rounded text-sm">Automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
