import React, { useState, useEffect } from "react";
import { SidebarData } from "./SidebarData";
import Logo from "./assets/logo.svg";
import Frame from "./assets/Frame.svg";
import Add from "./assets/add.svg";

import { BaseCard } from "./BaseCard";
// Supports weights 100-900
import profilePic1 from "./assets/profiles/Base.png";
import profilePic2 from "./assets/profiles/Base2.png";
import profilePic3 from "./assets/profiles/Base3.png";
import profilePic4 from "./assets/profiles/Base4.png";
import profilePic5 from "./assets/profiles/Base5.png";
// icons
import sun from "./assets/icons/Sun_solid.svg";
import moon from "./assets/icons/Moon_solid.svg"

const data = [
  { id: 1, profilePic: profilePic1, name: "Peter Taylor" },
  { id: 2, profilePic: profilePic2, name: "Szekeres Dalma" },
  { id: 3, profilePic: profilePic3, name: "Balázs Annamária" },
  { id: 4, profilePic: profilePic4, name: "Leslie Alexander" },
  { id: 5, profilePic: profilePic5, name: "Cameron Williamson" },
  // Add more data as needed
];
function Sidebar() {
  console.log("Sidebar Rendered");
  //     const [isChecked, setChecked] = useState(false);

  // // Function to handle toggle switch changes
  // const handleToggle = () => {
  //     setChecked(!isChecked);
  // };

  const initialState = localStorage.getItem("isChecked") === "true";
  const [isChecked, setChecked] = useState(initialState);

  // Function to handle toggle switch changes
  const handleToggle = () => {
    const newState = !isChecked;
    setChecked(newState);
    // Save the state in local storage
    localStorage.setItem("isChecked", newState);
  };

  // Use useEffect to only run on mount and update
  useEffect(() => {
    // Update the local storage whenever the state changes
    localStorage.setItem("isChecked", isChecked);
  }, [isChecked]);
  return (
    <div className="sidebar-container">
      <div className="sidebar-color"></div>
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo-icon">
            <img className="logo" src={Logo} alt="Logo" />
            <img className="frame" src={Frame} alt="Logo" />
          </div>
          <h2 className="logo-text">SCRATCH</h2>
        </div>

        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="list-items">
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="centered-button">
          <span className="button-icon">
            <img className="add-btn" src={Add} alt="add" />
          </span>
          <span className="button-text">All Agent</span>
        </button>
        <div className="base">
          {data.map((person) => (
            <BaseCard
              key={person.id}
              profilePic={person.profilePic}
              profilename={person.name}
            />
          ))}
        </div>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleToggle} />
          <span className="toggle-switch">
            <span className="toggle-switch-label-icon"><img src={sun} alt="" /></span>
            <span className="toggle-switch-label-text"><span></span>Light</span>
            <span className="toggle-switch-label-icon2"><img src={moon} alt="" /></span>
            <span className="toggle-switch-label-text-2">Dark</span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
