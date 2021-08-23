import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Education",
    subHeading: "My Education",
    text:
      "I'm a Third year Electrical and electronics engineering student at Galgotias college of engineering and technology.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "High School",
      price: 91.2,
      msg1: "Swami Harsewanand",
      msg2: "Public School",
      msg3: "Uttar Pradesh",
      msg4: "CBSE",
      msg5: "2015",
    },
    {
      id: 2,
      heading: "Intermediate",
      price: 78,
      msg1: "Holy Cross",
      msg2: "School",
      msg3: "Uttar Pradesh",
      msg4: "ICSE",
      msg5: "2017",
    },
    {
      id: 3,
      heading: "Under Graduation",
      //price: 61.75,
      msg1: "Galgotias college of",
      msg2: "engg. and Technologys",
      msg3: "Uttar Pradesh",
      msg4: "Aktu",
      msg5: "(2018-2022)",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  {prices.price}
                  <span>%</span>
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                  <li>{prices.msg5}</li>
                </ul>
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    View Result
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
