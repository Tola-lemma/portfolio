import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (!props || screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const SCREEN_CONSTSANTS = {
    description:
      "Computer Scientist. Passionate about staying up-to-date with the latest technologies and trends in computer science. ",
    highlights: {
      bullets: [
        "Camera Recharge Moblile Application",
        "Vital Registration website",
        "Employee(/user) Management sytems using MERN stack",
        "Customer Relation Management Project for Ministry of Education ",
        "Building REST-API with c# and Node.Js",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return( 
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight " key={i}>
        <div className="highlight-blob "><i className="fa-solid fa-hand-point-right"></i></div>
        <span>{value}</span>
      </div>
      ))
    )
  };

  return (
    <div
      className="about-me-container screen-container fade-in "
      id={props.id || ""}
    >
      <div className="about-me-parent ">
        <ScreenHeading title={"About Me"} subHeading={"My Portfolio Overview"} />
        <div className="about-me-card ">
          <div className="about-me-profile "></div>
          <div className="about-me-details ">
            <span className="about-me-description ">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options ">
            <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Let's Discuss! </button>
              <a href="Resume.pdf" download="Tola Lemma's resume.pdf">
                <button className="btn highlighted-btn ">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
