import React from "react";
import {
  FaGithub,
  FaPython,
  FaCircleNotch,
  FaAppStore,
  FaAndroid,
  FaCalculator,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "Projects",
    subHeading: "My Projects",
    text:
      "The Minimum is my Religion",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "This Website is created using Html Css and React you can find the source code at GitHub",
    },
    {
      id: 2,
      icon: <FaAndroid className="commonIcons" />,
      heading: "Meme App",
      text:
        "I created a meme app using herokuapp meme Api",
    },
    {
      id: 3,
      icon: <FaCalculator className="commonIcons" />,
      heading: "Calculator App",
      text:
        "I created a Calculator Api Using Kotlin and Android Devlopment skills",
    },
    {
      id: 4,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Live Covid 19 Tracker",
      text:
        "This Project was made using React and Covid19India Api",
    },
    {
      id: 5,
      icon: <FaPython className="commonIcons" />,
      heading: "AI Assistant",
      text:
        "Iron Man Jarvis AI Desktop Voice Assistant Using Python Speaking and command funtion ",
    },
    {
      id: 6,
      icon: <FaAppStore className="commonIcons" />,
      heading: "Birthday Wish app",
      text:
        "Desined a Birthday wishing app",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
