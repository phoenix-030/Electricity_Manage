import homeImage from "../images/home.jpg";
import turnoffImage from "../images/turnoff.jpg";
import naturalImage from "../images/natural.jpg";
import ledImage from "../images/led.jpg";
import solarImage from "../images/solar.jpg";
import refrigiratorImage from "../images/refrigirator.png";
import acImage from "../images/Ac.jpg";
import animationImage from "../images/animation.png";

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <>
      <div className="home-container z-0" style={{ paddingTop: "80px" }}>
        {" "}
        <img src={homeImage} alt="" />
        <h1>Welcome to the Electricity Reducer</h1>
      </div>
      <div>
        <h2 className="text-capitalize fw-bolder text-center ">
          Our app for calculating and managing your electricity bills
          efficiently!
        </h2>
      </div>
      {/* ------------------------- */}
      <div className="m-3" style={{ textAlign: "center" }}>
        <Link to="/calculator" className="btn btn-primary">
          Go to Calculator
        </Link>
      </div>
      {/* ------------------------------ */}
      <section className="section">
        <img
          src={animationImage}
          className="sec-img"
          alt=""
        />
        Tips to Reduce Electricity Consumption
        {/* <img src="src\assets\images\animation.jpeg" className="sec-img" alt="" /> */}
      </section>
      <br />
      <br />
      {/* first box of the containers */}
      <div className="main-container">
        <div className="container1">
          <div className="image-container img ">
            <img
              src={turnoffImage}
              className="img float-start"
              alt=""
            />
          </div>
          <div className="content-container">
            <div className="text">
              <h4 className="text-primary">
                ⚡ Turn Off Appliances When Not in Use
              </h4>
              <p>
                <b>Switch Off Devices: </b> &nbsp; Many appliances continue
                consuming electricity even when they are idle. Always switch off
                lights, fans, TVs, and other devices when not needed. Developing
                this simple habit can significantly reduce electricity wastage
                and help lower your monthly electricity bill over time.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of the first container */} <br />
      <br />
      {/* second box of the containers */}
      <div className="main-container">
        <div className="container1">
          <div className="image-container img ">
            <img
              src={naturalImage}
              className="img float-start"
              alt=""
            />
          </div>
          <div className="content-container">
            <div className="text">
              <h4 className="text-primary"> 🌞 Make Use of Natural Light</h4>
              <p>
                <b>Switch Off Devices: </b> &nbsp; Open windows and curtains
                during the daytime to allow natural sunlight into your home.
                Sunlight reduces the need for artificial lighting, saves
                electricity, and creates a brighter living space. Proper use of
                daylight also improves mood, boosts productivity, and promotes a
                healthier indoor environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of the second container */}
      <br />
      <br />
      {/* third box of the containers */}
      <div className="main-container">
        <div className="container1">
          <div className="image-container img ">
            <img
              src={ledImage}
              className="img float-start"
              alt=""
            />
          </div>
          <div className="content-container">
            <div className="text">
              <h4 className="text-primary">
                {" "}
                💡 Use Energy-Efficient Lighting
              </h4>
              <p>
                <b>Use LED Lights: </b> &nbsp; Replace traditional incandescent
                bulbs with LED lights. LEDs consume much less power and provide
                better illumination while lasting longer. Though the initial
                cost may be slightly higher, LED lighting reduces long-term
                electricity expenses and maintenance costs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of the third container */}
      <br />
      <br />
      {/* fourth box of the containers */}
      <div className="main-container">
        <div className="container1">
          <div className="image-container img ">
            <img
              src={solarImage}
              className="img float-start"
              alt=""
            />
          </div>
          <div className="content-container">
            <div className="text">
              <h4 className="text-primary"> ☀️ Switch to Solar Energy</h4>
              <p>
                <b>Switch To Solar: </b> &nbsp; Using solar panels or solar
                lights reduces dependency on electricity board supply and lowers
                long-term bills.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of the fourth container */}
      <br />
      <br />
      {/* Fifth box of the containers */}
      <div className="main-container">
        <div className="container1">
          <div className="image-container img ">
            <img
              src={refrigiratorImage}
              className="img float-start"
              alt=""
            />
          </div>
          <div className="content-container">
            <div className="text">
              <h4 className="text-primary"> ❄️ Maintain Your Refrigerator</h4>
              <p>
                <b>Maintain Proper Temperature: </b> &nbsp; Keep your
                refrigerator temperature between 37°F and 40°F (3°C to 4°C) for
                optimal performance and energy efficiency. Regular cleaning of
                condenser coils and ensuring proper door seals also help reduce
                electricity consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of the fifth container */}
      <br />
      <br />
      {/* sixth box of the containers */}
      <div className="main-container">
        <div className="container1">
          <div className="image-container img ">
            <img
              src={acImage}
              className="img float-start"
              alt=""
            />
          </div>
          <div className="content-container">
            <div className="text">
              <h4 className="text-primary">❄️ Use Air Conditioners Wisely</h4>
              <p>
                <b>Set the temperature: </b> &nbsp; Set your air conditioner
                temperature between 24°C and 26°C for optimal energy efficiency.
                Keep doors and windows closed while using AC and clean filters
                regularly. Proper usage reduces power consumption while
                maintaining comfortable indoor temperatures.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of the sixth container */}
    </>
  );
};

export default Home;
