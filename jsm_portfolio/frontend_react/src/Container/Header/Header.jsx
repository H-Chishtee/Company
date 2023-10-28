import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header id="home" className="app__header">
      <div className="app__header-content">
        <div className="container">
          <div className="row col">
            <div className="col-6">
              <h1>
                TRANSFORM YOUR BUSINESS WITH THE BEST TALENT ON THE MARKET
              </h1>
            </div>
            <div className="col-6">
              <h3>
                OUR INNOVATIVE SOLUTIONS UTILISE CUTTING-EDGE SOFTWARE, TAKING
                YOUR BUSINESS TO THE NEXT LEVEL.
              </h3>
              <p> LEARN ABOUT HOW WE CAN HELP YOU...</p>
              <p>BOOK A FREE CONSULTATION TODAY</p>
              <a
                href="https://calendly.com/osmanmalik/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" class="btn btn-primary btn-lg">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
