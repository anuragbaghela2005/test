import { Globe, Award, Target, Heart, MapPin, TrendingUp } from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical practices in every interaction.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative solutions to deliver exceptional results.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'We measure success by the lasting impact we create for our clients and candidates.',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We believe in building long-term relationships that grow stronger over time.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const locations = [
    { region: 'United States', cities: ['East Coast', 'West Coast'] },
    { region: 'India', cities: ['Bangalore', 'Hyderabad'] },
    { region: 'Canada', city: 'Toronto' },
    { region: 'Latin America', city: 'Mexico City' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Bridging Potential and Performance
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Maks Solutions connects top-performing professionals with forward-thinking organizations to drive measurable results. Whether you're a business seeking exceptional talent or a professional ready to make an impact, we bridge the gap between potential and performance.
          </p>
        </div>
      </section>

      {/* Why Maks Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Maks Solutions</span>?
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                People are the heart of every business. Founded on a passion for meaningful connections, Maks Solutions has spent decades building trusted partnerships that empower companies and elevate careers. Our success is built on integrity, innovation, and a relentless focus on results.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                <img
                  src="https://maverick-enterprise.com/wp-content/uploads/2017/11/careers.jpg"
                  alt="Global Talent Network"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Background</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Founded 4+ years ago, Maks Solutions was created to meet the growing demand for skilled IT professionals and strategic staffing solutions. As technology and workforce needs evolved, so did we - expanding our expertise while staying true to personalized service and long-term partnerships.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our guiding belief remains the same: the right talent in the right role creates lasting impact for businesses and fulfilling careers for professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Presence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {locations.map((location, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{location.region}</h3>
                {location.cities ? (
                  <ul className="text-slate-400 text-sm space-y-1">
                    {location.cities.map((city, i) => (
                      <li key={i}>{city}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 text-sm">{location.city}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Impact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Recognition & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
              <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-slate-400">Client Retention</div>
              <p className="text-slate-500 text-sm mt-2">Long-term partnerships built on trust and results</p>
            </div>

            <div className="text-center p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
              <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">Trusted</div>
              <div className="text-slate-400">Across Sectors</div>
              <p className="text-slate-500 text-sm mt-2">Healthcare, Technology, Retail, Financial Services</p>
            </div>

            <div className="text-center p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
              <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">Category</div>
              <div className="text-slate-400">Leadership</div>
              <p className="text-slate-500 text-sm mt-2">AI-driven recruiting and global delivery excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Mission, Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                We change lives and businesses every day by building long-term relationships, embracing innovation, and delivering excellence in talent solutions.
              </p>
            </div>

            <div className="p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be the BEST partner in strengthening our clients' businesses, advancing our candidates' careers, and building stronger communities through exceptional leadership.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
