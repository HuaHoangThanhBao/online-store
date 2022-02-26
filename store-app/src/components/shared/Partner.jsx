import React from 'react';

class Partner extends React.Component{
    render(){
        return(
            <section class="partner">
                <div class="container">
                    <div class="partner-main">
                        <div class="partner-col">
                            <div class="space space-left"></div>
                            <p class="title">Welcome to company</p>
                            <div class="heading">
                                Your Partner for All
                                Construction Solutions
                            </div>
                            <p class="partner-caption">There are many variations of passages of Lorem Ipsum available, but the
                                majority
                                have suffered alteration in some form, by injected humour, or randomised.
                            </p>
                            <div class="partner-experience">
                                We Have 35+ Years Of Experience Work With Global Industries
                            </div>
                            <div class="partner-block">
                                <p class="partner-box">
                                    <i class="fa fa-check"></i>
                                    Reliable and Proven
                                </p>
                                <p class="partner-box">
                                    <i class="fa fa-check"></i>
                                    Experts Contractors
                                </p>
                            </div>
                            <div class="partner-small-heading">
                                Industrial work
                            </div>
                            <div class="partner-progressbar">
                                <div></div>
                            </div>
                            <div class="partner-small-heading">
                                Factory bussiness
                            </div>
                            <div class="partner-progressbar">
                                <div></div>
                            </div>
                        </div>
                        <div class="partner-col">
                            <div class="partner-banner">
                                <img src="./images/partner-1.png" alt="" class="partner-banner__img" />
                                <img src="./images/partner-2.png" alt="" class="partner-banner__img" />
                                <img src="./images/partner-3.png" alt="" class="partner-banner__img" />
                            </div>
                            <div class="partner-contact">
                                <div class="partner-icon">
                                    <img src="./images/call-icon.png" alt="" />
                                </div>
                                <div class="partner-call">
                                    <p class="partner-txt">
                                        Have any question? Give us a
                                    </p>
                                    <p class="partner-txt bold">
                                        Call: 92 666 888 0000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partner;