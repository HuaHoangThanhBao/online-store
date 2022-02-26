import React from 'react';
import '../../assets/styles/sass/contact.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Banner from '../shared/Banner';
import Footer from '../shared/Footer';
import Contact from '../shared/Contact';

class ContactPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <Contact></Contact>
                <Footer></Footer>
            </>
        )
    }
}

export default ContactPage;