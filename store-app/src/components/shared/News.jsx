import React from 'react';

class News extends React.Component{
    render(){
        return(
            <section id="news" class="news">
                <div class="container">
                    <div class="news-main">
                        <div class="space"></div>
                        <p class="title text--center">From the blog</p>
                        <h2 class="heading text--center">News & Articles</h2>
                        <div id="news-list" class="news-list">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default News;