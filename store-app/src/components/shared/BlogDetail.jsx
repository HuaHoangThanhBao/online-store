import React from 'react';
import BlogDetailImg from '../../assets/images/blog-detail-1.png'

class BlogDetail extends React.Component{
    render(){
        return(
            <section class="content">
                <div class="container">
                    <div class="content-main">
                        <div class="content-col">
                            <div class="news-item full-width">
                                <div class="news-top">
                                    <img src={BlogDetailImg} alt="" class="news-img" />
                                    <a class="news-time yellow">
                                        <p class="news-day">07</p>
                                        <div class="news-month">Oct</div>
                                    </a>
                                </div>
                                <div class="news-body">
                                    <a>
                                        <p class="news-authur">
                                            by Admin / 2 Comments
                                        </p>
                                    </a>
                                    <a>
                                        <h4 class="news-heading">
                                            How to Build your Mechanical Tools Industry
                                        </h4>
                                    </a>
                                    <p class="news-txt">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form, by injected humour, or randomised words which don't
                                        look even slightly believable. If you are going to use a passage. Lorem ipsum dolor sit
                                        amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of
                                        Lorem Ipsum available, but the majority have alteration in some injected or words which
                                        don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                                        you need to be sure there isn't anything embarrang hidden in the middle of text. All the
                                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                        making this the first true generator on the Internet. It uses a dictionary of over 200
                                        Latin words, combined with a handful of model sentence structures, to generate Lorem
                                        Ipsum which looks reasonable.
                                    </p>
                                    <p class="news-txt">Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                        simen book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting.
                                    </p>
                                    <p class="news-txt">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. orem Ipsum has been the industry's standard dummy text ever since the when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                        has survived not only five centuries.
                                    </p>
                                </div>
                                <hr />
                                <div class="content-bottom">
                                    <div class="content-social">
                                        <div class="content-social__col">
                                            <p class="content-heading">
                                                Tags
                                            </p>
                                            <button class="content-social__tag">Construction</button>
                                            <button class="content-social__tag">Build</button>
                                        </div>
                                        <div class="content-social__col">
                                            <div class="social dark flex-end">
                                                <a><i class="fa fa-twitter"></i></a>
                                                <a><i class="fa fa-facebook"></i></a>
                                                <a><i class="fa fa-linkedin"></i></a>
                                                <a><i class="fa fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-block">
                                        <div class="content-block__row author mar-0">
                                            <img src="./images/blog-detail-5.png" alt="" class="content-block__img author" />
                                            <div class="content-block__author">
                                                <p class="content-block__heading">
                                                    Sarah Alberth
                                                </p>
                                                <p class="content-block__txt">
                                                    It has survived not only five centuries, but also the leap into electronic
                                                    typesetting, remaining unchanged. It was popularised in the sheets
                                                    containing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-comment">
                                        <p class="content-heading">
                                            2 Comments
                                        </p>
                                        <div class="content-comment__row">
                                            <img class="content-comment__img" src="./images/blog-detail-6.png" />
                                            <div class="content-comment__detail">
                                                <div class="content-comment__top">
                                                    <p class="content-comment__name">Kevin Martin</p>
                                                    <button class="content-comment__btn black">Reply</button>
                                                </div>
                                                <p class="content-comment__content">
                                                    It has survived not only five centuries, but also the leap into
                                                    electronic typesetting unchanged. It was popularised in the sheets
                                                    containing lorem ipsum is simply free text.
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="content-comment__row">
                                            <img class="content-comment__img" src="./images/blog-detail-7.png" />
                                            <div class="content-comment__detail">
                                                <div class="content-comment__top">
                                                    <p class="content-comment__name">Christine Eve</p>
                                                    <button class="content-comment__btn">Reply</button>
                                                </div>
                                                <p class="content-comment__content">
                                                    It has survived not only five centuries, but also the leap into
                                                    electronic typesetting unchanged. It was popularised in the sheets
                                                    containing lorem ipsum is simply free text.
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                    <p class="content-heading">
                                        Leave A Comment
                                    </p>
                                    <form class="content-form">
                                        <div class="content-form__top">
                                            <input type="text" class="content-form__name" placeholder="Your Name" />
                                            <input type="text" class="content-form__email" placeholder="Email Address" />
                                        </div>
                                        <textarea type="text" class="content-form__name"
                                            placeholder="Write a Comment"></textarea>
                                        <button class="content-form__btn">Submit Comment</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="content-col">
                            <form class="send black">
                                <input type="text" class="send-inp" placeholder="Search..." />
                                <button type="submit" class="btn--search">
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>
                            <div class="content-block">
                                <h4 class="content-block__heading">
                                    Latest Posts
                                </h4>
                                <div class="content-block__row">
                                    <a class="content-block__col">
                                        <img src="./images/blog-detail-2.png" alt="" class="content-block__img" />
                                    </a>
                                    <div class="content-block__col">
                                        <p class="content-block__title">
                                            by Admin
                                        </p>
                                        <a class="content-block__caption">
                                            How to Build Mechanical Tools Industry
                                        </a>
                                    </div>
                                </div>
                                <div class="content-block__row">
                                    <a class="content-block__col">
                                        <img src="./images/blog-detail-3.png" alt="" class="content-block__img" />
                                    </a>
                                    <div class="content-block__col">
                                        <p class="content-block__title">
                                            by Admin
                                        </p>
                                        <a class="content-block__caption">
                                            How to Build Mechanical Tools Industry
                                        </a>
                                    </div>
                                </div>
                                <div class="content-block__row">
                                    <a class="content-block__col">
                                        <img src="./images/blog-detail-4.png" alt="" class="content-block__img" />
                                    </a>
                                    <div class="content-block__col">
                                        <p class="content-block__title">
                                            by Admin
                                        </p>
                                        <a class="content-block__caption">
                                            How to Build Mechanical Tools Industry
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="content-block">
                                <h4 class="content-block__heading">
                                    Categories
                                </h4>
                                <div class="content-block__row auto">
                                    <i class="fa fa-angle-right"></i>
                                    <a class="content-block__txt">
                                        Construction
                                    </a>
                                </div>
                                <div class="content-block__row auto">
                                    <i class="fa fa-angle-right"></i>
                                    <a class="content-block__txt">
                                        Industrial Materials
                                    </a>
                                </div>
                                <div class="content-block__row auto">
                                    <i class="fa fa-angle-right"></i>
                                    <a class="content-block__txt">
                                        Engineering
                                    </a>
                                </div>
                                <div class="content-block__row auto">
                                    <i class="fa fa-angle-right"></i>
                                    <a class="content-block__txt">
                                        Building Plans
                                    </a>
                                </div>
                                <div class="content-block__row auto">
                                    <i class="fa fa-angle-right"></i>
                                    <a class="content-block__txt">
                                        Rennovations
                                    </a>
                                </div>
                                <div class="content-block__row auto">
                                    <i class="fa fa-angle-right"></i>
                                    <a class="content-block__txt">
                                        Civil Engineering
                                    </a>
                                </div>
                            </div>
                            <div class="content-block">
                                <h4 class="content-block__heading">
                                    Tags
                                </h4>
                                <div class="content-block__tags">
                                    <a class="content-block__tag text--small active">
                                        Construction
                                    </a>
                                    <a class="content-block__tag text--small">
                                        Rennovations
                                    </a>
                                    <a class="content-block__tag text--small">
                                        Build
                                    </a>
                                    <a class="content-block__tag text--small">
                                        Engineer
                                    </a>
                                    <a class="content-block__tag text--small">
                                        House
                                    </a>
                                    <a class="content-block__tag text--small">
                                        Industrial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogDetail;