import React from 'react';
import {Link} from 'react-router-dom';
import LogoImg from '../../assets/images/Logo.png';
import CallImg from '../../assets/images/call-icon.png';
function Header(){
    return(
        <>
            <header id="header" class="header">
                <div class="container">
                    <div class="header-main">
                        <div class="header-col">
                            <Link to="/"><img src={LogoImg} alt="" /></Link>
                        </div>
                        <div class="header-col">
                            <Link to="/" class="header-link">Home</Link>
                            <Link to="/shop" class="header-link">Shop</Link>
                            <Link to="/project" class="header-link">Projects</Link>
                            <Link to="/blog" class="header-link">News</Link>
                            <Link to="/shop-detail" class="header-link">Contact</Link>
                            <a id="header-burger" class="header-link header-burger">
                                <svg viewBox="0 0 100 80" width="40" height="40">
                                    <rect width="100" height="15"></rect>
                                    <rect y="30" width="100" height="15"></rect>
                                    <rect y="60" width="100" height="15"></rect>
                                </svg>
                            </a>
                            <a href="#" class="header-search">
                                <i class="fa fa-search"></i>
                            </a>
                            <a href="#" class="header-cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="header-cart__amount">10</span>
                            </a>
                            <a class="header-link header-phone">
                                <div class="header-call-icon">
                                    <img src={CallImg} alt="" />
                                </div>
                                <div class="header-call">
                                    <p class="header-txt text--small">Call Anytime</p>
                                    <p class="header-txt bold">92 666 888 0000</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="header-menu" class="header-menu">
                    <div class="container">
                        <div class="header-menu-main">
                            <Link to="/" class="header-opt">Home</Link>
                            <Link to="/shop" class="header-opt">Shop</Link>
                            <Link to="/project" class="header-opt">Projects</Link>
                            <Link to="/blog" class="header-opt">News</Link>
                            <Link to="/contact" class="header-opt">Contact</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;