import React from "react";
import "./Skills.scss";

const industryIcons = {
  Health: "fa fa-heart",
  Education: "fa fa-graduation-cap",
  "Finance & Fintech": "fa fa-dollar",
  Transport: "fa fa-car",
  "Technology & Startups": "fa fa-laptop",
  Telcommunication: "fa fa-phone",
  Energy: "fa fa-bolt",
  "Real Estate": "fa fa-building",
  Retail: "fa fa-shopping-cart",
};

const Skills = () => {
  return (
    <div id="industry" className="container">
      <h2>Featured Industries</h2>
      <div className="row">
        {Object.keys(industryIcons).map((industry) => (
          <div className="col-md-4 col-sm-6" key={industry}>
            <div className="box">
              <i className={`icon ${industryIcons[industry]}`}></i>
              <p>{industry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
