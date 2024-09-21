import React from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css"; // Assuming you will style it using CSS

const LandingPage = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push("/get-started"); // Change this to the route you want to navigate to
  };

  return (
    <div className="landing-page">
      <div className="left-section">
        <h1>Welcome to Our Conference</h1>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="right-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p>
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
          ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
        <p>
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
