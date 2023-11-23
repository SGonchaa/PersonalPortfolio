import React from "react";
import "./Home.css";
import homeImg from "../../images/home-img.jpg";
import { GoPersonFill } from "react-icons/go";
import { PiShoppingBagFill } from "react-icons/pi";
import WordFlicker from "../../Components/Wordflicker";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="img-part">
          <img src={homeImg} alt="" />
        </div>
        <div className="text-part">
          <h3>HI THERE!</h3>
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontFamily: "Poppins , sans-serif",
            }}
          >
            <span style={{ color: "white", fontSize: "2rem", margin: "5px" }}>
              I'M
            </span>
            <WordFlicker />
          </div>

          <p>
            I'm a Freelance UI/UX Designer and Developer based in London,
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <div className="btn-part">
            <button className="about-btn">
              <GoPersonFill className="about-button-icon"></GoPersonFill>
              MORE ABOUT ME
            </button>
            <button className="portfolio-btn">
              <PiShoppingBagFill className="portfolio-button-icon"></PiShoppingBagFill>
              PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
