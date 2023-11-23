import React from "react";
import "./About.css";
import { Progress } from "antd";
import aboutImg from "../../images/about-img.jpg";
import { FaDownload , FaCalendarAlt } from "react-icons/fa";

function About() {
  var data = [
    {
      name: "HTML",
      percent: 80,
    },
    {
      name: "JQUERY",
      percent: "65",
    },
    {
      name: "ILLUSTRATOR",
      percent: "60",
    },
    {
      name: "JAVASCRIPT",
      percent: "60",
    },
    {
      name: "WORDPRESS",
      percent: "90",
    },
    {
      name: "AFTER EFFECTS",
      percent: "75",
    },
    {
      name: "CSS",
      percent: "75",
    },
    {
      name: "ANGULAR",
      percent: "85",
    },
    {
      name: "PHOTOSHOP",
      percent: 80,
    },
  ];
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-title">
          <h2 className="center-text">
            ABOUT <span>ME</span>
          </h2>
          <div className="text-subtitle">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </div>
        </div>

        <div className="information">
          <div className="container-img-part">
            <div className="image">
              <img className="about-img" src={aboutImg} alt="" />
            </div>
          </div>
          <div className="container-text-btn-part">
            <div className="text">
              <div className="left-text">
                <p>
                  First Name:
                  <span>Daria</span>
                </p>
                <p>
                  Last Name:
                  <span>Taylor</span>
                </p>
                <p>
                  Birthdate
                  <span>21 June 1990</span>
                </p>
                <p>
                  Nationality:
                  <span>English</span>
                </p>
                <p>
                  Experience:
                  <span>7 years</span>
                </p>
                <p>
                  Address:
                  <span>Istanbul</span>
                </p>
              </div>
              <div className="right-text">
                <p>
                  Freelance:
                  <span>Available</span>
                </p>
                <p>
                  Languages:
                  <span>English</span>
                </p>
                <p>
                  Phone:
                  <span>+34 21 18 40 10</span>
                </p>
                <p>
                  Email:
                  <span>you@you.com</span>
                </p>
                <p>
                  Skype:
                  <span>daria.taylor</span>
                </p>
                <p>
                  Dribbble:
                  <span>taylor.dribbble</span>
                </p>
              </div>
            </div>
            <div className="btn">
              <button className="download-cv">
                <FaDownload className="btn-icon"></FaDownload>
                DOWNLOAD MY CV
              </button>
            </div>
          </div>
        </div>
        <div className="line">
          <hr></hr>
        </div>
      </div>

      <div className="resume-container">
        <div className="experience">
          <h2>EXPERIENCE</h2>
          <div className="card">
            <div className="blue-line"></div>
            <div className="resume-info">
              <div className="duration">
                <FaCalendarAlt className="duration-icon"></FaCalendarAlt>
                <span>2017-2019</span>
              </div>
              <div className="resume-header">
                <p>
                  WEB DESIGNER
                  <span className="symbol"> - </span>
                  <span className="bold-p">ENVATO</span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="blue-line"></div>
            <div className="resume-info">
              <div className="duration">
                <FaCalendarAlt className="duration-icon"></FaCalendarAlt>
                <span>2014-2017</span>
              </div>
              <div className="resume-header">
                <p>
                  WEB DEVELOPER
                  <span className="symbol"> - </span>
                  <span className="bold-p">TWITTER</span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="blue-line"></div>
            <div className="resume-info">
              <div className="duration">
                <FaCalendarAlt className="duration-icon"></FaCalendarAlt>
                <span>2010-2014</span>
              </div>
              <div className="resume-header">
                <p>
                  CONSULTANT
                  <span className="symbol"> - </span>
                  <span className="bold-p">GOOGLE</span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.
              </p>
            </div>
          </div>
        </div>

        <div className="education">
          <h2>EDUCATION</h2>
          <div className="card">
            <div className="blue-line"></div>
            <div className="resume-info">
              {" "}
              <div className="duration">
                <FaCalendarAlt className="duration-icon"></FaCalendarAlt>
                <span>2007-2010</span>
              </div>
              <div className="resume-header">
                <p>
                  ENGINEERING DEGREE
                  <span className="symbol"> - </span>
                  <span className="bold-p">ISTANBUL UNIVERSITY</span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="blue-line"></div>
            <div className="resume-info">
              <div className="duration">
                <FaCalendarAlt className="duration-icon"></FaCalendarAlt>
                <span>2005-2007</span>
              </div>
              <div className="resume-header">
                <p>
                  MASTERS DEGREE
                  <span className="symbol"> - </span>
                  <span className="bold-p">PARIS UNIVERSITY</span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="blue-line"></div>
            <div className="resume-info">
              <div className="duration">
                <FaCalendarAlt className="duration-icon"></FaCalendarAlt>
                <span>2001-2005</span>
              </div>
              <div className="resume-header">
                <p>
                  BACHELOR DEGREE
                  <span className="symbol"> - </span>
                  <span className="bold-p">MOSCOW HIGH SCHOOL</span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="all-skills">
          <div className="skills">
            {data.slice(0, 3).map((bar) => {
              return (
                <div className="skill-bar">
                  <p>{bar.name}</p>
                  <Progress percent={bar.percent}></Progress>
                </div>
              );
            })}
          </div>
          <div className="skills">
            {data.slice(3, 6).map((bar) => {
              return (
                <div className="skill-bar">
                  <p>{bar.name}</p>
                  <Progress percent={bar.percent}></Progress>
                </div>
              );
            })}
          </div>
          <div className="skills">
            {data.slice(6, 9).map((bar) => {
              return (
                <div className="skill-bar">
                  <p>{bar.name}</p>
                  <Progress percent={bar.percent}></Progress>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
