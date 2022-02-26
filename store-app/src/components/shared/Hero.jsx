import React from 'react';

class Hero extends React.Component{
    render(){
        return(
            <section id="hero" class="hero">
                <div class="container">
                    <div class="hero-main">
                        <div class="hero-col">
                            <h1 class="hero-heading">
                                Providing <span class="highlight">Quality</span>
                                Building Solutions
                            </h1>
                            <div class="hero-row">
                                <i class="fa fa-arrow-right"></i>
                                <p class="hero-txt">Engineering techniques & implementation process</p>
                            </div>
                            <div class="hero-row">
                                <i class="fa fa-arrow-right"></i>
                                <p class="hero-txt">We're a full service construction company</p>
                            </div>
                            <div class="hero-row">
                                <i class="fa fa-arrow-right"></i>
                                <p class="hero-txt">Offering complete integrated package</p>
                            </div>
                            <button class="btn btn--yellow hero-btn">
                                Discover More
                            </button>
                        </div>
                        <div class="hero-col">
                            <a class="hero-arrow arrow-left">
                                <i class="fa fa-arrow-left"></i>
                            </a>
                            <a class="hero-arrow arrow-right">
                                <i class="fa fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;