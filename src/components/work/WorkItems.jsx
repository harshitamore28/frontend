import React, { useState } from 'react'
import RegisterSS from "../../assets/ecommerce_screenshots/1_register.png";
import HomeSS from "../../assets/ecommerce_screenshots/4_home2.png";
import ProductSS from "../../assets/ecommerce_screenshots/6_product2.png";
import AddressSS from "../../assets/ecommerce_screenshots/12_addresses.png";
import CartSS from "../../assets/ecommerce_screenshots/7_cart.png";
import OrderSS from "../../assets/ecommerce_screenshots/10_orderSummary.png";
import NavigationSS from "../../assets/jci_screenshots/1_navigation.png";
import CategoriesSS from "../../assets/jci_screenshots/3_categories.png";
import ResultsSS from "../../assets/jci_screenshots/8_results.png";
import EventsSS from "../../assets/jci_screenshots/6_events.png";
import AnalysisSS from "../../assets/jci_screenshots/4_analysis.png";
import FlyersSS from "../../assets/jci_screenshots/9_details.png";
const WorkItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            <div className="work__card" key={item.id}>
                <img src={item.image} alt="" className='work__img' />
                <h3 className="work__title">{item.title}</h3>
                <span onClick={() => {
                    toggleTab(item.id)
                }} className="work__button">
                    View Details <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </span>
            </div>
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
                    <h3 className="services__modal-title">E-commerce Application</h3>
                    <p className="services__modal-description">Created a practice e-commerce application using React Native as frontend and MongoDB as backend. Implemented functionalities such as :</p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Authentication via sending registration verification email to users</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">View products fetched from REST API</p>
                        </li>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <img src={RegisterSS} style={{ height: 500 }} />
                            <img src={HomeSS} style={{ height: 500 }} />
                        </div>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Add products to card</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Change the quantity of products</p>
                        </li>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <img src={ProductSS} style={{ height: 500 }} />
                            <img src={CartSS} style={{ height: 500 }} />
                        </div>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Add address and get the data in backend</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Place the order and get the data in backend</p>
                        </li>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <img src={AddressSS} style={{ height: 500 }} />
                            <img src={OrderSS} style={{ height: 500 }} />
                        </div>
                    </ul>
                </div>
            </div>
            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
                    <h3 className="services__modal-title">Business Directory Application</h3>
                    <p className="services__modal-description">Created a Business Directory Application for a social service organisation using React Native. Implemented functionalities such as :</p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Display business data of members in various screens using Stack, Tab and Drawer Navigation</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Filter members based on membership or Business Category</p>
                        </li>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <img src={NavigationSS} style={{ height: 500 }} />
                            <img src={CategoriesSS} style={{ height: 500 }} />
                        </div>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Search by keywords related to Member Name or Business Category</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Use of carousel to display Business Events in auto play mode</p>
                        </li>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <img src={ResultsSS} style={{ height: 500 }} />
                            <img src={EventsSS} style={{ height: 500 }} />
                        </div>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Business Analysis using pie chart</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Get contact details in the flyers and re-direct to WhatsApp or calling from the App</p>
                        </li>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <img src={AnalysisSS} style={{ height: 500 }} />
                            <img src={FlyersSS} style={{ height: 500 }} />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default WorkItems