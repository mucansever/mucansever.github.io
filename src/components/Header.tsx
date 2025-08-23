import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onTabChange: (tabName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onTabChange }) => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    onTabChange('about');
    navigate('/about');
  };

  return (
    <header>
      <div className="header-content">
        <div className="profile-picture">
          <img src="/me.png" alt="Mutlu Cansever" />
        </div>
        <div className="header-text">
          <a 
            className="header-link" 
            onClick={handleHeaderClick}
            style={{ cursor: 'pointer' }}
          >
            <h1>Mutlu Cansever</h1>
            <p>Software Engineer</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
