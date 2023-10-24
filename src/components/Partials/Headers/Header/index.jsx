import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header({ drawerAction, settings, contact }) {
  const { cart } = useSelector((state) => state.cart);
  const [cartItems, setCartItem] = useState(null);
  useEffect(() => {
    cart && setCartItem(cart.cartProducts);
  }, [cart]);

  return (
    <header className="header-section-wrapper relative print:hidden">
      {/* Show the desktop header for screens larger than 768px */}
      <div className="lg:block hidden ">
        <TopBar contact={contact && contact} className="quomodo-shop-top-bar" />
        <Middlebar
          settings={settings && settings}
          className="quomodo-shop-middle-bar "
        />
        <Navbar className="quomodo-shop-nav-bar" />
      </div>

      {/* Show the mobile header for screens smaller than 768px */}
      <div className="lg:hidden">
        <Middlebar
          settings={settings && settings}
          className="quomodo-shop-middle-bar"
        />
      </div>
    </header>
  );
}
