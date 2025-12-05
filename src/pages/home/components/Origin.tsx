export default function Origin() {
  const milestones = [
    {
      year: '2015',
      title: '數據收集啟動',
      description: '開始系統性收集全球主要聯賽的比賽數據，建立基礎數據庫'
    },
    {
      year: '2017',
      title: '機器學習模型',
      description: '引入深度學習算法，開發首個足球預測神經網絡模型'
    },
    {
      year: '2019',
      title: 'AI算法升級',
      description: '整合多維度數據分析，預測準確率突破70%大關'
    },
    {
      year: '2021',
      title: '實時預測系統',
      description: '推出15分鐘實時更新系統，動態調整預測結果'
    },
    {
      year: '2023',
      title: '深度學習優化',
      description: '採用Transformer架構，處理200+數據維度，準確率提升至75%'
    },
    {
      year: '2025',
      title: '智能預測平台',
      description: '整合GPT技術進行賽事分析，提供個性化預測建議'
    }
  ];

  return (
    <section id="origin" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-6">
            技術演進
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Noto Serif TC, serif' }}>
            AI預測技術的<span className="text-emerald-500">十年進化</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            從基礎數據分析到深度學習，我們持續探索AI在足球預測領域的應用<br />
            每一次技術突破都讓預測更加精準可靠
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600"></div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-400">
                    <div className="text-5xl font-bold text-emerald-500 mb-3" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
            <div className="text-4xl font-bold text-emerald-600 mb-2">10年</div>
            <div className="text-gray-600">技術研發歷程</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
            <div className="text-4xl font-bold text-emerald-600 mb-2">6次</div>
            <div className="text-gray-600">重大技術突破</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
            <div className="text-4xl font-bold text-emerald-600 mb-2">75%</div>
            <div className="text-gray-600">當前預測準確率</div>
          </div>
        </div>
      </div>
    </section>
  );
}
