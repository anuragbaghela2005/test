import React from 'react';
import { CheckCircle, Users, Briefcase, BarChart3, Target, Zap } from 'lucide-react';

export const ForCompanies: React.FC = () => {
  const services = [
    {
      title: 'Direct Hire',
      description: 'Build a strong, long-term workforce with confidence. We go beyond resumes to understand your business goals, leadership style, and culture.'
    },
    {
      title: 'Contract-to-Hire',
      description: 'Reduce hiring risk while maintaining productivity. Evaluate performance, cultural fit, and impact before extending a permanent offer.'
    },
    {
      title: 'Staff Augmentation',
      description: 'Quickly scale your workforce to meet changing project demands. Immediate access to skilled professionals.'
    },
    {
      title: 'Professional Outplacement',
      description: 'Support employees during career transitions with career coaching, resume development, and interview preparation.'
    },
    {
      title: 'SOW – Project Resources',
      description: 'Deliver projects on time and on budget with dedicated teams and clearly defined outcomes.'
    }
  ];

  const expertise = [
    'Information Technology – Software development, cybersecurity, cloud, data, and infrastructure talent.',
    'Engineering – Mechanical, electrical, civil, and process engineering professionals.',
    'Accounting & Finance – Professionals who drive compliance, accuracy, and financial growth.',
    'Professional Services – Customer support, operations, HR, and administrative experts.',
    'Artificial Intelligence – AI, machine learning, automation, and data science specialists.'
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Partnership',
      description: 'We collaborate closely with your leadership team to understand business goals, challenges, and company culture.'
    },
    {
      step: 2,
      title: 'Talent Identification & Screening',
      description: 'Using advanced sourcing tools, AI-driven insights, and rigorous screening, we identify candidates with the right skills and mindset.'
    },
    {
      step: 3,
      title: 'Tailored Candidate Presentation',
      description: 'Receive a curated shortlist of top candidates, allowing you to make confident and informed hiring decisions while hiring top talent.'
    },
    {
      step: 4,
      title: 'Placement & Ongoing Support',
      description: 'We support onboarding and remain engaged post-placement to ensure long-term success for both client and talent.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Drive Your Business to the Top with the Right Talent
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Your company's success starts with the right people. At MAKS Solutions, we help organizations scale, innovate, and compete by connecting them with exceptional talent. Whether you're filling a critical role, launching a new initiative, or transforming your workforce strategy, we deliver talent solutions that drive real business results.
          </p>
          <div className="bg-blue-600/20 border border-blue-500/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="w-8 h-8" />
              Find Talent
            </h2>
            <p className="text-slate-300 text-lg">
              Access skilled professionals who align with your technical needs, company culture, and long-term vision. Our consultative approach ensures every hire strengthens your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Service Areas</h2>
          <p className="text-slate-300 text-lg mb-12">
            Our comprehensive talent solutions are designed to meet the evolving needs of your business.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-500/50 transition-all hover:bg-slate-800">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="px-6 lg:px-20 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Areas of Expertise</h2>
          <p className="text-slate-300 text-lg mb-12">
            MAKS Solutions delivers specialized talent across a wide range of industries, ensuring expertise that makes an impact.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">The MAKS Solutions Approach to Client Success</h2>
          <p className="text-slate-300 text-lg mb-12">
            Client success doesn't happen by chance. It's the result of our proven 4-step process.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-400/10 border border-blue-500/30 rounded-lg p-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-blue-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
