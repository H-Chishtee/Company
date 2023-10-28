import React from "react";
import { images } from "../../Constants";
import "./About.scss";

const About = () => {
  return (
    <div id="Who we are" className="container">
      <div className="head-text">
        <h2>
          Why <span>PROJJEXX?</span>
        </h2>
      </div>
      <hr />
      <div className="bottom">
        <div className="primary">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h4>Global Outreach</h4>
                <p>
                  We are based in london and proud to be a part of a thriving
                  and vibrant tech city. we work with clients all over the world
                  bothe remotly and in-person. Our Diverse team is well versed
                  in managing the needs of our clients. because we go above and
                  beyond.
                </p>
              </div>
              <div className="col-6 image">
                <img src={images.team01} alt="Team" />
              </div>
            </div>
          </div>
        </div>
        <div className="secondary">
          <div className="container">
            <div className="row">
              <div className="col-6 image">
                <img src={images.team03} alt="Team" />
              </div>
              <div className="col-6">
                <h4>supreme talent, at a fraction of the price</h4>
                <p>
                  We have built a team of developers and engineers in the world
                  to solve even the most complex of problems. Our Expertise is
                  unrivalled
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h4>We Believe in building lifelong relationships</h4>
                <p>
                  We aim to equip you to handle the inevitable ups & downs not
                  just now but forever. our Approach to business prioritises
                  you. your vision, your goals. we want you to succees so we can
                  continue to help you grow. we're with you in person, on the
                  phone or online 24/7
                </p>
              </div>
              <div className="col-6 image">
                <img src={images.team02} alt="Team" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
