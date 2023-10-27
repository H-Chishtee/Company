import React from "react";
import "./MFooter.scss";
import { images } from "../../Constants";

const MFooter = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <img src={images.logo} alt="logo" />
            {/* <h4>For Business</h4> */}
            <a href="/employer">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                eveniet explicabo consequatur dicta dolorem facere veniam saepe
                nihil aliquam illo.
              </p>
            </a>
            {/* <a href="/healthplan">
              <p>Health plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a> */}
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resources">
              <p>Resources center</p>
            </a>
            <a href="/resources">
              <p>Testimonials</p>
            </a>
            <a href="/resources">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              {/* <p>
                <img src="" alt="Facebook" />
              </p> */}
              {/* <p>
                <img src="" alt="twitter" />
              </p> */}
              {/* <p>
                <img src="" alt="linkdin" />
              </p>
              <p>
                <img src="" alt="insta" />
              </p> */}
            </div>
          </div>
          <hr></hr>
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>@{new Date().getFullYear()} Projjexx. All right reserved.</p>
            </div>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFooter;
