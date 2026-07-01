import React, { useState } from "react";
import fakeData from "../../fakeData/products.json";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const first20 = fakeData.slice(0, 20);
  const [products, setProduct] = useState(first20);
  const [cart, setCart] = useState([])
  const handleAddProduct = (pd) => {
    const newCart = [...cart, pd]
    setCart(newCart)
  }
  return (
    <div className="shop-container">
      <div className="products-contianer">
        {products.map((product) => (
          <Product product={product} handleAddProduct={handleAddProduct}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart = {cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
