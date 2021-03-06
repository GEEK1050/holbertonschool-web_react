import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

export const Notifications = function () {
  return (
    <div className="Notifications" style={{
      display: "flex"
    }}>
      <div className="notification-body-container">
        <p>Here is the list of notifications</p>
        <ul>
          <li data="default">New course available</li>
          <li data="urgent">New resume available</li>
          <li data="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
      </div>
      
      <button
        aria-label="close"
        onClick={() => {
          console.log("Close button has been clicked");
        }}
        style={{
          margin: "5px 2px auto auto" ,
          border: 'None',
          background: 'transparent'
        }}
      >
        <img alt="x" src={closeIcon} width={25} height={25} />
      </button>
      
    </div>
  );
};
