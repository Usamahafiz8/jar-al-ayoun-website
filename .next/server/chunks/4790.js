"use strict";
exports.id = 4790;
exports.ids = [4790];
exports.modules = {

/***/ 3896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9808);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5564);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8522);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4178);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4339);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function Cart({ className  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.websiteSetup);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { cart  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.cart);
    const { 0: getCarts , 1: setGetCarts  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: getAllPrice , 1: setGetAllPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: totalPrice , 1: setTotalPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setTotalPrice(getAllPrice && getAllPrice.reduce((prev, curr)=>parseFloat(prev) + parseFloat(curr)));
    }, [
        getAllPrice
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        cart && setGetCarts(cart.cartProducts);
    }, [
        cart
    ]);
    const checkProductExistsInFlashSale = (id, price)=>{
        if (websiteSetup) {
            const flashSaleOffer = websiteSetup.payload.flashSale && websiteSetup.payload.flashSale.offer;
            const flashSaleIds = websiteSetup.payload.flashSaleProducts.length > 0 && websiteSetup.payload.flashSaleProducts.find((item)=>parseInt(item.product_id) === parseInt(id));
            if (flashSaleOffer && flashSaleIds) {
                const offer = parseInt(flashSaleOffer);
                const discountPrice = offer / 100 * price; //confusion
                const mainPrice = price - discountPrice;
                return mainPrice;
            } else {
                return price;
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (getCarts && getCarts.length > 0) {
            setGetAllPrice(getCarts.map((v)=>{
                if (v.product.offer_price) {
                    if (v.variants && v.variants.length > 0) {
                        const prices = v.variants.map((item)=>item.variant_item ? parseInt(item.variant_item.price) : 0);
                        const sumCal = prices.reduce((p, c)=>p + c);
                        const v_price = sumCal + parseInt(v.product.offer_price);
                        return checkProductExistsInFlashSale(v.product_id, v_price);
                    } else {
                        const wo_v_price = v.product.offer_price;
                        return checkProductExistsInFlashSale(v.product_id, wo_v_price);
                    }
                } else {
                    if (v.variants && v.variants.length > 0) {
                        const prices1 = v.variants.map((item)=>item.variant_item ? parseInt(item.variant_item.price) : 0);
                        const sumCal1 = prices1.reduce((p, c)=>p + c);
                        const v_price1 = sumCal1 + parseInt(v.product.price);
                        return checkProductExistsInFlashSale(v.product_id, v_price1);
                    } else {
                        const wo_v_price1 = v.product.price;
                        return checkProductExistsInFlashSale(v.product_id, wo_v_price1);
                    }
                }
            }));
        } else {
            setGetAllPrice(null);
        }
    }, [
        getCarts
    ]);
    const deleteItem = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)()) {
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].deleteCartItem */ .Z.deleteCartItem({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)().access_token
            }).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn((0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Remove_from_Cart, {
                    autoClose: 1000
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_7__/* .fetchCart */ .x7)());
            }).catch((err)=>{
                console.log(err);
            });
        } else {
            return false;
        }
    };
    const price = (item)=>{
        if (item) {
            if (item.product.offer_price) {
                if (item.variants && item.variants.length > 0) {
                    const prices = item.variants.map((item)=>item.variant_item ? parseInt(item.variant_item.price) : 0);
                    const sumVarient = prices.reduce((p, c)=>p + c);
                    return parseInt(item.product.offer_price) + sumVarient;
                // return CheckProductIsExistsInFlashSale({
                //   id: item.product_id,
                //   price: totalPrice,
                // });
                } else {
                    return item.product.offer_price;
                // return CheckProductIsExistsInFlashSale({
                //   id: item.product_id,
                //   price: parseInt(item.product.offer_price),
                // });
                }
            } else {
                if (item.variants && item.variants.length > 0) {
                    const prices1 = item.variants.map((item)=>item.variant_item ? parseInt(item.variant_item.price) : 0);
                    const sumVarient1 = prices1.reduce((p, c)=>p + c);
                    return parseInt(item.product.price) + sumVarient1;
                // return CheckProductIsExistsInFlashSale({
                //   id: item.product_id,
                //   price: totalPrice,
                // });
                } else {
                    return item.product.price;
                // return CheckProductIsExistsInFlashSale({
                //   id: item.product_id,
                //   price: parseInt(item.product.price),
                // });
                }
            }
        }
    };
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
            },
            className: `cart-wrappwer w-[300px] bg-white border-t-[3px] ${className || ""}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-items h-[310px] overflow-y-scroll",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: getCarts && getCarts.length > 0 && getCarts.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "w-full h-full flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex space-x-[6px] justify-center items-center px-4 my-[20px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[65px] h-full relative",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            layout: "fill",
                                                            src: `${"https://jaralayoun.com/srv/" + item.product.thumb_image}`,
                                                            alt: "",
                                                            className: "w-full h-full object-contain"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex-1 h-full flex flex-col justify-center ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600",
                                                                children: item.product.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "price",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    suppressHydrationWarning: true,
                                                                    className: "offer-price text-qred font-600 text-[15px] ml-2",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                        id: item.product_id,
                                                                        price: price(item)
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                onClick: ()=>deleteItem(item.id),
                                                className: "mt-[20px] mr-[15px] inline-flex cursor-pointer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "8",
                                                    height: "8",
                                                    viewBox: "0 0 8 8",
                                                    fill: "none",
                                                    className: "inline fill-current text-[#AAAAAA] hover:text-qred",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"
                                                    })
                                                })
                                            })
                                        ]
                                    }, item.id))
                            }),
                            getCarts && getCarts.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm text-gray-400 mt-10 text-center",
                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.No_items_found
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full px-4 mt-[20px] mb-[12px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[1px] bg-[#F0F1F3]"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-actions px-4 mb-[30px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "total-equation flex justify-between items-center mb-[28px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[15px] font-500 text-qblack",
                                        children: "Subtotal"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: "text-[15px] font-500 text-qred ",
                                        children: currency_icon + (totalPrice ? parseFloat(totalPrice).toFixed(2) : 0)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-action-btn",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/cart",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "gray-btn w-full h-[50px] mb-[10px] cursor-pointer ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.View_Cart
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/checkout",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full h-[50px] cursor-pointer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "yellow-btn",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm",
                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Checkout_Now
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full px-4 mt-[20px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[1px] bg-[#F0F1F3]"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center py-[15px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[13px] font-500 text-qgray",
                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Get_Return_within
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DiscountBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_SubscribeInputWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1222);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Helpers_SubscribeInputWidget__WEBPACK_IMPORTED_MODULE_1__]);
_Helpers_SubscribeInputWidget__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function DiscountBanner({ className , datas  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full h-[307px] bg-cover flex justify-center items-end print:hidden ${className || ""}`,
        style: {
            backgroundImage: `url(${"https://jaralayoun.com/srv/" + datas.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mb-[70px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    "data-aos": "fade-up",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "sm:text-3xl text-xl font-700 text-qblack mb-2 text-center",
                            children: datas.header
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center sm:text-[18px] text-sm font-400",
                            children: datas.title
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SubscribeInputWidget__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchBox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(5564);
// EXTERNAL MODULE: ./src/components/Contexts/LoginContext.jsx
var LoginContext = __webpack_require__(3591);
// EXTERNAL MODULE: ./src/components/Helpers/ServeLangItem.js
var ServeLangItem = __webpack_require__(6681);
;// CONCATENATED MODULE: ./src/components/Helpers/icons/Search.jsx

function SearchIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Helpers/SearchBox/index.jsx

// import Link from "next/link";


// import axios from "axios";





function SearchBox({ className  }) {
    const router = (0,router_.useRouter)();
    const { 0: toggleCat , 1: setToggleCat  } = (0,external_react_.useState)(false);
    const { 0: subToggleCat , 1: setSubToggleCat  } = (0,external_react_.useState)(false);
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)(null);
    const { 0: subCategories , 1: setSubCategoris  } = (0,external_react_.useState)(null);
    const { 0: selectedCat , 1: setSelectedCat  } = (0,external_react_.useState)(null);
    const { 0: selectedSubCat , 1: setSelectedSubCat  } = (0,external_react_.useState)(null);
    const { 0: searchKey , 1: setSearchkey  } = (0,external_react_.useState)("");
    const loginPopupBoard = (0,external_react_.useContext)(LoginContext/* default */.Z);
    (0,external_react_.useEffect)(()=>{
        if (router && router.route && router.route === "/search") {
            setSearchkey(router.query ? router.query.search : "");
        }
        return ()=>{
            setSearchkey("");
        };
    }, [
        router
    ]);
    const categoryHandler = (value)=>{
        setSelectedCat(value);
        setSubCategoris(value.active_sub_categories && value.active_sub_categories.length > 0 ? value.active_sub_categories : null);
        setToggleCat(!toggleCat);
    };
    const subCategoryHandler = (value)=>{
        setSelectedSubCat(value);
        setSubToggleCat(!subToggleCat);
    };
    (0,external_react_.useEffect)(()=>{
        if (websiteSetup) {
            setCategories(websiteSetup.payload && websiteSetup.payload.productCategories);
        }
    }, [
        websiteSetup
    ]);
    const searchHandler = ()=>{
        if ((0,auth/* default */.Z)()) {
            if (searchKey !== "") {
                if (selectedCat) {
                    router.push({
                        pathname: "/search",
                        query: {
                            search: searchKey,
                            category: selectedCat.slug
                        }
                    });
                } else {
                    router.push({
                        pathname: "/search",
                        query: {
                            search: searchKey
                        }
                    });
                }
            } else if (searchKey === "" && selectedCat) {
                router.push({
                    pathname: "/products",
                    query: {
                        category: selectedCat.slug
                    }
                });
            } else {
                return false;
            }
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `w-full h-full flex items-center  border border-qgray-border bg-white  ${className || ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-1 bg-red-500 h-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            value: searchKey,
                            onKeyDown: (e)=>e.key === "Enter" && searchHandler(),
                            onChange: (e)=>setSearchkey(e.target.value),
                            type: "text",
                            className: "search-input",
                            placeholder: (0,ServeLangItem/* default */.Z)()?.Search_products + "..."
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex-1 flex items-center px-4 relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: ()=>setToggleCat(!toggleCat),
                            type: "button",
                            className: "w-full text-xs font-500 text-qgray flex justify-between items-center capitalize",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "line-clamp-1",
                                    children: selectedCat ? selectedCat.name : (0,ServeLangItem/* default */.Z)()?.category
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        width: "10",
                                        height: "5",
                                        viewBox: "0 0 10 5",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                x: "9.18359",
                                                y: "0.90918",
                                                width: "5.78538",
                                                height: "1.28564",
                                                transform: "rotate(135 9.18359 0.90918)",
                                                fill: "#8E8E8E"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                x: "5.08984",
                                                y: "5",
                                                width: "5.78538",
                                                height: "1.28564",
                                                transform: "rotate(-135 5.08984 5)",
                                                fill: "#8E8E8E"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        toggleCat && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full h-full fixed left-0 top-0 z-50",
                                    onClick: ()=>setToggleCat(!toggleCat)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[227px] h-auto absolute bg-white left-0 top-[29px] z-50 p-5",
                                    style: {
                                        boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "flex flex-col space-y-2",
                                        children: categories && categories.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>categoryHandler(item),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:primary-text cursor-pointer",
                                                    children: item.name
                                                })
                                            }, i))
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    value: searchKey,
                    onKeyDown: (e)=>e.key === "Enter" && searchHandler(),
                    onChange: (e)=>setSearchkey(e.target.value),
                    type: "text",
                    className: "search-input",
                    placeholder: (0,ServeLangItem/* default */.Z)()?.Search_products + "..."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: searchHandler,
                    className: "w-[93px] h-full text-sm font-600 ",
                    type: "button",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {})
                })
            ]
        })
    });
};


/***/ }),

/***/ 1222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9808);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function SubscribeInputWidget(props) {
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const subscribehandler = ()=>{
        _utils_apiRequest__WEBPACK_IMPORTED_MODULE_2__/* ["default"].subscribeRequest */ .Z.subscribeRequest({
            email: email
        }).then((res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(res.data.message);
        }).catch((err)=>{
            console.error(err);
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.response && err.response.data.message);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        "data-aos": "fade-right",
        className: "sm:w-[543px] w-[300px] h-[54px] flex mt-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 bg-white ltr:pl-4 rtl:pr-4 flex rtl:space-x-reverse space-x-2 items-center h-full focus-within:primary-text text-qblack",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "17",
                            height: "15",
                            viewBox: "0 0 17 15",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M15 14H2C1.4 14 1 13.6 1 13V2C1 1.4 1.4 1 2 1H15C15.6 1 16 1.4 16 2V13C16 13.6 15.6 14 15 14Z",
                                    stroke: "currentColor",
                                    strokeMiterlimit: "10",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M3 4L8.5 8.5L14 4",
                                    stroke: "currentColor",
                                    strokeMiterlimit: "10",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        name: "email",
                        className: "w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider",
                        placeholder: "EMAIL ADDRESS",
                        onChange: (e)=>setEmail(e.target.value.trim()),
                        value: email
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: subscribehandler,
                type: "button",
                className: "sm:w-[158px] w-[80px] h-full primary-bg text-sm font-600",
                children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)()?.Get_the_Coupon
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscribeInputWidget);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Arrow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Arrow({ className , width ="5.78538" , height ="1.28564" ,  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "10",
        height: "5",
        viewBox: "0 0 10 5",
        fill: "none",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "9.18359",
                y: "0.90918",
                width: width,
                height: height,
                transform: "rotate(135 9.18359 0.90918)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "5.08984",
                y: "5",
                width: width,
                height: height,
                transform: "rotate(-135 5.08984 5)"
            })
        ]
    });
};


/***/ }),

/***/ 8263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Compair)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Compair({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "20",
        height: "22",
        viewBox: "0 0 20 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.33556 0.70842C8.33556 1.09592 8.32306 1.41675 8.31056 1.41675C8.29806 1.41675 8.09389 1.45425 7.86473 1.50425C3.90639 2.30425 0.952225 5.43342 0.402225 9.40843C0.273058 10.3168 0.327225 11.7001 0.523058 12.6251C1.01889 14.9918 2.55639 17.2126 4.58973 18.5126L4.82722 18.6626L5.41472 18.2209C5.73556 17.9793 6.00222 17.7709 6.00222 17.7543C6.00222 17.7418 5.89806 17.6751 5.77306 17.6084C5.13556 17.2751 4.30639 16.6084 3.74389 15.9793C2.67722 14.7834 1.99389 13.3251 1.77306 11.7918C1.69389 11.2251 1.69389 10.1001 1.77306 9.56259C1.94389 8.42509 2.34389 7.35009 2.94389 6.40842C3.69389 5.23759 4.83556 4.21259 6.08556 3.58342C6.71889 3.26676 7.59806 2.96675 8.20223 2.85842L8.33556 2.83342V3.41675C8.33556 3.73759 8.34389 4.00009 8.35639 4.00009C8.39806 4.00009 11.0022 2.02925 11.0022 2.00009C11.0022 1.97092 8.39806 8.58307e-05 8.35639 8.58307e-05C8.34389 8.58307e-05 8.33556 0.316753 8.33556 0.70842Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.9234 3.11266C13.6026 3.35432 13.3443 3.56682 13.3568 3.58349C13.3693 3.60432 13.4943 3.68349 13.6401 3.76266C14.8609 4.45432 15.9984 5.62099 16.7026 6.91683C17.1276 7.69599 17.4859 8.82933 17.5859 9.71266C17.6693 10.4085 17.6193 11.6043 17.4859 12.2377C16.9109 14.9627 15.0151 17.1585 12.3984 18.1335C12.0693 18.2543 11.1776 18.5002 11.0609 18.5002C11.0151 18.5002 11.0026 18.396 11.0026 17.9168C11.0026 17.596 10.9943 17.3335 10.9818 17.3335C10.9401 17.3335 8.33594 19.3043 8.33594 19.3335C8.33594 19.3627 10.9401 21.3335 10.9818 21.3335C10.9943 21.3335 11.0026 21.0168 11.0026 20.6252V19.921L11.1609 19.896C11.5484 19.8335 12.6443 19.5377 13.0026 19.396C16.2526 18.1252 18.4776 15.3085 18.9401 11.8752C19.0609 10.9918 19.0068 9.60849 18.8151 8.70849C18.3193 6.34183 16.7818 4.12099 14.7484 2.82099L14.5109 2.67099L13.9234 3.11266Z"
            })
        ]
    });
};


/***/ }),

/***/ 7727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FireIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function FireIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "text-red-600 h-5 w-5",
        style: {
            color: "#ED1B24"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
            })
        ]
    });
};


/***/ }),

/***/ 4527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);



function FontAwesomeCom({ icon , size , className  }) {
    const text = icon.split(" ");
    const prefix = text[0];
    const iconName = text[1].replace("fa-", "");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        className: className && className,
        icon: [
            `${prefix}`,
            `${iconName}`
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontAwesomeCom);


/***/ }),

/***/ 6399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThinBag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ThinBag({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "18",
        height: "20",
        viewBox: "0 0 18 20",
        fill: "none",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z",
            fill: "black"
        })
    });
};


/***/ }),

/***/ 2189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThinLove)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ThinLove({ className , fill  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: fill ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "22",
            height: "20",
            viewBox: "0 0 22 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M5.58833 0.693647C4.25866 0.857708 3.14574 1.395 2.20372 2.33014C1.35756 3.16685 0.849037 4.05278 0.557261 5.2053C0.040399 7.20273 0.415541 9.17145 1.65768 11.0212C2.45381 12.2066 3.48336 13.2935 5.37158 14.9505C6.57203 16.0045 10.2359 19.0807 10.4151 19.1832C10.5819 19.2816 10.6444 19.2939 10.9987 19.2939C11.353 19.2939 11.4155 19.2816 11.5823 19.1832C11.7615 19.0807 15.4337 16.0004 16.6258 14.9505C18.5224 13.2852 19.5436 12.2025 20.3397 11.0212C21.5819 9.17145 21.957 7.20273 21.4401 5.2053C21.1484 4.05278 20.6398 3.16685 19.7937 2.33014C18.9517 1.49754 18.0514 1.01767 16.8717 0.771576C16.2799 0.648531 15.1878 0.636227 14.6709 0.751068C13.2287 1.05868 12.1241 1.76824 11.1154 3.0315L10.9987 3.17505L10.8862 3.0315C9.88995 1.79285 8.80204 1.08329 7.41401 0.771576C7.00136 0.677242 6.051 0.636227 5.58833 0.693647ZM6.98052 1.9446C8.1643 2.14968 9.18552 2.82232 9.99415 3.93383C10.1317 4.1266 10.3026 4.35629 10.3693 4.45062C10.6777 4.87718 11.3197 4.87718 11.6281 4.45062C11.6948 4.35629 11.8657 4.1266 12.0032 3.93383C13.1078 2.41628 14.6459 1.70262 16.3215 1.9282C18.1806 2.17839 19.6311 3.45806 20.1855 5.34065C20.6232 6.82949 20.4314 8.39216 19.6353 9.79897C18.9684 10.9761 17.8555 12.2107 15.9172 13.921C14.9794 14.7454 11.0362 18.084 10.9987 18.084C10.957 18.084 7.03054 14.7577 6.08018 13.921C3.09989 11.2919 1.92444 9.65132 1.641 7.72772C1.4576 6.48496 1.7202 5.14788 2.35794 4.09379C3.31664 2.50651 5.18401 1.63699 6.98052 1.9446Z",
                    fill: "#EF262C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M4 2L2 4L1.5 5.5L1 7L1.5 9L3.5 12L8 16L11 18.5L11.5 18L12.5 17L14.5 15.5L18.5 12L21 8.5L20 4C19.3333 3.33333 18.5 2.4 18.5 2C18.5 1.6 17 1.5 16.5 1.5L14.5 2L13.5 2.5L12.5 3L11.5 4H11L9.5 3L8 2L7 1.5H5.5L4 2Z",
                    fill: "#EF272D"
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "21",
            height: "18",
            viewBox: "0 0 21 18",
            fill: "none",
            className: className,
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.97214 0.0251923C3.71435 0.183434 2.6616 0.701674 1.7705 1.60365C0.970091 2.41068 0.489057 3.26519 0.213053 4.37683C-0.275867 6.30342 0.0789948 8.20232 1.25398 9.98649C2.00708 11.1298 2.98097 12.1781 4.76711 13.7764C5.90266 14.7931 9.36848 17.7601 9.53802 17.859C9.69574 17.954 9.75488 17.9658 10.09 17.9658C10.4252 17.9658 10.4843 17.954 10.642 17.859C10.8116 17.7601 14.2853 14.7891 15.413 13.7764C17.207 12.1702 18.173 11.1258 18.9261 9.98649C20.1011 8.20232 20.4559 6.30342 19.967 4.37683C19.691 3.26519 19.21 2.41068 18.4096 1.60365C17.6131 0.800575 16.7614 0.337719 15.6456 0.100357C15.0857 -0.0183239 14.0526 -0.0301933 13.5637 0.0805759C12.1995 0.377279 11.1546 1.06167 10.2004 2.28013L10.09 2.41859L9.98357 2.28013C9.04122 1.08541 8.01212 0.401016 6.69913 0.100357C6.30878 0.00936699 5.4098 -0.0301933 4.97214 0.0251923ZM6.28907 1.23178C7.40885 1.42958 8.37487 2.07837 9.13979 3.15046C9.26991 3.3364 9.43156 3.55793 9.49465 3.64892C9.78643 4.06035 10.3936 4.06035 10.6854 3.64892C10.7485 3.55793 10.9102 3.3364 11.0403 3.15046C12.0851 1.68673 13.5401 0.998377 15.1251 1.21596C16.8837 1.45728 18.2558 2.69156 18.7802 4.50738C19.1942 5.94342 19.0128 7.45067 18.2597 8.80759C17.6289 9.94298 16.5761 11.1337 14.7427 12.7834C13.8555 13.5786 10.1255 16.7988 10.09 16.7988C10.0506 16.7988 6.33638 13.5904 5.4374 12.7834C2.61823 10.2476 1.50633 8.66518 1.23821 6.8098C1.06472 5.61112 1.31312 4.32145 1.91639 3.30475C2.82326 1.77376 4.58968 0.935081 6.28907 1.23178Z"
            })
        })
    });
};


/***/ }),

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThinPeople)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ThinPeople({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "21",
        height: "20",
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19.992 19.729C19.9004 18.043 19.438 16.4886 18.617 15.1176C17.6046 13.4237 16.2096 12.1244 14.4679 11.2475C14.0773 11.0522 13.878 10.9645 13.3878 10.7772L12.9334 10.6138L13.4954 10.1833C14.5476 9.38621 15.3408 8.08689 15.6118 6.70387C15.6955 6.28936 15.7035 5.22918 15.6317 4.78278C15.4643 3.77043 14.9582 2.70227 14.2766 1.92507C13.4356 0.976485 12.2439 0.30291 11.0084 0.079713C10.7971 0.0398565 10.1515 0 9.75289 0C9.60542 0 9.55361 0.00398565 9.53766 0.0079713H9.53368C9.49781 0.011957 9.42607 0.0239139 9.33838 0.0358709H9.32642C9.25468 0.0438422 9.17896 0.0557991 9.10323 0.0677561C8.1666 0.195297 7.01873 0.73336 6.25349 1.41092C5.27302 2.27581 4.59147 3.50339 4.38023 4.78278C4.3045 5.22918 4.31646 6.28936 4.40016 6.70387C4.67118 8.08689 5.46433 9.38621 6.51654 10.1833L7.07852 10.6138L6.62415 10.7772C6.13392 10.9645 5.93464 11.0522 5.54404 11.2475C3.80231 12.1244 2.40335 13.4237 1.39498 15.1176C0.569948 16.4926 0.107613 18.043 0.0159426 19.729L0 20H0.255082H1.1957H18.8123H19.4938H20.008L19.992 19.729ZM5.56397 4.98605C5.73934 3.92188 6.28537 2.95735 7.10642 2.25986C7.91949 1.57035 8.94779 1.19171 10 1.19171C10.2352 1.19171 10.4743 1.21164 10.7094 1.24751C13.1606 1.64607 14.8386 3.95775 14.444 6.39299C14.2686 7.45715 13.7226 8.42168 12.9016 9.11917C12.0885 9.80869 11.0602 10.1873 10.008 10.1873C9.77282 10.1873 9.53368 10.1674 9.29852 10.1315C6.84735 9.72898 5.16939 7.42128 5.56397 4.98605ZM2.54285 15.5281C3.73057 13.7146 5.31287 12.4751 7.25389 11.8414C8.17059 11.5424 9.09526 11.391 10.004 11.391C10.9127 11.391 11.8374 11.5424 12.7541 11.8414C14.6951 12.4751 16.2814 13.7146 17.4651 15.5281C18.047 16.4169 18.5134 17.6963 18.7086 18.8721H1.29932C1.49462 17.6963 1.96094 16.4169 2.54285 15.5281Z",
            fill: "black"
        })
    });
};


/***/ }),

/***/ 2773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Drawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8263);
/* harmony import */ var _Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2189);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Helpers_icons_FontAwesomeCom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4527);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6681);









function Drawer({ className , open , action  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("category");
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.websiteSetup);
    const categoryList = websiteSetup && websiteSetup.payload.productCategories;
    const customPages = websiteSetup && websiteSetup.payload.customPages;
    // const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
    // const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
    const { 0: searchKey , 1: setSearchkey  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const searchHandler = ()=>{
        if (searchKey !== "") {
            router.push({
                pathname: "/search",
                query: {
                    search: searchKey
                }
            });
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `drawer-wrapper w-full block lg:hidden h-full relative  ${className || ""}`,
            children: [
                open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: action,
                    className: "w-full h-screen bg-black bg-opacity-40 z-40 left-0 top-0 fixed"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed top-0 z-50 ${open ? "left-0" : "-left-[280px]"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full px-5 mt-5 mb-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-5 items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "compaire relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/products-compaire",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "w-[18px] h-[18px] rounded-full primary-bg absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                        children: "2"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "favorite relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/wishlist",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "w-[18px] h-[18px] rounded-full primary-bg absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                        children: "1"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: action,
                                        type: "button",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "34",
                                            height: "34",
                                            viewBox: "0 0 34 34",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M17.0363 33.9994C7.66923 34.031 0.0436412 26.4423 0.000545718 17.0452C-0.0425497 7.68436 7.54917 0.0479251 16.9447 0.00021656C26.3072 -0.0467224 33.9505 7.54277 33.9998 16.9352C34.0483 26.3153 26.4411 33.9679 17.0363 33.9994Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M17.0363 33.9994C26.4411 33.9679 34.0483 26.3153 33.9998 16.9352C33.9505 7.54277 26.3072 -0.0467224 16.9447 0.00021656C7.54917 0.0479251 -0.0425497 7.68436 0.000545718 17.0452C0.0436412 26.4423 7.66846 34.031 17.0363 33.9994ZM23.4629 21.5945C23.4514 21.8445 23.3321 22.0908 23.1305 22.3039C22.7865 22.6671 22.4479 23.0342 22.1039 23.3966C21.5236 24.0084 21.1458 24.0068 20.5648 23.3889C19.4581 22.2124 18.3492 21.0389 17.2533 19.8523C17.0633 19.6461 16.9686 19.6169 16.7608 19.8431C15.6511 21.0512 14.5222 22.2424 13.3978 23.4366C12.8753 23.9914 12.4697 23.9891 11.9388 23.4312C11.6032 23.0788 11.2715 22.7218 10.9399 22.3647C10.4089 21.7938 10.4081 21.3575 10.9376 20.7927C12.0503 19.6046 13.1593 18.4126 14.2836 17.2361C14.4822 17.0283 14.5037 16.9152 14.2921 16.6943C13.1654 15.5193 12.058 14.3266 10.9452 13.1385C10.4004 12.556 10.4042 12.1259 10.9545 11.5387C11.2785 11.1925 11.6009 10.8447 11.9272 10.5007C12.4821 9.91666 12.8822 9.92358 13.4417 10.5192C14.5468 11.6965 15.6588 12.8677 16.7516 14.0573C16.9671 14.2912 17.071 14.2651 17.271 14.0473C18.3831 12.8415 19.5082 11.6472 20.6363 10.4561C21.1273 9.93743 21.5521 9.94359 22.0469 10.4576C22.3848 10.8085 22.7157 11.1655 23.0474 11.5226C23.6115 12.1289 23.6122 12.5552 23.052 13.1539C21.9477 14.3328 20.8503 15.517 19.7321 16.6828C19.5058 16.9183 19.5382 17.0391 19.7475 17.2584C20.8641 18.4249 21.9623 19.6092 23.0681 20.7865C23.2721 21.002 23.456 21.229 23.4629 21.5945Z",
                                                    fill: "#FE4949"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M23.4614 21.5947C23.4545 21.2292 23.2706 21.0022 23.0659 20.7844C21.9608 19.6071 20.8619 18.4228 19.7452 17.2563C19.5359 17.0377 19.5036 16.9169 19.7298 16.6807C20.848 15.5157 21.9454 14.3307 23.0497 13.1518C23.61 12.5539 23.6084 12.1276 23.0451 11.5205C22.7134 11.1635 22.3825 10.8064 22.0447 10.4555C21.5498 9.9415 21.125 9.93611 20.6341 10.454C19.5059 11.6452 18.3808 12.8394 17.2688 14.0452C17.0679 14.263 16.964 14.2891 16.7493 14.0552C15.6565 12.8663 14.5445 11.6952 13.4394 10.5171C12.88 9.92149 12.4798 9.91456 11.9249 10.4986C11.5979 10.8426 11.2762 11.1904 10.9522 11.5367C10.402 12.1238 10.3981 12.5547 10.943 13.1364C12.0558 14.3245 13.1632 15.5172 14.2898 16.6922C14.5014 16.9131 14.4799 17.0254 14.2813 17.234C13.157 18.4113 12.0481 19.6025 10.9353 20.7906C10.4058 21.3561 10.4074 21.7917 10.9376 22.3626C11.2693 22.7197 11.601 23.076 11.9365 23.4291C12.4675 23.987 12.873 23.9893 13.3956 23.4345C14.5207 22.2403 15.6488 21.0491 16.7586 19.841C16.9671 19.614 17.061 19.644 17.2511 19.8502C18.3469 21.0368 19.4559 22.2103 20.5625 23.3868C21.1435 24.0047 21.5214 24.0063 22.1016 23.3945C22.4456 23.0321 22.7842 22.6643 23.1282 22.3018C23.3306 22.091 23.4507 21.8448 23.4614 21.5947Z",
                                                    fill: "white"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full mt-5 px-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "search-bar w-full h-[34px] flex ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: searchKey,
                                            onChange: (e)=>setSearchkey(e.target.value),
                                            type: "text",
                                            className: "w-full text-xs h-full focus:outline-none foucus:ring-0 placeholder:text-qgraytwo pl-2.5 ",
                                            placeholder: "Search Product..."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: searchHandler,
                                        className: "cursor-pointer w-[40px] h-full primary-bg flex justify-center items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                width: "23",
                                                height: "23",
                                                viewBox: "0 0 23 23",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M0 8.83158C0.0484783 8.43809 0.0969566 8.04461 0.169674 7.67571C0.484783 5.92962 1.2362 4.42946 2.39968 3.12604C3.75707 1.60128 5.45381 0.592971 7.44142 0.199486C9.76838 -0.267779 11.9741 0.0765214 14.0345 1.33076C16.3614 2.75714 17.84 4.82294 18.3975 7.50356C18.8823 9.7907 18.5187 11.9795 17.4037 14.0453C17.1856 14.4388 17.1856 14.4388 17.5007 14.7585C19.1247 16.4062 20.7487 18.0539 22.3727 19.7016C22.906 20.2427 23.1242 20.8575 22.9302 21.5953C22.5667 22.9971 20.8457 23.5135 19.7549 22.3822C18.8338 21.4231 17.9127 20.5132 16.9674 19.5541C16.216 18.7917 15.4888 18.0539 14.7374 17.2915C14.6889 17.2423 14.6404 17.1932 14.6162 17.1686C14.0345 17.4637 13.5012 17.808 12.9195 18.0539C10.4228 19.1114 7.90196 19.0868 5.42957 17.9555C3.56316 17.0948 2.15728 15.7422 1.16348 13.9469C0.533261 12.791 0.145435 11.5614 0.0484783 10.2334C0.0484783 10.1596 0.0242392 10.0858 0 10.012C0 9.64314 0 9.22507 0 8.83158ZM3.00566 9.4464C3.00566 12.9632 5.84164 15.816 9.30784 15.816C12.774 15.7914 15.5615 12.9632 15.5858 9.4464C15.5858 5.95422 12.7498 3.07685 9.30784 3.07685C5.8174 3.07685 3.00566 5.92962 3.00566 9.4464Z",
                                                    fill: "#1D1D1D"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full mt-5 px-5 flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: ()=>setTab("category"),
                                    className: `text-base font-semibold  ${tab === "category" ? "text-qblack" : "text-qgray"}`,
                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Categories
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-[1px] h-[14px] bg-qgray"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: ()=>setTab("menu"),
                                    className: `text-base font-semibold ${tab === "menu" ? "text-qblack" : "text-qgray "}`,
                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Main_Menu
                                })
                            ]
                        }),
                        tab === "category" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "category-item mt-5 w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "categories-list",
                                children: categoryList && categoryList.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "category-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: {
                                                pathname: "/products",
                                                query: {
                                                    category: item.slug
                                                }
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_FontAwesomeCom__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                        className: "w-4 h-4",
                                                                        icon: item.icon
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm font-400 capitalize",
                                                                children: item.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "6",
                                                                height: "9",
                                                                viewBox: "0 0 6 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "1.49805",
                                                                        y: "0.818359",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                        fill: "#1D1D1D"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "5.58984",
                                                                        y: "4.90918",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                        fill: "#1D1D1D"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }, i))
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "menu-item mt-5 w-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "categories-list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "category-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: " flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex items-center space-x-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm font-400 capitalize",
                                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Pages
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "6",
                                                                    height: "9",
                                                                    viewBox: "0 0 6 9",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            x: "1.49805",
                                                                            y: "0.818359",
                                                                            width: "5.78538",
                                                                            height: "1.28564",
                                                                            transform: "rotate(45 1.49805 0.818359)",
                                                                            fill: "#1D1D1D"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            x: "5.58984",
                                                                            y: "4.90918",
                                                                            width: "5.78538",
                                                                            height: "1.28564",
                                                                            transform: "rotate(135 5.58984 4.90918)",
                                                                            fill: "#1D1D1D"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "submenu-list ml-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "category-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/privacy-policy",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center space-x-6",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-sm font-400 capitalize",
                                                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Privacy_Policy
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "6",
                                                                                height: "9",
                                                                                viewBox: "0 0 6 9",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "1.49805",
                                                                                        y: "0.818359",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                                        fill: "#1D1D1D"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "5.58984",
                                                                                        y: "4.90918",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                                        fill: "#1D1D1D"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "category-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/faq",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center space-x-6",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-sm font-400 capitalize",
                                                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.FAQ
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "6",
                                                                                height: "9",
                                                                                viewBox: "0 0 6 9",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "1.49805",
                                                                                        y: "0.818359",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                                        fill: "#1D1D1D"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "5.58984",
                                                                                        y: "4.90918",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                                        fill: "#1D1D1D"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "category-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/terms-condition",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center space-x-6",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-sm font-400 capitalize",
                                                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Term_and_Conditions
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "6",
                                                                                height: "9",
                                                                                viewBox: "0 0 6 9",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "1.49805",
                                                                                        y: "0.818359",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                                        fill: "#1D1D1D"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "5.58984",
                                                                                        y: "4.90918",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                                        fill: "#1D1D1D"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "category-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/seller-terms-condition",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-between items-center px-5 h-12 bg-white hover:bg-qgreen transition-all duration-300 ease-in-out cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center space-x-6",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-sm font-400 capitalize capitalize ",
                                                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Seller_terms_and_conditions
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "6",
                                                                                height: "9",
                                                                                viewBox: "0 0 6 9",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "1.49805",
                                                                                        y: "0.818359",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                                        fill: "#1D1D1D"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "5.58984",
                                                                                        y: "4.90918",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                                        fill: "#1D1D1D"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    customPages && customPages.length > 0 && customPages.map((item, i)=>// eslint-disable-next-line react/jsx-key
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "category-item",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    href: `/pages?custom=${item.slug}`,
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: " flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "flex items-center space-x-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-sm font-400 capitalize capitalize ",
                                                                                    children: item.page_name
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                        width: "6",
                                                                                        height: "9",
                                                                                        viewBox: "0 0 6 9",
                                                                                        fill: "none",
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                x: "1.49805",
                                                                                                y: "0.818359",
                                                                                                width: "5.78538",
                                                                                                height: "1.28564",
                                                                                                transform: "rotate(45 1.49805 0.818359)",
                                                                                                fill: "#1D1D1D"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                x: "5.58984",
                                                                                                y: "4.90918",
                                                                                                width: "5.78538",
                                                                                                height: "1.28564",
                                                                                                transform: "rotate(135 5.58984 4.90918)",
                                                                                                fill: "#1D1D1D"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }, i))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "category-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/about",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm font-400 capitalize",
                                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.About
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "6",
                                                                height: "9",
                                                                viewBox: "0 0 6 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "1.49805",
                                                                        y: "0.818359",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                        fill: "#1D1D1D"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "5.58984",
                                                                        y: "4.90918",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                        fill: "#1D1D1D"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "category-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/Blogs",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm font-400 capitalize",
                                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.blogs
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "6",
                                                                height: "9",
                                                                viewBox: "0 0 6 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "1.49805",
                                                                        y: "0.818359",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                        fill: "#1D1D1D"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "5.58984",
                                                                        y: "4.90918",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                        fill: "#1D1D1D"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "category-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-center px-5 h-12 bg-white hover-primary-bg transition-all duration-300 ease-in-out cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm font-400 capitalize",
                                                            children: "Contact"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "6",
                                                                height: "9",
                                                                viewBox: "0 0 6 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "1.49805",
                                                                        y: "0.818359",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                        fill: "#1D1D1D"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "5.58984",
                                                                        y: "4.90918",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                        fill: "#1D1D1D"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 9866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/Helpers/icons/FontAwesomeCom.jsx
var FontAwesomeCom = __webpack_require__(4527);
;// CONCATENATED MODULE: ./src/components/Helpers/icons/LockIcon.jsx

function LockIcom({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Helpers/icons/Mail.jsx

function MailIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Helpers/icons/Phone.jsx

function PhoneIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Helpers/icons/location.jsx

function Location({ className  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Partials/Footers/Footer/index.jsx










function Footer({ settings  }) {
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const { 0: firstCol , 1: setFirstCol  } = (0,external_react_.useState)(null);
    const { 0: secondCol , 1: setSecondCol  } = (0,external_react_.useState)(null);
    const { 0: thirdCol , 1: setThirdCol  } = (0,external_react_.useState)(null);
    const { 0: footerContent , 1: setFooterContent  } = (0,external_react_.useState)(null);
    const { 0: socialLink , 1: setSocialLink  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (!footerContent) {
            setFooterContent(websiteSetup && websiteSetup.payload && websiteSetup.payload.footer);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!socialLink) {
            setSocialLink(websiteSetup && websiteSetup.payload && websiteSetup.payload.social_links);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!firstCol) {
            setFirstCol(websiteSetup && websiteSetup.payload && websiteSetup.payload.footer_first_col);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!secondCol) {
            setSecondCol(websiteSetup && websiteSetup.payload && websiteSetup.payload.footer_second_col);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!thirdCol) {
            setThirdCol(websiteSetup && websiteSetup.payload && websiteSetup.payload.footer_third_col);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer-section-wrapper bg-white print:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full flex flex-col items-center ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full bg-trasparent p-2 flex flex-row flex-wrap gap-2 justify-between items-center ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-sm flex flex-row items-center gap-1 text-qblack font-600 cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(LockIcom, {
                                    className: "w-5 h-5"
                                }),
                                " We guarantee every transaction is 100% secure."
                            ]
                        }),
                        footerContent && footerContent.payment_image ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-2 lg:mt-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "#",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: "318",
                                        height: "28",
                                        src: `${"https://jaralayoun.com/srv/" + footerContent.payment_image}`,
                                        alt: "payment-getways"
                                    })
                                })
                            })
                        }) : "",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-sm text-qblack font-600 cursor-pointer",
                            children: "Also Available On:"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " container-x block mx-auto pt-[30px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:flex xl:flex pb-[30px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:w-2/6 xl:w-2/6 sm:w-1/2 w-full mb-10 md:mb-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "lg:w-[424px] ml-0 w-full mb-10 lg:mb-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-row items-center gap-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/assets/images/logo.png" // Use the correct path to your PNG image
                                                            ,
                                                            alt: "Jar al ayoun",
                                                            width: 60,
                                                            height: 90
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-col items-center ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-xl text-qblack font-700 cursor-pointer",
                                                            children: "JAR Al Ayoun"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-sm text-qblack font-400",
                                                            children: "OPTICAL STORE"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]",
                                            children: "some sample text write here about jar store"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-qblack flex flex-row items-center gap-1 text-[15px] w-[247px] leading-[28px]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Location, {
                                                    className: "w-5 h-5"
                                                }),
                                                " jar al ayoun head office"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-qblack flex flex-row items-center gap-1 text-[15px] w-[247px] leading-[28px]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(PhoneIcon, {
                                                    className: "w-5 h-5"
                                                }),
                                                " +966 51 00000"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-qblack text-[15px] flex items-center gap-1 flex-row w-[247px] leading-[28px]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(MailIcon, {
                                                    className: '"w-5 h-5'
                                                }),
                                                " info@jaralayoun"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:w-1/6 xl:w-1/6 sm:w-1/2 w-full mb-10 md:mb-0",
                                children: firstCol && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "text-lg text-qblack font-700 ",
                                                children: firstCol.columnTitle
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "flex flex-col space-y-4 ",
                                                children: firstCol.col_links.length > 0 && firstCol.col_links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: item.link,
                                                            passHref: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize",
                                                                    children: item.title
                                                                })
                                                            })
                                                        })
                                                    }, i))
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:w-1/6 xl:w-1/6 sm:w-1/2 w-full mb-10 md:mb-0",
                                children: secondCol && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "text-lg text-qblack font-700 ",
                                                children: secondCol.columnTitle
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "flex flex-col space-y-4 ",
                                                children: secondCol.col_links.length > 0 && secondCol.col_links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: item.link,
                                                            passHref: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize",
                                                                    children: item.title
                                                                })
                                                            })
                                                        })
                                                    }, i))
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:w-1/6 xl:w-1/6 sm:w-1/2 w-full mb-10 md:mb-0",
                                children: thirdCol && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "text-lg text-qblack font-700 ",
                                                children: thirdCol.columnTitle
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "flex flex-col space-y-4 ",
                                                children: thirdCol.col_links.length > 0 && thirdCol.col_links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: item.link,
                                                            passHref: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize",
                                                                    children: item.title
                                                                })
                                                            })
                                                        })
                                                    }, i))
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:w-1/6 xl:w-1/6 sm:w-1/2 w-full mb-10 md:mb-0",
                                children: thirdCol && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "text-lg text-qblack font-700 ",
                                                children: thirdCol.columnTitle
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "flex flex-col space-y-4 ",
                                                children: thirdCol.col_links.length > 0 && thirdCol.col_links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: item.link,
                                                            passHref: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize",
                                                                    children: item.title
                                                                })
                                                            })
                                                        })
                                                    }, i))
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:w-2/6 xl:w-2/6 sm:w-1/2 w-full mb-10 md:mb-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col items-center ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-xl text-qblack font-700 ",
                                            children: "Instagram"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm text-qblack font-400",
                                            children: "Instagram API"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full h-[1px] bg-primary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bottom-bar border-t border-qgray-border lg:h-[82px] flex lg:flex-row flex-col-reverse justify-between items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex rtl:space-x-reverse lg:space-x-5 space-x-2.5 justify-between items-center mb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sm:text-base text-[10px] text-qblack font-500",
                                    children: footerContent && footerContent.copyright ? footerContent.copyright : ""
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sm:text-base text-[10px] text-qblack font-700 ",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex rtl:space-x-reverse space-x-5 items-center ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-md text-qblack font-700",
                                                    children: "Follow Us:"
                                                }),
                                                socialLink && socialLink.length > 0 && socialLink.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: item.link,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FontAwesomeCom/* default */.Z, {
                                                            className: "w-4 h-4 text-primary",
                                                            icon: item.icon
                                                        })
                                                    }, i))
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-sm text-qblack font-400",
                                        children: "Up to 5 % discount on your first subscription"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Middlebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9808);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4994);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3896);
/* harmony import */ var _Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3591);
/* harmony import */ var _Helpers_SearchBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5543);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6681);
/* harmony import */ var _Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8263);
/* harmony import */ var _Helpers_icons_ThinBag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6399);
/* harmony import */ var _Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2189);
/* harmony import */ var _Helpers_icons_ThinPeople__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(661);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3219);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cart__WEBPACK_IMPORTED_MODULE_8__]);
_Cart__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















function Middlebar({ className , settings  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const getLoginContexts = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.wishlistData);
    const wishlists = wishlistData && wishlistData.wishlists;
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { compareProducts  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.compareProducts);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (getLoginContexts.loginPopup === false) {
            setAuth(()=>JSON.parse(localStorage.getItem("auth")));
        }
    }, [
        getLoginContexts.loginPopup
    ]);
    const profilehandler = ()=>{
        setProfile(!profile);
    };
    const logout = ()=>{
        if (auth) {
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].logout */ .Z.logout(auth.access_token);
            localStorage.removeItem("auth");
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_7__/* .fetchWishlist */ .BW)());
            router.push("/login");
        }
    };
    //cart
    const { cart  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.cart);
    const { 0: cartItems , 1: setCartItem  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        cart && setCartItem(cart.cartProducts);
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full p-2	 bg-white ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:block hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-x mx-auto h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative h-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-center h-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-row justify-between items-center gap-4 w-200 ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row items-center g-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        src: "/assets/images/logo.png" // Use the correct path to your PNG image
                                                        ,
                                                        alt: "Jar al ayoun",
                                                        width: 60,
                                                        height: 90
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col items-center p-4 ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-xl text-qblack font-800 cursor-pointer",
                                                                children: "Jar al ayoun"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm text-qblack font-500",
                                                                children: "OPTICAL STORE"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[600px] h-[44px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SearchBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        className: "search-com"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-4 items-center relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "compaire relative",
                                                    children: [
                                                        auth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/products-compaire",
                                                            passHref: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "cursor-pointer",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                        className: "fill-current"
                                                                    })
                                                                })
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/login",
                                                            passHref: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "cursor-pointer",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                        className: "fill-current"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "w-[18px] h-[18px] text-qwhite rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                            children: compareProducts ? compareProducts.products.length : 0
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-md leading-6 text-qblack font-500 cursor-pointer",
                                                    children: "Compare"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/wishlist",
                                            passHref: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "favorite relative",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "cursor-pointer",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                        className: "fill-current"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                                children: wishlists ? wishlists.data.length : 0
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-md leading-6 text-qblack font-500 cursor-pointer",
                                                        children: "WishList"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "cart-wrapper group relative py-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "cart relative cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: "/cart",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        rel: "noopener noreferrer",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "cursor-pointer",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinBag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                                    children: cartItems ? cartItems.length : 0
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-md leading-6 text-qblack font-500 cursor-pointer",
                                                            children: "Cart"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    className: "absolute ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: auth ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: profilehandler,
                                                type: "button",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-qblack font-bold text-sm block",
                                                        children: auth && auth.user.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-qgray font-medium text-sm block",
                                                        children: auth && auth.user.phone
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/login",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "cursor-pointer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinPeople__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-md leading-6 text-qblack font-500 cursor-pointer",
                                                            children: "Account"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        profile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>setProfile(false),
                                                    className: "w-full h-full fixed top-0 left-0 z-30",
                                                    style: {
                                                        zIndex: "35",
                                                        margin: "0"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-[208px] h-[267px] bg-white absolute right-0 top-11 z-40 border-t-[3px] primary-border flex flex-col justify-between",
                                                    style: {
                                                        boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "menu-item-area w-full p-5",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "w-full flex flex-col space-y-7",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-base text-qgraytwo",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Hi,
                                                                                ", ",
                                                                                auth && auth.user.name,
                                                                                " "
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/profile#dashboard",
                                                                            passHref: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                rel: "noopener noreferrer",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "capitalize",
                                                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.profile
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/contact",
                                                                            passHref: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                rel: "noopener noreferrer",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "capitalize",
                                                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Support
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/faq",
                                                                            passHref: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                rel: "noopener noreferrer",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "capitalize",
                                                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.FAQ
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-full h-10 flex justify-center items-center border-t border-qgray-border",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: logout,
                                                                type: "button",
                                                                className: "text-qblack text-base font-semibold",
                                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Sign_Out
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:block flex flex-col justify-center items-center gap-2 ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-between items-center gap-4 w-11/12 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row items-center g-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    src: "/assets/images/logo.png" // Use the correct path to your PNG image
                                                    ,
                                                    alt: "Jar al ayoun",
                                                    width: 40,
                                                    height: 60
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center p-4 ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-md text-qblack font-600 cursor-pointer",
                                                            children: "Jar al ayoun"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm text-qblack font-400",
                                                            children: "OPTICAL STORE"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-4 items-center relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-row gap-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "compaire relative",
                                                children: [
                                                    auth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/products-compaire",
                                                        passHref: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "cursor-pointer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    className: "fill-current"
                                                                })
                                                            })
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/login",
                                                        passHref: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "cursor-pointer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    className: "fill-current"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "w-[18px] h-[18px] text-qwhite rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                        children: compareProducts ? compareProducts.products.length : 0
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/wishlist",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-row gap-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "favorite relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "cursor-pointer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                    className: "fill-current"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                            children: wishlists ? wishlists.data.length : 0
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "cart-wrapper group relative py-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-row gap-2",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cart relative cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/cart",
                                                                passHref: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "cursor-pointer",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinBag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                                children: cartItems ? cartItems.length : 0
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    className: "absolute ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: auth ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: profilehandler,
                                                type: "button",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-qblack font-bold text-sm block",
                                                        children: auth && auth.user.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-qgray font-medium text-sm block",
                                                        children: auth && auth.user.phone
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/login",
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-row gap-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "cursor-pointer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinPeople__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        profile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>setProfile(false),
                                                    className: "w-full h-full fixed top-0 left-0 z-30",
                                                    style: {
                                                        zIndex: "35",
                                                        margin: "0"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-[208px] h-[267px] bg-white absolute right-0 top-11 z-40 border-t-[3px] primary-border flex flex-col justify-between",
                                                    style: {
                                                        boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "menu-item-area w-full p-5",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "w-full flex flex-col space-y-7",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-base text-qgraytwo",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Hi,
                                                                                ", ",
                                                                                auth && auth.user.name,
                                                                                " "
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/profile#dashboard",
                                                                            passHref: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                rel: "noopener noreferrer",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "capitalize",
                                                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.profile
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/contact",
                                                                            passHref: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                rel: "noopener noreferrer",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "capitalize",
                                                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Support
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/faq",
                                                                            passHref: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                rel: "noopener noreferrer",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "capitalize",
                                                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.FAQ
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-full h-10 flex justify-center items-center border-t border-qgray-border",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: logout,
                                                                type: "button",
                                                                className: "text-qblack text-base font-semibold",
                                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Sign_Out
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-11/12 h-[44px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SearchBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                className: "search-com"
                            })
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_MobileMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/Helpers/ServeLangItem.js
var ServeLangItem = __webpack_require__(6681);
// EXTERNAL MODULE: ./src/components/Helpers/icons/Arrow.jsx
var Arrow = __webpack_require__(3479);
// EXTERNAL MODULE: ./src/components/Helpers/icons/Fire.jsx
var Fire = __webpack_require__(7727);
// EXTERNAL MODULE: ./src/components/Helpers/icons/FontAwesomeCom.jsx
var FontAwesomeCom = __webpack_require__(4527);
;// CONCATENATED MODULE: ./src/components/Helpers/icons/MenuIcon.jsx

function MenuIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        //   stroke="currentColor"
        stroke: "red",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        })
    });
};

// EXTERNAL MODULE: ./src/components/Shared/Multivendor.js
var Multivendor = __webpack_require__(9732);
;// CONCATENATED MODULE: ./src/components/Partials/Headers/Header/Drawer.js

// Drawer.js

const Drawer = ({ isOpen , onClose , children  })=>{
    const drawerStyles = {
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        width: "300px",
        height: "100%",
        position: "fixed",
        top: 0,
        left: isOpen ? "0" : "-300px",
        backgroundColor: "#fff",
        boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.2)",
        transition: "left 0.3s ease-in-out",
        zIndex: 1000
    };
    const overlayStyles = {
        display: isOpen ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: overlayStyles,
                onClick: onClose
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: drawerStyles,
                children: children
            })
        ]
    });
};
/* harmony default export */ const Header_Drawer = (Drawer);

;// CONCATENATED MODULE: ./src/components/Partials/Headers/Header/MobileMenu.jsx












function MobileMenu() {
    const { 0: isDrawerOpen , 1: setIsDrawerOpen  } = (0,external_react_.useState)(false);
    const { 0: isDropdownOpen , 1: setIsDropdownOpen  } = (0,external_react_.useState)(false); // State for the dropdown menu
    const toggleDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDrawer = ()=>{
        setIsDrawerOpen(!isDrawerOpen);
    };
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const categoryList = websiteSetup && websiteSetup.payload.productCategories;
    const { 0: categoryToggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { 0: subCatHeight , 1: setHeight  } = (0,external_react_.useState)(null);
    const handler = ()=>{
        setToggle(!categoryToggle);
    };
    (0,external_react_.useEffect)(()=>{
        let categorySelector = document.querySelector(".category-dropdown");
        setHeight(categorySelector.offsetHeight);
    }, [
        categoryToggle
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: toggleDrawer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(MenuIcon, {
                    className: "w-6 h-6 "
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Drawer, {
                isOpen: isDrawerOpen,
                onClose: toggleDrawer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-between h-screen ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-row items-center g-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/assets/images/logo.png" // Use the correct path to your PNG image
                                                        ,
                                                        alt: "Jar al ayoun",
                                                        width: 30,
                                                        height: 45
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex flex-col items-center p-4 ",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-md text-qblack font-600 cursor-pointer",
                                                                children: "Jar al ayoun"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-xs text-qblack font-400",
                                                                children: "OPTICAL STORE"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "flex flex-col justify-center items-left gap-4 p-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    rel: "noopener noreferrer ",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "flex flex-row gap-1 items-center text-sm font-600 cursor-pointer text-qblack ",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Fire/* default */.Z, {}),
                                                            "Deals"
                                                        ]
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                        children: "EYE GLASSES"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                        children: "COMPUTER GLASSES"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                        children: "KIDS GLASSES"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                        children: "CONTACT LENSES"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                        children: "SUNGLASSES"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                        children: "GET APPOINTMENT"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: (0,Multivendor/* default */.Z)() === 1 && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                        children: "3D TRY ON"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "category w-[270px] h-[35px] px-5 rounded-md mt-[6px] relative bg-primary text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            onClick: toggleDropdown,
                                                            type: "button",
                                                            className: "w-full h-full flex justify-between items-center text-qwhite ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "flex rtl:space-x-reverse space-x-3 items-center ",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-sm font-600 text-qwhite ",
                                                                        children: (0,ServeLangItem/* default */.Z)()?.All_Categories
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Arrow/* default */.Z, {
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        className: "fill-current text-qwhite"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        categoryToggle && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "fixed top-0 left-0 w-full h-full -z-10",
                                                                onClick: handler
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            style: {
                                                                boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                                            },
                                                            className: `category-dropdown w-full absolute left-0 top-[53px]  ${categoryToggle ? "block" : "hidden"}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                className: "categories-list relative",
                                                                children: categoryList && categoryList.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "category-item",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: {
                                                                                    pathname: "/products",
                                                                                    query: {
                                                                                        category: item.slug
                                                                                    }
                                                                                },
                                                                                passHref: true,
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    rel: "noopener noreferrer",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: " flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                className: "flex items-center rtl:space-x-reverse space-x-6",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FontAwesomeCom/* default */.Z, {
                                                                                                            className: "w-4 h-4",
                                                                                                            icon: item.icon
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "text-xs font-400",
                                                                                                        children: item.name
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                                                        className: `transform rtl:rotate-180 fill-current`,
                                                                                                        width: "6",
                                                                                                        height: "9",
                                                                                                        viewBox: "0 0 6 9",
                                                                                                        fill: "none",
                                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                                                x: "1.49805",
                                                                                                                y: "0.818359",
                                                                                                                width: "5.78538",
                                                                                                                height: "1.28564",
                                                                                                                transform: "rotate(45 1.49805 0.818359)"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                                                x: "5.58984",
                                                                                                                y: "4.90918",
                                                                                                                width: "5.78538",
                                                                                                                height: "1.28564",
                                                                                                                transform: "rotate(135 5.58984 4.90918)"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: `sub-category-lvl-two absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${item.active_sub_categories.length > 0 ? "bg-white" : ""}`,
                                                                                style: {
                                                                                    height: `${subCatHeight}px`
                                                                                },
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                    className: "",
                                                                                    children: item.active_sub_categories.length > 0 && item.active_sub_categories.map((subItem)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            className: "category-item",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                    href: {
                                                                                                        pathname: "/products",
                                                                                                        query: {
                                                                                                            sub_category: subItem.slug
                                                                                                        }
                                                                                                    },
                                                                                                    passHref: true,
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                        rel: "noopener noreferrer",
                                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                            className: " flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                        className: "text-xs font-400",
                                                                                                                        children: subItem.name
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                                                                            className: `transform rtl:rotate-180 fill-current`,
                                                                                                                            width: "6",
                                                                                                                            height: "9",
                                                                                                                            viewBox: "0 0 6 9",
                                                                                                                            fill: "none",
                                                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                                                                    x: "1.49805",
                                                                                                                                    y: "0.818359",
                                                                                                                                    width: "5.78538",
                                                                                                                                    height: "1.28564",
                                                                                                                                    transform: "rotate(45 1.49805 0.818359)"
                                                                                                                                }),
                                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                                                                    x: "5.58984",
                                                                                                                                    y: "4.90918",
                                                                                                                                    width: "5.78538",
                                                                                                                                    height: "1.28564",
                                                                                                                                    transform: "rotate(135 5.58984 4.90918)"
                                                                                                                                })
                                                                                                                            ]
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: `sub-category-lvl-three absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${subItem.active_child_categories.length > 0 ? "bg-white" : ""}`,
                                                                                                    style: {
                                                                                                        height: `${subCatHeight}px`
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                                                        className: "",
                                                                                                        children: subItem.active_child_categories.length > 0 && subItem.active_child_categories.map((subsubitem)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                className: "category-item",
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                                    href: {
                                                                                                                        pathname: "/products",
                                                                                                                        query: {
                                                                                                                            child_category: subsubitem.slug
                                                                                                                        }
                                                                                                                    },
                                                                                                                    passHref: true,
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                                        rel: "noopener noreferrer",
                                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                                            className: " flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer",
                                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                                    className: "text-xs font-400",
                                                                                                                                    children: subsubitem.name
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            }, subsubitem.id))
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }, subItem.id))
                                                                                })
                                                                            })
                                                                        ]
                                                                    }, item.id))
                                                            })
                                                        })
                                                    ]
                                                }),
                                                isDropdownOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "flex flex-col justify-center items-left gap-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Dropdown Item 1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Dropdown Item 2"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Dropdown Item 3"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col justify-center items-left gap-4 p-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full h-[1px] bg-primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex ltr:space-x-2 rtl:space-x-0 items-center rtl:ml-2 ltr:ml-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ",
                                                    children: "NEED HELP CALL US:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-xs text-primary font-500 leading-none rtl:ml-2 ltr:ml-0 ",
                                                    children: "+88 01682 825 123"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                // onClick={handler}
                                                type: "button",
                                                className: "w-full h-full flex gap-2 justify-between items-center text-qwhite ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex rtl:space-x-reverse space-x-3 items-center ",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-sm font-600 text-qwhite ",
                                                            children: "Language"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Arrow/* default */.Z, {
                                                            width: "5.78538",
                                                            height: "1.28564",
                                                            className: "fill-current text-qwhite"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ",
                                                children: "100 % SECURE DELIVERY WITHOUT CONTACT TO COURIOR"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const Header_MobileMenu = (MobileMenu);


/***/ }),

/***/ 697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6681);
/* harmony import */ var _Helpers_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3479);
/* harmony import */ var _Helpers_icons_Fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7727);
/* harmony import */ var _Helpers_icons_FontAwesomeCom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4527);
/* harmony import */ var _Shared_Multivendor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9732);









function Navbar({ className  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.websiteSetup);
    const categoryList = websiteSetup && websiteSetup.payload.productCategories;
    const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
    const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
    const customPages = websiteSetup && websiteSetup.payload.customPages;
    const { 0: categoryToggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: subCatHeight , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handler = ()=>{
        setToggle(!categoryToggle);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let categorySelector = document.querySelector(".category-dropdown");
        setHeight(categorySelector.offsetHeight);
    }, [
        categoryToggle
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `nav-widget-wrapper w-full  h-[60px] relative z-30  ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-x mx-auto h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-full relative",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "category-and-nav flex xl:rtl:space-x-reverse space-x-7 rtl:space-x-reverse space-x-3 items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "category w-[270px] h-[35px] px-5 rounded-md mt-[6px] relative bg-primary text-white",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onClick: handler,
                                            type: "button",
                                            className: "w-full h-full flex justify-between items-center text-qwhite ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex rtl:space-x-reverse space-x-3 items-center ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm font-600 text-qwhite ",
                                                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.All_Categories
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        width: "5.78538",
                                                        height: "1.28564",
                                                        className: "fill-current text-qwhite"
                                                    })
                                                })
                                            ]
                                        }),
                                        categoryToggle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "fixed top-0 left-0 w-full h-full -z-10",
                                                onClick: handler
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                            },
                                            className: `category-dropdown w-full absolute left-0 top-[53px]  ${categoryToggle ? "block" : "hidden"}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "categories-list relative",
                                                children: categoryList && categoryList.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "category-item",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: {
                                                                    pathname: "/products",
                                                                    query: {
                                                                        category: item.slug
                                                                    }
                                                                },
                                                                passHref: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: " flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "flex items-center rtl:space-x-reverse space-x-6",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_FontAwesomeCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                                            className: "w-4 h-4",
                                                                                            icon: item.icon
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "text-xs font-400",
                                                                                        children: item.name
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                        className: `transform rtl:rotate-180 fill-current`,
                                                                                        width: "6",
                                                                                        height: "9",
                                                                                        viewBox: "0 0 6 9",
                                                                                        fill: "none",
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                x: "1.49805",
                                                                                                y: "0.818359",
                                                                                                width: "5.78538",
                                                                                                height: "1.28564",
                                                                                                transform: "rotate(45 1.49805 0.818359)"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                x: "5.58984",
                                                                                                y: "4.90918",
                                                                                                width: "5.78538",
                                                                                                height: "1.28564",
                                                                                                transform: "rotate(135 5.58984 4.90918)"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `sub-category-lvl-two absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${item.active_sub_categories.length > 0 ? "bg-white" : ""}`,
                                                                style: {
                                                                    height: `${subCatHeight}px`
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "",
                                                                    children: item.active_sub_categories.length > 0 && item.active_sub_categories.map((subItem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "category-item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                    href: {
                                                                                        pathname: "/products",
                                                                                        query: {
                                                                                            sub_category: subItem.slug
                                                                                        }
                                                                                    },
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        rel: "noopener noreferrer",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: " flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                        className: "text-xs font-400",
                                                                                                        children: subItem.name
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                                            className: `transform rtl:rotate-180 fill-current`,
                                                                                                            width: "6",
                                                                                                            height: "9",
                                                                                                            viewBox: "0 0 6 9",
                                                                                                            fill: "none",
                                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                                    x: "1.49805",
                                                                                                                    y: "0.818359",
                                                                                                                    width: "5.78538",
                                                                                                                    height: "1.28564",
                                                                                                                    transform: "rotate(45 1.49805 0.818359)"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                                    x: "5.58984",
                                                                                                                    y: "4.90918",
                                                                                                                    width: "5.78538",
                                                                                                                    height: "1.28564",
                                                                                                                    transform: "rotate(135 5.58984 4.90918)"
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: `sub-category-lvl-three absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${subItem.active_child_categories.length > 0 ? "bg-white" : ""}`,
                                                                                    style: {
                                                                                        height: `${subCatHeight}px`
                                                                                    },
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                                        className: "",
                                                                                        children: subItem.active_child_categories.length > 0 && subItem.active_child_categories.map((subsubitem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                className: "category-item",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                                    href: {
                                                                                                        pathname: "/products",
                                                                                                        query: {
                                                                                                            child_category: subsubitem.slug
                                                                                                        }
                                                                                                    },
                                                                                                    passHref: true,
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                        rel: "noopener noreferrer",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                            className: " flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                    className: "text-xs font-400",
                                                                                                                    children: subsubitem.name
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            }, subsubitem.id))
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }, subItem.id))
                                                                })
                                                            })
                                                        ]
                                                    }, item.id))
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nav",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "nav-wrapper flex xl:space-x-10 rtl:space-x-reverse space-x-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        rel: "noopener noreferrer ",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "flex flex-row gap-1 items-center text-sm font-600 cursor-pointer text-qblack ",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Fire__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                                                "Deals"
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                            children: "EYE GLASSES"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                            children: "COMPUTER GLASSES"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                            children: "KIDS GLASSES"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                            children: "CONTACT LENSES"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                            children: "SUNGLASSES"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                                            children: "GET APPOINTMENT"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0,_Shared_Multivendor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)() === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "flex items-center text-sm font-600 cursor-pointer text-qblack ",
                                    children: "3D TRY ON"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TopBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6681);
/* harmony import */ var _Helpers_icons_Arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3479);
/* harmony import */ var _Shared_Multivendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9732);


// import ThinPeople from "../../../Helpers/icons/ThinPeople";




function TopBar({ className , contact  }) {
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setAuth(JSON.parse(localStorage.getItem("auth")));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `w-full bg-white h-10 border-b border-qgray-border ${className || ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-x mx-auto h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "topbar-nav",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex space-x-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/tracking-order",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-xs leading-6 text-qblack font-500 cursor-pointer",
                                                    children: "TRY IT 3D"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/faq",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-xs leading-6 text-qblack font-500 cursor-pointer",
                                                    children: "STORE LOCATION"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/tracking-order",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-xs leading-6 text-qblack font-500 cursor-pointer",
                                                    children: "QUALITY"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/tracking-order",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-xs leading-6 text-qblack font-500 cursor-pointer",
                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()?.Track_Order
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "topbar-dropdowns lg:block hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex ltr:space-x-6 rtl:-space-x-0 items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex ltr:space-x-2 rtl:space-x-0 items-center rtl:ml-2 ltr:ml-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ",
                                        children: "100 % SECURE DELIVERY WITHOUT CONTACT TO COURIOR"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "topbar-dropdowns lg:block hidden",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex ltr:space-x-6 rtl:-space-x-0 items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex ltr:space-x-2 rtl:space-x-0 items-center rtl:ml-2 ltr:ml-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ",
                                                children: "NEED HELP CALL US:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-xs text-primary font-500 leading-none rtl:ml-2 ltr:ml-0 ",
                                                children: contact && contact.phone
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            // onClick={handler}
                                            type: "button",
                                            className: "w-full h-full flex gap-2 justify-between items-center text-qwhite ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex rtl:space-x-reverse space-x-3 items-center ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm font-600 text-qwhite ",
                                                        children: "Language"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Arrow__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        width: "5.78538",
                                                        height: "1.28564",
                                                        className: "fill-current text-qwhite"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        (0,_Shared_Multivendor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)() === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "block lg:hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/become-seller",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs leading-6 text-qblack px-3 py-1 primary-bg font-medium font-500 cursor-pointer",
                                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()?.Become_seller
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 1708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Middlebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3956);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(697);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1460);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Middlebar__WEBPACK_IMPORTED_MODULE_3__]);
_Middlebar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Header({ drawerAction , settings , contact  }) {
    const { cart  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart);
    const { 0: cartItems , 1: setCartItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        cart && setCartItem(cart.cartProducts);
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "header-section-wrapper relative print:hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:block hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        contact: contact && contact,
                        className: "quomodo-shop-top-bar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Middlebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        settings: settings && settings,
                        className: "quomodo-shop-middle-bar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "quomodo-shop-nav-bar"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Middlebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    settings: settings && settings,
                    className: "quomodo-shop-middle-bar"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9808);
/* harmony import */ var _DiscountBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8253);
/* harmony import */ var _Mobile_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2773);
/* harmony import */ var _Footers_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9866);
/* harmony import */ var _Headers_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DiscountBanner__WEBPACK_IMPORTED_MODULE_5__, _Headers_Header__WEBPACK_IMPORTED_MODULE_8__]);
([_DiscountBanner__WEBPACK_IMPORTED_MODULE_5__, _Headers_Header__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Layout({ children , childrenClasses  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.websiteSetup);
    const { 0: settings , 1: setSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: subscribeData , 1: setSubScribeDAta  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: contact , 1: setContact  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!subscribeData) {
            axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://jaralayoun.com/srv/"}api/`).then((res)=>{
                if (res.data) {
                    setSubScribeDAta(res.data.subscriptionBanner);
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
    }, [
        subscribeData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (websiteSetup) {
            setSettings(websiteSetup.payload.setting);
        }
    }, [
        websiteSetup
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!contact) {
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__/* ["default"].contactUs */ .Z.contactUs().then((res)=>{
                if (res.data) {
                    setContact(res.data.contact);
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
    }, []);
    const { 0: drawer , 1: setDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Mobile_Drawer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                open: drawer,
                action: ()=>setDrawer(!drawer)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full overflow-x-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Headers_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        contact: contact && contact,
                        settings: settings,
                        drawerAction: ()=>setDrawer(!drawer)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-full min-h-screen  ${childrenClasses || "pt-[30px] pb-[60px]"}`,
                        children: children && children
                    }),
                    subscribeData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DiscountBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        datas: subscribeData
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footers_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        settings: settings
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8522);


function Multivendor() {
    const { enable_multivendor  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { 0: isMultivendor , 1: setIsMultivendor  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isMultivendor) {
            setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
        }
    }, [
        enable_multivendor,
        isMultivendor
    ]);
    return isMultivendor;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Multivendor);


/***/ })

};
;