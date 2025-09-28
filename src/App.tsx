import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FunFacts from './components/FunFacts';


function App() {
  const [activeTab, setActiveTab] = useState('about');
  const navigate = useNavigate();
  const location = useLocation();

  // Update active tab when URL changes
  useEffect(() => {
    const path = location.pathname.slice(1) || 'about';
    setActiveTab(path);
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
      <div className="container">
        <Navigation activeTab={activeTab} onTabChange={openTab} />
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/fun-facts" element={<FunFacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
