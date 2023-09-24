"use strict";
exports.id = 8995;
exports.ids = [8995];
exports.modules = {

/***/ 9587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MessageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageContext);


/***/ }),

/***/ 5798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCardStyleOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9808);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5564);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8522);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4178);
/* harmony import */ var _store_compareProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1839);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4994);
/* harmony import */ var _Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3591);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4339);
/* harmony import */ var _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5827);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6681);
/* harmony import */ var _icons_Compair__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8263);
/* harmony import */ var _icons_QuickViewIco__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1880);
/* harmony import */ var _icons_Star__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(990);
/* harmony import */ var _icons_ThinLove__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2189);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_14__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const Redirect = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-2 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm text-gray-500",
                children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()?.Item_added
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/cart",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",
                    children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()?.Go_To_Cart
                })
            })
        ]
    });
};
function ProductCardStyleOne({ datas  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.wishlistData);
    const wishlist = wishlistData && wishlistData.wishlists;
    const wishlisted = wishlist && wishlist.data.find((id)=>id.product.id === datas.id);
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.websiteSetup);
    const { 0: isProductInFlashSale , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const loginPopupBoard = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (websiteSetup) {
            const getId = websiteSetup.payload.flashSaleProducts.find((item)=>parseInt(item.product_id) === parseInt(datas.id));
            if (getId) {
                setData(true);
            } else {
                setData(false);
            }
        }
    }, [
        websiteSetup
    ]);
    const { 0: arWishlist , 1: setArWishlist  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: quickViewModal , 1: setQuickView  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: quickViewData , 1: setQuickViewData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const quickViewHandler = (slug)=>{
        setQuickView(!quickViewModal);
        if (!quickViewData) {
            axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://jaralayoun.com/srv/"}api/product/${slug}`).then((res)=>{
                setQuickViewData(res.data ? res.data : null);
            }).catch((err)=>{
                console.log(err);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (quickViewModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        quickViewModal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (wishlisted) {
            setArWishlist(true);
        } else {
            setArWishlist(false);
        }
    }, [
        wishlisted
    ]);
    const available = datas.cam_product_sale / (datas.cam_product_available + datas.cam_product_sale) * 100;
    const addToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()) {
            setArWishlist(true);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToWishlist */ .Z.addToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_11__/* .fetchWishlist */ .BW)());
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    const removeToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()) {
            setArWishlist(false);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].removeToWishlist */ .Z.removeToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_11__/* .fetchWishlist */ .BW)());
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    // cart
    const varients = datas && datas.variants.length > 0 && datas.variants;
    const { 0: getFirstVarients , 1: setFirstVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(varients && varients.map((v)=>v.active_variant_items[0]));
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: offerPrice , 1: setOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const addToCart = (id)=>{
        const data = {
            id: id,
            token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)() && (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)().access_token,
            quantity: 1,
            variants: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? parseInt(v.product_variant_id) : null),
            variantItems: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? v.id : null)
        };
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()) {
            if (varients) {
                const variantQuery = data.variants.map((value, index)=>{
                    return value ? `variants[]=${value}` : `variants[]=-1`;
                });
                const variantString = variantQuery.map((value)=>value + "&").join("");
                const itemsQuery = data.variantItems.map((value, index)=>{
                    return value ? `items[]=${value}` : `items[]=-1`;
                });
                const itemQueryStr = itemsQuery.map((value)=>value + "&").join("");
                const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    console.log(err);
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            } else {
                const uri1 = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    console.log(err);
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            }
        } else {
            localStorage.setItem("data-hold", JSON.stringify({
                type: "add-to-cart",
                ...data
            }));
            loginPopupBoard.handlerPopup(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (varients) {
            const prices = varients.map((v)=>v.active_variant_items.length > 0 && v.active_variant_items[0].price ? v.active_variant_items[0].price : 0);
            if (datas.offer_price) {
                const sumOfferPrice = parseFloat(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseFloat(datas.offer_price));
                setPrice(datas.price);
                setOffer(sumOfferPrice);
            } else {
                const sumPrice = parseFloat(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseFloat(datas.price));
                setPrice(sumPrice);
            }
        } else {
            setPrice(datas && datas.price);
            setOffer(datas && datas.offer_price);
        }
    }, [
        datas,
        varients
    ]);
    /*compare product feature
   * add product for compare method
   * @params (id,token)
   * request method is (apiRequest)
   * */ const productCompare = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()) {
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addProductForCompare */ .Z.addProductForCompare(id, (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)().access_token).then((res)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(res.data && res.data.notification);
                dispatch((0,_store_compareProduct__WEBPACK_IMPORTED_MODULE_10__/* .fetchCompareProducts */ .rh)());
            }).catch((err)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.notification);
                console.log(err);
            });
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)();
    const { 0: imgSrc , 1: setImgSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const loadImg = (value)=>{
        // const time = 3000;
        // setTimeout(() => {
        //   setImgSrc(value);
        // }, time);
        setImgSrc(value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "main-wrapper-card relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-card-one w-full h-[445px] bg-white relative group overflow-hidden",
                style: {
                    boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-card-img w-full h-[300px] -mt-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full p-1 relative flex justify-center items-center transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                layout: "fill",
                                objectFit: "scale-down",
                                src: `${imgSrc ? imgSrc : "/assets/images/spinner.gif"}`,
                                alt: "",
                                onLoadingComplete: ()=>loadImg(datas.image),
                                className: "w-full h-full object-contain"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-card-details px-[30px] pb-[30px] relative pt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[95px] transition-all duration-300 ease-in-out",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: ()=>addToCart(datas.id),
                                    type: "button",
                                    className: "yellow-btn group relative w-full h-full flex shadow justify-center items-center overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "btn-content flex items-center space-x-3 rtl:space-x-reverse relative z-10",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "14",
                                                        height: "16",
                                                        viewBox: "0 0 14 16",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "fill-current",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M12.5664 4.14176C12.4665 3.87701 12.2378 3.85413 11.1135 3.85413H10.1792V3.43576C10.1792 2.78532 10.089 2.33099 9.86993 1.86359C9.47367 1.01704 8.81003 0.425438 7.94986 0.150881C7.53106 0.0201398 6.90607 -0.0354253 6.52592 0.0234083C5.47246 0.193372 4.57364 0.876496 4.11617 1.85052C3.89389 2.32772 3.80368 2.78532 3.80368 3.43576V3.8574H2.8662C1.74187 3.8574 1.51313 3.88028 1.41326 4.15483C1.36172 4.32807 0.878481 8.05093 0.6723 9.65578C0.491891 11.0547 0.324369 12.3752 0.201948 13.3688C-0.0106763 15.0815 -0.00423318 15.1077 0.00220999 15.1371V15.1404C0.0312043 15.2515 0.317925 15.5424 0.404908 15.6274L0.781834 16H13.1785L13.4588 15.7483C13.5844 15.6339 14 15.245 14 15.0521C14 14.9214 12.5922 4.21694 12.5664 4.14176ZM12.982 14.8037C12.9788 14.8266 12.953 14.8952 12.9079 14.9443L12.8435 15.0162H1.13943L0.971907 14.8331L1.63233 9.82901C1.86429 8.04766 2.07047 6.4951 2.19289 5.56684C2.24766 5.16154 2.27343 4.95563 2.28631 4.8543C2.72123 4.85103 4.62196 4.84776 6.98661 4.84776H11.6901L11.6966 4.88372C11.7481 5.1452 12.9594 14.5128 12.982 14.8037ZM4.77338 3.8574V3.48479C4.77338 3.23311 4.80559 2.88664 4.84103 2.72649C5.03111 1.90935 5.67864 1.24584 6.48726 1.03339C6.82553 0.948403 7.37964 0.97782 7.71791 1.10202H7.72113C8.0755 1.22296 8.36545 1.41907 8.63284 1.71978C9.06453 2.19698 9.2095 2.62516 9.2095 3.41615V3.8574H4.77338Z"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()?.Add_To_Cart
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-shape w-full h-full absolute bg-qblack"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "reviews flex space-x-[1px] mb-3",
                                children: [
                                    Array.from(Array(datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                                        }, datas.review + Math.random())),
                                    datas.review < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: Array.from(Array(5 - datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-gray-500",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    defaultValue: false
                                                })
                                            }, datas.review + Math.random()))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: {
                                    pathname: "/single-product",
                                    query: {
                                        slug: datas.slug
                                    }
                                },
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer",
                                        children: datas.title
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "price",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: `main-price  font-600 text-[18px] ${offerPrice ? "line-through text-qgray" : "text-qred"}`,
                                        children: offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: currency_icon && currency_icon + price
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                isProductInFlashSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `line-through text-qgray font-500 text-[16px] mr-2`,
                                                    children: currency_icon && currency_icon + parseFloat(price).toFixed(2)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    id: datas.id,
                                                    price: price
                                                })
                                            ]
                                        })
                                    }),
                                    offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: "offer-price text-qred font-600 text-[18px] ml-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            id: datas.id,
                                            price: offerPrice
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "quick-access-btns flex flex-col space-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:right-4 -right-10 top-10 transition-all ease-in-out",
                                onClick: ()=>quickViewHandler(datas.slug),
                                type: "button",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover-ico w-10 h-10 flex justify-center text-black hover:text-white items-center transition-all duration-300 ease-in-out hover-primary-bg bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_QuickViewIco__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        className: "fill-current"
                                    })
                                })
                            }),
                            !arWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:right-4 -right-10 top-[120px] transition-all duration-300 ease-in-out",
                                type: "button",
                                onClick: ()=>addToWishlist(datas.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover-ico w-10 h-10 flex text-black hover:text-white justify-center items-center transition-all duration-300 ease-in-out hover-primary-bg bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThinLove__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        className: "fill-current"
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "absolute group-hover:right-4 -right-10 top-[120px] transition-all duration-300 ease-in-out",
                                type: "button",
                                onClick: ()=>removeToWishlist(wishlisted && wishlisted.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover-ico w-10 h-10 flex justify-center items-center bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThinLove__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        fill: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:right-4 -right-10 top-[168px] transition-all duration-500 ease-in-out",
                                type: "button",
                                onClick: ()=>productCompare(datas.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover-ico w-10 h-10 flex justify-center text-black hover:text-white transition-all duration-300 ease-in-out items-center hover-primary-bg bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Compair__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        className: "fill-current"
                                    })
                                })
                            })
                        ]
                    }),
                    quickViewModal && quickViewData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setQuickView(!quickViewModal),
                                className: "w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: " md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 md:mt-12 h-full overflow-y-scroll xl:overflow-hidden xl:mt-0 ",
                                style: {
                                    zIndex: "999"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-full overflow-y-scroll overflow-style-none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            images: quickViewData.gellery.length > 0 ? quickViewData.gellery : [],
                                            product: quickViewData.product
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setQuickView(!quickViewModal),
                                        type: "button",
                                        className: "absolute right-3 top-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                className: "w-10 h-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M6 18L18 6M6 6l12 12"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "anim bottom"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "anim right"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "anim top"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "anim left"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function DataIteration(props) {
    const { datas =[] , startLength , endLength , children  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: datas && //   4 >= 4
        datas.length >= endLength ? datas.slice(startLength, endLength).map((value)=>children({
                datas: value
            })) : datas.length < endLength ? datas.slice(startLength, datas.length).map((value)=>children({
                datas: value
            })) : datas.slice(startLength, datas.length).map((value)=>children({
                datas: value
            }))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataIteration);


/***/ }),

/***/ 4987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8522);




function PageHead(props) {
    const { title  } = props;
    const { favicon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { metaDes  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: metaDes
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: `${favicon ? "https://jaralayoun.com/srv/" + favicon : "/favico.svg"}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHead);


/***/ }),

/***/ 1880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ QuickViewIco)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function QuickViewIco({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0.339844 3.18947V5.71272H0.991007H1.64217V4.31815V2.91815L4.6538 5.92978L7.66543 8.94141L8.13752 8.46389L8.61504 7.99179L5.60341 4.98017L2.59178 1.96854H3.99178H5.38636V1.31737V0.66621H2.8631H0.339844V3.18947Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.9592 1.31737V1.96854H15.3537H16.7537L13.7421 4.98017L10.7305 7.99179L11.208 8.46389L11.6801 8.94141L14.6917 5.92978L17.7033 2.91815V4.31815V5.71272H18.3545H19.0057V3.18947V0.66621H16.4824H13.9592V1.31737Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.63752 14.0803L1.64217 17.0811V15.6811V14.2865H0.991007H0.339844V16.8098V19.333H2.8631H5.38636V18.6818V18.0307H3.99178H2.59178L5.60341 15.0191L8.61504 12.0074L8.1538 11.5462C7.90419 11.2911 7.68171 11.0849 7.66543 11.0849C7.64915 11.0849 6.28713 12.4361 4.63752 14.0803Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11.1917 11.5462L10.7305 12.0074L13.7421 15.0191L16.7537 18.0307H15.3537H13.9592V18.6818V19.333H16.4824H19.0057V16.8098V14.2865H18.3545H17.7033V15.6811V17.0811L14.7026 14.0803C13.0584 12.4361 11.6964 11.0849 11.6801 11.0849C11.6638 11.0849 11.4413 11.2911 11.1917 11.5462Z"
            })
        ]
    });
};


/***/ }),

/***/ 5827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductView)
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
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9808);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5564);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8522);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4178);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4994);
/* harmony import */ var _Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(990);
/* harmony import */ var _Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2189);
/* harmony import */ var _Helpers_Selectbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4339);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6681);
/* harmony import */ var _Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3591);
/* harmony import */ var _Contexts_MessageContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9587);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
react_toastify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




















const Redirect = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-2 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm text-gray-500",
                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()?.Item_added
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/cart",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",
                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()?.Go_To_Cart
                })
            })
        ]
    });
};
function ProductView({ className , reportHandler , images =[] , product , seller  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { 0: more , 1: setMore  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const productsImg = images && images.length > 0 && images;
    const varients = product && product.active_variants.length > 0 && product.active_variants;
    const { 0: getFirstVarients , 1: setFirstVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(varients && varients.map((v)=>v.active_variant_items.length > 0 ? v.active_variant_items[0] : {}));
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: offerPrice , 1: setOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: src , 1: setSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(product.thumb_image);
    const tags = product && JSON.parse(product.tags);
    const loginPopupBoard = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z);
    const messageHandler = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Contexts_MessageContext__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z);
    const changeImgHandler = (current)=>{
        setSrc(current);
    };
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const increment = ()=>{
        setQuantity((prev)=>prev + 1);
    };
    const decrement = ()=>{
        if (quantity > 1) {
            setQuantity((prev)=>prev - 1);
        }
    };
    //varient selector handler
    const selectVarient = (value)=>{
        if (varients.length > 0) {
            const replacePrice = getFirstVarients.map((v)=>{
                if (parseInt(v.product_variant_id) === parseInt(value.product_variant_id)) {
                    return value;
                }
                return v;
            });
            setFirstVarients(replacePrice);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (varients) {
            const prices = getFirstVarients && getFirstVarients.map((v)=>v.price ? v.price : 0);
            const sumPrice = parseInt(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseInt(product.price));
            setPrice(sumPrice);
            if (product.offer_price) {
                const sumOfferPrice = parseInt(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseInt(product.offer_price));
                setOffer(sumOfferPrice);
            }
        }
    }, [
        getFirstVarients,
        varients
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        // if (varients) {
        //   const prices = varients.map((v) =>
        //     v.active_variant_items.length > 0 ? v.active_variant_items[0].price : 0
        //   );
        //   const sumPrice = parseInt(
        //     prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
        //       parseInt(product.price)
        //   );
        //   setPrice(sumPrice);
        //
        //   if (product.offer_price) {
        //     const sumOfferPrice = parseInt(
        //       prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
        //         parseInt(product.offer_price)
        //     );
        //     setOffer(sumOfferPrice);
        //   }
        // } else {
        //   setPrice(product && product.price);
        // }
        if (varients) {
            const prices = varients.map((v)=>v.active_variant_items.length > 0 && v.active_variant_items[0].price ? parseInt(v.active_variant_items[0].price) : 0);
            if (product.offer_price) {
                const sumCalc = prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr));
                const sumPrice = parseInt(sumCalc) + parseInt(product.price);
                const sumOfferPrice = parseInt(sumCalc) + parseInt(product.offer_price);
                setPrice(sumPrice);
                setOffer(sumOfferPrice);
            } else {
                const sumCalc1 = prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr));
                const sumPrice1 = parseInt(sumCalc1) + parseInt(product.price);
                setPrice(sumPrice1);
            }
        } else {
            setPrice(product && product.price);
            setOffer(product && product.offer_price);
        }
    }, [
        product,
        varients
    ]);
    const addToCard = ()=>{
        const data = {
            id: product.id,
            token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)() && (0,_utils_auth__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)().access_token,
            quantity: quantity,
            variants: getFirstVarients && getFirstVarients.map((v)=>parseInt(v.product_variant_id)),
            variantItems: getFirstVarients && getFirstVarients.map((v)=>v.id)
        };
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)()) {
            if (varients) {
                const variantQuery = data.variants.map((value, index)=>{
                    return `variants[]=${value}`;
                });
                const variantString = variantQuery.map((value)=>value + "&").join("");
                const itemsQuery = data.variantItems.map((value, index)=>{
                    return `items[]=${value}`;
                });
                const itemQueryStr = itemsQuery.map((value)=>value + "&").join("");
                const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    console.log(err);
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            } else {
                const uri1 = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>{
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    });
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(res.response && res.response.data.message && res.response.data.message);
                }).catch((err)=>{
                    console.log(err);
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            }
        } else {
            localStorage.setItem("data-hold", JSON.stringify({
                type: "add-to-cart",
                ...data
            }));
            loginPopupBoard.handlerPopup(true);
        }
    };
    //wishlist
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.wishlistData);
    const wishlist = wishlistData && wishlistData.wishlists;
    const wishlisted = wishlist && wishlist.data.find((id)=>id.product.id === product.id);
    const { 0: arWishlist , 1: setArWishlist  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (wishlisted) {
            setArWishlist(true);
        } else {
            setArWishlist(false);
        }
    }, [
        wishlisted
    ]);
    const addToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)()) {
            setArWishlist(true);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToWishlist */ .Z.addToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_10__/* .fetchWishlist */ .BW)());
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    const removeToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)()) {
            setArWishlist(false);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].removeToWishlist */ .Z.removeToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_10__/* .fetchWishlist */ .BW)());
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)();
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.websiteSetup);
    const { 0: pricePercent , 1: setPricePercent  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (websiteSetup) {
            const offerFlashSale = websiteSetup.payload.flashSale;
            const flashSaleProducts = websiteSetup.payload.flashSaleProducts;
            const isFlashSaleProduct = flashSaleProducts.find((item)=>parseInt(item.product_id) === product.id);
            if (isFlashSaleProduct) {
                const offer = parseInt(offerFlashSale.offer);
                const price = product.offer_price ? parseInt(product.offer_price) : parseInt(product.price);
                const discountPrice = offer / 100 * price;
                const mainPrice = price - discountPrice;
                setPricePercent(Math.trunc((mainPrice - product.price) / product.price * 100));
            } else {
                setPricePercent(Math.trunc((product.offer_price - product.price) / product.price * 100));
            }
        }
    }, [
        websiteSetup
    ]);
    const popupMessageHandler = ()=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)()) {
            messageHandler.toggleHandler(seller);
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `product-view w-full lg:flex justify-between ${className || ""}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    "data-aos": "fade-right",
                    className: "lg:w-1/2 xl:mr-[70px] lg:mr-[50px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full md:h-[600px] h-[350px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3 relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        layout: "fill",
                                        objectFit: "scale-down",
                                        src: `${"https://jaralayoun.com/srv/" + src}`,
                                        alt: "",
                                        className: "object-contain transform scale-110"
                                    }),
                                    product.offer_price && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[80px] h-[80px] rounded-full primary-bg text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-tblack",
                                            children: [
                                                pricePercent,
                                                "%"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>changeImgHandler(product.thumb_image),
                                        className: "w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            layout: "fill",
                                            objectFit: "scale-down",
                                            src: `${"https://jaralayoun.com/srv/" + product.thumb_image}`,
                                            alt: "",
                                            className: `w-full h-full object-contain transform scale-110 ${src !== product.thumb_image ? "opacity-50" : ""} `
                                        })
                                    }),
                                    productsImg && productsImg.length > 0 && productsImg.map((img, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>changeImgHandler(img.image),
                                            className: "w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                layout: "fill",
                                                objectFit: "scale-down",
                                                src: `${"https://jaralayoun.com/srv/" + img.image}`,
                                                alt: "",
                                                className: `w-full h-full object-contain ${src !== img.image ? "opacity-50" : ""} `
                                            })
                                        }, i))
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-details w-full mt-10 lg:mt-0",
                        children: [
                            product.brand && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "data-aos": "fade-up",
                                className: "text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block",
                                children: product.brand.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                "data-aos": "fade-up",
                                className: "text-xl font-medium text-qblack mb-4",
                                children: product.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "flex space-x-[10px] items-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            Array.from(Array(parseInt(product.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                                }, parseInt(product.averageRating) + Math.random())),
                                            parseInt(product.averageRating) < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: Array.from(Array(5 - parseInt(product.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-gray-500",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                            defaultValue: false
                                                        })
                                                    }, parseInt(product.averageRating) + Math.random()))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-[13px] font-normal text-qblack",
                                        children: [
                                            parseInt(product.averageRating),
                                            " ",
                                            (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()?.Reviews
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "flex space-x-2 items-baseline mb-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: `main-price  font-600  ${offerPrice ? "line-through text-qgray text-[15px]" : "text-qred text-[24px]"}`,
                                        children: offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: currency_icon + price
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            id: product.id,
                                            price: price
                                        })
                                    }),
                                    offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: "offer-price text-qred font-600 text-[24px] ml-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            id: product.id,
                                            price: offerPrice
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "mb-[30px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `text-qgray text-sm text-normal  leading-7 ${more ? "" : "line-clamp-2"}`,
                                        children: product.short_description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setMore(!more),
                                        type: "button",
                                        className: "text-blue-500 text-xs font-bold",
                                        children: more ? "See Less" : "See More"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-3 primary-bglow flex items-center space-x-2 mb-[30px] w-fit",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-base font-bold text-qblack",
                                        children: [
                                            (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()?.Availability,
                                            " :"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-base font-bold primary-text",
                                        children: product.qty !== "0" ? `${product.qty} Products Available` : `Products not Available`
                                    })
                                ]
                            }),
                            varients.length > 0 && varients.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    className: "product-size mb-[30px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm font-normal uppercase text-qgray mb-[14px] inline-block",
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " border border-qgray-border h-[50px] flex justify-between items-center px-6 cursor-pointer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Selectbox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    action: selectVarient,
                                                    className: "w-full",
                                                    datas: item.active_variant_items && item.active_variant_items.length > 0 && item.active_variant_items,
                                                    children: ({ item  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex justify-between items-center w-full",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-[13px] text-qblack",
                                                                            children: item
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "11",
                                                                            height: "7",
                                                                            viewBox: "0 0 11 7",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z",
                                                                                fill: "#222222"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                })
                                            })
                                        })
                                    ]
                                }, item.id)),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[120px] h-full px-[26px] flex items-center border border-qgray-border",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between items-center w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: decrement,
                                                    type: "button",
                                                    className: "text-base text-qgray",
                                                    children: "-"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-qblack",
                                                    children: quantity
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: increment,
                                                    type: "button",
                                                    className: "text-base text-qgray",
                                                    children: "+"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[60px] h-full flex justify-center items-center border border-qgray-border",
                                        children: !arWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: ()=>addToWishlist(product.id),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-10 h-10 flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: "fill-current"
                                                })
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: ()=>removeToWishlist(wishlisted && wishlisted.id),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-10 h-10 flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    fill: true
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-1 h-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: addToCard,
                                            type: "button",
                                            className: "black-btn text-sm font-semibold w-full h-full",
                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()?.Add_To_Cart
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "mb-[20px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-[13px] text-qgray leading-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-qblack",
                                                children: "Category :"
                                            }),
                                            " ",
                                            product.category.name
                                        ]
                                    }),
                                    tags && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-[13px] text-qgray leading-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-qblack",
                                                children: "Tags:"
                                            }),
                                            " ",
                                            tags.length > 0 && tags.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: item.value + ", "
                                                }, i))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-[13px] text-qgray leading-7",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-qblack uppercase",
                                                children: [
                                                    (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()?.SKU,
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            product.sku
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "flex space-x-2 items-center mb-[20px] report-btn ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "12",
                                            height: "13",
                                            viewBox: "0 0 12 13",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M0 0C0.247634 0 0.475436 0 0.729172 0C0.738324 0.160174 0.747477 0.316279 0.757647 0.493233C1.05816 0.392044 1.33885 0.282211 1.62818 0.203395C3.11296 -0.201361 4.51385 0.0366111 5.84202 0.779512C6.47661 1.13494 7.14171 1.39071 7.86987 1.47207C8.88125 1.58496 9.82093 1.35817 10.7098 0.88426C10.9335 0.765274 11.1522 0.636627 11.411 0.491199C11.4161 0.606117 11.4237 0.693577 11.4237 0.780529C11.4242 3.18822 11.4222 5.5954 11.4288 8.00309C11.4293 8.1892 11.3718 8.29089 11.2096 8.38039C9.31956 9.42279 7.4285 9.43499 5.54557 8.37734C4.06231 7.54443 2.55363 7.43307 0.992568 8.13835C0.804428 8.22327 0.737816 8.33005 0.739341 8.53904C0.749003 9.9206 0.744426 11.3027 0.744426 12.6842C0.744426 12.7849 0.744426 12.8851 0.744426 13C0.48764 13 0.254244 13 0 13C0 8.67582 0 4.34961 0 0Z",
                                                fill: "#EB5757"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: reportHandler,
                                        className: "text-qred font-semibold text-[13px]",
                                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()?.Report_This_Item
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "social-share flex items-center w-full mb-[20px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-qblack text-[13px] mr-[17px] inline-block",
                                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()?.Share_This
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-5 items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.FacebookShareButton, {
                                                url: `${ false && 0}`,
                                                quotes: product.name,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "cursor-pointer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "10",
                                                        height: "16",
                                                        viewBox: "0 0 10 16",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z",
                                                            fill: "#3E75B2"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.TwitterShareButton, {
                                                url: `${ false && 0}`,
                                                title: product.name,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "cursor-pointer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "18",
                                                        height: "14",
                                                        viewBox: "0 0 18 14",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z",
                                                            fill: "#3FD1FF"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            seller && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                "data-aos": "fade-up",
                                className: "message-btn",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: ()=>popupMessageHandler(),
                                    className: "flex px-5 py-2 primary-bg text-qblack items-center space-x-2.5",
                                    type: "button",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "21",
                                                height: "19",
                                                viewBox: "0 0 21 19",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M1.30898 18.0944C0.962386 18.0925 0.630508 17.954 0.385424 17.7089C0.14034 17.4638 0.00183875 17.132 0 16.7854V6.01951C0.00184787 5.30162 0.287849 4.61366 0.795479 4.10603C1.30311 3.5984 1.99107 3.31239 2.70897 3.31055H15.4838C16.2029 3.31054 16.8927 3.59573 17.4018 4.10356C17.9109 4.61139 18.1979 5.30041 18.1998 6.01951V13.1944C18.1998 13.9135 17.9146 14.6033 17.4068 15.1124C16.8989 15.6216 16.2099 15.9085 15.4908 15.9104H4.83694C4.71593 15.9114 4.59833 15.9506 4.50094 16.0224L2.09997 17.8354C1.87104 18.0045 1.59364 18.0954 1.30898 18.0944ZM2.70897 4.71053C2.36237 4.71237 2.03049 4.85087 1.78541 5.09595C1.54032 5.34104 1.40182 5.67291 1.39998 6.01951V16.6104L3.66095 14.9024C4.00115 14.6497 4.41318 14.5124 4.83694 14.5104H15.4838C15.8328 14.5104 16.1675 14.3718 16.4143 14.125C16.6611 13.8782 16.7998 13.5434 16.7998 13.1944V6.01951C16.7979 5.67291 16.6594 5.34104 16.4144 5.09595C16.1693 4.85087 15.8374 4.71237 15.4908 4.71053H2.70897Z",
                                                        fill: "black"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M11.8601 10.3746C12.2467 10.3746 12.5601 10.0612 12.5601 9.6746C12.5601 9.28801 12.2467 8.97461 11.8601 8.97461C11.4736 8.97461 11.1602 9.28801 11.1602 9.6746C11.1602 10.0612 11.4736 10.3746 11.8601 10.3746Z",
                                                        fill: "black"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M9.1414 10.3746C9.52799 10.3746 9.84139 10.0612 9.84139 9.6746C9.84139 9.28801 9.52799 8.97461 9.1414 8.97461C8.7548 8.97461 8.44141 9.28801 8.44141 9.6746C8.44141 10.0612 8.7548 10.3746 9.1414 10.3746Z",
                                                        fill: "black"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M6.34062 10.3746C6.72721 10.3746 7.04061 10.0612 7.04061 9.6746C7.04061 9.28801 6.72721 8.97461 6.34062 8.97461C5.95402 8.97461 5.64062 9.28801 5.64062 9.6746C5.64062 10.0612 5.95402 10.3746 6.34062 10.3746Z",
                                                        fill: "black"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M20.2998 11.0116C20.1141 11.0116 19.9361 10.9378 19.8048 10.8066C19.6735 10.6753 19.5998 10.4972 19.5998 10.3116V3.22068C19.598 2.87409 19.4595 2.54221 19.2144 2.29712C18.9693 2.05204 18.6374 1.91354 18.2908 1.9117H4.19999C4.01434 1.9117 3.8363 1.83795 3.70502 1.70668C3.57375 1.5754 3.5 1.39736 3.5 1.21171C3.5 1.02606 3.57375 0.848015 3.70502 0.716741C3.8363 0.585468 4.01434 0.511719 4.19999 0.511719H18.2908C19.0087 0.513567 19.6967 0.799568 20.2043 1.3072C20.7119 1.81483 20.9979 2.50279 20.9998 3.22068V10.3116C20.9998 10.4972 20.926 10.6753 20.7948 10.8066C20.6635 10.9378 20.4854 11.0116 20.2998 11.0116Z",
                                                        fill: "black"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-base font-medium text-qblack capitalize",
                                            children: "Chat with seller"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}; //store all varient
 // store all varient first item

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;