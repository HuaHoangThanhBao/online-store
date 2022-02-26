import React from 'react';

class Project extends React.Component{
    render(){
        return(
            <section id="project" class="project">
                <div class="project-main">
                    <div class="space"></div>
                    <p class="title text--center">Our closed project list</p>
                    <h3 class="heading text--center">
                        Recent Industrial Projects
                    </h3>
                    <div id="project-list" class="project-list">
                    </div>
                </div>
            </section>
        )
    }
}

export default Project;