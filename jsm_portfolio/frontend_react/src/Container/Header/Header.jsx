// import React from "react";
// import "./Header.scss";
// const Header = () => {
//   return <div>Header</div>;
// };

// export default Header;

// import React from "react";
// import { images } from "../../Constants";
// import "./Header.scss";

// const Header = () => {
//   return (
//     <div className="hero-section">
//       <div className="hero-content">
//         <h1 className="hero-heading">
//           Transform Your Business
//           <br />
//           With Cutting-Edge Software
//         </h1>
//         <p className="hero-subheading">
//           Boost productivity and efficiency with our innovative software solutions. Let us take your business to the next level.
//         </p>
//         <img src={images.profile} alt="profile">
//       </div>
//     </div>
//   );
// };

// export default Header;

// Header.jsx
import React from "react";
import "./Header.scss";
//import { AppWrap } from "../../wrapper";
const Header = () => {
  return (
    <header id="home" className="app__header">
      <div className="app__header-content">
        <h1>TRANSFORM YOUR BUSINESS WITH THE BEST TALENT ON THE MARKET</h1>
        <h3>
          OUR INNOVATIVE SOLUTIONS UTILISE CUTTING-EDGE SOFTWARE, TAKING YOUR
          BUSINESS TO THE NEXT LEVEL.
          <br />
          <br /> LEARN ABOUT HOW WE CAN HELP YOU...
          <br />
          <br /> BOOK A FREE CONSULTATION TODAY
        </h3>
        <a href="" target="_blank" rel="noopener noreferrer">
          <button className="book-now-button">Book Now</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
