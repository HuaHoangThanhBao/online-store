import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <section class="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="footer-main">
                            <div class="footer-col">
                                <h5 class="footer-heading">
                                    About
                                </h5>
                                <p class="footer-txt">
                                    There are many variations of simple lorem ipsum available for not, but the majority have
                                    suffered alteration.
                                </p>
                                <button class="footer-btn">
                                    Request a Quote
                                </button>
                            </div>
                            <div class="footer-col">
                                <h5 class="footer-heading">
                                    Links
                                </h5>
                                <a class="footer-txt inline">
                                    About Us
                                </a>
                                <a class="footer-txt inline">
                                    Meet Our Team
                                </a>
                                <a class="footer-txt inline">
                                    News & Media
                                </a>
                                <a class="footer-txt inline">
                                    Our Projects
                                </a>
                                <a class="footer-txt inline">
                                    Contacts
                                </a>
                            </div>
                            <div class="footer-col">
                                <h5 class="footer-heading">
                                    Contact
                                </h5>
                                <p class="footer-txt br-bt">
                                    <i class="fa fa-location-arrow"></i>
                                    88 Broklyn Golden Street, New York
                                </p>
                                <p class="footer-txt br-bt">
                                    <i class="fa fa-clock-o"></i>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </p>
                                <p class="footer-txt br-bt">
                                    <i class="fa fa-envelope"></i>
                                    needhelp@company.com
                                </p>
                                <p class="footer-txt br-bt">
                                    <i class="fa fa-phone"></i>
                                    92 666 888 0000
                                </p>
                            </div>
                            <div class="footer-col">
                                <h5 class="footer-heading">
                                    Newsletter
                                </h5>
                                <p class="footer-txt">
                                    There are many variations of simple lorem ipsum available for not.
                                </p>
                                <div class="send">
                                    <input type="text" class="send-inp" placeholder="Email Address" />
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <div class="social footer">
                                    <a><i class="fa fa-twitter"></i></a>
                                    <a><i class="fa fa-facebook"></i></a>
                                    <a><i class="fa fa-linkedin"></i></a>
                                    <a><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="footer-main space-between">
                            <p class="text--small">
                                © All Copyright 2020 by Company.com
                            </p>
                            <p class="text--small">
                                Terms & Conditions / Privacy Policy / Sitemap
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;