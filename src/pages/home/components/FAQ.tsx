import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '預測準確率真的有 75% 嗎？',
      answer: '75% 是基於過去 6 個月在五大聯賽的測試結果，實際準確率會因聯賽、賽季階段而有波動。我們會持續追蹤並公開我們的預測記錄，確保透明度。',
      icon: 'ri-percent-line',
      color: 'emerald'
    },
    {
      question: '服務完全免費嗎？',
      answer: 'Telegram 群組提供的基礎預測完全免費，包括每日賽事推送和基本分析。未來可能推出進階付費版本，提供更深入的數據分析和個性化建議。',
      icon: 'ri-gift-line',
      color: 'blue'
    },
    {
      question: '預測涵蓋哪些聯賽？',
      answer: '目前專注於英超、西甲、意甲、德甲、法甲等五大主流聯賽。我們選擇集中資源在這些數據最完整、最具代表性的聯賽上，以確保預測質量。',
      icon: 'ri-global-line',
      color: 'purple'
    },
    {
      question: '如何加入 Telegram 群組？',
      answer: '點擊頁面上的「免費加入 Telegram 群組」按鈕，會直接跳轉到 Telegram 群組連結。如果你還沒有安裝 Telegram，需要先下載並註冊 Telegram 應用。',
      icon: 'ri-telegram-line',
      color: 'cyan'
    },
    {
      question: 'AI 預測的原理是什麼？',
      answer: '我們整合了 Poisson 分布模型、機器學習以及深度神經網絡三種不同方法，通過交叉驗證提高預測可靠性。系統會分析歷史數據、近期表現、主客場優勢等多維度因素。',
      icon: 'ri-robot-2-line',
      color: 'orange'
    },
    {
      question: '預測會提前多久發布？',
      answer: '我們通常在賽前 30 小時發布預測，給用戶充足的時間進行研究和決策。重要賽事可能會更早發布，並在臨近開賽時更新最新傷停資訊。',
      icon: 'ri-time-line',
      color: 'pink'
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; light: string }> = {
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', light: 'bg-emerald-50' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500', light: 'bg-blue-50' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', light: 'bg-purple-50' },
    cyan: { bg: 'bg-cyan-500', text: 'text-cyan-500', border: 'border-cyan-500', light: 'bg-cyan-50' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', light: 'bg-orange-50' },
    pink: { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500', light: 'bg-pink-50' }
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <i className="ri-question-answer-line text-emerald-600"></i>
            <span className="text-sm font-semibold text-emerald-700">常見疑問</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            常見問題
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">解答</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            關於我們服務的一切你需要知道的，
            <br className="hidden md:block" />
            如有其他問題歡迎在 Telegram 群組詢問
          </p>
        </div>

        {/* FAQ Grid - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const colors = colorMap[faq.color];
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                  isOpen 
                    ? `shadow-xl ring-2 ${colors.border.replace('border', 'ring')} ring-opacity-50` 
                    : 'shadow-md hover:shadow-lg'
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full px-6 py-5 flex items-start gap-4 text-left cursor-pointer transition-colors ${
                    isOpen ? colors.light : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 flex-shrink-0 ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg ${
                    isOpen ? 'scale-110' : 'group-hover:scale-105'
                  } transition-transform duration-300`}>
                    <i className={`${faq.icon} text-xl text-white`}></i>
                  </div>

                  {/* Question Text */}
                  <div className="flex-1 pt-2">
                    <h3 className={`text-lg font-bold transition-colors ${isOpen ? colors.text : 'text-gray-900'}`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full ${
                    isOpen ? colors.bg : 'bg-gray-100'
                  } transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <i className={`ri-arrow-down-s-line text-xl ${isOpen ? 'text-white' : 'text-gray-500'}`}></i>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-[4.5rem]">
                    {/* Colored Accent Line */}
                    <div className={`w-12 h-1 ${colors.bg} rounded-full mb-4`}></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-xl">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <i className="ri-chat-smile-3-line text-2xl text-white"></i>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-lg">還有其他問題？</h4>
              <p className="text-gray-400 text-sm">加入我們的 Telegram 群組獲得即時解答</p>
            </div>
            <a
              href="#telegram-cta"
              className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors"
            >
              聯繫我們
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
