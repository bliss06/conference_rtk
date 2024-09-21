import React from "react";

const ConfPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#venue">Venue</a>
          </li>
          <li>
            <a href="#addons">Add-ons</a>
          </li>
          <li>
            <a href="#meals">Meals</a>
          </li>
        </ul>
      </nav>
      <div id="venue">
        <h2>Venue</h2>
        <p>Details about the venue.</p>
      </div>
      <div id="addons">
        <h2>Add-ons</h2>
        <p>Details about the add-ons.</p>
      </div>
      <div id="meals">
        <h2>Meals</h2>
        <p>Details about the meals.</p>
      </div>
    </div>
  );
};

export default ConfPage;
