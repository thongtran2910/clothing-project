import React from "react";
import { useNavigate } from "react-router-dom";

import "./directoryItem.scss";

export default function DirectoryItemComponent({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div onClick={onNavigateHandler} className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
