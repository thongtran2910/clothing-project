import React, { useContext } from "react";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";
import { ProductContext } from "../../contexts/ProductsContext";
import "./shop.scss";

export default function ShopComponent() {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
}
