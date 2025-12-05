export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            <div>專業團隊</div>
            <div className="text-emerald-400">專注預測</div>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-16">
            我們的團隊由資深數據科學家、AI工程師和足球分析專家組成<br />
            結合10年+行業經驗與前沿AI技術，為您提供精準的賽事預測
          </p>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500 transition-all duration-300">
              <div className="text-5xl font-bold text-emerald-400 mb-3">10+</div>
              <div className="text-gray-300 text-lg">年行業經驗</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500 transition-all duration-300">
              <div className="text-5xl font-bold text-emerald-400 mb-3">200+</div>
              <div className="text-gray-300 text-lg">數據維度分析</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500 transition-all duration-300">
              <div className="text-5xl font-bold text-emerald-400 mb-3">24/7</div>
              <div className="text-gray-300 text-lg">實時監控更新</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
