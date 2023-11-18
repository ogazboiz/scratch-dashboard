import React from 'react'
import Chart from './chart'
import "./home.css"
import SearchBar from './SearchBar'
import profilePic from "./assets/profiles/Base6.png";
import setting from "./assets/setting.svg";
import power from "./assets/power.svg";
import BottomChart from './BottomChart';
function Home() {
  return (
    <div className="home-container">
      <div className='seach-bar-container'>
          <SearchBar/>  
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
      
      <div className='top-chart-section'>
        <div className='home-chart'>
          
          <p>Usage Yesterday, 24 June</p>
          <h1>7 h 34 min</h1>
          
            <Chart/>  

        </div>
      </div>
      <div className='bottom-chart-section'>
        <div className='home-chart'>
          
          <BottomChart/>  
        </div>
           
          </div>
        
      <div>

      </div>
    </div>
  )
}

export default Home