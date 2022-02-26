import React from 'react';
import '../../assets/styles/sass/shop-detail.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Banner from '../shared/Banner';
import ShopDetail from '../shared/ShopDetail';

class ShopDetailPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <ShopDetail></ShopDetail>
                <Footer></Footer>
            </>
        )
    }
}

export default ShopDetailPage;