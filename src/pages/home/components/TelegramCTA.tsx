import { useState } from 'react';

export default function TelegramCTA() {
  const [onlineCount] = useState(5247);

  const handleJoinTelegram = () => {
    // Replace with your actual Telegram group link
    window.open('https://t.me/your_group_link', '_blank');
  };

  return (
    <section id="telegram-cta" className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <i className="ri-football-line absolute top-20 left-10 text-9xl text-white transform rotate-12"></i>
        <i className="ri-bar-chart-box-line absolute top-40 right-20 text-7xl text-white transform -rotate-12"></i>
        <i className="ri-trophy-line absolute bottom-20 left-1/4 text-8xl text-white"></i>
        <i className="ri-line-chart-line absolute bottom-32 right-1/3 text-6xl text-white transform rotate-45"></i>
      </div>

      {/* Pulsing Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Telegram Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <i className="ri-telegram-fill text-7xl text-blue-600"></i>
              </div>
              {/* Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            加入我們的預測社群
          </h2>

          {/* Subtitle with Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-white/90 text-lg">
            <div className="flex items-center gap-2">
              <i className="ri-group-line text-2xl"></i>
              <span className="font-semibold">5000+會員</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <i className="ri-calendar-line text-2xl"></i>
              <span className="font-semibold">每日免費預測</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <i className="ri-file-chart-line text-2xl"></i>
              <span className="font-semibold">獨家分析報告</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleJoinTelegram}
            className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-600 text-xl font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-telegram-fill text-3xl"></i>
            <span>立即加入TG群組</span>
            <i className="ri-arrow-right-up-line text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
          </button>

          {/* Free Badge */}
          <p className="mt-6 text-white/80 text-sm">
            <i className="ri-check-line text-emerald-400 mr-1"></i>
            完全免費，無需付費
          </p>

          {/* Online Counter */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold">
              目前在線：{onlineCount.toLocaleString()} 人
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
