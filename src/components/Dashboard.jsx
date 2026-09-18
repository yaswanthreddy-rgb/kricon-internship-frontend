import "./Dashboard.css";

function Dashboard() {
  const startPractice = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="dashboard" id="dashboard">

      <div className="dashboard-header">
        <div>
          <p className="dashboard-eyebrow">INTERVIEWACE AI</p>
          <h1>Welcome back <span>👋</span></h1>
          <p className="dashboard-subtitle">
            Track your interview preparation and improve your skills.
          </p>
        </div>

        <button className="practice-btn" onClick={startPractice}>
          Start Practice
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>DSA Solved</span>
          <strong>156</strong>
          <small>+12 this week</small>
        </div>

        <div className="stat-card">
          <span>Java Questions</span>
          <strong>98</strong>
          <small>+8 this week</small>
        </div>

        <div className="stat-card">
          <span>Mock Interviews</span>
          <strong>24</strong>
          <small>Completed this week</small>
        </div>

        <div className="stat-card">
          <span>Resume Score</span>
          <strong>85%</strong>
          <small>+10% improvement</small>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-title">
          <h2>Learning Progress</h2>
          <p>Continue your preparation journey.</p>
        </div>

        <div className="progress-grid">
          <div className="progress-card">
            <div className="progress-top">
              <span>Java</span>
              <strong>78%</strong>
            </div>
            <div className="progress-bar">
              <div className="progress-fill java-progress"></div>
            </div>
          </div>

          <div className="progress-card">
            <div className="progress-top">
              <span>DSA</span>
              <strong>64%</strong>
            </div>
            <div className="progress-bar">
              <div className="progress-fill dsa-progress"></div>
            </div>
          </div>

          <div className="progress-card">
            <div className="progress-top">
              <span>Python</span>
              <strong>52%</strong>
            </div>
            <div className="progress-bar">
              <div className="progress-fill python-progress"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-title">
          <h2>Recent Activity</h2>
          <p>Your latest preparation activities.</p>
        </div>

        <div className="activity-list">
          <div className="activity-card">
            <div className="activity-icon">✓</div>
            <div>
              <h3>Array Problems</h3>
              <p>Completed 5 questions</p>
            </div>
            <span>Today</span>
          </div>

          <div className="activity-card">
            <div className="activity-icon">✓</div>
            <div>
              <h3>Java Collections</h3>
              <p>Completed learning module</p>
            </div>
            <span>Yesterday</span>
          </div>

          <div className="activity-card">
            <div className="activity-icon">✓</div>
            <div>
              <h3>Mock Interview</h3>
              <p>Score: 82%</p>
            </div>
            <span>2 days ago</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Dashboard;
