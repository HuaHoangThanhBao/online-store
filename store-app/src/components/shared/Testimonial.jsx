import React from 'react';

class Testimonial extends React.Component{
    render(){
        return(
            <section id="testimonial" class="testimonial">
                <div class="container">
                    <div class="testimonial-main">
                        <div class="testimonial-col">
                            <div class="space space-left"></div>
                            <p class="title">Client Testimonials</p>
                            <h3 class="heading heading--white">
                                What They’re Saying
                                About Company
                            </h3>
                        </div>
                        <div class="testimonial-col">
                            <p class="testimonial-content">
                                Lorem ipsum is simply free text available. Aenean eu leo quam. Pellentesque ornare sem lacinia
                                quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur.
                            </p>
                        </div>
                    </div>
                    <div id="testimonial-list" class="testimonial-list">
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonial;