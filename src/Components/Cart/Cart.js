import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency/formatCurrency";

function Cart() {

  const {cartItem, visibleSideBar} = useContext(AppContext);

  const priceCart = cartItem.reduce((acc, item) => item.price + acc, 0);

  return(
    <section className={`cart ${visibleSideBar ? "cart--active" : ""}`}>
      <div className="cart-items">
        {cartItem.map((item) => <CartItem key={item.id} data={item}/>)}
        
      </div>

      <div className="cart-resume">{`${formatCurrency(priceCart)}`}</div>
    </section>
  );
}

export default Cart;
