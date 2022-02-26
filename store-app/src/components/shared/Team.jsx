import React from 'react';

class Team extends React.Component{
    render(){
        return(
            <section class="team">
                <div class="container">
                    <div class="team-main">
                        <div class="team-col">
                            <img src="./images/lorem.png" alt="" />
                        </div>
                        <div class="team-col">
                            <div class="team-caption">
                                There are many variations of passages of lorem ipsum available.
                            </div>
                            <p class="team-content">
                                The majority have suffered alteration in some form injected humour or randomised words which
                                don't look even believable. If you are going to use a passage of you need to be sure there isn't
                                anything.
                            </p>
                            <div class="team-detail">
                                <a href="" class="team-icon"><i class="fa fa-check"></i></a>
                                <p class="team-txt">We have undertaken almost 8800 projects in 60 countries.</p>
                            </div>
                            <div class="team-detail">
                                <a href="" class="team-icon"><i class="fa fa-check"></i></a>
                                <p class="team-txt">It’s not just what we build that makes us the right partner.</p>
                            </div>
                            <div class="team-detail">
                                <a href="" class="team-icon"><i class="fa fa-check"></i></a>
                                <p class="team-txt">Being a partner for all of your construction needs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-expert">
                        <div class="space"></div>
                        <p class="title text--center">Meet the expert team</p>
                        <h2 class="heading text--center">Professional Constractors</h2>
                        <div class="team-list">
                            <div class="team-item">
                                <img src="./images/professional-contractor-1.png" alt="" />
                                <div class="team-contact white">
                                    <p class="team-name">
                                        Robert Smith
                                    </p>
                                    <p class="team-position">
                                        Constractor
                                    </p>
                                    <div class="social float">
                                        <a><i class="fa fa-twitter"></i></a>
                                        <a><i class="fa fa-facebook"></i></a>
                                        <a><i class="fa fa-linkedin"></i></a>
                                        <a><i class="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="team-item">
                                <img src="./images/professional-contractor-2.png" alt="" />
                                <div class="team-contact yellow">
                                    <p class="team-name">
                                        Jessica Brown
                                    </p>
                                    <p class="team-position">
                                        Constractor
                                    </p>
                                    <div class="social float yellow">
                                        <a><i class="fa fa-twitter"></i></a>
                                        <a><i class="fa fa-facebook"></i></a>
                                        <a><i class="fa fa-linkedin"></i></a>
                                        <a><i class="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="team-item">
                                <img src="./images/professional-contractor-3.png" alt="" />
                                <div class="team-contact white">
                                    <p class="team-name">
                                        Kevin Martin
                                    </p>
                                    <p class="team-position">
                                        Constractor
                                    </p>
                                    <div class="social float">
                                        <a><i class="fa fa-twitter"></i></a>
                                        <a><i class="fa fa-facebook"></i></a>
                                        <a><i class="fa fa-linkedin"></i></a>
                                        <a><i class="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;