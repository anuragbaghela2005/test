import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/Home';
import { ForCompanies } from './pages/ForCompanies';
import { ForCandidates } from './pages/ForCandidates';
import { About } from './pages/About';
// import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/for-companies" element={<ForCompanies />} />
            <Route path="/for-candidates" element={<ForCandidates />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/resources" element={<Resources />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
