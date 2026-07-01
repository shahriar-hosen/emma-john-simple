import React from 'react';

const Cart = (props) => {
  const cart = props.cart
  let item = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i].price;
    item = item + element
  }
  const formatNum = (num) =>{
    const precision = num.toFixed(2);
    return Number(precision)
  }

  let shipping = 50;
  if (item < 1 || item > 500) {
    shipping = 0
  } else if(item > 200) {
    shipping = 20
  }
  let tax = item / 10
  let total = item + shipping + tax;
  return (
    <div>
      <h2>Order Summary</h2>
      <h4>Item 0rdered: {cart.length}</h4>
      <h4>Item Price: ${formatNum(item)}</h4>
      <h4>Shipping & Handling: ${shipping} </h4>
      <h4>Govemrnt Tax: ${formatNum(tax)}</h4>
      <h4>Total Price: ${formatNum(total)}</h4>
    </div>
  );
};

export default Cart;
