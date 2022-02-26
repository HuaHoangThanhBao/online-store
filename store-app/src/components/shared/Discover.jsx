import React from 'react';

class Discover extends React.Component{
    render(){
        return(
            <section class="discover">
                <div class="container">
                    <div class="discover-main">
                        <div class="discover-col">
                            <div class="discover-icon">
                                <img src="./images/quality-icon.png" alt="" />
                            </div>
                            <h2 class="discover-heading">
                                Quality, Affordable, Manufacturing
                                and Industrial Services
                            </h2>
                        </div>
                        <div class="discover-col">
                            <button class="btn btn--black discover-btn">Discover More</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Discover;