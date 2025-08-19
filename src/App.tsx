import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MobileTopBar from './components/MobileTopBar';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const navigate = useNavigate();
  const location = useLocation();

  // Update active tab when URL changes
  useEffect(() => {
    const path = location.pathname.slice(1) || 'about';
    setActiveTab(path);
    // Only scroll to top on mobile devices
    if (window.innerWidth <= 768) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
    if (tabName === 'about') {
      navigate('/');
    } else {
      navigate(`/${tabName}`);
    }
  };

  return (
    <div className="App">
      <MobileTopBar activeTab={activeTab} onTabChange={openTab} />
      
      <div className="container">
        <Header onTabChange={openTab} />
        <Navigation activeTab={activeTab} onTabChange={openTab} />
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
