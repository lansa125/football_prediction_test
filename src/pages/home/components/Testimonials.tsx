import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content: '使用這個 AI 預測服務後，我的分析效率提升了 10 倍，不再需要花時間翻閱數據表格。每天只需 5 分鐘就能掌握所有關鍵賽事！',
      author: '張先生',
      role: '足球數據愛好者',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20asian%20man%20portrait%20headshot%2C%20friendly%20smile%2C%20casual%20business%20attire%2C%20neutral%20background%2C%20high%20quality&width=150&height=150&seq=avatar-1&orientation=squarish'
    },
    {
      content: 'AI 的預測準確率確實很高，特別是在五大聯賽的場次，信心指數高的預測命中率超過 80%。這讓我對每場比賽都更有信心！',
      author: '李先生',
      role: '資深球迷',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=young%20asian%20man%20portrait%20headshot%2C%20confident%20expression%2C%20sports%20fan%20casual%20style%2C%20clean%20background&width=150&height=150&seq=avatar-2&orientation=squarish'
    },
    {
      content: 'Telegram 群組每天準時推送預測，格式清晰易懂，還有詳細的數據解讀，非常專業。社群裡的討論氛圍也很好！',
      author: '王小姐',
      role: '上班族球迷',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20asian%20woman%20portrait%20headshot%2C%20warm%20smile%2C%20office%20casual%20attire%2C%20soft%20lighting%2C%20high%20quality&width=150&height=150&seq=avatar-3&orientation=squarish'
    },
    {
      content: '多模型集成的方法讓預測更加可靠，不會因為單一模型的偏差而影響判斷。這是我用過最科學的預測工具！',
      author: '陳先生',
      role: 'IT 工程師',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=asian%20man%20tech%20professional%20portrait%2C%20glasses%2C%20smart%20casual%20attire%2C%20modern%20office%20background%2C%20friendly&width=150&height=150&seq=avatar-4&orientation=squarish'
    },
    {
      content: '賽前 30 小時的提醒非常及時，讓我有充足的時間做出決策，不用匆忙行動。這個時間窗口真的很關鍵！',
      author: '林先生',
      role: '兼職分析師',
      rating: 4,
      avatar: 'https://readdy.ai/api/search-image?query=middle%20aged%20asian%20man%20portrait%2C%20professional%20appearance%2C%20thoughtful%20expression%2C%20business%20casual%2C%20clean%20background&width=150&height=150&seq=avatar-5&orientation=squarish'
    },
    {
      content: '專注於五大聯賽的策略很明智，質量遠勝於那些試圖覆蓋所有賽事的平台。精而不廣，這才是正確的做法！',
      author: '黃先生',
      role: '十年老球迷',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=mature%20asian%20man%20portrait%20headshot%2C%20experienced%20look%2C%20sports%20enthusiast%20casual%20style%2C%20warm%20lighting&width=150&height=150&seq=avatar-6&orientation=squarish'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        {/* Quote marks decoration */}
        <div className="absolute top-40 left-10 text-[200px] font-serif text-emerald-500/5 leading-none">"</div>
        <div className="absolute bottom-40 right-10 text-[200px] font-serif text-emerald-500/5 leading-none rotate-180">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
            <i className="ri-star-smile-line text-yellow-400"></i>
            <span className="text-yellow-400 text-sm font-medium">用戶心聲</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            聽聽他們 <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">怎麼說</span>
          </h2>
          <p className="text-xl text-gray-400">
            來自真實用戶的反饋和評價
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 overflow-hidden">
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-emerald-500/30">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-star-fill text-xl ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    ></i>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <div className="text-lg font-bold text-emerald-400">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-400">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group cursor-pointer bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                currentIndex === index
                  ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
                  : 'border-gray-700/50 hover:border-gray-600'
              }`}
            >
              {/* Mini Quote */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`ri-star-fill text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-700'}`}
                  ></i>
                ))}
              </div>

              {/* Content Preview */}
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                "{testimonial.content}"
              </p>

              {/* Active Indicator */}
              {currentIndex === index && (
                <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm">
                  <i className="ri-play-circle-fill"></i>
                  <span>正在展示</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-emerald-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
