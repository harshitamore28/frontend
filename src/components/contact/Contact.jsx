import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./contact.css"
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gyy48kc', 'template_jg8l0kl', form.current, 'ZHcfOarFhTWVi4T3F')
        e.target.reset()
        alert("Mail sent to harshitamore28@gmail.com successfully")
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Contact Details</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">harshitamore28@gmail.com</span>
                            <a href="mailto:harshitamore28@gmail.com" className="contact__button">
                                Mail me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+91 8486580472</span>
                            <a href="https://api.whatsapp.com/send?phone=8486580472&text=Hello, I would like to connect with you regarding your portfolio!" className="contact__button">
                                Text me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bx-phone contact__card-icon"></i>
                            <h3 className="contact__card-title">Call</h3>
                            <span className="contact__card-data">+91 9486580472</span>
                            <a href="tel:+918486580472" className="contact__button">
                                Call me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Send a message directly in my mailbox!</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder='Insert your name' />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name="email" className="contact__form-input" placeholder='Insert your email' />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Description</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder='Insert description' ></textarea>
                        </div>
                        <button className="button button-flex">
                            Send Message!
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact