import React from "react";
import CategoryItemComponent from "../category-item/CategoryItemComponent";
import "./directory.scss";

export default function DirectoryComponent({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
}
