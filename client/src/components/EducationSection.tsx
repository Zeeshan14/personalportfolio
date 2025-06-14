export default function EducationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-graduation-cap text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-slate-800">MS Computer Science</h4>
                <p className="text-blue-600 font-semibold">Forman Christian College (A Chartered University)</p>
                <div className="flex items-center text-slate-500 mt-2">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>Graduated November 2021</span>
                </div>
                <div className="flex items-center text-slate-500 mt-1">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>Lahore, Punjab</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-slate-800">BS (Hons) Computer Science</h4>
                <p className="text-blue-600 font-semibold">Forman Christian College (A Chartered University)</p>
                <div className="flex items-center text-slate-500 mt-2">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>Graduated November 2018</span>
                </div>
                <div className="flex items-center text-slate-500 mt-1">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>Lahore, Punjab</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-amber-50 to-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-certificate text-amber-600 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Certifications</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-bold text-slate-800">SAP Certified Development Specialist</h4>
                <p className="text-slate-600">ABAP for SAP HANA 2.0</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                <h4 className="font-bold text-slate-800">Development with OpenShift and K8s</h4>
                <p className="text-slate-600">Specialization in Container Orchestration</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-bold text-slate-800">Continuous Delivery and Managing Builds</h4>
                <p className="text-slate-600">Azure DevOps Certification</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-2">Languages</h4>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-slate-600">English (Fluent)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                  <span className="text-slate-600">Urdu (Native)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
