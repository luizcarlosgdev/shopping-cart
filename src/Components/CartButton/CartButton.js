import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./CartButton.css";
import AppContext from "../../context/AppContext";

function CartButton() {

  const {cartItem, visibleSideBar, setVisibleSideBar} = useContext(AppContext);

  return(
    <button onClick={() => setVisibleSideBar(!visibleSideBar)} type="button" className="cart-button">
      <FiShoppingCart />

      {cartItem.length > 0 && <span className="cart-status">{cartItem.length}</span>}
    </button>
  );
}

export default CartButton;
