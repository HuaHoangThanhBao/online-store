import React from 'react';

class Fact extends React.Component{
    render(){
        return(
            <section class="fact">
                <div class="container">
                    <div class="fact-main">
                        <div class="fact-top">
                            <div class="fact-col">
                                <div class="icon black">
                                    <img src="./images/industry solution icon.png" alt="" />
                                </div>
                                <p class="fact-number">6420</p>
                                <p class="fact-caption">Industry Solutions</p>
                            </div>
                            <div class="fact-col">
                                <div class="icon black">
                                    <img src="./images/projects completed.png" alt="" />
                                </div>
                                <p class="fact-number">8800</p>
                                <p class="fact-caption">Projects Completed</p>
                            </div>
                            <div class="fact-col">
                                <div class="icon black">
                                    <img src="./images/sastified clients.png" alt="" />
                                </div>
                                <p class="fact-number">9280</p>
                                <p class="fact-caption">Satisfied Clients</p>
                            </div>
                            <div class="fact-col">
                                <div class="icon black">
                                    <img src="./images/exprt contractor.png" alt="" />
                                </div>
                                <p class="fact-number">1800</p>
                                <p class="fact-caption">Expert Contractors</p>
                            </div>
                        </div>
                        <div class="fact-bottom">
                            <div class="fact-block white">
                                <p class="fact-detail">Unparalleled Experience</p>
                            </div>
                            <div class="fact-block brown">
                                <p class="fact-detail">Quality Construction</p>
                            </div>
                            <div class="fact-block">
                                <p class="fact-detail">Industry Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Fact;