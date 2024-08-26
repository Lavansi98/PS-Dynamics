import React from "react";

const Section = () => {
  return (
    <>
      <section className="about-us">
        <div className="about">
          <img src="./cam.jpg" className="pic" alt="cam-image"/>
          <div className="text">
            <h2>About Us</h2>
            <h5>Empowering your vision with cutting-edge technology</h5>
            <p>
              At PX Dynamics, we believe that every moment deserves to be
              captured with stunning clarity and detail. Our mission is to
              provide photographers of all levels with top-of-the-line cameras
              and accessories that enhance their creative vision. With a
              commitment to quality and innovation, we offer a diverse range of
              products designed to meet the needs of both enthusiasts and
              professionals alike. Explore our collection and experience the
              difference that precision engineering can make in your photography
              journey.
            </p>
            <div className="data">
              <a href="#" className="hire">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
