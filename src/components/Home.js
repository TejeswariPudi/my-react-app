// Home.js
import React from 'react';
import './Home.module.css'; // Adjust the import path for the CSS file

const Home = () => {
  return (
    <div className="page-container">
      <div className="slider-container">
        <div className="video-container">
          <video
            src="slidervideo.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="video-with-animation"
          ></video>
          <div className="content">
            <h1>SHOP NOW</h1>
            <br />
            <p>
              COST-EFFECTIVE     TWO & THREE-WHEELERS 
              <br /> & <br />OUTFIS FOR ALL WARES 🛍️.
            </p>
            <div className="button-container">
              {/* Add your buttons or any other content here */}
            </div>
          </div>
        </div>
        <br>
        </br><br>
        </br>
        <br>
        </br><br>
        </br>
        <br>
        </br><br>
        </br>
        <br>
        </br><br>
        </br>
        <br>
        </br><br>
        </br>
        <br>
        </br><br>
        </br>
        <br>
        </br><br>
        </br>
        <br>
        </br>
        <div className="slider-thumbnails">
        <div className="image-with-content">
            <img
              src="slider1.jpeg"
              alt="Slider Image 1"
              style={{ width: '100%', height: '1000px', objectFit: 'cover' }}
            />
            <div className="content-overlay">
              <h2> </h2>
              <p></p>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
