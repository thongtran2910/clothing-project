import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../button/ButtonComponent";
import ProductCardComponent from "../product-card/ProductCardComponent";
import "./categoryPreview.scss";

export default function CategoryPreviewComponent({ title, products }) {
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(`/shop/${title}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="category-preview-container">
      <div className="category-header">
        <h2>
          <span onClick={onNavigateHandler} className="category-title">
            {title.toUpperCase()}
          </span>
        </h2>
      </div>
      <div className="category-preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
        <ButtonComponent
          onClick={onNavigateHandler}
          id="overlay-btn"
          buttonType="overlay"
        >
          Show all
        </ButtonComponent>
      </div>
    </div>
  );
}
