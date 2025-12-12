export default function Origin() {
  const timeline = [
    { year: '2015', event: '項目啟動', description: '一群數據愛好者的足球夢想' },
    { year: '2019', event: 'AI模型突破', description: '預測準確率突破80%大關' },
    { year: '2025', event: '全球服務', description: '服務超過5000+用戶' }
  ];

  return (
    <section id="origin" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Timeline - 40% */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-6">
                我們的故事
              </div>
              
              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-500"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-16">
                      {/* Dot */}
                      <div className="absolute left-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-gray-50 shadow-lg">
                        <span className="text-white text-sm font-bold">{item.year.slice(2)}</span>
                      </div>
                      
                      {/* Content */}
                      <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{item.year}</div>
                        <div className="text-lg font-semibold text-emerald-600 mb-2">{item.event}</div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 60% */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Noto Serif TC, serif' }}>
              從數據愛好者到預測專家的十年征程
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="text-5xl font-bold text-emerald-500 float-left mr-3 leading-none">2015</span>
                年，幾位熱愛足球的數據科學家聚在一起，懷著一個共同的夢想：能否用數據和算法來預測足球賽事的結果？當時的我們只是業餘愛好者，利用下班時間收集數據、編寫代碼，在無數個深夜裡調試模型。最初的預測準確率只有60%左右，但我們從未放棄。
              </p>

              <p>
                <span className="text-5xl font-bold text-emerald-500 float-left mr-3 leading-none">經</span>
                過四年的不懈努力，我們的AI模型在2019年取得了重大突破。通過引入深度學習技術和更全面的數據維度，預測準確率首次突破80%大關。這個里程碑讓我們意識到，這不僅僅是一個業餘項目，而是一個能夠真正幫助足球愛好者的專業服務。於是，我們決定將這個項目商業化，讓更多人受益。
              </p>

              <p>
                <span className="text-5xl font-bold text-emerald-500 float-left mr-3 leading-none">如</span>
                今，我們的平台已經服務超過5000名用戶，預測準確率穩定在87.3%。我們建立了活躍的Telegram社群，每天分享最新的賽事分析和預測結果。但我們的目標不止於此，我們希望通過持續優化算法、擴展數據來源，將準確率推向新的高度，成為全球最值得信賴的足球賽事預測平台。
              </p>
            </div>

            {/* Team Photo */}
            <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=diverse%20team%20of%20data%20scientists%20working%20together%20in%20modern%20office%2C%20collaborative%20workspace%20with%20computers%20and%20screens%20showing%20data%20analytics%2C%20warm%20professional%20atmosphere%2C%20natural%20lighting%2C%20team%20collaboration%20scene&width=1200&height=600&seq=team-work-001&orientation=landscape"
                alt="Team Working"
                className="w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
