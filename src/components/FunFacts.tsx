import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface FunFact {
  date: string;
  fact: string;
}

const FunFacts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [todayFact, setTodayFact] = useState<FunFact | null>(null);
  const [recentFacts, setRecentFacts] = useState<FunFact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Determine active view based on URL
  const isTodayRoute = location.pathname === '/v1/fun-facts/today';
  const isRecentRoute = location.pathname === '/v1/fun-facts/recent';
  const activeView = isTodayRoute ? 'today' : 'recent';
  

  const fetchTodayFact = async () => {
    setLoading(true);
    setError(null);
    try {
      // Use proxy in development, CORS proxy in production
      const apiUrl = import.meta.env.DEV 
        ? '/api/fun-facts/today' 
        : 'https://api.codetabs.com/v1/proxy/?quest=https://fun-facts-api-production.up.railway.app/v1/fun-facts/today';
      
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTodayFact(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch today\'s fact');
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentFacts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Use proxy in development, CORS proxy in production
      const apiUrl = import.meta.env.DEV 
        ? '/api/fun-facts/recent' 
        : 'https://api.codetabs.com/v1/proxy/?quest=https://fun-facts-api-production.up.railway.app/v1/fun-facts/recent';
      
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRecentFacts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch recent facts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isTodayRoute) {
      fetchTodayFact();
    } else if (isRecentRoute) {
      fetchRecentFacts();
    }
  }, [location.pathname]);

  const handleViewChange = (view: 'today' | 'recent') => {
    if (view === 'today') {
      navigate('/v1/fun-facts/today');
    } else if (view === 'recent') {
      navigate('/v1/fun-facts/recent');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fun-facts-container">
      <div className="fun-facts-header">
        <h1>Fun Facts</h1>
        <p>Discover interesting facts and trivia!</p>
      </div>

      <div className="fun-facts-tabs">
        <button
          className={`tab-button ${activeView === 'today' ? 'active' : ''}`}
          onClick={() => handleViewChange('today')}
        >
          Today's Fact
        </button>
        <button
          className={`tab-button ${activeView === 'recent' ? 'active' : ''}`}
          onClick={() => handleViewChange('recent')}
        >
          Recent Facts
        </button>
      </div>

      <div className="fun-facts-content">
        {loading && (
          <div className="loading">
            <i className="fas fa-spinner fa-spin"></i>
            <span>Loading...</span>
          </div>
        )}

        {error && (
          <div className="error">
            <i className="fas fa-exclamation-triangle"></i>
            <span>{error}</span>
            <button onClick={activeView === 'today' ? fetchTodayFact : fetchRecentFacts}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && activeView === 'today' && todayFact && (
          <div className="today-fact">
            <div className="fact-card">
              <div className="fact-date">{formatDate(todayFact.date)}</div>
              <div className="fact-text">{todayFact.fact}</div>
            </div>
          </div>
        )}

        {!loading && !error && activeView === 'recent' && (
          <div className="recent-facts">
            {recentFacts.length > 0 ? (
              <div className="facts-list">
                {recentFacts.map((fact, index) => (
                  <div key={index} className="fact-card">
                    <div className="fact-date">{formatDate(fact.date)}</div>
                    <div className="fact-text">{fact.fact}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-facts">
                <i className="fas fa-info-circle"></i>
                <span>No recent facts available</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FunFacts;
