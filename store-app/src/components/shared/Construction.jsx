import React from 'react';
import IndustryImg from '../../assets/images/industry-bg.png'
import MechanicalImg from '../../assets/images/mechanical-engineering-bg.png'
import BridgeImg from '../../assets/images/bridge-construction-bg.png'
import IndustryIcon from '../../assets/images/industry.png'

class Construction extends React.Component{
    render(){
        return(
            <section class="construction">
                <div class="container">
                    <div class="construction-main">
                        <a class="construction-link">
                            <div class="construction-overlay"></div>

                            <img src={IndustryImg} alt="" class="construction-img" />
                            <div class="construction-detail">
                                <div class="icon">
                                    <img src={IndustryIcon} alt="" />
                                </div>
                                <p class="construction-heading center">Industry Construction</p>
                            </div>
                        </a>
                        <div class="construction-link">
                            <div class="construction-overlay"></div>

                            <img src={MechanicalImg} alt="" class="construction-img" />
                            <div class="construction-detail fadein">
                                <p class="construction-heading left">Mechanical Engineering</p>
                                <p class="construction-caption">There are many variations of passages of Lorem Ipsum but the
                                    majority have alteration.</p>
                                <button class="construction-btn">
                                    <i class="fa fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        <a class="construction-link">
                            <div class="construction-overlay"></div>

                            <img src={BridgeImg} alt="" class="construction-img" />
                            <div class="construction-detail">
                                <div class="icon">
                                    <img src={IndustryIcon} alt="" />
                                </div>
                                <p class="construction-heading center">Industry Construction</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Construction;