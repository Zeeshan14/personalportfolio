import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ContactSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-slate-50" ref={elementRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to discuss your next SAP project or digital transformation initiative? Let's explore how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`scroll-animate-left ${isVisible ? 'animate' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern professional office space" 
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>

          <div className={`space-y-8 scroll-animate-right ${isVisible ? 'animate' : ''}`}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Email</h3>
                  <a href="mailto:zeeshan.mushtaq4506@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                    zeeshan.mushtaq4506@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-amber-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Phone</h3>
                  <div className="space-y-1">
                    <a href="tel:+923067458121" className="block text-blue-600 hover:text-blue-700 transition-colors">
                      +92 306 7458121
                    </a>
                    <a href="tel:+923374826228" className="block text-blue-600 hover:text-blue-700 transition-colors">
                      +92 337 4826228
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Location</h3>
                  <p className="text-slate-600">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-amber-500 p-6 rounded-xl text-white">
              <h3 className="text-lg font-bold mb-2">Available for</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3"></i>
                  <span>SAP S/4HANA Implementation Projects</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3"></i>
                  <span>Digital Transformation Consulting</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3"></i>
                  <span>DevOps & Automation Solutions</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3"></i>
                  <span>API Integration & Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
