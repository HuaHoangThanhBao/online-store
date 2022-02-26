import React from 'react';
import '../../assets/styles/sass/home.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Hero from '../shared/Hero';
import Construction from '../shared/Construction';
import Footer from '../shared/Footer';

class HomePage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Hero></Hero>
                <Construction></Construction>
                <Footer></Footer>
            </>
        )
    }
}

export default HomePage;