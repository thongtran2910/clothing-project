import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ButtonComponent from "../button/ButtonComponent";
import CartItemComponent from "../cart-item/CartItemComponent";
import "./cartDropdown.scss";

export default function CartDropdownComponent() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent>checkout</ButtonComponent>
    </div>
  );
}
