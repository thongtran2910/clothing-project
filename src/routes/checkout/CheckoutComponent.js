import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/button/ButtonComponent";
import CheckoutItemComponent from "../../components/checkout-item/CheckoutItemComponent";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSelector";
import "./checkout.scss";

export default function CheckoutComponent() {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const onNavigateHandler = () => navigate("/shop");

  return cartItems.length > 0 ? (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  ) : (
    <div className="cart-empty">
      <h5>Your cart is currently empty.</h5>
      <ButtonComponent onClick={onNavigateHandler}>
        Continue shopping
      </ButtonComponent>
    </div>
  );
}
