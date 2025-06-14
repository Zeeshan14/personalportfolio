import professionalPhoto from "@assets/picture_1749920650289.png";

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="gradient-text">Zeeshan</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              SAP S/4HANA Developer & Digital Transformation Expert
            </p>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Certified SAP professional with 5+ years of experience in enterprise digital transformation, 
              specializing in ABAP/FIORI development and modern DevOps practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={handleContactClick}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </button>
              <button 
                onClick={handleProjectsClick}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src={professionalPhoto} alt="Zeeshan Mushtaq - Professional Photo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
