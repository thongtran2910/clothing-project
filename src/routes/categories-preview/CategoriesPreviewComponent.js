import React from "react";
import { useSelector } from "react-redux";
import CategoryPreviewComponent from "../../components/category-preview/CategoryPreviewComponent";
import SpinnerComponent from "../../components/spinner/SpinnerComponent";
import { selectCategoriesMap } from "../../store/categories/categorySelector";

export default function CategoriesPreviewComponent() {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {categoriesMap ? (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreviewComponent
              key={title}
              title={title}
              products={products}
            />
          );
        })
      ) : (
        <SpinnerComponent />
      )}
    </>
  );
}
