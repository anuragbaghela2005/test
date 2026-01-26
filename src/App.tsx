import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { ForCompanies } from './pages/ForCompanies';
import { ForCandidates } from './pages/ForCandidates';
import { AboutUs } from './pages/AboutUs';
import { Resources } from './pages/Resources';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/for-candidates" element={<ForCandidates />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;