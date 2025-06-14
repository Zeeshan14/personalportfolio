import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold gradient-text">
            Zeeshan Mushtaq
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('home')} className="hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => handleNavClick('about')} className="hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => handleNavClick('skills')} className="hover:text-blue-600 transition-colors">Skills</button>
            <button onClick={() => handleNavClick('experience')} className="hover:text-blue-600 transition-colors">Experience</button>
            <button onClick={() => handleNavClick('projects')} className="hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-blue-600 transition-colors">Contact</button>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <button onClick={() => handleNavClick('home')} className="block px-3 py-2 hover:bg-gray-50 w-full text-left">Home</button>
            <button onClick={() => handleNavClick('about')} className="block px-3 py-2 hover:bg-gray-50 w-full text-left">About</button>
            <button onClick={() => handleNavClick('skills')} className="block px-3 py-2 hover:bg-gray-50 w-full text-left">Skills</button>
            <button onClick={() => handleNavClick('experience')} className="block px-3 py-2 hover:bg-gray-50 w-full text-left">Experience</button>
            <button onClick={() => handleNavClick('projects')} className="block px-3 py-2 hover:bg-gray-50 w-full text-left">Projects</button>
            <button onClick={() => handleNavClick('contact')} className="block px-3 py-2 hover:bg-gray-50 w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
