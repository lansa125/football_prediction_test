import { useState, useEffect } from 'react';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20modern%20football%20stadium%20at%20night%20with%20dramatic%20lighting%2C%20dark%20blue%20and%20green%20color%20scheme%2C%20professional%20sports%20photography%2C%20cinematic%20atmosphere%2C%20high%20contrast%20lighting%20creating%20dynamic%20shadows%20across%20the%20field&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
          alt="Football Stadium"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${isScrolled ? 'bg-emerald-500' : 'bg-emerald-500/90'}`}>
              <i className={`ri-football-line text-2xl ${isScrolled ? 'text-white' : 'text-white'}`}></i>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>足球預測AI</span>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={() => scrollToSection('product')} className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-emerald-500' : 'text-white/90 hover:text-emerald-400'}`}>產品介紹</button>
            <button onClick={() => scrollToSection('team')} className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-emerald-500' : 'text-white/90 hover:text-emerald-400'}`}>團隊成員</button>
            <button onClick={() => scrollToSection('origin')} className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-emerald-500' : 'text-white/90 hover:text-emerald-400'}`}>品牌起源</button>
            <button onClick={() => scrollToSection('technology')} className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-emerald-500' : 'text-white/90 hover:text-emerald-400'}`}>預測技術</button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - 65% */}
            <div className="lg:col-span-8">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white font-medium">實時預測中</span>
              </div>

              {/* Main Title */}
              <div className="mb-8">
                <h1 className="text-white mb-2" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                  <div className="text-7xl font-extrabold mb-2">精準預測</div>
                  <div className="text-6xl font-extrabold mb-2">數據驅動</div>
                  <div className="text-5xl font-extrabold">勝率為王</div>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                基於AI深度學習的足球賽事預測平台，準確率高達87.3%
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('telegram-cta')}
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg shadow-emerald-500/30 whitespace-nowrap cursor-pointer"
                >
                  <span>立即加入TG群組</span>
                  <i className="ri-telegram-line text-xl"></i>
                </button>
                <button 
                  onClick={() => scrollToSection('technology')}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  了解預測技術
                </button>
              </div>
            </div>

            {/* Right Visual - 35% */}
            <div className="lg:col-span-4">
              <div className="relative transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Main Dashboard */}
                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                  <div className="text-emerald-400 text-sm font-semibold mb-4">實時預測數據</div>
                  
                  {/* Win Rate Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-32 h-32">
                      <svg className="transform -rotate-90 w-32 h-32">
                        <circle cx="64" cy="64" r="56" stroke="#1f2937" strokeWidth="8" fill="none" />
                        <circle cx="64" cy="64" r="56" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="351.86" strokeDashoffset="44" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-3xl font-bold text-white">87.3%</span>
                        <span className="text-xs text-gray-400">準確率</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">今日預測</span>
                      <span className="text-white font-semibold">12場</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">勝率趨勢</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <i className="ri-arrow-up-line"></i>
                        +5.2%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">活躍用戶</span>
                      <span className="text-white font-semibold">5,247</span>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-emerald-500/20 backdrop-blur-md rounded-lg p-3 border border-emerald-400/30 animate-pulse">
                  <div className="text-emerald-400 text-xs font-semibold">熱門賽事</div>
                  <div className="text-white text-sm mt-1">英超 • 今晚</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-blue-500/20 backdrop-blur-md rounded-lg p-3 border border-blue-400/30">
                  <div className="text-blue-400 text-xs font-semibold">最新分析</div>
                  <div className="text-white text-sm mt-1">15分鐘前</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl"></i>
      </div>
    </div>
  );
}
