import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const blogPosts: Record<string, {
  title: string;
  type: string;
  date: string;
  author: string;
  content: string[];
  image?: string;
}> = {
  'celebrating-4-years': {
    title: 'Celebrating 4+ Years of Maks Solutions: A Legacy of Connecting People and Opportunities',
    type: 'Featured News',
    date: 'January 15, 2024',
    author: 'Maks Solutions Team',
    content: [
      'This year marks a significant milestone for Maks Solutions as we celebrate four decades of excellence in talent solutions and workforce development. Since our founding, we have been dedicated to connecting exceptional professionals with forward-thinking organizations, creating meaningful partnerships that drive success.',
      'Over the past 4+ years, Maks Solutions has evolved from a small staffing agency into a comprehensive talent solutions provider. We have expanded our reach across multiple continents, serving clients in the United States, India, Canada, and Latin America. Our growth has been driven by a commitment to innovation, integrity, and a relentless focus on delivering results.',
      'Throughout our journey, we have placed thousands of professionals in roles that have transformed their careers and helped businesses achieve their strategic goals. Our success is measured not just in numbers, but in the lasting relationships we have built with both clients and candidates.',
      'As we look to the future, Maks Solutions remains committed to our core mission: bridging potential and performance. We continue to invest in cutting-edge technology, including AI-driven recruiting tools, to enhance our ability to match the right talent with the right opportunities.',
      'We are grateful to all our clients, candidates, and partners who have been part of this incredible journey. Your trust and partnership have been the foundation of our success, and we look forward to continuing to serve you in the years ahead.',
      'Thank you for being part of the Maks Solutions family. Here\'s to the next 4+ years of connecting people and opportunities!',
    ],
  },
  'trusted-employment-agency-charlotte': {
    title: 'Why Maks Solutions Is a Trusted Employment Agency in Charlotte, North Carolina',
    type: 'Featured Blog',
    date: 'February 10, 2024',
    author: 'Maks Solutions Team',
    content: [
      'In the competitive landscape of staffing and recruitment, Maks Solutions has established itself as a trusted partner for businesses and professionals in Charlotte, North Carolina, and beyond. What sets us apart is not just our ability to fill positions, but our commitment to building lasting relationships and delivering exceptional value.',
      'Our approach begins with understanding. We take the time to truly understand our clients\' business needs, company culture, and long-term goals. This deep understanding allows us to identify candidates who are not only technically qualified but also aligned with the organization\'s values and vision.',
      'For candidates, Maks Solutions offers more than just job placement. We provide comprehensive career guidance, from resume optimization to interview preparation, ensuring that every professional we represent is positioned for success. Our team of experienced recruiters works closely with candidates to understand their career aspirations and connect them with opportunities that align with their goals.',
      'One of the key factors that make Maks Solutions a trusted partner is our track record of success. With a 95% client retention rate, we have demonstrated our ability to deliver results that matter. Our clients trust us because we consistently deliver quality talent that makes a real impact on their organizations.',
      'We also pride ourselves on our industry expertise. Our team has deep knowledge across multiple sectors, including Information Technology, Engineering, Accounting & Finance, Professional Services, and Artificial Intelligence. This specialized knowledge allows us to understand the unique requirements of each role and identify candidates with the right skills and experience.',
      'Technology plays a crucial role in our success. We leverage AI-driven recruiting tools and advanced sourcing platforms to identify top talent quickly and efficiently. However, we never lose sight of the human element - every placement is backed by personal attention and care.',
      'At Maks Solutions, we believe that the right talent in the right role creates lasting impact. Whether you\'re a business looking to build your team or a professional seeking your next opportunity, we are here to help you succeed. Our commitment to excellence, integrity, and results is what makes us a trusted employment agency in Charlotte and beyond.',
    ],
  },
  'new-brand-identity': {
    title: 'Maks Solutions Unveils New Brand Identity in Celebration of 4+Years of Excellence',
    type: 'Recent Press Release',
    date: 'March 5, 2024',
    author: 'Maks Solutions Team',
    content: [
      'Maks Solutions is proud to announce the launch of our new brand identity, marking 4+years as a Total Talent Solutions Provider. This rebranding reflects our evolution from a traditional staffing agency to a comprehensive talent solutions partner, while honoring our rich history and core values.',
      'The new brand identity represents our forward-looking vision while staying true to the principles that have guided us for four decades. Our refreshed visual identity features a modern design that communicates innovation, professionalism, and our commitment to excellence.',
      'This rebranding is more than just a visual update - it represents our expanded capabilities and our commitment to delivering comprehensive talent solutions. From direct hire and contract-to-hire to staff augmentation, professional outplacement, and SOW project resources, Maks Solutions offers a full spectrum of services designed to meet the evolving needs of today\'s businesses.',
      'Our new brand identity also reflects our global presence and our ability to serve clients across multiple continents. With offices in the United States, India, Canada, and Latin America, we are positioned to support businesses wherever they need talent solutions.',
      'The launch of our new brand identity comes at a time when the talent landscape is more complex than ever. Businesses are facing unprecedented challenges in finding and retaining top talent, while professionals are seeking opportunities that align with their values and career goals. Maks Solutions is uniquely positioned to bridge this gap.',
      'As we celebrate this milestone, we remain committed to our mission of changing lives and businesses every day. Our new brand identity is a promise to our clients, candidates, and partners that we will continue to innovate, excel, and deliver exceptional results.',
      'We invite you to explore our new brand identity and learn more about how Maks Solutions can support your talent needs. Together, we can build stronger businesses, advance careers, and create lasting impact.',
    ],
  },
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/resources" className="text-cyan-400 hover:text-cyan-300">
            Return to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/resources"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Resources
          </Link>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-cyan-400 text-sm font-semibold rounded-lg border border-cyan-500/30">
              {post.type}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-300 text-lg leading-relaxed text-justify mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <Link
              to="/resources"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return to Resources
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
