import React, {useState} from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (!props || screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"> <i className="fa-sharp fa-solid fa-circle-info"></i></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };
  
  const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Application Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 87 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React", ratingPercentage: 75 },
    { skill: "php", ratingPercentage: 65 },
    { skill: "Node JS", ratingPercentage: 76 },
    { skill: "Express JS", ratingPercentage: 75 },
    { skill: "Mongo Db", ratingPercentage: 80 },
    { skill: "SQL Server", ratingPercentage: 78 },
    { skill: "MySQL", ratingPercentage: 78 },
    { skill: "c#", ratingPercentage: 65 },
    { skill: "C++", ratingPercentage: 55 },
    { skill: "Java", ratingPercentage: 45 },
    { skill: "python", ratingPercentage: 30 },
    ];
  
  const applicationSkillsDetails = [
    { skill: "Visual Studio Code", ratingPercentage: 85 },
    { skill: "ms Visual studio ", ratingPercentage: 65 },
    { skill: "Atlas Cloud Server", ratingPercentage: 60 },
    { skill: "XAMP server", ratingPercentage: 80 },
    { skill: "ms Word,ms Excel,ms Powerpoint", ratingPercentage: 90 },
    { skill: "Figma", ratingPercentage: 70 },
    { skill: "EdrawMax", ratingPercentage: 70 },
    { skill: "Adobe premiere pro", ratingPercentage: 75 },
    { skill: "Adobe Illustrator", ratingPercentage: 75 },
    { skill: "OBS(Open Broadcaster Software) studio", ratingPercentage: 70 },
    ];

  const projectsDetails = [
      {
        title: "Employee Management System ",
        duration: { fromDate: "February 2023", toDate: "March 2023" },
        description:
          "This is a web application for managing employees and departments using the MERN stack, Authentication and Authorization with JWT(jsonwebtoken).",
        subHeading: "Technologies Used: MongoDB, Node JS, Express JS, React, CSS,Bootstrap.",
      },
      {
        title: "Camera Recharge Mobile Card Application",
        duration: { fromDate: "2022", toDate: "2023" },
        description:
          "The Camera Recharge Mobile card is a mobile application built with Flutter that allows users to check their balance and recharge their mobile account using their smartphone camera and recognize text using recognition technology.",
        subHeading:
          "Technologies Used:  Dart, Flutter.",
      },
      {
        title: "Customer Relation Management for Minsitry of Eduaction",
        duration: { fromDate: "2023", toDate: "present" },
        description:
          "Automating tasks that comes from customer.",
        subHeading:
          `Technologies Used: MongoDB, Node JS, Express JS, React, CSS, Bootstrap.`,
        },
    ];
  
  const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"Addis Ababa University, Ethiopia"}
          subHeading={"Bachelor of Computer Science"}
          fromDate={"2019"}
          toDate={"2023"}
        />
  
        
      </div>,
  
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"No work experience "}
            subHeading={"currently I have no work experience"}
            fromDate={"..."}
            toDate={"..."}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Currently working as ..........
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Developed .........
            </span>
            <br />
            <span className="resume-description-text">
              - API and real-time monitoring for .....
            </span>
            <br />
            <span className="resume-description-text">
              - tools to digitize ......
            </span>
            <br />
          </div>
        </div>
      </div>,
  
      /* PROGRAMMING SKILLS */
      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"><i className="fa-sharp fa-solid fa-code"></i> </div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

      /* Application SKILLS */
      <div className="resume-screen-container application-skills-container" key="application-skills">
        {applicationSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"><i className="fa-sharp fa-solid fa-desktop"></i> </div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Reading"
          description="Like Holy Bible, technology related sites/books."
        />
        <ResumeHeading
          heading="Editing and Designing"
          description="I like Editing with adobe premiere pro, youtube movie maker and Adobe illustrator for logo design and photo editing."
        />
        <ResumeHeading
          heading="Helping people"
          description="I'm highly interested in helping people who needs help"
        />
      </div>,
    ];

  const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };

  const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };

  const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
  return (
      <div className="resume-container screen-container fade-in" id={props.id || ""}>
          <div className="resume-content">
              <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
              <div className="resume-card">
                  <div className="resume-bullets">
                      <div className="bullet-container">
                          <div className="bullet-icons"></div>
                              <div className="bullets">{getBullets()}</div>
                      </div>
                  </div>
                  <div className="resume-bullet-details">{getResumeScreens()}</div>
              </div>
          </div>
      </div>
  );
};

export default Resume;

