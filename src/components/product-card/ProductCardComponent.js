import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ButtonComponent from "../button/ButtonComponent";
import "./productCard.scss";

export default function ProductCardComponent({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
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
  );
}
