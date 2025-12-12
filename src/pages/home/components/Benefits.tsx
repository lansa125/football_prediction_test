export default function Benefits() {
  const benefits = [
    {
      icon: 'ri-timer-flash-line',
      title: '賽前 30 小時提醒',
      description: '大多數博彩公司在賽前 30 小時才開出完整賠率，我們在這個黃金窗口立即推送 AI 預測。',
      detail: '充足時間評估，從容決策',
      image: 'https://readdy.ai/api/search-image?query=digital%20clock%20countdown%20timer%20with%20glowing%20neon%20numbers%2C%20futuristic%20time%20display%2C%20dark%20background%20with%20blue%20and%20green%20glow%2C%20technology%20concept&width=400&height=300&seq=benefit-1&orientation=landscape',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: 'ri-trophy-line',
      title: '精選五大賽事',
      description: '專注於英超、西甲、意甲、德甲、法甲五大聯賽，集中火力確保每場預測都經過充分數據驗證。',
      detail: '每週數十場高品質預測',
      image: 'https://readdy.ai/api/search-image?query=five%20golden%20trophy%20cups%20arranged%20in%20a%20row%20with%20dramatic%20lighting%2C%20sports%20championship%20awards%2C%20dark%20elegant%20background%2C%20professional%20photography&width=400&height=300&seq=benefit-2&orientation=landscape',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'ri-shield-star-line',
      title: '可靠的預測',
      description: '基於 6 個月的實測數據，AI 預測準確率達 75%，遠高於行業平均 55%。',
      detail: '信心指數高預測命中率 80%+',
      image: 'https://readdy.ai/api/search-image?query=golden%20shield%20badge%20with%20star%20emblem%2C%20premium%20quality%20guarantee%20symbol%2C%20metallic%20texture%2C%20dark%20background%20with%20spotlight&width=400&height=300&seq=benefit-3&orientation=landscape',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'ri-team-line',
      title: '交互式社群',
      description: 'Telegram 群組不只是單向推送，你可以與其他球迷討論預測邏輯、提出質疑、分享個人見解。',
      detail: '分析師定期回答問題',
      image: 'https://readdy.ai/api/search-image?query=group%20of%20people%20connected%20by%20glowing%20network%20lines%2C%20digital%20community%20concept%2C%20social%20network%20visualization%2C%20dark%20tech%20background&width=400&height=300&seq=benefit-4&orientation=landscape',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <i className="ri-star-line text-blue-400"></i>
            <span className="text-blue-400 text-sm font-medium">核心優勢</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            為什麼選擇 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">我們</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            在眾多預測工具中，我們通過以下優勢脫穎而出
          </p>
        </div>

        {/* Benefits Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${benefit.gradient} rounded-full text-white text-xs font-bold`}>
                  HOT
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 relative">
                {/* Icon */}
                <div className={`absolute -top-8 left-8 w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                  <i className={`${benefit.icon} text-3xl text-white`}></i>
                </div>

                <div className="pt-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {benefit.description}
                  </p>

                  {/* Detail Tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <i className="ri-check-double-line text-emerald-400"></i>
                    <span className="text-emerald-400 text-sm font-semibold">{benefit.detail}</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
