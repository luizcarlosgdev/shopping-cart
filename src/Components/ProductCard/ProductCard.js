import React, { useContext } from "react";

import "./ProductCard.css";
import propTypes from "prop-types";
import { BsCartPlus } from "react-icons/bs";
import formatCurrency from "../../utils/formatCurrency/formatCurrency.js";
import AppContext from "../../context/AppContext";

function ProductCard({ data }) {

  const { title, price, thumbnail} = data;
  
  const {addToCart} = useContext(AppContext);

  function handleAddCart() {
    addToCart(data);
  }

  return (
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className="card-image"/>

      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price)}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button 
        className="button_add-card"
        onClick={handleAddCart}
      >
        <BsCartPlus/>
      </button>

    </section>
  );
}
export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
