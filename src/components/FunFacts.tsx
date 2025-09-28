import { useState, useEffect } from 'react';

interface FunFact {
  date: string;
  fact: string;
}

const FunFacts: React.FC = () => {
  const [todayFact, setTodayFact] = useState<FunFact | null>(null);
  const [recentFacts, setRecentFacts] = useState<FunFact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchFacts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use proxy URLs for development to avoid CORS issues
        const baseUrl = import.meta.env.DEV ? '/api/fun-facts' : 'https://fun-facts-api-production.up.railway.app/v1/fun-facts';
        
        // Fetch today's fact and recent facts in parallel
        const [todayResponse, recentResponse] = await Promise.all([
          fetch(`${baseUrl}/today`),
          fetch(`${baseUrl}/recent`)
        ]);

        if (!todayResponse.ok) {
          throw new Error(`Today's fact request failed: ${todayResponse.status} ${todayResponse.statusText}`);
        }
        if (!recentResponse.ok) {
          throw new Error(`Recent facts request failed: ${recentResponse.status} ${recentResponse.statusText}`);
        }

        const todayData = await todayResponse.json();
        const recentData = await recentResponse.json();

        // Only update state if component is still mounted
        if (isMounted) {
          setTodayFact(todayData);
          setRecentFacts(recentData);
        }
      } catch (err) {
        console.error('Fun facts fetch error:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchFacts();

    // Cleanup function to prevent state updates after component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div id="fun-facts" className="tab-content">
        <div className="fun-facts-content">
          <h2>Fun Facts</h2>
          <p>Loading interesting facts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="fun-facts" className="tab-content">
        <div className="fun-facts-content">
          <h2>Fun Facts</h2>
          <p className="error-message">Sorry, couldn't load fun facts. {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="fun-facts" className="tab-content">
      <div className="fun-facts-content">
        <h2>Fun Facts</h2>
        
        {todayFact && (
          <div className="today-fact">
            <h3>Today's Fun Fact</h3>
            <div className="fact-card today">
              <div className="fact-date">{formatDate(todayFact.date)}</div>
              <div className="fact-text">{todayFact.fact}</div>
            </div>
          </div>
        )}

        {recentFacts.length > 0 && (
          <div className="recent-facts">
            <h3>Recent Fun Facts</h3>
            <div className="facts-grid">
              {recentFacts.map((fact, index) => (
                <div key={`${fact.date}-${index}`} className="fact-card">
                  <div className="fact-date">{formatDate(fact.date)}</div>
                  <div className="fact-text">{fact.fact}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FunFacts;
