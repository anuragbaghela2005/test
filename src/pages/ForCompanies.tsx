import { Search, Users, Briefcase, FileText, TrendingUp, Target, Code, Calculator, Headphones, Sparkles } from 'lucide-react';

export function ForCompanies() {
  const services = [
    {
      icon: Briefcase,
      title: 'Direct Hire',
      description: 'Build a strong, long-term workforce with confidence. We go beyond resumes to understand your business goals, leadership style, and culture. Our team sources, evaluates, and presents candidates who are not only technically qualified but also aligned with your organization\'s values and future direction.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Contract-to-Hire',
      description: 'Reduce hiring risk while maintaining productivity. Contract-to-hire allows you to evaluate performance, cultural fit, and impact before extending a permanent offer, ensuring the right decision for both your team and the candidate.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'Staff Augmentation',
      description: 'Quickly scale your workforce to meet changing project demands. Our staff augmentation solutions provide immediate access to skilled professionals who can integrate seamlessly with your teams and deliver results from day one.',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: TrendingUp,
      title: 'Professional Outplacement',
      description: 'Support employees during career transitions with dignity and care. Our outplacement services include career coaching, resume development, interview preparation, and job search support to help individuals move forward with confidence.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'SOW - Project Resources',
      description: 'Deliver projects on time and on budget with dedicated teams and clearly defined outcomes. We manage resources, timelines, and performance metrics so your organization can focus on strategy and innovation.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const expertiseAreas = [
    { icon: Code, title: 'Information Technology', description: 'Software development, cybersecurity, cloud, data, and infrastructure talent' },
    { icon: TrendingUp, title: 'Engineering', description: 'Mechanical, electrical, civil, and process engineering professionals' },
    { icon: Calculator, title: 'Accounting & Finance', description: 'Professionals who drive compliance, accuracy, and financial growth' },
    { icon: Headphones, title: 'Professional Services', description: 'Customer support, operations, HR, and administrative experts' },
    { icon: Sparkles, title: 'Artificial Intelligence', description: 'AI, machine learning, automation, and data science specialists' },
  ];

  const processSteps = [
    {
      title: 'Discovery & Partnership',
      description: 'We collaborate closely with your leadership team to understand business goals, challenges, and company culture.',
      number: '01',
    },
    {
      title: 'Talent Identification & Screening',
      description: 'Using advanced sourcing tools, AI-driven insights, and rigorous screening, we identify candidates with the right skills and mindset.',
      number: '02',
    },
    {
      title: 'Tailored Candidate Presentation',
      description: 'Receive a curated shortlist of top candidates, allowing you to make confident and informed hiring decisions.',
      number: '03',
    },
    {
      title: 'Placement & Ongoing Support',
      description: 'We support onboarding and remain engaged post-placement to ensure long-term success for both client and talent.',
      number: '04',
    },
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
            For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Companies</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Drive Your Business to the Top with the Right Talent
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Your company's success starts with the right people. At Maks Solutions, we help organizations scale, innovate, and compete by connecting them with exceptional talent. Whether you're filling a critical role, launching a new initiative, or transforming your workforce strategy, we deliver talent solutions that drive real business results.
          </p>
        </div>
      </section>

      {/* Find Talent Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 mb-6">
                <Search className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Find Talent</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Access skilled professionals who align with your technical needs, company culture, and long-term vision.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our consultative approach ensures every hire strengthens your organization.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.stockcake.com/public/2/5/f/25fe580e-2e82-4bcd-bb14-fc74c921eace_large/global-talent-network-stockcake.jpg"
                  alt="Global Talent Network"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Comprehensive Talent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Our comprehensive talent solutions are designed to meet the evolving needs of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Areas of Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Specialized Talent Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Industries</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Maks Solutions delivers specialized talent across a wide range of industries, ensuring expertise that makes an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              The Maks Solutions Approach to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Client Success</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Client success doesn't happen by chance. It's the result of our proven 4-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 mt-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
