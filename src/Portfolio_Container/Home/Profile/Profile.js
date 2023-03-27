import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css'
export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://m.facebook.com/m.tolalemma">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/tolalemma/">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="https://mobile.twitter.com/tolalemma">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/tolalemma/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://t.me/tolalemma">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://call.imo.im/1optimisticboy">
              <i className="fa-brands fa-google-plus"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M  <span className="highlighted-text">Tola Lemma</span>
            </span>
          </div>
          <div className="profile-details-role">
             <span className="primary-text">
                {" "}
                <h1>
                  {' '}
                  <Typical 
                    loop={Infinity}
                    steps={[
                      "Full Stack Developer 💻  ",
                      2000,
                      "MERN Stack Developer 🌐  ",
                      2000,
                      "React Dev  ",
                      2000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                Bringing web applications to life with seamless front-end and back-end integration.
                </span>
             </span>
          </div>
          <div className="profile-options">
              <button className="btn primary-btn">
                {" "}
                Hire Me
                {' '}
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              </button>
              <a href="My_CV.pdf" download="Tola Lemma's resume.pdf">
                <button className="btn highlighted-btn">
                  Get Resume
                </button>
                </a>
          </div>
        </div>
        <div className="profile-picture">
           <div className="profile-picture-background">
           
           </div>
        </div>
      </div>
    </div>
  );
};
