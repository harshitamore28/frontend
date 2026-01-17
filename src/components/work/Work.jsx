import React from 'react';
import "./work.css";
import Works from './Works';
const Work = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section__title scroll-reveal">Projects</h2>
            <span className="section__subtitle scroll-reveal stagger-1">Most recent works</span>
            <div className="scroll-reveal-scale stagger-2">
                <Works />
            </div>
        </section>
    )
}

export default Work