import React from 'react';
import '../../assets/styles/sass/blog-detail.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Banner from '../shared/Banner';
import ShopContent from '../shared/ShopContent';
import Footer from '../shared/Footer';

class ShopPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <ShopContent></ShopContent>
                <Footer></Footer>
            </>
        )
    }
}

export default ShopPage;