import React from 'react';

class ShopContent extends React.Component{
    render(){
        return(
            <section class="content">
                <div class="container">
                    <div class="content-main reverse-col">
                        <div id="shop" class="content-col">
                            <div class="content-sort">
                                <div class="content-sort__col">
                                    <p class="content-sort__txt">Showing 1-9 of 12 results</p>
                                </div>
                                <div class="content-sort__col">
                                    <div name="" id="" class="content-sort__select">
                                        <select name="" id="">
                                            <option value="">Classic Chair</option>
                                            <option value="">Classic Chair</option>
                                            <option value="">Classic Chair</option>
                                            <option value="">Classic Chair</option>
                                            <option value="">Classic Chair</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="shop-list" class="content-list">
                                
                            </div>
                        </div>
                        <div class="content-col">
                            <form class="send black">
                                <input type="text" class="send-inp" placeholder="Search products..." />
                                <i class="fa fa-search"></i>
                            </form>
                            <div class="content-block normal">
                                <h4 class="content-block__heading">
                                    Price
                                </h4>
                                <div class="slider">
                                    <input class="slider-range" type="range" min="100" max="1000" value="300" step="100"/>
                                    <div class="slider-option">
                                        <p class="slider-value">$50 - $500</p>
                                        <button class="slider-btn">Filter</button>
                                    </div>
                                </div>
                            </div>
                            <div class="content-block normal">
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
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ShopContent;