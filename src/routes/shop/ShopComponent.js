import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategories } from "../../store/categories/categoryAction";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreviewComponent from "../categories-preview/CategoriesPreviewComponent";
import CategoryComponent from "../category/CategoryComponent";
import "./shop.scss";

export default function ShopComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreviewComponent />} />
      <Route path=":category" element={<CategoryComponent />} />
    </Routes>
  );
}
