import React from 'react';
import '../../assets/styles/sass/checkout.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Banner from '../shared/Banner';
import Cart from '../shared/Cart';
import Footer from '../shared/Footer';

class CartPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <Cart></Cart>
                <Footer></Footer>
            </>
        )
    }
}

export default CartPage;