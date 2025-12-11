export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-6">
            數據表現
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-12 leading-tight" style={{ fontFamily: 'Noto Serif TC, serif' }}>
            精準預測 數據說話
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl font-bold text-emerald-500 mb-3">75%</div>
              <div className="text-gray-600 text-lg">預測準確率</div>
            </div>
            
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl font-bold text-emerald-500 mb-3">200+</div>
              <div className="text-gray-600 text-lg">數據維度</div>
            </div>
            
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl font-bold text-emerald-500 mb-3">15分鐘</div>
              <div className="text-gray-600 text-lg">數據更新頻率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
