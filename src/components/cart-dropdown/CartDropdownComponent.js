import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";
import ButtonComponent from "../button/ButtonComponent";
import CartItemComponent from "../cart-item/CartItemComponent";
import "./cartDropdown.scss";

export default function CartDropdownComponent() {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItemComponent key={item.id} cartItem={item} />
          ))
        ) : (
          <div>
            <span>Your cart is currently empty</span>
          </div>
        )}
      </div>
      <ButtonComponent onClick={goToCheckoutHandler}>checkout</ButtonComponent>
    </div>
  );
}
