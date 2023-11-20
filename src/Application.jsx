import React from 'react'
import './Application.css'
import chromeIcon from "./assets/applications/chrome.svg";
import safariIcon from "./assets/applications/safari.svg";
import edgeIcon from "./assets/applications/edge.svg";
import lineIcon from "./assets/applications/line.svg";
const browserIcons = {
    chrome: chromeIcon,
    safari: safariIcon,
    edge: edgeIcon,
    line: lineIcon
  };
function Application({ applications }) {
  return (
    <div className='application-container'>
        {applications.map((app) => (
        <div key={app.id} className='application-list'>
          <img src={browserIcons[app.browser]} alt={app.browser} />
          <div className='application-content'>
            <p className='title'>{app.name}</p>
            <p className='time'>{app.time}</p>
          </div>
         
          
        </div>
      ))}
    </div>
  )
}

export default Application