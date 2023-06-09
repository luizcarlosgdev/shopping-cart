import React, { useState } from "react";
import propTypes from "prop-types";
import AppContext from "./AppContext";

function Provider({ children }) {

  const [products, setProducts] = useState([]);//items do fetch
  const [loading, setLoading] = useState(true);
  const [cartItem, setCartItems] = useState([]);//items carrinho 
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  
  const value = {
    products, 
    setProducts,
    loading, 
    setLoading,
    cartItem, 
    setCartItems,
    visibleSideBar, 
    setVisibleSideBar,
    addToCart,
    removeToCart
  };

  function addToCart(data) {
    const indexItem = cartItem.findIndex(item => item.id === data.id);
    console.log(indexItem);

    if(indexItem === -1){
      setCartItems(oldArray => [...oldArray, data]);
      return;
    }

    alert("ta maluco meo, item já adicionado!");
    return;
  }

  function removeToCart(data) {
    const removeItem = cartItem.filter(item => item.id !== data.id);
    setCartItems(removeItem);
    return;
  }

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
