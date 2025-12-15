import step1Image from '/images/Works-1.webp';
import step2Image from '/images/Works-2.webp';
import step3Image from '/images/Works-3.webp';
import step4Image from '/images/Works-4.webp';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: '數據收集',
      description: '從官方或經授權的數據供應商獲取即時資料，涵蓋五大聯賽及主要杯賽，24/7 持續監控更新',
      icon: 'ri-cloud-line',
      image: step1Image,
      color: 'emerald'
    },
    {
      number: '02',
      title: '特徵工程',
      description: '提取多個預測特徵，計算球隊攻防指數、近期狀態評分，量化主客場優勢、球員影響力',
      icon: 'ri-settings-4-line',
      image: step2Image,
      color: 'blue'
    },
    {
      number: '03',
      title: 'AI 模型預測',
      description: '泊松分佈預測比分、機器學習計算勝平負概率、深度神經網絡進行綜合判斷',
      icon: 'ri-brain-line',
      image: step3Image,
      color: 'purple'
    },
    {
      number: '04',
      title: '結果推送',
      description: '生成波膽預測、提供 1X2 建議、計算信心指數，通過 Telegram 即時推送給用戶',
      icon: 'ri-send-plane-line',
      image: step4Image,
      color: 'cyan'
    }
  ];

  const colorClasses: Record<string, { gradient: string; border: string; text: string; bg: string }> = {
    emerald: { gradient: 'from-emerald-500 to-emerald-600', border: 'border-emerald-500', text: 'text-emerald-400', bg: 'bg-emerald-500/20' },
    blue: { gradient: 'from-blue-500 to-blue-600', border: 'border-blue-500', text: 'text-blue-400', bg: 'bg-blue-500/20' },
    purple: { gradient: 'from-purple-500 to-purple-600', border: 'border-purple-500', text: 'text-purple-400', bg: 'bg-purple-500/20' },
    cyan: { gradient: 'from-cyan-500 to-cyan-600', border: 'border-cyan-500', text: 'text-cyan-400', bg: 'bg-cyan-500/20' }
  };

  return (
    <section id="how-it-works" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <i className="ri-flow-chart text-purple-400"></i>
            <span className="text-purple-400 text-sm font-medium">運作流程</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            AI 預測系統 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">運作原理</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            從數據收集到結果輸出，全程自動化的智能預測流程
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="md:space-y-0 flex md:flex-col overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 md:mb-24 flex-shrink-0 w-[70vw] md:w-auto snap-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="group relative">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${colorClasses[step.color].gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  <div className={`relative rounded-3xl overflow-hidden border-2 ${colorClasses[step.color].border}/30 hover:${colorClasses[step.color].border} transition-colors duration-300`}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                    
                    {/* Step Number Badge */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-16 h-16 bg-gradient-to-br ${colorClasses[step.color].gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <span className="text-2xl font-black text-white">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className={`inline-flex items-center gap-2 px-3 py-1 ${colorClasses[step.color].bg} rounded-full mb-4`}>
                  <i className={`${step.icon} ${colorClasses[step.color].text}`}></i>
                  <span className={`${colorClasses[step.color].text} text-sm font-medium`}>Step {step.number}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {step.title}
                </h3>
                
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Progress Indicator */}
                <div className="flex items-center gap-3">
                  <div className={`h-1 flex-1 bg-gray-800 rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${colorClasses[step.color].gradient} rounded-full`}
                      style={{ width: `${(index + 1) * 25}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{(index + 1) * 25}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-800">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-2xl">
            <i className="ri-magic-line text-3xl text-emerald-400"></i>
            <div className="text-left">
              <div className="text-xl font-bold text-white">全自動化預測流程</div>
              <div className="text-gray-400">從數據到推送，零人工干預</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
