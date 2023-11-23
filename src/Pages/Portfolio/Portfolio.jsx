import React, { useState } from "react";
import { Drawer } from "antd";
import { Carousel } from "antd";
import "./Portfolio.css";
import card1 from "../../images/card-1.jpg";
import card2 from "../../images/card-2.jpg";
import card3 from "../../images/card-3.jpg";
import card4 from "../../images/card-4.jpg";
import card5 from "../../images/card-5.jpg";
import card6 from "../../images/card-6.jpg";
import card7 from "../../images/card-7.jpg";
import card8 from "../../images/card-8.jpg";
import card9 from "../../images/card-9.jpg";
import { FaRegFileAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";

function Portfolio() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-title">
          <h2 className="portfolio-center-text">
            MY <span>PORTFOLIO</span>
          </h2>
          <div className="portfolio-text-subtitle">
            A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME
          </div>
        </div>
        <div className="cards-part">
          <div className="cards-container">
            <div className="card" onClick={showDrawer}>
              <img src={card1} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
            <div className="card" onClick={showDrawer}>
              <img src={card2} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
            <div className="card" onClick={showDrawer}>
              <img src={card3} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
            <div className="card" onClick={showDrawer}>
              <img src={card4} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
            <div className="card" onClick={showDrawer}>
              <img src={card5} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
            <div className="card" onClick={showDrawer}>
              <img src={card6} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
            <div className="card" onClick={showDrawer}>
              <img src={card7} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
            <div className="card" onClick={showDrawer}>
              <img src={card8} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
            <div className="card" onClick={showDrawer}>
              <img src={card9} alt="" />
              <div className="blue">
                <span>SLIDER FORMAT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer placement="right" onClose={onClose} open={open}>
        <Carousel autoplay autoplaySpeed={1000} afterChange={onChange}>
          <div className="carousel-img">
            <img src={card1} alt="" />
          </div>
          <div className="carousel-img">
            <img src={card2} alt="" />
          </div>
          <div className="carousel-img">
            <img src={card3} alt="" />
          </div>
          <div className="carousel-img">
            <img src={card4} alt="" />
          </div>
          <div className="carousel-img">
            <img src={card5} alt="" />
          </div>
          <div className="carousel-img">
            <img src={card6} alt="" />
          </div>
          <div className="carousel-img">
            <img src={card7} alt="" />
          </div>
          <div className="carousel-img">
            <img src={card8} alt="" />
          </div>
          <div className="carousel-img">
            <img src={card9} alt="" />
          </div>
        </Carousel>
        <div className="drawer-text">
          <h2>Slider Format</h2>
          <div className="icon-text">
            <span>
              <FaRegFileAlt />
            </span>
            <p>Project : WEBSITE</p>
          </div>
          <div className="icon-text">
            <span>
              <IoPerson />
            </span>
            <p>Client : ENVATO</p>
          </div>
          <div className="icon-text">
            <span>
              <GiDuration />
            </span>
            <p>Duration : 3 MONTHS</p>
          </div>
          <div className="icon-text">
            <span>
              <MdComputer />
            </span>
            <p> Technologies : HTMLJAVASCRIPT</p>
          </div>
          <div className="icon-text">
            <span>
              <FaMoneyBillAlt />
            </span>
            <p> Budget : 1550 USD</p>
          </div>
        </div>
        <div className="preview-btn">
          <button>Preview</button>
        </div>
      </Drawer>
    </section>
  );
}

export default Portfolio;
