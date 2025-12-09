export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <i className="ri-football-line text-2xl text-white"></i>
              </div>
              <span className="text-2xl font-bold">AI足球預測</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              運用先進AI技術，為您提供精準的足球賽事預測分析
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速連結</h3>
            <ul className="space-y-3">
              <li>
                <a href="#product" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                  產品介紹
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                  專業團隊
                </a>
              </li>
              <li>
                <a href="#origin" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                  技術演進
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                  預測技術
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">聯絡我們</h3>
            <div className="space-y-3">
              <a 
                href="https://t.me/+o7rRbyKDZ_RmNTE1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-telegram-line text-xl"></i>
                <span>加入Telegram群組</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 AI足球預測. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-emerald-400 text-sm transition-colors duration-300 cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
