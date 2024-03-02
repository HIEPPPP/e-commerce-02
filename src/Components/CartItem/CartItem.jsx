import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItem = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
        useContext(ShopContext);

    console.log(getTotalCartAmount());
    return (
        <div className="cartitem">
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e, i) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={i}>
                            <div className="cartitems-format cartitem-format-main">
                                <img
                                    className="carticon-product-icon"
                                    src={e.image}
                                    alt=""
                                />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">
                                    {cartItems[e.id]}
                                </button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    className="cartitem-remove-icon"
                                    src={remove_icon}
                                    alt=""
                                    onClick={() => {
                                        removeFromCart(e.id);
                                    }}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT </button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
