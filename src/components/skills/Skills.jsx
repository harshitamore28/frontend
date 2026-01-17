import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import ScrollDown from '../home/ScrollDown';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title scroll-reveal">Skills</h2>
            <span className="section__subtitle scroll-reveal stagger-1">My technical level</span>
            <div className="skills__container container grid">
                <div className="scroll-reveal-left stagger-2">
                    <Frontend />
                </div>
                <div className="scroll-reveal-right stagger-3">
                    <Backend />
                </div>
                {/* <ScrollDown scrollToSection="#qualification" /> */}
            </div>
        </section>
    )
}

export default Skills