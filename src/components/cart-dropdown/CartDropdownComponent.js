import React from "react";
import ButtonComponent from "../button/ButtonComponent";
import "./cartDropdown.scss";

export default function CartDropdownComponent() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <ButtonComponent>checkout</ButtonComponent>
    </div>
  );
}
