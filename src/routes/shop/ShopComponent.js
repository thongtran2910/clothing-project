import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreviewComponent from "../categories-preview/CategoriesPreviewComponent";
import CategoryComponent from "../category/CategoryComponent";
import "./shop.scss";

export default function ShopComponent() {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewComponent />} />
      <Route path=":category" element={<CategoryComponent />} />
    </Routes>
  );
}
