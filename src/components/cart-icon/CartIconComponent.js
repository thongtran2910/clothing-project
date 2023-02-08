import React, { useContext } from "react";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import "./cartIcon.scss";

export default function CartIconComponent() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartIcon className="cart-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
