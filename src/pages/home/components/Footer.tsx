export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: '首頁', action: scrollToTop },
    { label: '關於我們', id: 'about' },
    { label: '為什麼選擇我們', id: 'benefits' },
    { label: 'AI 原理', id: 'how-it-works' },
    { label: '用戶評價', id: 'testimonials' },
    { label: '常見問題', id: 'faq' }
  ];

  const features = [
    { icon: 'ri-bar-chart-box-line', text: '五大聯賽覆蓋' },
    { icon: 'ri-robot-2-line', text: '多模型 AI 分析' },
    { icon: 'ri-shield-check-line', text: '75%+ 準確率' },
    { icon: 'ri-time-line', text: '賽前 30 小時預測' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <button onClick={scrollToTop} className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <i className="ri-football-line text-2xl text-white"></i>
                </div>
                <div>
                  <span className="text-xl font-bold block" style={{ fontFamily: 'Orbitron, sans-serif' }}>足球預測AI</span>
                  <span className="text-xs text-emerald-400">AI Powered Predictions</span>
                </div>
              </button>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                AI 驅動的足球預測平台，運用 Poisson 分布、機器學習與深度神經網絡，為您提供科學、準確的比賽分析。
              </p>
              
              {/* Social Links */}
              {/* <div className="flex items-center gap-3">
                <a href="https://t.me/your_group_link" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-white/10 hover:bg-[#0088cc] rounded-xl flex items-center justify-center transition-all duration-300 group">
                  <i className="ri-telegram-fill text-lg text-gray-400 group-hover:text-white transition-colors"></i>
                </a>
                <a href="mailto:contact@example.com" 
                   className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 group">
                  <i className="ri-mail-fill text-lg text-gray-400 group-hover:text-white transition-colors"></i>
                </a>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                快速連結
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => link.action ? link.action() : scrollToSection(link.id!)} 
                      className="text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                我們的優勢
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-400">
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                      <i className={`${feature.icon} text-emerald-400`}></i>
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                立即加入
              </h3>
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#0088cc] rounded-xl flex items-center justify-center">
                      <i className="ri-telegram-fill text-2xl text-white"></i>
                    </div>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Telegram 群組</div>
                    <div className="text-emerald-400 text-sm">活躍社群</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  加入我們的 Telegram 群組，接收每日免費 AI 預測推送。
                </p>
                <a
                  href="https://t.me/your_group_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-telegram-fill"></i>
                  免費加入
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500 text-sm text-center md:text-left">
                <span>© 2025 足球預測 AI</span>
                <span className="hidden sm:inline">|</span>
                <span>本服務僅供數據參考，不構成投注建議</span>
              </div>
              
              {/* Powered By */}
              {/* <div className="flex items-center gap-4">
                <a 
                  href="https://readdy.ai/?origin=logo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors text-sm"
                >
                  <i className="ri-sparkle-line"></i>
                  Powered by Readdy
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 z-50"
        >
          <i className="ri-arrow-up-line text-xl"></i>
        </button>
      </div>
    </footer>
  );
}
