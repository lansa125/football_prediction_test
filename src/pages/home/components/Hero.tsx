import heroImage from '/images/Hero-1.webp';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Football Stadium"
          className="w-full h-full object-cover object-top scale-110"
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-blue-900/30"></div>
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Live Badge */}
        <div className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-4 sm:mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-sm font-medium">實時預測服務中</span>
        </div>

        {/* Main Title with Gradient */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
          <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">AI 足球預測</span>
          <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent mt-2">精準分析 · 即時推送</span>
        </h1>

        {/* Subtitle with Better Typography */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
          加入 Telegram，<span className="text-emerald-400 font-semibold">每日獲取五大聯賽預測</span>
          <br className="hidden sm:block" />
          <span className="text-white font-bold">準確率高達 75%</span>
        </p>

        {/* CTA Button with Enhanced Effects */}
        <div className="relative inline-block group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <a
            href="https://t.me/your_group_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:from-emerald-400 hover:via-emerald-500 hover:to-emerald-400 text-white text-sm sm:text-base md:text-lg font-bold rounded-full shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-telegram-fill text-lg sm:text-xl md:text-2xl"></i>
            <span className="hidden xs:inline">免費加入 Telegram</span>
            <span className="xs:hidden">加入 Telegram</span>
            <i className="ri-arrow-right-line text-base sm:text-lg md:text-xl group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        {/* Trust Metrics - Minimal */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
              <i className="ri-line-chart-line text-lg sm:text-xl md:text-2xl text-emerald-400"></i>
            </div>
            <div className="text-left">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">75%+</div>
              <div className="text-xs sm:text-sm text-gray-400">預測準確率</div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
              <i className="ri-football-line text-lg sm:text-xl md:text-2xl text-blue-400"></i>
            </div>
            <div className="text-left">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">5 大</div>
              <div className="text-xs sm:text-sm text-gray-400">頂級聯賽覆蓋</div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
              <i className="ri-time-line text-lg sm:text-xl md:text-2xl text-purple-400"></i>
            </div>
            <div className="text-left">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">30h</div>
              <div className="text-xs sm:text-sm text-gray-400">賽前提前推送</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-xs uppercase tracking-widest">探索更多</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
