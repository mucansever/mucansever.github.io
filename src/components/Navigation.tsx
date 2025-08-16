interface NavigationProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs">
      <button 
        className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
        onClick={() => onTabChange('about')}
      >
        About
      </button>
      <button 
        className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
        onClick={() => onTabChange('skills')}
      >
        Skills
      </button>
      <button 
        className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
        onClick={() => onTabChange('projects')}
      >
        Projects
      </button>
    </div>
  );
};

export default Navigation;
