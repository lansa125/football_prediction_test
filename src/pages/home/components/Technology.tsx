export default function Technology() {
  const technologies = [
    {
      icon: 'ri-brain-line',
      title: '機器學習',
      points: ['深度神經網絡架構', '自適應學習算法', '持續模型優化']
    },
    {
      icon: 'ri-database-2-line',
      title: '大數據處理',
      points: ['TB級數據處理能力', '實時數據流分析', '多源數據整合']
    },
    {
      icon: 'ri-team-line',
      title: '專家校準',
      points: ['人工智能+人類智慧', '專業球探經驗', '多維度交叉驗證']
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'float 20s linear infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            先進預測技術
          </h2>
          <p className="text-gray-400 text-xl">AI + 大數據 + 專家經驗的完美結合</p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                <i className={`${tech.icon} text-4xl text-white`}></i>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-6">{tech.title}</h3>

              {/* Points */}
              <ul className="space-y-4">
                {tech.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-emerald-400 text-xl"></i>
                    </div>
                    <span className="text-gray-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">200+</div>
            <div className="text-gray-400">數據維度</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">75%</div>
            <div className="text-gray-400">預測準確率</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">15min</div>
            <div className="text-gray-400">更新頻率</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-400">全天監控</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40px); }
        }
      `}</style>
    </section>
  );
}
