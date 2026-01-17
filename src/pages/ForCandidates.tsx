import React from 'react';
import { Lightbulb, FileText, Briefcase, CheckCircle } from 'lucide-react';

export const ForCandidates: React.FC = () => {
  const steps = [
    {
      title: 'Personalized Career Consultation',
      description: 'Your story matters. We take the time to understand your skills, ambitions, and career vision so we can align you with opportunities that truly fit.',
      icon: Lightbulb
    },
    {
      title: 'Skill Optimization & Preparation',
      description: 'Stand out with confidence. We help refine your resume, strengthen your professional brand, and prepare you for interviews through personalized coaching and feedback.',
      icon: FileText
    },
    {
      title: 'Opportunity Matching',
      description: 'You deserve more than just another job. With access to exclusive roles across top organizations, we connect you with positions that align with your expertise and long-term career goals.',
      icon: Briefcase
    },
    {
      title: 'Placement & Continued Growth',
      description: 'Our support doesn\'t stop once you\'re hired. We stay connected, offering career guidance, future opportunities, and ongoing professional development as your career evolves.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Career, Guided Every Step of the Way
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            At MAKS Solutions, your career is more than a job search. It's a journey. Our candidate-first approach ensures you receive personalized guidance, access to meaningful opportunities, and ongoing support to help you achieve your professional goals.
          </p>
        </div>
      </section>

      {/* 4-Step Hiring Process */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our 4-Step Hiring Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-green-500/50 transition-all hover:bg-slate-800 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600/30 to-green-400/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-slate-300 text-lg leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 py-16 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border-y border-green-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Connect with our career consultants today and explore opportunities that align with your professional goals.
          </p>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};
