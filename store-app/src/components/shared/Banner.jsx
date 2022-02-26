import React from 'react';

class Banner extends React.Component{
    render(){
        return(
            <section id="hero" class="hero blog">
                <div class="container">
                    <div class="hero-main">
                        <div class="hero-col">
                            <h1 class="heading heading--white">
                                Latest News
                            </h1>
                        </div>
                        <div class="hero-col breadcum">
                            <div class="hero-breadcum text--strong">
                                Home / News
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;