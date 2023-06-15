import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
 
  let fadeInScreenHandler = (screen) => {
    if (!props || screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const options = {
    loop: true,
    margin: 3,
    autoplayHoverPause: true,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
      7128: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div id={props.id || ""}>
      <ScreenHeading
        title={"A Bit of My Project"}
        subHeading={"CS - Computer Science Related"}
      />
      <section className="project-section" >
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...options}
            >
              <div className="col-lg-12 ms-3">
                <div className="project-item">
                  <div className="project-desc">
                    <p>
                      <i className="fa fa-quote-left" />
                      The Vital Registration System is a web-based application
                      that enables the registration and management of vital
                      events such as births, deaths, and marriages...
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Vital Registration website</h5>
                    <p>CS Related</p>
                  </div>
                    <i className="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/Tola-lemma/VitalRegistration"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" style={{fontSize:"2rem"}}></i>
                    </a>
                </div>
              </div>

              <div className="col-lg-12 ms-3">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      This is a web application for managing employees and
                      departments using the MERN stack and Authentication and Authorization with
                      JWT.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Employee Management System</h5>
                    <p>IT Related</p>
                  </div>
                    <i className="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/Tola-lemma/Employee-management-using-MERN-stack"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"style={{fontSize:"2rem"}}></i>
                    </a>
                </div>
              </div>
              <div className="col-lg-12 ms-3">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      The Camera Recharge Mobile card is a mobile application
                      built with Flutter that allows users to check their
                      balance and recharge their mobile account ...
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Camera Recharge Mobile card</h5>
                    <p>Mob App</p>
                  </div>
                    <i className="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/Tola-lemma/Camera_recharge_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"style={{fontSize:"2rem"}}></i>
                    </a>
                </div>
              </div>
              <div className="col-lg-12 ms-3">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      This is a simple calculator app built with ReactJS. It
                      supports basic arithmetic operations such as addition,
                      subtraction, multiplication, and division.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>ReactJS Calculator</h5>
                    <p>Maths Related</p>
                  </div>
                    <i className="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/Tola-lemma/calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"style={{fontSize:"2rem"}}></i>
                    </a>
                </div>
              </div>
              <div className="col-lg-12 ms-3">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      This project demonstrates how to implement user
                      management, authentication, and authorization in a C# Web
                      API using JWT. The project is built
                      using .NET 6.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>
                      User Management C# Web API
                    </h5>
                    <p>CS Related</p>
                  </div>
                    <i className="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/Tola-lemma/Authentication_and_Authorization-using-JWT-C_SHARP_WEB_API"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"style={{fontSize:"2rem"}}></i>
                    </a>
                </div>
              </div>
              <div className="col-lg-12 ms-3">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      This repository contains my personal portfolio, showcasing
                      my skills, projects, and experience. It serves as a
                      comprehensive overview of my professional background and
                      achievements.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>My Portfolio</h5>
                    <p>CS Related</p>
                  </div>
                    <i className="fa-brands fa-github"></i>{" "}
                    <a
                      href="https://github.com/Tola-lemma/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"style={{fontSize:"2rem"}}></i>
                    </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
