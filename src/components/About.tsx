const About: React.FC = () => {
  return (
    <div id="about" className="tab-content">
      <div className="about-content">
        <div className="about-profile">
          <img src="/me.png" alt="Mutlu Cansever" className="about-profile-picture" />
        </div>
        <div className="about-text">                    
          <p className="highlight-text">
          Hi there, I'm Mutlu.
          </p>
          
          <p>
          I'm a software engineer with technical depth and over 2.5 years of experience in the FinTech and Mobile Gaming domains. Currently based in Paris, France.
          </p>

          <p>
          My main areas of interest are distributed systems and computer networks. I particularly enjoy learning how things work at a low level.
          </p>

          <p>
          Feel free to connect with me on <a href="https://linkedin.com/in/mucansever" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://github.com/mucansever" target="_blank" rel="noopener noreferrer">GitHub</a>, or via <a href="mailto:mucansever@gmail.com">Email</a>.
          </p>

          <p>
            Here are some of my favorite aricles that shaped my perspective:
          </p>

          <div className="favorite-articles">
            <ul>
              <li><a href="https://martinfowler.com/articles/ship-show-ask.html" target="_blank" rel="noopener noreferrer">Ship show ask</a></li>
              <li><a href="https://entropicthoughts.com/transparent-leadership-beats-servant-leadership" target="_blank" rel="noopener noreferrer">Transparent leadership beats servant leadership</a></li>
              <li><a href="https://loggingsucks.com" target="_blank" rel="noopener noreferrer">Logging sucks</a></li>
              <li>1 Topic 1 Producer N Consumer</li>
              <li><a href="https://sre.google/sre-book/table-of-contents/" target="_blank" rel="noopener noreferrer">SRE book</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
