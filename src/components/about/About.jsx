import React from 'react';
import "./about.css";
import AboutImg from "../../assets/Harshita_profile.png";
import CV from "../../assets/Resume.pdf";
import Info from './Info';
// import ScrollDown from '../home/ScrollDown';


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title scroll-reveal">About Me</h2>
            <span className="section__subtitle scroll-reveal stagger-1">My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img scroll-reveal-left" />
                <div className="about__data scroll-reveal-right">
                    <Info />
                    <p className="about__description">
                        Experienced Website and Mobile Application Developer.
                        Delivered 100+ projects using HTML, CSS, Javascript, ReactJS, MongoDB, ExpressJS, NodeJS, React Native etc.
                        Implemented complex functionalities using Javasricpt in Veeva iDetails for pharmaceutical companies globally.
                    </p>
                    <div className="about__cv__scrolldown">
                        <a download="Resume_Harshita_More.pdf" href={CV} className="button button--flex">Download CV</a>
                        {/* <ScrollDown scrollToSection="#skills" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About