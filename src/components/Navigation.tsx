interface NavigationProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs">
      <ul>
        <li>
          <button 
            className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => onTabChange('about')}
          >
            About
          </button>
      </li>
      <li>
        <button 
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => onTabChange('skills')}
        >
          Skills
        </button>
      </li>
      <li>
        <button 
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => onTabChange('projects')}
        >
          Projects
        </button>
      </li>
      </ul>
    </div>
  );
};

export default Navigation;
