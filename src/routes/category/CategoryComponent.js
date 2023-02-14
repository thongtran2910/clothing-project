import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import "./category.scss";

export default function CategoryComponent() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCardComponent key={product.id} product={product} />
        ))}
    </div>
  );
}
