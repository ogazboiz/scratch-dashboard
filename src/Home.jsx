import React from "react";
import Chart from "./chart";
import "./home.css";
import SearchBar from "./SearchBar";
import profilePic from "./assets/profiles/Base6.png";
import setting from "./assets/setting.svg";
import power from "./assets/power.svg";
import DoughnutChart from "./DoughnutChart";
import Application from "./Application";
import AreaChart from "./AreaChart";
import CostChart from "./CostChart";
import GhanaChart from "./GhanaChart";
import IndonesiaChart from "./IndonesiaChart";
import IndiaChart from "./IndiaChart";
import PeruChart from "./PeruChart";
import OtherChart from "./OtherChart";
function Home() {
  const applications = [
    { id: 1, name: "Chrome", browser: "chrome", time: "1h 12min" },
    { id: 2, name: "Safari", browser: "safari", time: "1h 37min" },
    { id: 3, name: "Chrome", browser: "chrome", time: "1h 12min" },
    { id: 4, name: "Chrome", browser: "chrome", time: "1h 12min" },
    { id: 5, name: "Microsoft Edge", browser: "edge", time: "22min" },
    { id: 6, name: "Safari", browser: "safari", time: "1h 37min" },
    { id: 7, name: "Line Messenger", browser: "line", time: "7min" },
  ];

  return (
    <div className="home-container">
      <div className="seach-bar-container">
        <SearchBar />
        <div className="card">
          <img src={profilePic} alt="Profile" className="profile-pics" />
          <div className="profile-info">
            <h2>Jackson D.</h2>
            <h6>Manager</h6>
          </div>
          <img src={setting} alt="setting" className="profile-setting" />
          <img src={power} alt="power" className="profile-power" />
        </div>
      </div>

      <div className="top-chart-section">
        <div className="home-chart">
          <p>Usage Yesterday, 24 June</p>
          <h1>7 h 34 min</h1>

          <Chart />
        </div>
        <div className="home-chart2">
          <div className="cities-chart">
            <div>
              <div className="ghana-container">
                <p>Ghana</p>
                <h1>2 h 45 min</h1>
                <GhanaChart />
              </div>
              <div className="indonesia-container">
                <p>Indonesia</p>
                <h1>2 h 45 min</h1>
                <IndonesiaChart />
              </div>
            </div>
            <div>
              <div className="india-container">
                <div className="india-content">
                  <p>Indonesia</p>
                  <p>+5%</p>
                  <h1>2 h 21 min</h1>
                </div>
                <IndiaChart />
              </div>
              <div className="peru-container">
                <div className="peru-content">
                  <p>Peru</p>
                  <p>+5%</p>
                  <h1>2 h 21 min</h1>
                </div>
                <PeruChart />
              </div>
              <div className="other-container">
                <div className="other-content">
                  <p>Others</p>
                  <p>+5%</p>
                  <h1>2 h 21 min</h1>
                </div>
                <OtherChart />
                {/* <GhanaChart/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-chart-section">
        <div className="home-chart">
          <h1>Total numbers Extracted</h1>
          <DoughnutChart />
        </div>
        <div className="home-chart">
          <h1>Application</h1>
          <Application applications={applications} />
        </div>
        <div className="web-chart-grid">
          <div className="web-static-chart">
            <h1>Webstactic</h1>
            <AreaChart />
          </div>
          <div className="cost-chart">
            <h1>cost</h1>
            <CostChart />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Home;
