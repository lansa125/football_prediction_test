export default function TelegramCTA() {
  const features = [
    { icon: 'ri-calendar-check-line', text: '每日五大聯賽預測推送', highlight: '每天更新' },
    { icon: 'ri-file-chart-line', text: '賽事完整分析報告', highlight: '深度解讀' },
    { icon: 'ri-alarm-warning-line', text: '賽前 30 小時提前通知', highlight: '黃金窗口' },
    { icon: 'ri-robot-2-line', text: '多模型 AI 交叉驗證', highlight: '更準確' }
  ];

  return (
    <section id="telegram-cta" className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
      
      {/* Animated Mesh Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, white 25%, transparent 25%),
            linear-gradient(-45deg, white 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, white 75%),
            linear-gradient(-45deg, transparent 75%, white 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Telegram Icons Floating */}
        <div className="absolute top-32 right-[20%] text-6xl text-white/10 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <i className="ri-telegram-fill"></i>
        </div>
        <div className="absolute bottom-32 left-[15%] text-4xl text-white/10 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <i className="ri-telegram-fill"></i>
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/10 rotate-45"></div>
      <div className="absolute top-1/2 left-[5%] w-16 h-16 bg-white/5 rounded-lg rotate-12"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            <span className="text-white font-medium">免費開放加入中</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            立即加入我們的
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Telegram 群組
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            開始接收每日免費 AI 預測
            <br />
            <span className="text-white font-semibold">與數千名球迷一起交流</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full text-xs font-bold text-blue-900">
                {feature.highlight}
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-3xl text-white`}></i>
                </div>
                <span className="text-white font-semibold">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Section */}
        <div className="flex flex-col items-center">
          {/* Button with Glow */}
          <div className="relative group mb-8">
            {/* Pulse Ring Effects */}
            <div className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-30"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-white rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            
            {/* Main Button */}
            <a
              href="https://t.me/your_group_link"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-700 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-telegram-fill text-3xl text-[#0088cc]"></i>
              <span>免費加入 Telegram 群組</span>
              <i className="ri-arrow-right-line text-2xl group-hover:translate-x-2 transition-transform"></i>
            </a>
          </div>

          {/* Secondary Info */}
          <p className="text-blue-200 text-sm mb-8">
            點擊按鈕將跳轉至 Telegram 應用程式
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-10 h-10 bg-emerald-500/30 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-xl text-emerald-300"></i>
              </div>
              <div className="text-left">
                <div className="text-white font-bold">100% 免費</div>
                <div className="text-blue-200 text-xs">永久免費使用</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                <i className="ri-group-line text-xl text-blue-300"></i>
              </div>
              <div className="text-left">
                <div className="text-white font-bold">5,000+</div>
                <div className="text-blue-200 text-xs">活躍成員</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-10 h-10 bg-yellow-500/30 rounded-full flex items-center justify-center">
                <i className="ri-star-fill text-xl text-yellow-300"></i>
              </div>
              <div className="text-left">
                <div className="text-white font-bold">4.9/5.0</div>
                <div className="text-blue-200 text-xs">用戶評分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
