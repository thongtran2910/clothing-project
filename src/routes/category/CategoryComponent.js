import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";
import SpinnerComponent from "../../components/spinner/SpinnerComponent";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categorySelector";
import "./category.scss";

export default function CategoryComponent() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCardComponent key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
}
