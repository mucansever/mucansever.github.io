const Skills: React.FC = () => {
  return (
    <div id="skills" className="tab-content">
      <div className="skills-container">
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul className="skill-list">
              <li>Go</li>
              <li>Java</li>
              <li>Python</li>
              <li>TypeScript/JavaScript</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Backend Technologies</h3>
            <ul className="skill-list">
              <li>Redis</li>
              <li>PostgreSQL</li>
              <li>DynamoDB</li>
              <li>Kafka</li>
              <li>gRPC</li>
              <li>GraphQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Cloud & Infrastructure</h3>
            <ul className="skill-list">
              <li>AWS</li>
              <li>Kubernetes</li>
              <li>Terraform</li>
              <li>Docker</li>
              <li>Microservices</li>
              <li>CI/CD</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Networking & Systems</h3>
            <ul className="skill-list">
              <li>TCP/IP</li>
              <li>Distributed Systems</li>
              <li>System Design</li>
              <li>Observability</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Frontend & Tools</h3>
            <ul className="skill-list">
              <li>React</li>
              <li>Git</li>
              <li>Linux</li>
              <li>Shell Scripting</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>
                <span className="language-name">Turkish</span> (Native)
              </li>
              <li>
                <span className="language-name">English</span> (Secondary)
              </li>
              <li>
                <span className="language-name">French</span> (B2)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
