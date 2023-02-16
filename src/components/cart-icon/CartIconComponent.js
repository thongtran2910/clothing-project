import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { setIsCartOpen } from "../../store/cart/cartAction";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelector";
import "./cartIcon.scss";

export default function CartIconComponent() {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartIcon className="cart-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
