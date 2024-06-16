import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Junior Reseacher at New York Academy of Sciences</h3>
            <span className="about__subtitle">The Junior Academy Alumni</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">3+ Projects</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">From Vision to Reality</h3>
            <span className="about__subtitle">Crafting Success as an Aspiring Entrepreneur</span>
        </div>
    </div>
  );
}

export default Info;