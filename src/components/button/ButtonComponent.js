import React from "react";
import "./button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  overlay: "overlay",
  delete: "delete",
};
export default function ButtonComponent({
  children,
  buttonType,
  ...otherProps
}) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
