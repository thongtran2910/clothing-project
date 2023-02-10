import React from "react";
import "./cartItem.scss";

export default function CartItemComponent({ cartItem }) {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name} </span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
