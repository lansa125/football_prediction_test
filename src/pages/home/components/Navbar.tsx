import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'benefits', 'how-it-works', 'testimonials', 'faq'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setActiveSection('home');
  };

  const navLinks = [
    { label: '首頁', id: 'home', action: scrollToTop },
    { label: '關於我們', id: 'about' },
    { label: '為什麼選擇我們', id: 'benefits' },
    { label: 'AI 原理', id: 'how-it-works' },
    { label: '用戶評價', id: 'testimonials' },
    { label: '常見問題', id: 'faq' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30' 
                : 'bg-white/20 backdrop-blur-sm border border-white/30'
            } group-hover:scale-110`}>
              <i className="ri-football-line text-xl text-white"></i>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg font-bold transition-colors leading-tight ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                足球預測AI
              </span>
              <span className={`text-xs transition-colors ${isScrolled ? 'text-emerald-600' : 'text-emerald-300'}`}>
                AI Powered Predictions
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => link.action ? link.action() : scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap rounded-lg ${
                    isScrolled
                      ? isActive 
                        ? 'text-emerald-600 bg-emerald-50' 
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                      : isActive 
                        ? 'text-white bg-white/20' 
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? 'bg-emerald-500' : 'bg-white'
                    }`}></span>
                  )}
                </button>
              );
            })}
            
            {/* CTA Button */}
            <a
              href="https://t.me/your_group_link"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 group relative inline-flex items-center gap-2 px-6 py-2.5 overflow-hidden rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-transform duration-300 group-hover:scale-105"></div>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              {/* Content */}
              <i className="ri-telegram-fill relative z-10 text-white"></i>
              <span className="relative z-10 text-white text-sm font-bold">加入群組</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-11 h-11 flex items-center justify-center cursor-pointer rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`text-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 ${isScrolled ? '' : 'bg-gray-900/90 backdrop-blur-xl rounded-2xl mb-4 border border-white/10'}`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => link.action ? link.action() : scrollToSection(link.id)}
                  className={`flex items-center gap-3 w-full text-left px-5 py-4 transition-all duration-300 cursor-pointer ${
                    isScrolled 
                      ? isActive 
                        ? 'text-emerald-600 bg-emerald-50' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                      : isActive 
                        ? 'text-emerald-400 bg-white/10' 
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className={`w-2 h-2 rounded-full ${isScrolled ? 'bg-emerald-500' : 'bg-emerald-400'}`}></span>
                  )}
                  <span className="font-medium">{link.label}</span>
                </button>
              );
            })}
            
            {/* Mobile CTA */}
            <div className="px-4 pt-4">
              <a
                href="https://t.me/your_group_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-500/30"
              >
                <i className="ri-telegram-fill text-xl"></i>
                免費加入 Telegram 群組
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
