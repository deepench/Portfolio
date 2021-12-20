import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mighty-coder.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={mightycoder} alt="" className="sidebar__avatar" />
      <div className="sidebar__name">
        Deependra<span> Chaudhary</span>
      </div>
      <div className="sidebar__item sidebar__title">Web Development</div>
      <a href="!#">
        <div className="sidebar__item">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icon">
        <a href="">
          <img src={facebook} alt="facebook" className="sidebar__icon" />
        </a>
        <a href="">
          <img src={instagram} alt="linkedin" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="">
            <img src={github} alt="github" className="sidebar__icon" />
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Kolkata, India
        </div>
        <div className="sidebar__item">deependra.we@gmail.com</div>
        <div className="sidebar__item">+9779810653921</div>
      </div>
      <div className="sidebar__item sidebar__email">
        email me
      </div>
    </div>
  );
};

export default Sidebar;
