import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Problem Solving <br> Team Player <br> Ambitious",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Deepak K Singh" },
    { id: 2, title: "Email:", text: "iamnew2014@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9140 779 653" },
    { id: 4, title: "Linkedin", text: "Deepak K Singh" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-02.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I am from Varanasi Currently living in Noida and Pursuing My 
                B.Tec Degree I'm interested in app Devlopment and front End 
                Web Devlopment 
                 
              </div>
              <div className="about__info-p2">
              I'm passionate about learning and implementing new things, 
              Always excited to work and interact with like minded people.
              You Can Contact with me &#10549; 
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
