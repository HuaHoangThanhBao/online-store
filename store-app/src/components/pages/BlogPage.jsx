import React from 'react';
import '../../assets/styles/sass/blog.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Banner from '../shared/Banner';
import Footer from '../shared/Footer';
import News from '../shared/News';

class BlogPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <News></News>
                <Footer></Footer>
            </>
        )
    }
}

export default BlogPage;