const Projects: React.FC = () => {
  return (
    <div id="projects" className="tab-content">
      <h2 className="section-title highlight-text">Projects</h2>
      
      <div className="project-item">
        <div className="item-title">
          <a href="https://github.com/orgs/GaitAnalysis/repositories" target="_blank" rel="noopener noreferrer">Gait analysis with single camera setup</a>
        </div>
        <div className="item-subtitle">Graduation Project</div>
        <div className="item-date">Sep 2022 - May 2023</div>
        <div className="item-description">
          Developed a gait analysis system using a single camera setup to extract gait parameters for medical applications. Utilized computer vision techniques and machine learning algorithms to analyze walking patterns and identify abnormalities.          
        </div>
      </div>

      <div className="project-item">
        <div className="item-title">
          <a href="https://github.com/mucansever/kmeans-recommender" target="_blank" rel="noopener noreferrer">How to build a recommendation system?</a>
        </div>
        <div className="item-subtitle">Experimental Project</div>
        <div className="item-date">Jan 2023</div>
        <div className="item-description">
          Guide on building Simple K-Means recommendation models.
        </div>
      </div>

      <div className="project-item">
        <div className="item-title">
          <a href="https://github.com/mucansever/image4location" target="_blank" rel="noopener noreferrer">NLP based photo geo-location</a>
        </div>
        <div className="item-subtitle">Experimental Project</div>
        <div className="item-date">May 2022</div>
        <div className="item-description">
          Cracking Geoguessr with LLMs.
        </div>
      </div>

      <div className="project-item">
        <div className="item-title">
          <a href="https://github.com/mucansever/huffman_coding" target="_blank" rel="noopener noreferrer">Huffman Encoder/Decoder</a>
        </div>
        <div className="item-subtitle">Experimental Project</div>
        <div className="item-date">Feb 2021</div>
        <div className="item-description">
          Basic compression algorithm written in C++.
        </div>
      </div>
    </div>
  );
};

export default Projects;
