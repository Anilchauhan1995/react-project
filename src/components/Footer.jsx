// import React from "react";
import addressIocn from "../assets/images/Vector-4.png";
const footer = () => {
    return(
        <footer className="footer_section mt-100">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <div className="footer_wrapper">
                            <div className="footer_title border_left ps-3">
                                <p>Read about our blogs for more information on our processes </p>
                            </div>
                            <div className="office_address d-flex align-items-center">
                                <div className="address_icon">
                                    <img src={addressIocn} alt="" />
                                </div>
                                <address>
                                    <span>How to start a company formation in Dubai</span>
                                    <span><time>5 Minutes</time> </span>
                                </address>
                            </div>
                            <div className="office_address d-flex align-items-center">
                                <div className="address_icon">
                                    <img src={addressIocn} alt="" />
                                </div>
                                <address>
                                    <span>How to start an Offshore company formation in Dubai</span>
                                    <span><time>5 Minutes</time> </span>
                                </address>
                            </div>
                            <div className="office_address d-flex align-items-center active_bg">
                                <div className="address_icon">
                                    <img src={addressIocn} alt="" />
                                </div>
                                <address>
                                    <span>SEO Dubai: Who benefits the most?</span>
                                    <span><time>5 Minutes</time> </span>
                                </address>
                            </div>
                            <div className="footer_wrapper customer_satisfied mt-4">
                                <div className="footer_title border_left ps-3">
                                    <p> Satidfied We are When Our Customers Are Happy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_wrapper">
                            <div className="footer_title border_left ps-3">
                                <p> Get to know the whole us and more of our services</p>
                            </div>
                            <div className="footer_list">
                                <div className="footer_list_menu">
                                    <h5 className="fw-bold">Services</h5>
                                    <ul>
                                        <li><a href="/">Products</a></li>
                                        <li><a href="/">Solutions</a></li>
                                        <li><a href="/">Assurance</a></li>
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Working at Varal-Singhania</a></li>
                                    </ul>
                                </div>
                                <div className="footer_list_menu">
                                    <h5 className="fw-bold">Policies</h5>
                                    <ul>
                                        <li><a href="/">Terms & Conditions</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div className="footer_list_menu">
                                    <h5 className="fw-bold">About</h5>
                                    <ul>
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">COntact Us</a></li>
                                    </ul>
                                </div>
                                <div className="footer_list_menu">
                                    <h5 className="fw-bold">Address</h5>
                                    <address>608 One Lake Plaza, Cluster T,Al Sarayat Street, Jumeirah Lake Towers Dubai United Arab Emirates</address>
                                    <address className="d-grid">
                                        <span>Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4] </span>
                                        <span>M: +971 55 794 2016</span>
                                        <span> O: +971 4 447 2061</span>
                                    </address>
                                </div>
                                <div className="subscribe">
                                    <h5 className="fw-bold">Subscribe Now</h5>
                                    <p>Sunbscribe now to receive our Newsletters about amazing  opportunities in Dubai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <p className="copyright text-center"> Varaluae 2021 &copy; All Right Reserved</p>
            </div>
        </footer>
    )
}
export default footer;