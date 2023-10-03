import React from 'react';
import "./about.css";
import AboutImg from "../../assets/profile.jpeg";
import CV from "../../assets/Harshita_More_Resume.pdf";
import Info from './Info';
// import ScrollDown from '../home/ScrollDown';


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        Experienced Website and Mobile Application Developer.
                        Delivered 20+ projects using HTML, CSS, Javascript, ReactJS, React Native etc.
                        Implemented complex functionalities using Javasricpt in Veeva iDetails for pharmaceutical companies globally.
                    </p>
                    <div className="about__cv__scrolldown">
                        <a download="" href={CV} className="button button--flex">Download CV</a>
                        {/* <ScrollDown scrollToSection="#skills" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About