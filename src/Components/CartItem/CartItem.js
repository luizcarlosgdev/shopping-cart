import React, { useContext } from "react";
import propTypes from "prop-types";
import "./CartItem.css";
import formatCurrency from "../../utils/formatCurrency/formatCurrency.js";
import { FiTrash } from "react-icons/fi";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {

  const { thumbnail, title, price} = data;

  const {removeToCart} = useContext(AppContext);

  function handleRemoveCart() {
    removeToCart(data);
  }

  return(
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem produto carrinho"
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>
        <button
          type="button"
          className="button-remove-item"
          onClick={handleRemoveCart}
        >
          <FiTrash/>
        </button>
      </div>
    </section>
  );
}
export default CartItem;

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;
