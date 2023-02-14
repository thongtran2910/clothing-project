import React from "react";
import DirectoryItemComponent from "../directory-item/DirectoryItemComponent";
import "./directory.scss";

export default function DirectoryComponent({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
}
