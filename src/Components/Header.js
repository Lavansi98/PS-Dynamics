import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">PX Dynamics</a>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="img"></div>
      <div className="center">
        <div className="title">
          Capture life's moments with precision and clarity—discover our premium
          cameras today!
        </div>
        <div className="btns">
          <button>Learn More</button>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Header;
