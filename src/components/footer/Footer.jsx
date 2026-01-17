import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container scroll-reveal">
                {/* <h1 className="footer__title">Harshita</h1> */}
                {/* <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul> */}
                <div className="footer__social">
                    {/* <a rel="noreferrer" href="https://www.instagram.com/harshita__more/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a> */}
                    <a rel="noreferrer" href="https://www.linkedin.com/in/harshita28" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a rel="noreferrer" href="https://github.com/harshitamore28" className="footer__social-link" target="_blank">
                        <i className="bx uil-github-alt"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Harshita More. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer