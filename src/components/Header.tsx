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
      <a 
        className="header-link" 
        onClick={handleHeaderClick}
        style={{ cursor: 'pointer' }}
      >
        <h1>Mutlu Cansever</h1>
        <p>Software Engineer</p>
      </a>
      <div className="header-social-links">
        <a href="https://linkedin.com/in/mucansever" className="header-social-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/mucansever" className="header-social-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:mutlucansever3@gmail.com" className="header-social-link">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
