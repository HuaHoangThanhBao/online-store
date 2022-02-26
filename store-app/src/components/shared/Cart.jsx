import React from 'react';

class Cart extends React.Component{
    render(){
        return(
            <section class="cart">
                <div class="container">
                    <div class="cart-main">
                        <table class="cart-table">
                            <thead class="cart-table__thead">
                                <tr class="cart-table__trow">
                                    <th>Remove</th>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody class="cart-table__tbody">
                                <tr class="cart-table__trow">
                                    <td class="product-remove">
                                        <button class="cart-remove">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                    <td class="product-img">
                                        <a href="#">
                                            <img src="./images/shop-1.png" alt="" class="cart-img-review" />
                                        </a>
                                    </td>
                                    <td class="product-name">
                                        <p class="cart-txt">Blue Dress For Woman</p>
                                    </td>
                                    <td class="product-price">
                                        <p class="cart-txt">$98</p>
                                    </td>
                                    <td class="product-quantity">
                                        <input class="cart-quantity" type="number" min="1" value="1" />
                                    </td>
                                    <td class="product-total">
                                        <p class="cart-txt">$98</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="cart-detail">
                        <div class="cart-col">
                            <div class="cart-heading">Coupon</div>
                            <div class="cart-body">
                                <p class="cart-desc">Enter your coupon if you have one.</p>
                                <div class="cart-row no-flex">
                                    <input type="text" class="cart-coupon" placeholder="Coupon code" />
                                    <button class="btn btn--black apply-coupon">Apply coupon</button>
                                </div>
                            </div>
                        </div>
                        <div class="cart-col">
                            <div class="cart-heading">Cart Total</div>
                            <div class="cart-body">
                                <div class="cart-row">
                                    <p class="cart-txt">Subtotal</p>
                                    <p class="cart-txt">$139.2</p>
                                </div>
                                <div class="cart-row">
                                    <p class="cart-txt">Shipping</p>
                                    <p class="cart-txt">$25.00</p>
                                </div>
                                <hr />
                                <div class="cart-row">
                                    <p class="cart-txt">Total</p>
                                    <p class="cart-txt">$164.2</p>
                                </div>
                                <div class="cart-row">
                                    <button class="btn btn--black proceed-to-checkout">Proceed to checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cart;