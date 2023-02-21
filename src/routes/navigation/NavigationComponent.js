import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SnowmanLogo } from "../../assets/snowman-logo.svg";
import { ReactComponent as ToggleMenu } from "../../assets/toggle-menu.svg";
import CartDropdownComponent from "../../components/cart-dropdown/CartDropdownComponent";
import CartIconComponent from "../../components/cart-icon/CartIconComponent";
import useWindowDimensions from "../../Hook/useWindowDimensions";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.scss";

export default function NavigationComponent() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const { width } = useWindowDimensions();
  const [isShowing, setIsShowing] = useState(false);

  const onChangeStyleHandler = () => {
    setIsShowing(!isShowing);
  };

  const handleCloseMenu = () => {
    setIsShowing(false);
  };

  const handleSignoutUser = () => {
    signOutUser();
    setIsShowing(false);
  };

  useEffect(() => {
    const onDimensionsChange = () => {
      if (width > 1023) {
        setIsShowing(false);
      }
    };
    onDimensionsChange();
  }, [width]);

  window.onclick = function (event) {
    if (event.target.id !== "toggle") {
      setIsShowing(false);
    }
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <SnowmanLogo className="logo" />
        </Link>
        <Link className="nav-brand" to="/">
          Snowman Clothing
        </Link>
        <div className="nav-toggle-container">
          <ToggleMenu
            id="toggle"
            className="nav-toggle"
            onClick={onChangeStyleHandler}
          />
          <div
            style={{ display: isShowing ? "block" : "none" }}
            className="nav-link-mobile"
          >
            <Link onClick={handleCloseMenu} className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ? (
              <Link to="/auth" className="nav-link" onClick={handleSignoutUser}>
                <p>SIGN OUT</p>
              </Link>
            ) : (
              <Link onClick={handleCloseMenu} className="nav-link" to="/auth">
                <p>SIGN IN</p>
              </Link>
            )}
          </div>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ? (
              <>
                <p className="nav-link">Hi! {currentUser.displayName}</p>
                <Link to="/auth" className="nav-link" onClick={signOutUser}>
                  SIGN OUT
                </Link>
              </>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
          </div>
          <CartIconComponent className="cart-icon" />
          {isCartOpen && <CartDropdownComponent />}
        </div>
      </div>
      <Outlet />
    </>
  );
}
