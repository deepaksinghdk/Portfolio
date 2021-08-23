import React from "react";
import pdf from 'src/resume.pdf';
import {
  FaHackerrank,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Deepak K Singh",
    text:
      "I'm looking for entry level Software Devlopment position.",
    image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaHackerrank className="headerIcon" />
                  </li>
                  <li>
                    <FaGithub className="headerIcon" />
                  </li>
                  <li>
                    <FaLinkedin className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="/src/resumefile/resume.pdf" className="btn btn-outline">
                    My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="/src/resumefile/resume.pdf" download className="btn btn-smart">
                    <FaFileDownload className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
