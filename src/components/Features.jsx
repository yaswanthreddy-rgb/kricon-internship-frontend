import "./Features.css";

function Features() {
  const features = [
    {
      icon: "💻",
      title: "DSA Practice",
      description:
        "Practice data structures and algorithms with coding problems and track your progress.",
      action: "Start DSA",
    },
    {
      icon: "☕",
      title: "Java Preparation",
      description:
        "Improve your Core Java, OOP, Collections, JDBC, Hibernate and Spring knowledge.",
      action: "Practice Java",
    },
    {
      icon: "🐍",
      title: "Python Practice",
      description:
        "Strengthen Python fundamentals, problem solving and interview concepts.",
      action: "Practice Python",
    },
    {
      icon: "📄",
      title: "Resume Analyzer",
      description:
        "Analyze your resume and identify areas that can be improved for technical roles.",
      action: "Analyze Resume",
    },
    {
      icon: "🎤",
      title: "Mock Interview",
      description:
        "Prepare for technical interviews with questions, answers and performance tracking.",
      action: "Start Interview",
    },
  ];

  const handleFeature = (title) => {
    alert(`${title} feature is coming soon!`);
  };

  return (
    <section className="features" id="features">

      <div className="features-heading">
        <p className="features-eyebrow">INTERVIEW PREPARATION</p>
        <h2>Everything you need to get interview ready.</h2>
        <p>
          Practice coding, improve technical skills, analyze your resume
          and prepare for real interviews in one platform.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-top">
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-number">0{index + 1}</span>
            </div>

            <h3>{feature.title}</h3>
            <p>{feature.description}</p>

            <button className="feature-btn" onClick={() => handleFeature(feature.title)}>
              {feature.action}
              <span>→</span>
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Features;
