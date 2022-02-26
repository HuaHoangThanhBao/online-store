import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <section class="contact">
                <div class="container">
                    <div class="contact-main">
                        <div class="space"></div>
                        <p class="title title--center">Welcome to company</p>
                        <h2 class="heading">Office Locations</h2>
                        <div class="contact-list">
                            <div class="contact-item">
                                <h3 class="contact-location">Austin</h3>
                                <p class="contact-desc">22 Texas West Hills</p>
                                <p class="contact-mail"> needhelp@company.com</p>
                                <p class="contact-phone">+ 92 888 999 0000</p>
                            </div>
                            <div class="contact-item">
                                <h3 class="contact-location">Boston</h3>
                                <p class="contact-desc">22 Texas West Hills</p>
                                <p class="contact-mail"> needhelp@company.com</p>
                                <p class="contact-phone">+ 92 888 999 0000</p>
                            </div>
                            <div class="contact-item">
                                <h3 class="contact-location">New York</h3>
                                <p class="contact-desc">22 Texas West Hills</p>
                                <p class="contact-mail"> needhelp@company.com</p>
                                <p class="contact-phone">+ 92 888 999 0000</p>
                            </div>
                            <div class="contact-item">
                                <h3 class="contact-location">Dubai</h3>
                                <p class="contact-desc">22 Texas West Hills</p>
                                <p class="contact-mail"> needhelp@company.com</p>
                                <p class="contact-phone">+ 92 888 999 0000</p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-welcome">
                        <div class="contact-col">
                            <div class="space space-left"></div>
                            <p class="title title--center">WELCOME TO COMPANY</p>
                            <h2 class="heading">Has Any Question?</h2>
                            <p class="contact-caption">The majority have suffered alteration in some form injected humour or
                                randomised words which don't look even believable. If you are going to use a passage.</p>
                            <img class="contact-img" src="./images/project-detail-1.png"/>
                            <a class="contact-block">
                                <img class="contact-icon" src="./images/call-icon.png" alt="" />
                                <div class="contact-call">
                                    <p class="contact-txt text--strong">
                                        92 666 888 0000
                                    </p>
                                    <p class="contact-txt text--strong">
                                        Do You've Any Question? Call Us Now
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div class="contact-col">
                            <form class="contact-form">
                                <input type="text" placeholder="Your Name" class="contact-inp" />
                                <input type="email" placeholder="Your Email" class="contact-inp" />
                                <input type="phone" placeholder="Your Phone" class="contact-inp" />
                                <select name="" id="" class="contact-select">
                                    <option class="contact-option">Select Service</option>
                                    <option class="contact-option">Kitchen Remodeling</option>
                                </select>
                                <textarea class="contact-textarea" placeholder="Write Message" cols="4"></textarea>
                                <button class="contact-btn btn btn--yellow">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;