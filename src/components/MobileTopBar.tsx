import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MobileTopBarProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
}

const MobileTopBar: React.FC<MobileTopBarProps> = ({ activeTab, onTabChange }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const openMobileTab = (tabName: string) => {
    onTabChange(tabName);
    navigate(`/${tabName}`);
    setIsMenuExpanded(false);
  };

  const handleTitleClick = () => {
    onTabChange('about');
    navigate('/about');
  };

  return (
    <div className="mobile-topbar">
      <div className="mobile-topbar-header">
        <div 
          className="mobile-topbar-title" 
          onClick={handleTitleClick}
          style={{ cursor: 'pointer' }}
        >
          Mutlu Cansever
        </div>
        <div className="mobile-right-section">
          <div className="mobile-social-links">
            <a href="https://linkedin.com/in/mucansever" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/mucansever" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:mucansever@gmail.com" className="mobile-social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <i className={`fas ${isMenuExpanded ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      <div className={`mobile-topbar-content ${isMenuExpanded ? 'expanded' : ''}`}>
        <div className="mobile-tabs">
          <button 
            className={`mobile-tab-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => openMobileTab('about')}
          >
            About
          </button>
          <button 
            className={`mobile-tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => openMobileTab('skills')}
          >
            Skills
          </button>
          <button 
            className={`mobile-tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => openMobileTab('projects')}
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileTopBar;
