import React from 'react';
import '../../assets/styles/sass/project-detail.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Banner from '../shared/Banner';
import Footer from '../shared/Footer';
import ProjectDetail from '../shared/ProjectDetail';

class ProjectDetailPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <ProjectDetail></ProjectDetail>
                <Footer></Footer>
            </>
        )
    }
}

export default ProjectDetailPage;