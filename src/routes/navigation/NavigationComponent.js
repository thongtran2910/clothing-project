import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SnowmanLogo } from "../../assets/snowman-logo.svg";
import CartDropdownComponent from "../../components/cart-dropdown/CartDropdownComponent";
import CartIconComponent from "../../components/cart-icon/CartIconComponent";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.scss";

export default function NavigationComponent() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIconComponent />
        </div>
        {isCartOpen && <CartDropdownComponent />}
      </div>
      <Outlet />
    </>
  );
}
