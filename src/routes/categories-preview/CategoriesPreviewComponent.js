import React from "react";
import { useSelector } from "react-redux";
import CategoryPreviewComponent from "../../components/category-preview/CategoryPreviewComponent";
import { selectCategoriesMap } from "../../store/categories/categorySelector";

export default function CategoriesPreviewComponent() {
  const categoriesMap = useSelector(selectCategoriesMap);

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
