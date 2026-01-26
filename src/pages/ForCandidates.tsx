import { User, FileCheck, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

export function ForCandidates() {
  const processSteps = [
    {
      icon: User,
      title: 'Personalized Career Consultation',
      description: 'Your story matters. We take the time to understand your skills, ambitions, and career vision so we can align you with opportunities that truly fit.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileCheck,
      title: 'Skill Optimization & Preparation',
      description: 'Stand out with confidence. We help refine your resume, strengthen your professional brand, and prepare you for interviews through personalized coaching and feedback.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Target,
      title: 'Opportunity Matching',
      description: 'You deserve more than just another job. With access to exclusive roles across top organizations, we connect you with positions that align with your expertise and long-term career goals.',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: TrendingUp,
      title: 'Placement & Continued Growth',
      description: "Our support doesn't stop once you're hired. We stay connected, offering career guidance, future opportunities, and ongoing professional development as your career evolves.",
      color: 'from-teal-500 to-cyan-500',
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
            For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Candidates</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Your Career, Guided Every Step of the Way
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            At Maks Solutions, your career is more than a job search. It's a journey. Our candidate-first approach ensures you receive personalized guidance, access to meaningful opportunities, and ongoing support to help you achieve your professional goals.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Our 4-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Hiring Process</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive approach designed to help you succeed at every stage of your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Your Success is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Priority</span>
              </h2>
              <div className="space-y-4 mt-8">
                {[
                  'Personalized career guidance tailored to your goals',
                  'Access to exclusive opportunities with top companies',
                  'Expert resume and interview preparation support',
                  'Ongoing career development and growth opportunities',
                  'Long-term partnership beyond just placement',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-slate-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                <img
                  src="https://www.1stformationsblog.co.uk/wp-content/uploads/2025/01/Shutterstock_2266633617.jpg"
                  alt="Global Talent Network"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
