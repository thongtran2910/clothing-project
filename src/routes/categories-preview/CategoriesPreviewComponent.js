import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import CategoryPreviewComponent from "../../components/category-preview/CategoryPreviewComponent";

export default function CategoriesPreviewComponent() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreviewComponent
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </>
  );
}
