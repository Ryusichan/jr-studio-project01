import React from "react";

const Header = () => {
  const mainImg = require("./../res/images/header-iphone.jpg");
  const WhiteCircle =
    require("./../res/images/decorative-white-circle.svg").default;
  const BlueCircle =
    require("./../res/images/decorative-blue-circle.svg").default;
  const YellowCircle =
    require("./../res/images/decorative-yellow-circle.svg").default;
  const GreenDiamond =
    require("./../res/images/decorative-green-diamond.svg").default;

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container">
              <h1>Mobile App Landing Page</h1>
              <p className="p-large p-heading">
                Start focusing on your goals and get more things done with Sync
                mobile application. It's the first app to harness the power of
                social connections to help you stay focused and get organized
              </p>
              <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-apple"></i>APP STORE
              </a>
              <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-google-play"></i>PLAY STORE
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <img className="img-fluid" src={mainImg} alt="alternative" />
            </div>
          </div>
        </div>
      </div>
      <div className="deco-white-circle-1">
        <img src={WhiteCircle} alt="alternative" />
      </div>
      <div className="deco-white-circle-2">
        <img src={WhiteCircle} alt="alternative" />
      </div>
      <div className="deco-blue-circle">
        <img src={BlueCircle} alt="alternative" />
      </div>
      <div className="deco-yellow-circle">
        <img src={YellowCircle} alt="alternative" />
      </div>
      <div className="deco-green-diamond">
        <img src={GreenDiamond} alt="alternative" />
      </div>
    </header>
  );
};

export default Header;
