import React from "react";
import { Link } from "react-router-dom";
import ProductCardComponent from "../product-card/ProductCardComponent";
import "./categoryPreview.scss";

export default function CategoryPreviewComponent({ title, products }) {
  return (
    <div className="category-preview-container">
      <div className="category-header">
        <h2>
          <Link to={title} className="category-title">
            {title.toUpperCase()}
          </Link>
        </h2>
        <Link to={title} className="category-show-all">
          Show all
        </Link>
      </div>
      <div className="category-preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
