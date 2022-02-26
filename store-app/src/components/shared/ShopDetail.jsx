import React from 'react';
import ShopDeailImg1 from '../../assets/images/shop-detail-1.png'

class ShopDetail extends React.Component{
    render(){
        return(
            <section class="content">
                <div class="container">
                    <div class="content-main">
                        <div class="content-cart">
                            <div class="content-cart__col">
                                <img src={ShopDeailImg1} alt="" />
                            </div>
                            <div class="content-cart__col">
                                <h2 class="content-cart__heading">Comfy Chair</h2>
                                <span class="content-cart__price">$33.00</span>
                                <div class="content-cart__review">
                                    <span class="stars">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </span>
                                    <span class="content-cart__txt">2 Customer Reviews</span>
                                </div>
                                <hr />
                                <p class="content-cart__description">Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                                    quis des
                                    mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel
                                    pellentesque neque.
                                </p>
                                <div class="content-cart__detail">
                                    <p class="content-cart__id">REF. 4231/406</p>
                                    <p class="content-cart__status">Available in store</p>
                                </div>
                                <div class="content-cart__quantity">
                                    <div class="content-cart__block">
                                        <input class="content-cart__inp" type="number" value="1" />
                                        <div class="content-cart__option">
                                            <button class="content-cart__minus">-</button>
                                            <button class="content-cart__plus">+</button>
                                        </div>
                                    </div>
                                    <button class="content-cart__btn">Add To Cart</button>
                                </div>
                                <div class="content-cart__share">
                                    <span class="content-cart__txt text--strong">Share: </span>
                                    <span class="social dark flex-end">
                                        <a><i class="fa fa-twitter"></i></a>
                                        <a><i class="fa fa-facebook"></i></a>
                                        <a><i class="fa fa-linkedin"></i></a>
                                        <a><i class="fa fa-instagram"></i></a>
                                    </span>
                                </div>
                                <div class="content-cart__category">
                                    <span class="content-cart__txt text--strong">Category: </span>
                                    <a class="content-cart__txt">Engineering</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="content-body">
                        <div class="content-body__row">
                            <h3 class="content-body__heading">Descriptions</h3>
                            <p class="content-body__txt">Lorem ipsum dolor sit amet sectetur adipiscin elit cras feuiat antesed
                                ces condimentum viverra duis autue nim convallis id diam vitae duis egety dictum erosin dictum
                                sem. Vivamus sed molestie sapien aliquam et facilisis arcu dut molestie augue suspendisse
                                sodales tortor nunced quis cto ligula posuere cursus keuis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecated cupidatat
                                non proident sunt in culpa qui officia deserunt mollit anim id est laborum ivamus sed molestie
                                sapien.</p>
                            <p class="content-body__txt">Aliquam et facilisis arcuut olestie augue. Suspendisse sodales tortor
                                nunc quis auctor ligula posuere cursus duis aute irure dolor in reprehenderit in voluptate velit
                                esse cill doloreeu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in
                                culpa qui officia deserunt mollit anim id est laborum. Vivaus sed delly molestie sapien. Aliquam
                                et facilisis arcuut molestie augue. </p>
                        </div>
                    </div>
                    <div class="content-bottom">
                        <div class="content-comment">
                            <p class="content-heading">
                                2 Comments
                            </p>
                            <div class="content-comment__row">
                                <img class="content-comment__img" src="./images/blog-detail-6.png" />
                                <div class="content-comment__detail">
                                    <div class="content-comment__top">
                                        <p class="content-comment__name">Kevin Martin</p>
                                        <span class="stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span>
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
                                        <span class="stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span>
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
                            Add a Review
                        </p>
                        <div class="content-rating">
                            <span>Rate this Products? </span>
                            <span class="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                        </div>
                        <form class="content-form">
                            <div class="content-form__top">
                                <input type="text" class="content-form__name" placeholder="Your Name" />
                                <input type="text" class="content-form__email" placeholder="Email Address" />
                            </div>
                            <textarea type="text" class="content-form__name" placeholder="Write a Comment"></textarea>
                            <button class="content-form__btn">Submit Comment</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default ShopDetail;