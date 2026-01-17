import React from 'react';
import { Globe, Trophy, Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  const globalPresence = [
    { region: 'United States', locations: 'East Coast, West Coast' },
    { region: 'India', locations: 'Bangalore, Hyderabad' },
    { region: 'Canada', locations: 'Toronto' },
    { region: 'Latin America', locations: 'Mexico City' }
  ];

  const recognition = [
    { stat: '95%', label: 'Client Retention', desc: 'Long-term partnerships built on trust and results' },
    { stat: 'Trusted', label: 'Across Sectors', desc: 'Healthcare, Technology, Retail, Financial Services' },
    { stat: 'Category', label: 'Leadership', desc: 'AI-driven recruiting and global delivery excellence' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Bridging Potential and Performance
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            MAKS Solutions connects top-performing professionals with forward-thinking organizations to drive measurable results. Whether you're a business seeking exceptional talent or a professional ready to make an impact, we bridge the gap between potential and performance.
          </p>
        </div>
      </section>

      {/* Why MAKS Solutions */}
      <section className="px-6 lg:px-20 py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Why MAKS Solutions?</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              People are the heart of every business. Founded on a passion for meaningful connections, MAKS Solutions has spent decades building trusted partnerships that empower companies and elevate careers. Our success is built on integrity, innovation, and a relentless focus on results.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Company Background</h2>
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              In market since 2021, MAKS Solutions was created to meet the growing demand for skilled IT professionals and strategic staffing solutions. As technology and workforce needs evolved, so did we—expanding our expertise while staying true to personalized service and long-term partnerships.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our guiding belief remains the same: the right talent in the right role creates lasting impact for businesses and fulfilling careers for professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="px-6 lg:px-20 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <Globe className="w-10 h-10 text-blue-400" />
            Global Presence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalPresence.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-2">{item.region}</h3>
                <p className="text-slate-300">{item.locations}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Impact */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <Trophy className="w-10 h-10 text-yellow-400" />
            Recognition & Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recognition.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-600/20 to-yellow-400/10 border border-yellow-500/30 rounded-lg p-8 text-center hover:border-yellow-500/50 transition-all">
                <h3 className="text-4xl font-bold text-yellow-400 mb-2">{item.stat}</h3>
                <h4 className="text-xl font-bold text-white mb-2">{item.label}</h4>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-6 lg:px-20 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                We change lives and businesses every day by building long-term relationships, embracing innovation, and delivering excellence in talent solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be the BEST partner in strengthening our clients' businesses, advancing our candidates' careers, and building stronger communities through exceptional leadership.
              </p>
            </div>

            {/* Values */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Our Values</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our core values guide every decision we make and inspire us to create meaningful impact for our clients, candidates, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
