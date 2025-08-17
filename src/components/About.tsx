const About: React.FC = () => {
  return (
    <div id="about" className="tab-content">
      <div className="about-content">
        <div className="about-text">                    
          <p>
            Hi there, I'm Mutlu.
          </p>
          
          <p>
            I'm a product engineer with technical depth and over 2.5 years of experience, based in Istanbul.
          </p>

          <p>
            My main areas of interests are distributed systems and computer networks.
          </p>

          <p>
            I enjoy building things, reading how things work, trying out fancy restaurants, hiking in the city, having a cold pint after a long day, and so much more...
          </p>

          <p>
            This has been my journey so far:
          </p>

          <br></br>
        </div>
      </div>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">Jun 2024 - Present</div>
          <div className="timeline-marker current"></div>
          <div className="timeline-content">
            <div className="work-item">
              <img src="/getmidas_logo.jpeg" alt="GetMidas Logo" className="institution-logo" />
              <div className="item-content">
                <div className="item-title">Software Engineer</div>
                <div className="item-subtitle">
                  Midas
                  <a href="https://getmidas.com" target="_blank" className="company-link" rel="noopener noreferrer">↗</a>
                </div>
                <div className="item-description">
                  <ul className="description-list">
                    <li>Biggest neo-brokerage of Turkey with over $2B AUM on 2M+ accounts.</li>
                    <li>Worked on market data latency, resiliency, and observability improvements.</li>
                    <li>Built flagship US Margin and GenAI stock analysis products with technical ownership.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">May 2023 - May 2024</div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="work-item">
              <img src="/goodjobgames_logo.jpeg" alt="GoodJobGames Logo" className="institution-logo" />
              <div className="item-content">
                <div className="item-title">Software Engineer</div>
                <div className="item-subtitle">
                  Good Job Games
                  <a href="https://goodjobgames.com" target="_blank" className="company-link" rel="noopener noreferrer">↗</a>
                </div>
                <div className="item-description">
                  <ul className="description-list">
                     <li>Leading mobile gaming company with a $60M Series A Round.</li>
                     <li>Backend/platform engineering hybrid role, I was responsible for the entire stack of certain flows.</li>
                     <li>Built the low-latency highly-available distributed systems used in Wonder Blast and Match Villains.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Jun 2022 - Sep 2022</div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="work-item">
              <img src="/peak_games_logo.jpeg" alt="Peak Games Logo" className="institution-logo" />
              <div className="item-content">
                <div className="item-title">Software Engineer Intern</div>
                <div className="item-subtitle">
                  Peak
                  <a href="https://peak.com" target="_blank" className="company-link" rel="noopener noreferrer">↗</a>
                </div>

                <div className="item-description">
                  <ul className="description-list">
                    <li>First unicorn startup of Turkey with $1.8B valuation.</li>
                    <li>Maintained the level editor of Star Blast.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Sep 2021 - Feb 2022</div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="education-item">
              <img src="/university_of_milan_logo.jpeg" alt="Universita degli Studi di Milano" className="institution-logo" />
              <div className="item-content">
                <div className="item-title">Exchange Student at Department of Informatics</div>
                <div className="item-subtitle">Università degli Studi di Milano</div>
                <div className="item-description">
                  Took masters level courses with a focus on DBMSs and Data Engineering.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Aug 2021 - Dec 2021</div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="education-item">
              <img src="/steyfinancialtechnologies_logo.jpeg" alt="Stey Financial Technologies" className="institution-logo" />
              <div className="item-content">
                <div className="item-title">Software Engineer Intern</div>
                <div className="item-subtitle">Stey Financial Technologies</div>
                <div className="item-description">
                Contributed to the arbitrage trading project where I managed multiple WebSocket Clients to retrieve live order data from various crypto market APIs.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Sep 2019 - Jun 2023</div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="education-item">
              <img src="/hacettepe_university_logo.jpeg" alt="Hacettepe University" className="institution-logo" />
              <div className="item-content">
                <div className="item-title">Bachelor's in Computer Engineering</div>
                <div className="item-subtitle">
                  Hacettepe University
                  <a href="https://www.cs.hacettepe.edu.tr" target="_blank" className="company-link" rel="noopener noreferrer">↗</a>
                  </div>
                <div className="item-description">
                  <ul className="description-list">
                    <li>First computer engineering department of Turkey.</li>
                    <li>Graduated with high honours with a GPA of 3.65/4.00.</li>
                    <li>Problem setter for HUPROG, the largest university-level competitive programming contest in Turkey.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
