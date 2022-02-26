import React from 'react';
import '../../assets/styles/sass/projects.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Banner from '../shared/Banner';
import Project from '../shared/Project';
import Footer from '../shared/Footer';

class ProjectPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <Project></Project>
                <Footer></Footer>
            </>
        )
    }
}

export default ProjectPage;