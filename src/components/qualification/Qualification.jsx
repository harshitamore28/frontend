import React, { useState } from 'react'
import "./qualification.css";
import ScrollDown from '../home/ScrollDown';
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My academic and career journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Indegene
                                </h3>
                                <span className="qualification__subtitle">Junior Software Engineer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    {" "}2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Blackfrog Technologies
                                </h3>
                                <span className="qualification__subtitle">Embedded Development Intern</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    {" "}2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Reventech Solutions
                                </h3>
                                <span className="qualification__subtitle">Summer Intern</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    {" "}2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Manipal Institute of Technology</h3>
                                <span className="qualification__subtitle">B.Tech. (2017-21)</span>
                                {/* <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2021
                                </div> */}
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Royal Global School
                                </h3>
                                <span className="qualification__subtitle">Class XII (PCMB)</span>
                                {/* <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2015
                                </div> */}
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Happy Child High School
                                </h3>
                                <span className="qualification__subtitle">Class X</span>
                                {/* <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2013
                                </div> */}
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ScrollDown scrollToSection="#portfolio" /> */}
        </section>
    )
}

export default Qualification