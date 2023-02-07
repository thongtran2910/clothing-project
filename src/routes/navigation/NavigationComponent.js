import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SnowmanLogo } from "../../assets/snowman-logo.svg";
import "./navigation.scss";

export default function NavigationComponent() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <SnowmanLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
