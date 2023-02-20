import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SnowmanLogo } from "../../assets/snowman-logo.svg";
import CartDropdownComponent from "../../components/cart-dropdown/CartDropdownComponent";
import CartIconComponent from "../../components/cart-icon/CartIconComponent";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.scss";

export default function NavigationComponent() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <SnowmanLogo className="logo" />
        </Link>
        <Link className="nav-brand" to="/">
          Snowman Clothing
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <>
              <span>Hi! {currentUser.displayName}</span>
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            </>
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
