import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const offices = [
    {
      region: 'United States',
      locations: ['East Coast', 'West Coast']
    },
    {
      region: 'India',
      locations: ['Bangalore', 'Hyderabad']
    },
    {
      region: 'Canada',
      locations: ['Toronto']
    },
    {
      region: 'Latin America',
      locations: ['Mexico City']
    }
  ];

  const expectations = [
    'A prompt response from a MAKS Solutions specialist',
    'Personalized guidance based on your needs',
    'Clear next steps and actionable insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Whether you're looking for top talent, exploring career opportunities, or simply have a question, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact MAKS Solutions</h2>
            <p className="text-slate-300 mb-8">
              Connect with our team to learn how we can support your business or career goals.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <p className="text-green-300 font-semibold">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
              <div className="space-y-4">
                {expectations.map((exp, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-lg">{exp}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white font-semibold">contact@MAKS Solutions.com</p>
                  </div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">1-800-TALENT-1</p>
                  </div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm">Offices Worldwide</p>
                    <p className="text-white font-semibold">Visit our global offices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="px-6 lg:px-20 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Visit One of Our Global Offices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  {office.region}
                </h3>
                <ul className="space-y-2">
                  {office.locations.map((location, locIndex) => (
                    <li key={locIndex} className="text-slate-300">• {location}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Success Together</h2>
          <p className="text-slate-300 text-lg">
            One connection at a time. Our team is ready to support your journey toward exceptional talent and career growth.
          </p>
        </div>
      </section>
    </div>
  );
};
