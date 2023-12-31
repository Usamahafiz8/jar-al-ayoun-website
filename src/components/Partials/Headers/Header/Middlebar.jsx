import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../../../utils/apiRequest";
import { fetchWishlist } from "../../../../store/wishlistData";
import Cart from "../../../Cart";
import LoginContext from "../../../Contexts/LoginContext";
import SearchBox from "../../../Helpers/SearchBox";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import MobileMenu from "./MobileMenu";
export default function Middlebar({ className, settings }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const getLoginContexts = useContext(LoginContext);
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlists = wishlistData && wishlistData.wishlists;
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(null);
  const { compareProducts } = useSelector((state) => state.compareProducts);
  useEffect(() => {
    if (getLoginContexts.loginPopup === false) {
      setAuth(() => JSON.parse(localStorage.getItem("auth")));
    }
  }, [getLoginContexts.loginPopup]);
  const profilehandler = () => {
    setProfile(!profile);
  };
  const logout = () => {
    if (auth) {
      apiRequest.logout(auth.access_token);
      localStorage.removeItem("auth");
      dispatch(fetchWishlist());
      router.push("/login");
    }
  };
  //cart
  const { cart } = useSelector((state) => state.cart);
  const [cartItems, setCartItem] = useState(null);
  useEffect(() => {
    cart && setCartItem(cart.cartProducts);
  }, [cart]);

  return (
    <div className={`w-full h-full p-1 	 bg-white ${className}`}>
      <div className="lg:block hidden">
        <div className="container-x mx-auto h-full nav-middle-bar">
          <div className=" pl-4 pr-2relative h-full">
            <div className="flex justify-between items-center h-full">
              <div className="flex flex-row justify-between items-center gap-4 w-200  ">
                <Link href="/" passHref>
                  <a rel="noopener noreferrer">
                    {/* {settings && (
                    <Image
                      width="153"
                      height="140"
                      objectFit="scale-down"
                      src={`
                      ${process.env.NEXT_PUBLIC_BASE_URL + settings.logo}
                      `}
                      alt="logo"
                      />
                    )} */}
                    <div className="flex flex-row items-center g-4">
                      <Image
                        src="/assets/images/logo.png" // Use the correct path to your PNG image
                        alt="Jar al ayoun"
                        width={35}
                        height={60}
                      />
                      <div className="flex flex-col items-center p-4  ">
                        <span className="text-xl  text-qblack font-800 cursor-pointer">
                          Jar al ayoun
                        </span>
                        <span className="text-sm text-qblack font-500">
                          OPTICAL STORE
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="w-[600px] h-[44px]">
                <SearchBox className="search-com" />
              </div>

              <div className="flex gap-4 items-center relative">
                <div className="flex flex-row gap-2">
                  <div className="compaire relative">
                    {auth ? (
                      <Link href="/products-compaire" passHref>
                        <a rel="noopener noreferrer">
                          <span className="cursor-pointer">
                            <Compair className="fill-current" />
                          </span>
                        </a>
                      </Link>
                    ) : (
                      <Link href="/login" passHref>
                        <a rel="noopener noreferrer">
                          <span className="cursor-pointer">
                            <Compair className="fill-current" />
                          </span>
                        </a>
                      </Link>
                    )}

                    <span className="w-[18px] h-[18px] text-qwhite rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                      {compareProducts ? compareProducts.products.length : 0}
                    </span>
                  </div>
                  <span className="text-md leading-6 text-qblack font-500 cursor-pointer">
                    Compare
                  </span>
                </div>

                <Link href="/wishlist" passHref>
                  <div className="flex flex-row gap-2">
                    <div className="favorite relative">
                      <a rel="noopener noreferrer">
                        <span className="cursor-pointer">
                          <ThinLove className="fill-current" />
                        </span>
                      </a>
                      <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                        {wishlists ? wishlists.data.length : 0}
                      </span>
                    </div>
                    <span className="text-md leading-6 text-qblack font-500 cursor-pointer">
                      WishList
                    </span>
                  </div>
                </Link>
                <div className="cart-wrapper group relative py-4">
                  <div className="flex flex-row gap-2">
                    <div className="cart relative cursor-pointer">
                      <Link href="/cart" passHref>
                        <a rel="noopener noreferrer">
                          <span className="cursor-pointer">
                            <ThinBag />
                          </span>
                        </a>
                      </Link>
                      <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                        {cartItems ? cartItems.length : 0}
                      </span>
                    </div>
                    <span className="text-md leading-6 text-qblack font-500 cursor-pointer">
                      Cart
                    </span>
                  </div>
                  <Cart className="absolute ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" />
                </div>
                <div>
                  {auth ? (
                    <button onClick={profilehandler} type="button">
                      <span className="text-qblack font-bold text-sm block">
                        {auth && auth.user.name}
                      </span>
                      <span className="text-qgray font-medium text-sm block">
                        {auth && auth.user.phone}
                      </span>
                    </button>
                  ) : (
                    <Link href="/login" passHref>
                      <div className="flex flex-row gap-2">
                        <a rel="noopener noreferrer">
                          <span className="cursor-pointer">
                            <ThinPeople />
                          </span>
                        </a>
                        <span className="text-md leading-6 text-qblack font-500 cursor-pointer">
                          Account
                        </span>
                      </div>
                    </Link>
                  )}
                </div>

                {profile && (
                  <>
                    <div
                      onClick={() => setProfile(false)}
                      className="w-full h-full fixed top-0 left-0 z-30"
                      style={{ zIndex: "35", margin: "0" }}
                    ></div>
                    <div
                      className="w-[208px] h-[267px] bg-white absolute right-0 top-11 z-60 border-t-[3px] primary-border flex flex-col justify-between"
                      style={{
                        boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                      }}
                    >
                      <div className="menu-item-area w-full  p-5">
                        <ul className="w-full  flex flex-col space-y-7">
                          <li className="text-base text-qgraytwo">
                            <span>
                              {ServeLangItem()?.Hi}, {auth && auth.user.name}{" "}
                            </span>
                          </li>
                          <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                            <Link href="/profile#dashboard" passHref>
                              <a rel="noopener noreferrer">
                                <span className="capitalize">
                                  {ServeLangItem()?.profile}
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                            <Link href="/contact" passHref>
                              <a rel="noopener noreferrer">
                                <span className="capitalize">
                                  {ServeLangItem()?.Support}
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                            <Link href="/faq" passHref>
                              <a rel="noopener noreferrer">
                                <span className="capitalize">
                                  {ServeLangItem()?.FAQ}
                                </span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full h-10 flex justify-center items-center border-t border-qgray-border">
                        <button
                          onClick={logout}
                          type="button"
                          className="text-qblack text-base font-semibold"
                        >
                          {ServeLangItem()?.Sign_Out}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="lg:block flex flex-col justify-center items-center gap-2 ">
          <div className="flex flex-row justify-between items-center gap-4 w-11/12  ">
            <Link href="/" passHref>
              <a rel="noopener noreferrer">
                <div className="flex flex-row items-center g-4">
                  <Image
                    src="/assets/images/logo.png" // Use the correct path to your PNG image
                    alt="Jar al ayoun"
                    width={40}
                    height={60}
                  />
                  <div className="flex flex-col items-center p-4  ">
                    <span className="text-md  text-qblack font-600 cursor-pointer">
                      Jar al ayoun
                    </span>
                    <span className="text-sm text-qblack font-400">
                      OPTICAL STORE
                    </span>
                  </div>
                </div>
              </a>
            </Link>

            <div className="flex gap-4 items-center relative">
              <div className="flex flex-row gap-2">
                <div className="compaire relative">
                  {auth ? (
                    <Link href="/products-compaire" passHref>
                      <a rel="noopener noreferrer">
                        <span className="cursor-pointer">
                          <Compair className="fill-current" />
                        </span>
                      </a>
                    </Link>
                  ) : (
                    <Link href="/login" passHref>
                      <a rel="noopener noreferrer">
                        <span className="cursor-pointer">
                          <Compair className="fill-current" />
                        </span>
                      </a>
                    </Link>
                  )}

                  <span className="w-[18px] h-[18px] text-qwhite rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    {compareProducts ? compareProducts.products.length : 0}
                  </span>
                </div>
              </div>

              <Link href="/wishlist" passHref>
                <div className="flex flex-row gap-2">
                  <div className="favorite relative">
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <ThinLove className="fill-current" />
                      </span>
                    </a>
                    <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                      {wishlists ? wishlists.data.length : 0}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="cart-wrapper group relative py-4">
                <div className="flex flex-row gap-2">
                  <div className="cart relative cursor-pointer">
                    <Link href="/cart" passHref>
                      <a rel="noopener noreferrer">
                        <span className="cursor-pointer">
                          <ThinBag />
                        </span>
                      </a>
                    </Link>
                    <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                      {cartItems ? cartItems.length : 0}
                    </span>
                  </div>
                </div>
                <Cart className="absolute ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                {auth ? (
                  <button onClick={profilehandler} type="button">
                    <span className="text-qblack font-bold text-sm block">
                      {auth && auth.user.name}
                    </span>
                    <span className="text-qgray font-medium text-sm block">
                      {auth && auth.user.phone}
                    </span>
                  </button>
                ) : (
                  <Link href="/login" passHref>
                    <div className="flex flex-row gap-2">
                      <a rel="noopener noreferrer">
                        <span className="cursor-pointer">
                          <ThinPeople />
                        </span>
                      </a>
                    </div>
                  </Link>
                )}
              </div>

              {profile && (
                <>
                  <div
                    onClick={() => setProfile(false)}
                    className="w-full h-full fixed top-0 left-0 z-30"
                    style={{ zIndex: "35", margin: "0" }}
                  ></div>
                  <div
                    className="w-[208px] h-[267px] bg-white absolute right-0 top-11 z-40 border-t-[3px] primary-border flex flex-col justify-between"
                    style={{
                      boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                    }}
                  >
                    <div className="menu-item-area w-full  p-5">
                      <ul className="w-full  flex flex-col space-y-7">
                        <li className="text-base text-qgraytwo">
                          <span>
                            {ServeLangItem()?.Hi}, {auth && auth.user.name}{" "}
                          </span>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/profile#dashboard" passHref>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {ServeLangItem()?.profile}
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/contact" passHref>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {ServeLangItem()?.Support}
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/faq" passHref>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {ServeLangItem()?.FAQ}
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full h-10 flex justify-center items-center border-t border-qgray-border">
                      <button
                        onClick={logout}
                        type="button"
                        className="text-qblack text-base font-semibold"
                      >
                        {ServeLangItem()?.Sign_Out}
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div>
                <MobileMenu />
              </div>
            </div>
          </div>
          <div className="w-11/12	 h-[44px]">
            <SearchBox className="search-com" />
          </div>
        </div>
      </div>
    </div>
  );
}
