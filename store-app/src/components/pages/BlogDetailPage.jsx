import React from 'react';
import '../../assets/styles/sass/blog-detail.scss'
import Top from '../shared/Top';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Banner from '../shared/Banner';
import BlogDetail from '../shared/BlogDetail';

class BlogDetailPage extends React.Component{
    render(){
        return(
            <>
                <Top></Top>
                <Header></Header>
                <Banner></Banner>
                <BlogDetail></BlogDetail>
                <Footer></Footer>
            </>
        )
    }
}

export default BlogDetailPage;