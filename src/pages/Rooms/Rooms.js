import React from "react";
import "./rooms.css";

function Rooms() {
  return (
    <div className="rooms">
      <div className="full-Img" id="full-img-id">
        <img src="/images/room1.jpg" id="fullimg" alt="" className="room-img" />
        <span>X</span>
      </div>

      <div className="img-gallery">
        <img src="/images/room1.jpg" alt="" className="room-img" />
        <img src="/images/hf.jpg" alt="" className="room-img" />
        <img src="/images/room3.jpg" alt="" className="room-img" />
        <img src="/images/room4.jpg" alt="" className="room-img" />
        <img src="/images/room5.jpg" alt="" className="room-img" />
        <img src="/images/room6.jpg" alt="" className="room-img" />
        <img src="/images/outside.jpg" alt="" className="room-img" />
        <img src="/images/ketchen.jpg" alt="" className="room-img" />
        <img src="/images/loan.jpg" alt="" className="room-img" />
        <img src="/images/frount.jpg" alt="" className="room-img" />
        <img src="/images/md.jpg" alt="" className="room-img" />
      </div>
    </div>
  );
}

export default Rooms;
