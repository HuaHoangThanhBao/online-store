import React from 'react';
import '../../assets/styles/sass/checkout.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Banner from '../shared/Banner';
import Checkout from '../shared/Checkout';

class CheckoutPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <Checkout></Checkout>
                <Footer></Footer>
            </>
        )
    }
}

export default CheckoutPage;