export default function About() {
  const features = [
    {
      icon: 'ri-database-2-line',
      title: '深度數據挖掘',
      content: '我們的 AI 引擎同時分析球隊戰績、球員狀態、傷兵名單、天氣條件、賠率波動等多個維度，確保沒有遺漏任何關鍵因素。',
      highlight: '傳統分析師需要 2-3 小時的工作量，AI 瞬間完成',
      color: 'emerald'
    },
    {
      icon: 'ri-robot-line',
      title: '消除主觀偏見',
      content: '人的預測容易受情緒影響（偏好某支球隊、被最近的比賽結果帶偏），AI 則基於冷酷的數據。',
      highlight: '多模型集成方法交叉驗證，避免單一模型誤差',
      color: 'blue'
    },
    {
      icon: 'ri-time-line',
      title: '每天節省 2 小時',
      content: '不再需要手動翻閱數據表、研究歷史戰績、追蹤傷兵情況。AI 自動完成所有分析。',
      highlight: '你只需花 5 分鐘瀏覽 Telegram 推送的預測結果',
      color: 'purple'
    },
    {
      icon: 'ri-trophy-line',
      title: '準確率達 75%',
      content: '基於過去 6 個月的五大聯賽測試，我們的 AI 預測準確率達 75%，遠高於行業平均的 55%。',
      highlight: '信心指數高的預測命中率超過 80%',
      color: 'orange'
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; icon: string; highlight: string }> = {
    emerald: { 
      bg: 'from-emerald-500/10 to-emerald-600/5', 
      border: 'border-emerald-500/30 hover:border-emerald-500', 
      icon: 'text-emerald-400 bg-emerald-500/20',
      highlight: 'text-emerald-400'
    },
    blue: { 
      bg: 'from-blue-500/10 to-blue-600/5', 
      border: 'border-blue-500/30 hover:border-blue-500', 
      icon: 'text-blue-400 bg-blue-500/20',
      highlight: 'text-blue-400'
    },
    purple: { 
      bg: 'from-purple-500/10 to-purple-600/5', 
      border: 'border-purple-500/30 hover:border-purple-500', 
      icon: 'text-purple-400 bg-purple-500/20',
      highlight: 'text-purple-400'
    },
    orange: { 
      bg: 'from-orange-500/10 to-orange-600/5', 
      border: 'border-orange-500/30 hover:border-orange-500', 
      icon: 'text-orange-400 bg-orange-500/20',
      highlight: 'text-orange-400'
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <i className="ri-cpu-line text-emerald-400"></i>
            <span className="text-emerald-400 text-sm font-medium">AI 技術驅動</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            我們如何用 <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">AI</span> 改變足球預測
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            傳統足球預測依賴球迷直覺和碎片化資訊，
            <br className="hidden md:block" />
            我們開發的專有 AI 引擎通過數據科學改變這一切
          </p>
        </div>

        {/* Feature Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: AI Visualization Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 border border-gray-700">
              <img
                src="https://readdy.ai/api/search-image?query=futuristic%20AI%20neural%20network%20visualization%20with%20glowing%20blue%20and%20green%20data%20nodes%20connected%20by%20light%20streams%2C%20dark%20background%2C%20technology%20abstract%20art%2C%20digital%20brain%20concept%2C%20cyber%20data%20flow&width=800&height=600&seq=ai-visual-001&orientation=landscape"
                alt="AI Neural Network"
                className="w-full h-auto rounded-2xl"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-gray-900/95 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <i className="ri-brain-line text-2xl text-emerald-400"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">AI 引擎</div>
                    <div className="text-sm text-gray-400">多模型集成</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Points */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 rounded-r-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">🎯 泊松分佈模型</h3>
              <p className="text-gray-300">基於歷史進球數據，精準預測比賽比分的概率分佈</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500 rounded-r-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">🤖 機器學習模型</h3>
              <p className="text-gray-300">通過大量歷史數據訓練，識別勝負規律與隱藏特徵</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-500 rounded-r-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">🧠 深度神經網絡</h3>
              <p className="text-gray-300">綜合多維度因素，進行複雜的非線性預測分析</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${colorClasses[feature.color].bg} backdrop-blur-sm rounded-2xl p-8 border ${colorClasses[feature.color].border} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${colorClasses[feature.color].icon} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {feature.content}
              </p>
              <p className={`${colorClasses[feature.color].highlight} font-semibold text-sm`}>
                → {feature.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
