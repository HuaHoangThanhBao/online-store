import React from 'react';
import ProjectDetailImg from '../../assets/images/project-detail-1.png'

class ProjectDetail extends React.Component{
    render(){
        return(
            <section class="content">
                <div class="container">
                    <div class="content-main">
                        <div class="content-banner">
                            <img src={ProjectDetailImg} alt="" />
                        </div>
                    </div>
                    <div class="content-info">
                        <div class="content-info__row">
                            <p class="content-info__txt highlight">Date:</p>
                            <p class="content-info__txt">06 Apr, 2021</p>
                        </div>
                        <div class="content-info__row">
                            <p class="content-info__txt highlight">Website:</p>
                            <p class="content-info__txt">company.com</p>
                        </div>
                        <div class="content-info__row">
                            <p class="content-info__txt highlight">Location:</p>
                            <p class="content-info__txt">New York, USA</p>
                        </div>
                        <div class="content-info__row">
                            <p class="content-info__txt highlight">Value:</p>
                            <p class="content-info__txt">$25,60000</p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="content-body">
                        <div class="content-body__row">
                            <h3 class="content-body__heading">Bridge Construction</h3>
                            <p class="content-body__txt">Lorem ipsum is simply free text used by copytyping refreshing. Neque
                                porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                                finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting
                                Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the
                                is industrys. When an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                of Letraset sheets containing.</p>
                        </div>
                        <div class="content-body__row">
                            <h3 class="content-body__heading">Challenge & Solutions</h3>
                            <h4 class="content-body__caption">Neque porro est qui dolorem ipsum free text available quia quaed
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h4>
                            <p class="content-body__txt">Lorem ipsum is simply free text used by copytyping refreshing. Neque
                                porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                                finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting
                                Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the
                                is industrys. When an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                of Letraset sheets containing.</p>
                            <p class="content-body__txt">Lorem ipsum is simply free text used by copytyping refreshing. Neque
                                porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                                finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting
                                Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the
                                is industrys. When an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                of Letraset sheets containing.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectDetail;