import React from 'react';

class Checkout extends React.Component{
    render(){
        return(
            <section class="cart">
                <div class="container">
                    <div class="cart-detail">
                        <div class="cart-col">
                            <div class="cart--bill">
                                <p class="cart--bill__title">Billing Information</p>
                                <div class="cart--bill__space"></div>
                                <div class="cart--bill__row flex">
                                    <div class="cart--bill__col">
                                        <label for="" class="cart--bill__label">First name</label>
                                        <input type="text" class="cart--bill__inp" placeholder="First name *" />
                                    </div>
                                    <div class="cart--bill__col">
                                        <label for="" class="cart--bill__label">Last name</label>
                                        <input type="text" class="cart--bill__inp" placeholder="Last name *" />
                                    </div>
                                </div>
                                <div class="cart--bill__row">
                                    <label for="" class="cart--bill__label">Company name</label>
                                    <input type="text" class="cart--bill__inp" placeholder="Company name" />
                                </div>
                                <div class="cart--bill__row">
                                    <label for="" class="cart--bill__label">Email address</label>
                                    <input type="text" class="cart--bill__inp" placeholder="info@gmail.com" />
                                </div>
                                <div class="cart--bill__row">
                                    <label for="" class="cart--bill__label">Country</label>
                                    <select class="cart--bill__select" name="drinks" required>
                                        <option value="" disabled selected hidden>Select an option...</option>
                                        <option value="usa">USE</option>
                                        <option value="ukr">UKR</option>
                                    </select>
                                </div>
                                <div class="cart--bill__row flex">
                                    <div class="cart--bill__col">
                                        <label for="" class="cart--bill__label">State/City</label>
                                        <select class="cart--bill__select" name="drinks" required>
                                            <option value="" disabled selected hidden>Select an option...</option>
                                            <option value="usa">USE</option>
                                            <option value="ukr">UKR</option>
                                        </select>
                                    </div>
                                    <div class="cart--bill__col">
                                        <label for="" class="cart--bill__label">Zip Code</label>
                                        <input type="text" class="cart--bill__inp" placeholder="Enter your zipcode" />
                                    </div>
                                </div>
                                <div class="cart--bill__row">
                                    <label for="" class="cart--bill__label">Full address</label>
                                    <input type="text" class="cart--bill__inp" placeholder="Enter your address here..." />
                                </div>
                                <div class="cart--bill__row">
                                    <label for="" class="cart--bill__label">Additional notes</label>
                                    <textarea class="cart--bill__textarea" rows="4" cols="50"
                                        placeholder="Describe yourself here..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="cart-col">
                            <div class="cart--bill mar-bot">
                                <p class="cart--bill__title">Your Orders</p>
                                <div class="cart--bill__space"></div>
                                <div class="cart--bill__row">
                                    <table class="cart-table">
                                        <thead class="cart-table__thead">
                                            <tr class="cart-table__trow">
                                                <th>Product</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody class="cart-table__tbody">
                                            <tr class="cart-table__trow">
                                                <td class="product-name">
                                                    <p class="cart-txt">Blue Dress For Woman x 2</p>
                                                </td>
                                                <td class="product-total">
                                                    <p class="cart-txt">$ 98.00</p>
                                                </td>
                                            </tr>
                                            <tr class="cart-table__trow">
                                                <td class="product-name">
                                                    <p class="cart-txt">Blue Dress For Woman x 2</p>
                                                </td>
                                                <td class="product-total">
                                                    <p class="cart-txt">$ 98.00</p>
                                                </td>
                                            </tr>
                                            <tr class="cart-table__trow">
                                                <td class="product-name">
                                                    <p class="cart-txt text--strong">SubTotal</p>
                                                </td>
                                                <td class="product-total">
                                                    <p class="cart-txt text--strong">$ 349.00</p>
                                                </td>
                                            </tr>
                                            <tr class="cart-table__trow">
                                                <td class="product-name">
                                                    <p class="cart-txt text--strong">Total</p>
                                                </td>
                                                <td class="product-total">
                                                    <p class="cart-txt text--strong">$ 349.00</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="cart--bill">
                                <p class="cart--bill__title">Payment</p>
                                <div class="cart--bill__space"></div>
                                <div class="cart--bill__row small">
                                    <input type="radio" id="direct-transfer" name="payment" value="direct bank transfer" />
                                    <label for="direct-transfer" class="cart--bill__label">Direct bank transfer</label>
                                    <p class="cart--bill__txt">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsum doloremque
                                        numquam nostrum adipisci, vel excepturi nesciunt officia animi quaerat perspiciatis
                                        debitis dolore impedit, vero quisquam, dolorem maiores quasi est.
                                    </p>
                                    <div class="cart--bill__row small">
                                        <input type="radio" id="check-payment" name="payment" value="Check Payment" />
                                        <label for="check-payment" class="cart--bill__label">Check Payment</label>
                                    </div>
                                    <div class="cart--bill__row small">
                                        <input type="radio" id="paypal" name="payment" value="Paypal" />
                                        <label for="paypal" class="cart--bill__label">Paypal</label>
                                    </div>
                                    <button class="btn btn--black cart--bill__place-order">Place order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        )
    }
}

export default Checkout;