export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">Zeeshan Mushtaq</div>
          <p className="text-slate-300 mb-6">SAP Developer & Digital Transformation Expert</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:zeeshan.mushtaq4506@gmail.com" className="text-slate-300 hover:text-white transition-colors">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="tel:+923067458121" className="text-slate-300 hover:text-white transition-colors">
              <i className="fas fa-phone text-xl"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
          
          <div className="border-t border-slate-600 pt-8">
            <p className="text-slate-400">
              &copy; 2024 Zeeshan Mushtaq. Built with modern web technologies for optimal performance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
