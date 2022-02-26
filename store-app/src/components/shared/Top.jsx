import React from 'react';

class Top extends React.Component{
    render(){
        return(
            <section class="top">
                <div class="container">
                    <div class="top-main">
                        <div class="top-col">
                            <div class="social black">
                                <a><i class="fa fa-twitter"></i></a>
                                <a><i class="fa fa-facebook"></i></a>
                                <a><i class="fa fa-linkedin"></i></a>
                                <a><i class="fa fa-instagram"></i></a>
                            </div>
                            <p class="top-txt">
                                Welcome to Construction Company. <span class="highlight">Get Free Quote</span>
                            </p>
                        </div>
                        <div class="top-col">
                            <p class="top-email top-txt">
                                <i class="fa fa-envelope"></i>
                                needhelp@company.com
                            </p>
                            <p class="top-time top-txt">
                                <i class="fa fa-clock-o"></i>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Top;