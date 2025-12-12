export default function Team() {
  const members = [
    {
      name: '陳建宏',
      position: '首席數據科學家',
      description: '前Google AI研究員，專注機器學習10年',
      image: 'https://readdy.ai/api/search-image?query=professional%20asian%20male%20data%20scientist%20portrait%2C%20formal%20business%20attire%2C%20confident%20expression%2C%20studio%20lighting%2C%20black%20and%20white%20photography%2C%20corporate%20headshot%20style&width=400&height=500&seq=team-001&orientation=portrait'
    },
    {
      name: '林雅婷',
      position: 'AI算法工程師',
      description: '深度學習專家，曾任職於微軟研究院',
      image: 'https://readdy.ai/api/search-image?query=professional%20asian%20female%20AI%20engineer%20portrait%2C%20business%20casual%20attire%2C%20intelligent%20look%2C%20studio%20lighting%2C%20black%20and%20white%20photography%2C%20modern%20corporate%20headshot&width=400&height=500&seq=team-002&orientation=portrait'
    },
    {
      name: '王志明',
      position: '足球數據分析師',
      description: '15年足球產業經驗，前職業球探',
      image: 'https://readdy.ai/api/search-image?query=professional%20asian%20male%20sports%20analyst%20portrait%2C%20smart%20casual%20attire%2C%20friendly%20demeanor%2C%20studio%20lighting%2C%20black%20and%20white%20photography%2C%20professional%20headshot&width=400&height=500&seq=team-003&orientation=portrait'
    },
    {
      name: '張美玲',
      position: '產品總監',
      description: '資深產品經理，打造多個成功AI產品',
      image: 'https://readdy.ai/api/search-image?query=professional%20asian%20female%20product%20manager%20portrait%2C%20elegant%20business%20attire%2C%20warm%20smile%2C%20studio%20lighting%2C%20black%20and%20white%20photography%2C%20executive%20headshot%20style&width=400&height=500&seq=team-004&orientation=portrait'
    }
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Title Section - Left 40% */}
          <div className="lg:col-span-5">
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              <div>專業團隊</div>
              <div className="text-emerald-400">專注預測</div>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              10年+行業經驗的數據科學家團隊，結合AI技術與足球專業知識，為您提供最精準的賽事預測
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className="group"
              style={{
                transform: index % 2 === 0 ? 'translateY(0)' : 'translateY(2rem)'
              }}
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-2">
                {/* Photo */}
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <div className="text-emerald-400 text-sm font-semibold mb-3">{member.position}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.description}</p>
                  
                  {/* LinkedIn Icon */}
                  <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 cursor-pointer">
                    <i className="ri-linkedin-line text-gray-400 hover:text-emerald-400"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
