import Link from "next/link";
// import ThinPeople from "../../../Helpers/icons/ThinPeople";
import { useEffect, useState } from "react";
import Tryon from "../../../3dtryon";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Arrow from "../../../Helpers/icons/Arrow";
import Multivendor from "../../../Shared/Multivendor";

export default function TopBar({ className, contact }) {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
  }, []);
  return (
    <>
      <div
        className={`w-full bg-white h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/tracking-order" passHref>
                    <a rel="noopener noreferrer">
                      <span className="text-xs leading-6 text-qblack font-500 cursor-pointer">
                        {/* {ServeLangItem()?.Try_3D} */}
                        <Tryon />
                      </span>
                    </a>
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link href="/faq" passHref>
                    <a rel="noopener noreferrer">
                      <span className="text-xs leading-6 text-qblack font-500 cursor-pointer">
                        {/* {ServeLangItem()?.Store_Location} */}
                        STORE LOCATION
                      </span>
                    </a>
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link href="/tracking-order" passHref>
                    <a rel="noopener noreferrer">
                      <span className="text-xs leading-6 text-qblack font-500 cursor-pointer">
                        {/* {ServeLangItem()?.QUALITY} */}
                        QUALITY
                      </span>
                    </a>
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link href="/tracking-order" passHref>
                    <a rel="noopener noreferrer">
                      <span className="text-xs leading-6 text-qblack font-500 cursor-pointer">
                        {ServeLangItem()?.Track_Order}
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="topbar-dropdowns lg:block hidden">
              <div className="flex ltr:space-x-6 rtl:-space-x-0 items-center">
                <div className="flex ltr:space-x-2 rtl:space-x-0 items-center rtl:ml-2 ltr:ml-0">
                  <span className="text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ">
                    100 % SECURE DELIVERY WITHOUT CONTACT TO COURIOR
                  </span>
                </div>
              </div>
            </div>
            <div className="topbar-dropdowns lg:block hidden">
              <div className="flex ltr:space-x-6 rtl:-space-x-0 items-center">
                <div className="flex ltr:space-x-2 rtl:space-x-0 items-center rtl:ml-2 ltr:ml-0">
                  <span className="text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ">
                    NEED HELP CALL US:
                  </span>
                  <span className="text-xs text-primary font-500 leading-none rtl:ml-2 ltr:ml-0 ">
                    {contact && contact.phone}
                  </span>
                </div>

                <div>
                  <button
                    // onClick={handler}
                    type="button"
                    className="w-full h-full flex gap-2 justify-between items-center text-qwhite "
                  >
                    <div className="flex rtl:space-x-reverse  space-x-3 items-center ">
                      <span className="text-sm font-600 text-qwhite ">
                        {/* {ServeLangItem()?.All_Categories} */}
                        Language
                      </span>
                    </div>
                    <div>
                      <Arrow
                        width="5.78538"
                        height="1.28564"
                        className="fill-current text-qwhite"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {Multivendor() === 1 && (
              <div className="block lg:hidden">
                <Link href="/become-seller" passHref>
                  <a rel="noopener noreferrer">
                    <span className="text-xs leading-6 text-qblack px-3 py-1 primary-bg font-medium font-500 cursor-pointer">
                      {ServeLangItem()?.Become_seller}
                    </span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
