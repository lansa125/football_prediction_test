export default function ProductIntro() {
  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-4">
            我們的優勢
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Noto Serif TC, serif' }}>
            三大核心預測維度
          </h2>
          <p className="text-gray-600 text-lg">結合數據科學與人工智慧，打造最精準的預測系統</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Data Analysis */}
          <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
              <i className="ri-bar-chart-box-line text-3xl text-white"></i>
            </div>
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-xl font-semibold text-white mb-4">數據維度</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              涵蓋球隊歷史戰績、球員即時狀態、天氣因素、主客場優勢等全方位數據分析
            </p>
            <div className="h-1 bg-emerald-500 rounded-full w-3/4 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Card 2 - AI Engine */}
          <div className="relative rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <img
              src="https://readdy.ai/api/search-image?query=futuristic%20AI%20neural%20network%20visualization%20with%20glowing%20green%20nodes%20and%20connections%2C%20dark%20background%2C%20technology%20concept%20art%2C%20digital%20brain%20processing%20data%2C%20cyberpunk%20style%20with%20emerald%20accents&width=600&height=800&seq=ai-engine-001&orientation=portrait"
              alt="AI Engine"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
            
            <div className="absolute top-6 left-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-md rounded-lg border border-emerald-500/30">
                <i className="ri-cpu-line text-emerald-400"></i>
                <span className="text-white text-sm font-semibold">深度學習</span>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-3xl font-bold text-white mb-3">神經網絡預測模型</div>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                採用最先進的深度學習算法，持續優化預測準確度
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-500 rounded-lg">
                <span className="text-white text-2xl font-bold">75%</span>
                <span className="text-white text-xs">準確率</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Real-time Update */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Noto Serif TC, serif' }}>
              每15分鐘更新
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              實時追蹤賽事動態，確保預測數據始終保持最新狀態
            </p>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=abstract%20data%20stream%20visualization%20with%20flowing%20green%20particles%20and%20real-time%20updates%2C%20minimalist%20tech%20illustration%2C%20clean%20white%20background%2C%20modern%20digital%20interface%20showing%20live%20data%20flow&width=600&height=400&seq=realtime-001&orientation=landscape"
                alt="Real-time Updates"
                className="w-full h-48 object-cover object-top rounded-xl"
              />
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-semibold">LIVE</span>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">24/7</div>
                <div className="text-xs text-gray-500 mt-1">全天監控</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">15min</div>
                <div className="text-xs text-gray-500 mt-1">更新頻率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">∞</div>
                <div className="text-xs text-gray-500 mt-1">數據來源</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
