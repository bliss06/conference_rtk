import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const goToConfPage = () => {
    navigate("/conf");
  };
  return (
    <>
      <div class="container">
        <div class="half left">
          <section>
            <div>
              <h1>Welcome to Our Conference</h1>
              <h3>Plan your major event with us</h3>
              <button class="started" onClick={goToConfPage}>
                Get Started
              </button>
            </div>
          </section>
        </div>

        <div class="half right">
          <section>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <p>
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta.
              </p>
              <p>
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
