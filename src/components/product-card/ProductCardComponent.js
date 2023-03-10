import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";
import ButtonComponent from "../button/ButtonComponent";
import SpinnerComponent from "../spinner/SpinnerComponent";
import "./productCard.scss";

export default function ProductCardComponent({ product }) {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  const addProductToCart = () =>
    currentUser
      ? dispatch(addItemToCart(cartItems, product))
      : alert("You need to sign in first!");

  return (
    <>
      {cartItems ? (
        <div className="product-card-container">
          <img src={imageUrl} alt={`${name}`} />
          <div className="footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
          </div>
          <ButtonComponent onClick={addProductToCart} buttonType="inverted">
            Add to cart
          </ButtonComponent>
        </div>
      ) : (
        <SpinnerComponent />
      )}
    </>
  );
}
