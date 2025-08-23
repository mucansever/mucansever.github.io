const About: React.FC = () => {
  return (
    <div id="about" className="tab-content">
      <div className="about-content">
        <div className="about-profile">
          <img src="/me.png" alt="Mutlu Cansever" className="about-profile-picture" />
        </div>
        <div className="about-text">                    
          <p>
          Hi there, I'm Mutlu.
          </p>
          
          <p>
          I'm a product engineer with technical depth and over 2.5 years of experience in the FinTech and Mobile Gaming domains.
          </p>

          <p>
          My main areas of interest are distributed systems and computer networks, and I particularly enjoy learning how things work at a low level.
          </p>

          <p>
          I'm currently based in Istanbul, Turkey. Previously, I lived in Ankara and Milan.
          </p>

          <p>
          Feel free to connect with me on <a href="https://linkedin.com/in/mucansever" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://github.com/mucansever" target="_blank" rel="noopener noreferrer">GitHub</a>, or via <a href="mailto:mucansever@gmail.com">Email</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
