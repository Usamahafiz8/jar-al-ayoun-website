import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Arrow from "../../../Helpers/icons/Arrow";
import Fire from "../../../Helpers/icons/Fire";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
import MenuIcon from "../../../Helpers/icons/MenuIcon";
import Multivendor from "../../../Shared/Multivendor";
import Drawer from "./Drawer";

function MobileMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  const [categoryToggle, setToggle] = useState(false);
  const [subCatHeight, setHeight] = useState(null);
  const handler = () => {
    setToggle(!categoryToggle);
  };

  useEffect(() => {
    let categorySelector = document.querySelector(".category-dropdown");
    setHeight(categorySelector.offsetHeight);
  }, [categoryToggle]);

  return (
    <div>
      <button onClick={toggleDrawer}>
        <MenuIcon className={"w-6 h-6 "} />
      </button>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <div className="flex flex-col justify-between h-screen	">
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href="/" passHref>
                <a rel="noopener noreferrer">
                  <div className="flex flex-row items-center g-4">
                    <Image
                      src="/assets/images/logo.png" // Use the correct path to your PNG image
                      alt="Jar al ayoun"
                      width={30}
                      height={45}
                    />
                    <div className="flex flex-col items-center p-4  ">
                      <span className="text-md  text-qblack font-600 cursor-pointer">
                        Jar al ayoun
                      </span>
                      <span className="text-xs text-qblack font-400">
                        OPTICAL STORE
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <ul
              className="flex flex-col 
          justify-center items-left gap-4 p-4"
            >
              <li>
                <Link href="/" passHref>
                  <a rel="noopener noreferrer ">
                    <span className="flex flex-row gap-1 items-center text-sm font-600 cursor-pointer text-qblack ">
                      <Fire />
                      Deals
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a rel="noopener noreferrer">
                    <span className="flex items-center text-sm font-600 cursor-pointer text-qblack ">
                      EYE GLASSES
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a rel="noopener noreferrer">
                    <span className="flex items-center text-sm font-600 cursor-pointer text-qblack ">
                      COMPUTER GLASSES
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a rel="noopener noreferrer">
                    <span className="flex items-center text-sm font-600 cursor-pointer text-qblack ">
                      KIDS GLASSES
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a rel="noopener noreferrer">
                    <span className="flex items-center text-sm font-600 cursor-pointer text-qblack ">
                      CONTACT LENSES
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a rel="noopener noreferrer">
                    <span className="flex items-center text-sm font-600 cursor-pointer text-qblack ">
                      SUNGLASSES
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a rel="noopener noreferrer">
                    <span className="flex items-center text-sm font-600 cursor-pointer text-qblack ">
                      GET APPOINTMENT
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                {Multivendor() === 1 && (
                  <Link href="/" passHref>
                    <a rel="noopener noreferrer">
                      <span className="flex items-center text-sm font-600 cursor-pointer text-qblack ">
                        3D TRY ON
                      </span>
                    </a>
                  </Link>
                )}
              </li>

              <li>
                {/* <button onClick={toggleDropdown}>Open Dropdown</button> */}
                <div className="category w-[270px] h-[35px] px-5 rounded-md mt-[6px] relative bg-primary text-white">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="w-full h-full flex justify-between items-center text-qwhite "
                  >
                    <div className="flex rtl:space-x-reverse space-x-3 items-center ">
                      <span className="text-sm font-600 text-qwhite ">
                        {ServeLangItem()?.All_Categories}
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
                  {categoryToggle && (
                    <>
                      <div
                        className="fixed top-0 left-0 w-full h-full -z-10"
                        onClick={handler}
                      ></div>
                    </>
                  )}
                  <div
                    style={{
                      boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                    }}
                    className={`category-dropdown w-full absolute left-0 top-[53px]  ${
                      categoryToggle ? "block" : "hidden"
                    }`}
                  >
                    <ul className="categories-list relative">
                      {categoryList &&
                        categoryList.map((item) => (
                          <li key={item.id} className="category-item">
                            <Link
                              href={{
                                pathname: "/products",
                                query: { category: item.slug },
                              }}
                              passHref
                            >
                              <a rel="noopener noreferrer">
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div className="flex items-center rtl:space-x-reverse space-x-6">
                                    <span>
                                      <FontAwesomeCom
                                        className="w-4 h-4"
                                        icon={item.icon}
                                      />
                                    </span>
                                    <span className="text-xs font-400">
                                      {item.name}
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        className={`transform rtl:rotate-180 fill-current`}
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                        />
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </Link>
                            <div
                              className={`sub-category-lvl-two absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${
                                item.active_sub_categories.length > 0
                                  ? "bg-white"
                                  : ""
                              }`}
                              style={{ height: `${subCatHeight}px` }}
                            >
                              <ul className="">
                                {item.active_sub_categories.length > 0 &&
                                  item.active_sub_categories.map((subItem) => (
                                    <li
                                      key={subItem.id}
                                      className="category-item"
                                    >
                                      <Link
                                        href={{
                                          pathname: "/products",
                                          query: {
                                            sub_category: subItem.slug,
                                          },
                                        }}
                                        passHref
                                      >
                                        <a rel="noopener noreferrer">
                                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                            <div>
                                              <span className="text-xs font-400">
                                                {subItem.name}
                                              </span>
                                            </div>
                                            <div>
                                              <span>
                                                <svg
                                                  className={`transform rtl:rotate-180 fill-current`}
                                                  width="6"
                                                  height="9"
                                                  viewBox="0 0 6 9"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <rect
                                                    x="1.49805"
                                                    y="0.818359"
                                                    width="5.78538"
                                                    height="1.28564"
                                                    transform="rotate(45 1.49805 0.818359)"
                                                  />
                                                  <rect
                                                    x="5.58984"
                                                    y="4.90918"
                                                    width="5.78538"
                                                    height="1.28564"
                                                    transform="rotate(135 5.58984 4.90918)"
                                                  />
                                                </svg>
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </Link>
                                      <div
                                        className={`sub-category-lvl-three absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${
                                          subItem.active_child_categories
                                            .length > 0
                                            ? "bg-white"
                                            : ""
                                        }`}
                                        style={{
                                          height: `${subCatHeight}px`,
                                        }}
                                      >
                                        <ul className="">
                                          {subItem.active_child_categories
                                            .length > 0 &&
                                            subItem.active_child_categories.map(
                                              (subsubitem) => (
                                                <li
                                                  key={subsubitem.id}
                                                  className="category-item"
                                                >
                                                  <Link
                                                    href={{
                                                      pathname: "/products",
                                                      query: {
                                                        child_category:
                                                          subsubitem.slug,
                                                      },
                                                    }}
                                                    passHref
                                                  >
                                                    <a rel="noopener noreferrer">
                                                      <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                                        <div>
                                                          <span className="text-xs font-400">
                                                            {subsubitem.name}
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                        </ul>
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {isDropdownOpen && (
                  <ul
                    className="flex flex-col 
              justify-center items-left gap-4"
                  >
                    <li>Dropdown Item 1</li>
                    <li>Dropdown Item 2</li>
                    <li>Dropdown Item 3</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div>
            <ul
              className="flex flex-col 
              justify-center items-left gap-4 p-4"
            >
              <div className="w-full h-[1px] bg-primary"></div>
              <li>
                <div className="flex ltr:space-x-2 rtl:space-x-0 items-center rtl:ml-2 ltr:ml-0">
                  <span className="text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ">
                    NEED HELP CALL US:
                  </span>
                  <span className="text-xs text-primary font-500 leading-none rtl:ml-2 ltr:ml-0 ">
                    +88 01682 825 123
                  </span>
                </div>
              </li>
              <li>
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
              </li>
              <li>
                {" "}
                <span className="text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ">
                  100 % SECURE DELIVERY WITHOUT CONTACT TO COURIOR
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default MobileMenu;
