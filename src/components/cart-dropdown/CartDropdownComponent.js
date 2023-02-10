import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import ButtonComponent from "../button/ButtonComponent";
import CartItemComponent from "../cart-item/CartItemComponent";
import "./cartDropdown.scss";

export default function CartDropdownComponent() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={goToCheckoutHandler}>checkout</ButtonComponent>
    </div>
  );
}
