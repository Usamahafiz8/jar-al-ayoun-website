"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4987);
/* harmony import */ var _src_components_PreLoader_Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6306);
/* harmony import */ var _src_components_Home_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Home_index__WEBPACK_IMPORTED_MODULE_4__]);
_src_components_Home_index__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function HomePage({ data  }) {
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Simulate a loading delay (e.g., fetching data)
        setTimeout(()=>{
            setIsLoading(false);
        }, 2000);
    }, []);
    const { seoSetting  } = data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: `${seoSetting.seo_title}`,
                metaDes: seoSetting.seo_description
            }),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PreLoader_Preloader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Home_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                homepageData: data
            })
        ]
    });
};
async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${"https://jaralayoun.com/srv/"}api/`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6681);



function ShopNowBtn() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "cursor-pointer w-full relative ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inline-flex space-x-1.5 rtl:space-x-reverse items-center relative z-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-sm text-qblack font-medium leading-[30px]",
                        children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()?.Shop_Now
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "leading-[30px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            className: `transform rtl:rotate-180`,
                            width: "7",
                            height: "11",
                            viewBox: "0 0 7 11",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    x: "2.08984",
                                    y: "0.636719",
                                    width: "6.94219",
                                    height: "1.54271",
                                    transform: "rotate(45 2.08984 0.636719)",
                                    fill: "#1D1D1D"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    x: "7",
                                    y: "5.54492",
                                    width: "6.94219",
                                    height: "1.54271",
                                    transform: "rotate(135 7 5.54492)",
                                    fill: "#1D1D1D"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[2px] primary-bg absolute left-0 rtl:right-0 bottom-0 z-10"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopNowBtn);


/***/ }),

/***/ 4450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CategoryCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6681);



function CategoryCard({ background , title , categories =[] , changeIdHandler , productsInCategoryIds , moreUrl ="#" ,  }) {
    const filterCategory = categories && categories.length > 0 && categories.filter((category)=>{
        const id = parseInt(category.category_id);
        return productsInCategoryIds.includes(id);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "category-card-wrappwer w-full h-full p-[30px]",
        style: {
            background: `url(${background || `/assets/images/section-category-1.jpg`}) no-repeat`,
            backgroundSize: "cover"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-base font-600 tracking-wide mb-2",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "brands-list mb-[7px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: filterCategory.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: ()=>changeIdHandler(category.category_id),
                                    className: "text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize cursor-pointer",
                                    children: category && category.category.name
                                })
                            }, category.id))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `${moreUrl}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex space-x-2 rtl:space-x-reverse items-center cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-qblack font-600 text-sm",
                                children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()?.Shop_Now
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    className: `transform rtl:rotate-180`,
                                    width: "7",
                                    height: "11",
                                    viewBox: "0 0 7 11",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            x: "2.08984",
                                            y: "0.636719",
                                            width: "6.94219",
                                            height: "1.54271",
                                            transform: "rotate(45 2.08984 0.636719)",
                                            fill: "#1D1D1D"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            x: "7",
                                            y: "5.54492",
                                            width: "6.94219",
                                            height: "1.54271",
                                            transform: "rotate(135 7 5.54492)",
                                            fill: "#1D1D1D"
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
};


/***/ }),

/***/ 6763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCardRowStyleOne)
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
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4339);
/* harmony import */ var _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5827);
/* harmony import */ var _icons_Compair__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8263);
/* harmony import */ var _icons_QuickViewIco__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1880);
/* harmony import */ var _icons_Star__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(990);
/* harmony import */ var _icons_ThinLove__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2189);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6681);
/* harmony import */ var _Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3591);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_13__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















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
function ProductCardRowStyleOne({ className , datas  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.wishlistData);
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.websiteSetup);
    const { 0: isProductInFlashSale , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const loginPopupBoard = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z);
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
    const wishlist = wishlistData && wishlistData.wishlists;
    const wishlisted = wishlist && wishlist.data.find((id)=>id.product.id === datas.id);
    const { 0: arWishlist , 1: setArWishlist  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (wishlisted) {
            setArWishlist(true);
        } else {
            setArWishlist(false);
        }
    }, [
        wishlisted
    ]);
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
    //cart
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
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            } else {
                const uri1 = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
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
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)();
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
    //quick view feature
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "main-wrapper-card relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "data-aos": "fade-left",
                className: `product-row-card-style-one  w-full lg:h-[250px] h-[200px] bg-white group relative overflow-hidden ${className || ""}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:w-1/2 w-1/3 h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-ou",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    layout: "fill",
                                    objectFit: "scale-down",
                                    src: `${datas.image}`,
                                    alt: "",
                                    className: "w-full h-full object-contain"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 flex flex-col justify-center h-full",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex space-x-1 mb-3",
                                            children: [
                                                Array.from(Array(datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                                                    }, datas.review + Math.random())),
                                                datas.review < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: Array.from(Array(5 - datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-gray-500",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
                                                    className: "title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer",
                                                    children: datas.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "price mb-[26px]",
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
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                id: datas.id,
                                                                price: price
                                                            })
                                                        ]
                                                    })
                                                }),
                                                offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    suppressHydrationWarning: true,
                                                    className: "offer-price text-qred font-600 text-[18px] ml-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        id: datas.id,
                                                        price: offerPrice
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>addToCart(datas.id),
                                            type: "button",
                                            className: "w-[110px] h-[30px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "yellow-btn",
                                                children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()?.Add_To_Cart
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "quick-access-btns flex flex-col space-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:left-4 -left-10 top-5 transition-all ease-in-out",
                                type: "button",
                                onClick: ()=>quickViewHandler(datas.slug),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover-ico w-10 h-10 flex justify-center text-black hover:text-white items-center transition-all duration-300 ease-in-out hover-primary-bg bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_QuickViewIco__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        className: "fill-current"
                                    })
                                })
                            }),
                            !arWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:left-4 -left-10 top-[60px] duration-300 transition-all ease-in-out",
                                type: "button",
                                onClick: ()=>addToWishlist(datas.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover-ico w-10 h-10 flex text-black hover:text-white justify-center items-center transition-all duration-300 ease-in-out hover-primary-bg bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThinLove__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: "fill-current"
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:left-4 -left-10 top-[60px] duration-300 transition-all ease-in-out",
                                type: "button",
                                onClick: ()=>removeToWishlist(wishlisted && wishlisted.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover-ico w-10 h-10 flex justify-center items-center bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThinLove__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        fill: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:left-4 -left-10 top-[107px] transition-all duration-500 ease-in-out",
                                type: "button",
                                onClick: ()=>productCompare(datas.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover-ico w-10 h-10 flex justify-center text-black hover:text-white transition-all duration-300 ease-in-out items-center hover-primary-bg bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Compair__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
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
                                className: "md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 md:mt-12 h-full overflow-y-scroll xl:overflow-hidden xl:mt-0 ",
                                style: {
                                    zIndex: "999"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-full overflow-y-scroll overflow-style-none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
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

/***/ 4259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoaderStyleTwo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function LoaderStyleTwo() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                margin: "auto",
                //   background: " rgb(255, 255, 255)",
                display: "block",
                shapeRendering: "auto"
            },
            width: "150px",
            height: "150px",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(0 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.9166666666666666s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(30 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.8333333333333334s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(60 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.75s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(90 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.6666666666666666s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(120 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.5833333333333334s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(150 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.5s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(180 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.4166666666666667s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(210 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.3333333333333333s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(240 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.25s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(270 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.16666666666666666s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(300 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.08333333333333333s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "rotate(330 50 50)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#ED1B24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "0s",
                            repeatCount: "indefinite"
                        })
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 6140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionStyleFour)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7039);
/* harmony import */ var _DataIteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8650);
/* harmony import */ var _ViewMoreTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__]);
_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SectionStyleFour({ className , sectionTitle , seeMoreUrl , products =[] ,  }) {
    const rs = products.map((item)=>{
        return {
            id: item.id,
            title: item.name,
            slug: item.slug,
            image: "https://jaralayoun.com/srv/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-style-one ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            categoryTitle: sectionTitle,
            seeMoreUrl: seeMoreUrl,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "products-section w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid lg:grid-cols-3 grid-cols-1 xl:gap-[30px] lg:gap-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "item-col",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                datas: rs,
                                startLength: 0,
                                endLength: 4,
                                children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        datas: datas
                                    }, datas.id)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "item-col",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                datas: rs,
                                startLength: 4,
                                endLength: 8,
                                children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        datas: datas
                                    }, datas.id)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "item-col",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                datas: rs,
                                startLength: 8,
                                endLength: 12,
                                children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        datas: datas
                                    }, datas.id)
                            })
                        })
                    ]
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionStyleOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cards_CategoryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4450);
/* harmony import */ var _Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5798);
/* harmony import */ var _DataIteration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8650);
/* harmony import */ var _Loaders_LoaderStyleTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4259);
/* harmony import */ var _ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_3__]);
_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function SectionStyleOne({ className , categoryTitle , sectionTitle , seeMoreUrl , categories =[] , products =[] , categoryBackground ,  }) {
    const { 0: selectedId , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(categories.length > 0 && categories[0].category_id);
    const { 0: load , 1: setLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const cp = products.length > 0 && products.map((item)=>{
        return {
            id: item.id,
            category_id: item.category_id,
            title: item.name,
            slug: item.slug,
            image: "https://jaralayoun.com/srv/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants ? item.active_variants : []
        };
    });
    const filterProducts = cp && cp.filter((item)=>item.category_id === selectedId);
    const categoryHandler = (id)=>{
        setLoad(true);
        setTimeout(()=>{
            setId(id);
            setLoad(false);
        }, 500);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: categories.length > 0 && products.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "data-aos": "fade-up",
            className: `section-style-one ${className || ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                categoryTitle: sectionTitle,
                seeMoreUrl: seeMoreUrl,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products-section w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "category-card hidden xl:block w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_CategoryCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    moreUrl: seeMoreUrl,
                                    background: categoryBackground,
                                    title: categoryTitle,
                                    categories: categories,
                                    changeIdHandler: categoryHandler,
                                    productsInCategoryIds: cp.map((i)=>parseInt(i.category_id))
                                })
                            }),
                            load === false ? filterProducts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                datas: filterProducts,
                                startLength: 0,
                                endLength: filterProducts.length > 3 ? 3 : filterProducts.length,
                                children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            datas: datas
                                        })
                                    }, datas.id)
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading h-[445px] flex justify-center items-center col-span-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loaders_LoaderStyleTwo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionStyleThree)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5798);
/* harmony import */ var _DataIteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8650);
/* harmony import */ var _ViewMoreTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_1__]);
_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SectionStyleThree({ className , sectionTitle , seeMoreUrl , products =[] ,  }) {
    const rs = products.map((item)=>{
        return {
            id: item.id,
            title: item.name,
            slug: item.slug,
            image: "https://jaralayoun.com/srv/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-style-one ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            categoryTitle: sectionTitle,
            seeMoreUrl: seeMoreUrl,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "products-section w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        datas: rs,
                        startLength: 0,
                        endLength: 4,
                        children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                "data-aos": "fade-up",
                                className: "item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    datas: datas
                                })
                            }, datas.id)
                    })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionStyleTwo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_ProductCardRowStyleOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6763);
/* harmony import */ var _DataIteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cards_ProductCardRowStyleOne__WEBPACK_IMPORTED_MODULE_1__]);
_Cards_ProductCardRowStyleOne__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function SectionStyleTwo({ className , products  }) {
    const rs = products.map((item)=>{
        return {
            id: item.id,
            title: item.name,
            slug: item.slug,
            image: "https://jaralayoun.com/srv/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-content w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            datas: rs,
            startLength: 0,
            endLength: 4,
            children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "item w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardRowStyleOne__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        datas: datas
                    })
                }, datas.id)
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ViewMoreTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6681);



function ViewMoreTitle({ categoryTitle ="" , className , children , seeMoreUrl ="" ,  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-wrapper w-full ${className || ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-x mx-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " section-title flex justify-between items-center mb-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "sm:text-3xl text-xl font-600 text-qblacktext leading-none",
                                children: categoryTitle
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "view-more-btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: seeMoreUrl,
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-2 items-center cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-base font-600 text-qblack",
                                                children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()?.View_More
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "animate-right-dir",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    className: `transform rtl:rotate-180`,
                                                    width: "17",
                                                    height: "14",
                                                    viewBox: "0 0 17 14",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M14.0225 6.00243C13.9998 6.03738 13.9772 6.06941 13.9545 6.10436C13.8724 6.10727 13.7904 6.11601 13.7083 6.11601C9.93521 6.11601 6.16215 6.11601 2.38909 6.11601C1.87111 6.11601 1.35313 6.10728 0.835147 6.12475C0.351131 6.14514 0.00863998 6.51501 0.000148475 6.981C-0.00834303 7.45864 0.3483 7.83725 0.837977 7.8722C0.956858 7.88094 1.07857 7.87511 1.20028 7.87511C5.33565 7.87803 9.46818 7.87803 13.6035 7.88094C13.7253 7.88094 13.8498 7.88094 13.9715 7.88094C14.0026 7.93627 14.031 7.9887 14.0621 8.04403C13.9404 8.12267 13.7988 8.18383 13.697 8.28576C12.3355 9.67499 10.9797 11.0671 9.62669 12.4651C9.26155 12.8437 9.25306 13.3767 9.58423 13.732C9.91823 14.0902 10.4419 14.099 10.8127 13.7233C12.7855 11.702 14.7556 9.6779 16.7199 7.64794C17.0907 7.26351 17.0851 6.73053 16.7171 6.34901C14.7697 4.33652 12.8167 2.32987 10.858 0.329035C10.7278 0.195063 10.5466 0.0873038 10.3683 0.0319679C10.0088 -0.0757916 9.63235 0.116428 9.44554 0.451356C9.26438 0.78046 9.31533 1.20859 9.60687 1.51148C10.6768 2.62111 11.7524 3.72492 12.8308 4.82581C13.2271 5.2219 13.6262 5.60925 14.0225 6.00243Z",
                                                            fill: "white"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M14.0225 6.00241C13.6262 5.60923 13.2243 5.22188 12.8336 4.82288C11.7552 3.72199 10.6796 2.61818 9.60971 1.50855C9.31816 1.20566 9.26721 0.77753 9.44837 0.448427C9.63518 0.113498 10.0116 -0.0787213 10.3711 0.0290382C10.5466 0.0814617 10.7278 0.192134 10.8608 0.326105C12.8195 2.32694 14.7697 4.33359 16.7199 6.34608C17.0879 6.72469 17.0936 7.26058 16.7228 7.64501C14.7584 9.67497 12.7884 11.6991 10.8155 13.7203C10.4475 14.0989 9.92106 14.0873 9.58706 13.7291C9.25589 13.3737 9.26155 12.8408 9.62952 12.4622C10.9825 11.0642 12.3383 9.67206 13.6998 8.28284C13.8017 8.1809 13.9404 8.11974 14.0649 8.0411C14.0338 7.98577 14.0055 7.93334 13.9743 7.87801C13.8526 7.87801 13.7281 7.87801 13.6064 7.87801C9.47101 7.8751 5.33848 7.8751 1.20311 7.87218C1.0814 7.87218 0.962519 7.87801 0.840808 7.86927C0.3483 7.84015 -0.00834304 7.45862 0.00014847 6.98098C0.00863998 6.515 0.351131 6.14512 0.832316 6.12764C1.3503 6.10726 1.86828 6.11891 2.38626 6.11891C6.16215 6.11599 9.93521 6.11599 13.7083 6.11599C13.7904 6.11599 13.8724 6.10726 13.9574 6.10143C13.9772 6.0694 13.9998 6.03445 14.0225 6.00241Z",
                                                            fill: "black"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section-content",
                    children: children && children
                })
            ]
        })
    });
};


/***/ }),

/***/ 2693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Ads)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9808);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8522);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Ads({ handler  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.websiteSetup);
    const { 0: announcment , 1: setAnnouncmentData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: ads , 1: setAds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const adsHandle = ()=>{
        if (announcment) {
            localStorage.setItem("ads", "false");
            let date = new Date();
            date.setDate(date.getDate() + parseInt(announcment.expired_date));
            let nextDate = date.toLocaleDateString().slice(0, 10);
            localStorage.setItem("upcoming_announcement", `${nextDate}`);
            setAds(false);
        }
    };
    const subscribehandler = ()=>{
        _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__/* ["default"].subscribeRequest */ .Z.subscribeRequest({
            email: email
        }).then((res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(res.data.message);
        }).catch((err)=>{
            console.error(err);
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.response && err.response.data.message);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!announcment) {
            setAnnouncmentData(websiteSetup && websiteSetup.payload.announcementModal);
        }
        let ads = JSON.parse(localStorage.getItem("ads"));
        let crrDate = new Date();
        let upcomingDate = new Date(localStorage.getItem("upcoming_announcement"));
        if (ads) {
            setAds(true);
        } else {
            if (upcomingDate) {
                if (crrDate > upcomingDate) {
                    setAds(true);
                } else {
                    setAds(false);
                }
            } else {
                setAds(true);
            }
        }
    });
    const { logo  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: ads && announcment && parseInt(announcment.status) === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full flex fixed left-0 top-0 justify-center z-40 items-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handler,
                        className: "w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:w-[812px] md:w-[650px] w-[310px] md:h-[509px] relative z-50 bg-slate-700 ltr:md:pl-10 ltr:pl-3 rtl:md:pr-10 rtl:pr-3 pr-3 md:py-[108px] py-20 flex flex-col justify-end overflow-hidden",
                        style: {
                            backgroundImage: `url(${"https://jaralayoun.com/srv/" + announcment.image})`,
                            backgroundRepeat: " no-repeat",
                            backgroundSize: "cover"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "logo mb-[20px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    width: "152",
                                                    height: "36",
                                                    src: `${logo ? "https://jaralayoun.com/srv/" + logo : "/assets/images/logo.svg"}`,
                                                    alt: "logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "md:text-[30px] text-xl font-bold text-qblack mb-1",
                                        children: announcment.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-qgray md:w-[480px] w-full md:text-base text-sm",
                                        children: announcment.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "md:w-[415px] w-full h-[54px] sm:flex mt-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-1 bg-white ltr:pl-4 rtl:pr-4 mb-2 md:mb-0 flex space-x-2 rtl:space-x-reverse items-center h-full focus-within:text-qgreen text-qblack overflow-hidden",
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
                                                className: "w-full h-full focus:outline-none text-sm placeholder:uppercase placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider",
                                                placeholder: "Email Address",
                                                onChange: (e)=>setEmail(e.target.value.trim()),
                                                value: email
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: subscribehandler,
                                        type: "button",
                                        className: "w-[120px] h-full primary-bg text-qblack text-sm font-600",
                                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Subscribe
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute ltr:right-5 rtl:left-5 top-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    onClick: adsHandle,
                                    viewBox: "0 0 54 54",
                                    fill: "none",
                                    className: "cursor-pointer md:w-[54px] md:h-[54px] w-[30px] h-[30px]",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M26.9399 53.9996C12.0678 53.9827 -0.0210736 41.8265 2.75822e-05 26.912C0.0211287 12.0502 12.1965 -0.0320829 27.115 -0.000426215C41.9703 0.0312305 54.0401 12.2148 54 27.1399C53.9599 41.9447 41.7972 54.0186 26.9399 53.9996ZM18.8476 16.4083C17.6765 16.44 16.9844 16.8705 16.6151 17.7189C16.1952 18.6876 16.3893 19.574 17.1363 20.3253C19.0966 22.2901 21.0252 24.2908 23.0425 26.1965C23.7599 26.874 23.6397 27.2201 23.0045 27.83C21.078 29.6788 19.2148 31.5951 17.3241 33.4797C16.9211 33.8807 16.5581 34.3007 16.4505 34.8853C16.269 35.8835 16.6953 36.8332 17.5456 37.3102C18.4382 37.8124 19.5038 37.6626 20.3394 36.8416C22.3673 34.843 24.3866 32.836 26.3723 30.7994C26.8513 30.3077 27.1298 30.2866 27.6193 30.791C29.529 32.7579 31.4851 34.6784 33.4201 36.6179C33.8463 37.0442 34.2831 37.4431 34.9098 37.5486C35.9184 37.7196 36.849 37.2891 37.3196 36.4259C37.7964 35.5543 37.6677 34.5075 36.8912 33.714C34.9731 31.7555 33.0677 29.7801 31.0631 27.9145C30.238 27.1462 30.3688 26.7474 31.1031 26.053C32.9896 24.2655 34.8022 22.3977 36.6338 20.5511C37.7922 19.384 37.8914 17.9827 36.9081 17.0288C35.9501 16.1002 34.5975 16.2141 33.4623 17.3411C31.5188 19.2743 29.5649 21.199 27.6594 23.1659C27.1446 23.6978 26.8492 23.6957 26.3343 23.1659C24.4267 21.1969 22.4664 19.2806 20.5336 17.3369C19.9997 16.7966 19.4258 16.3661 18.8476 16.4083Z",
                                        fill: "#F34336"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BestSellers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function BestSellers({ className , sallers =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 xl:gap-[30px] sm:gap-5 gap-2",
            children: sallers.map((saller)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    "data-aos": "fade-left",
                    "data-aos-duration": "500",
                    className: "item w-full flex flex-col items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: {
                            pathname: "/seller-products",
                            query: {
                                seller: saller.slug
                            }
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sm:w-[170px] sm:h-[170px] w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2 relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        layout: "fill",
                                        objectFit: "scale-down",
                                        src: `${"https://jaralayoun.com/srv/" + saller.logo}`,
                                        alt: saller.slug
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-base font-500 text-center cursor-pointer",
                                    children: saller.shop_name
                                })
                            ]
                        })
                    })
                }, saller.id))
        })
    });
};


/***/ }),

/***/ 9577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BrandSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8650);




function BrandSection({ className , sectionTitle , brands =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-aos": "fade-up",
        className: `w-full ${className || ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-x mx-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " section-title flex justify-between items-center mb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "sm:text-3xl text-xl font-600 text-qblacktext",
                            children: sectionTitle
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        datas: brands,
                        startLength: 0,
                        endLength: brands.length,
                        children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: {
                                        pathname: "/products",
                                        query: {
                                            brand: datas.slug
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-[130px] bg-white border border-primarygray flex justify-center items-center relative cursor-pointer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            layout: "fill",
                                            objectFit: "scale-down",
                                            src: `${"https://jaralayoun.com/srv/" + datas.logo}`,
                                            alt: datas.name
                                        })
                                    })
                                })
                            }, datas.id)
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 8708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CampaignCountDown)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Helpers/CountDown.jsx
var CountDown = __webpack_require__(3402);
// EXTERNAL MODULE: ./src/components/Helpers/Buttons/ShopNowBtn.jsx
var ShopNowBtn = __webpack_require__(6418);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Helpers/icons/GooglePlay.jsx


function GooglePlay() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "149",
            height: "39",
            viewBox: "0 0 149 39",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M13.1627 17.5339C13.1627 17.5339 2.00261 11.346 1.34549 10.9846C0.688369 10.6232 0.03125 10.8422 0.03125 11.5979V38.266C0.03125 38.8355 0.502185 39.0764 1.07169 38.7697C1.64119 38.4521 13.1627 32.0671 13.1627 32.0671C13.1627 32.0671 14.7288 31.2019 15.5064 30.7638C16.7659 30.0629 19.2848 28.672 19.2848 28.672C19.2848 28.672 24.487 25.7916 25.177 25.4083C25.867 25.025 25.8013 24.4993 25.2208 24.2036C24.6403 23.9079 19.2958 20.918 19.2958 20.918L13.1627 17.5339Z",
                    fill: "url(#paint0_linear_25_673)"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15.2233 24.7625L0.547599 10.8535C0.208088 10.9302 0 11.193 0 11.6202V38.2335C0 38.5949 0.142376 38.8139 0.328559 38.8906L15.2233 24.7625Z",
                    fill: "url(#paint1_linear_25_673)"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                    id: "mask0_25_673",
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "10",
                    width: "16",
                    height: "29",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M15.2233 24.7625L0.547599 10.8535C0.208088 10.9302 0 11.193 0 11.6202V38.2335C0 38.5949 0.142376 38.8139 0.328559 38.8906L15.2233 24.7625Z",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    mask: "url(#mask0_25_673)"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                    id: "mask1_25_673",
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "24",
                    width: "20",
                    height: "15",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M0.926578 38.8141L9.41436 34.1485C11.5062 32.9876 13.1599 32.0677 13.1599 32.0677L19.3259 28.7492L15.2189 24.7627L0.324219 38.8907C0.488498 38.9455 0.784202 38.9127 1.01419 38.8031",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    mask: "url(#mask1_25_673)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.1424 17.5349C13.1205 17.5897 1.9604 11.3909 1.31424 11.0732C0.657119 10.6571 0 10.8871 0 11.6208V38.3437C0 38.9351 0.470935 39.176 0.985678 38.8913C1.60994 38.5408 13.1205 32.1558 13.1424 32.101L19.2755 28.7059C19.2426 28.7497 24.4339 25.8694 25.08 25.5299C25.8248 25.1027 25.7481 24.577 25.1896 24.3251C24.5872 23.9747 19.2426 20.9848 19.2755 20.93L13.1424 17.5349Z",
                        fill: "url(#paint2_linear_25_673)"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M1.3237 10.9736C1.03895 10.8312 0.765148 10.7874 0.535156 10.8422L15.2218 24.7731L19.2849 20.9289L13.1628 17.5338C13.1628 17.5338 7.3911 14.3358 3.90837 12.4083L1.3237 10.9736Z",
                    fill: "url(#paint3_linear_25_673)"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                    id: "mask2_25_673",
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "10",
                    width: "20",
                    height: "15",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M1.3237 10.9736C1.03895 10.8312 0.765148 10.7874 0.535156 10.8422L15.2218 24.7731L19.2849 20.9289L13.1628 17.5338C13.1628 17.5338 7.3911 14.3358 3.90837 12.4083L1.3237 10.9736Z",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    mask: "url(#mask2_25_673)"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M104.216 29.4605L103.001 30.6105C102.716 30.7638 102.442 30.95 102.168 31.0705C101.325 31.4538 100.471 31.5523 99.704 31.5523C98.8935 31.5523 97.6231 31.4976 96.3308 30.5557C94.5346 29.2853 93.7461 27.0839 93.7461 25.1783C93.7461 21.2246 96.9441 19.2861 99.5616 19.2861C100.471 19.2861 101.412 19.5161 102.168 19.998C103.439 20.8413 103.767 21.9365 103.942 22.5279L97.9845 24.9483L96.0351 25.1016C96.6703 28.3434 98.8497 30.2272 101.259 30.2272C102.464 30.2272 103.351 29.8329 104.172 29.4277C104.172 29.4277 104.337 29.34 104.216 29.4605ZM100.58 22.955C101.062 22.7798 101.303 22.6265 101.303 22.2651C101.303 21.2356 100.175 20.0528 98.8169 20.0528C97.8202 20.0528 95.9365 20.8523 95.9365 23.6231C95.9365 24.0612 95.9913 24.5212 96.0132 24.9812L100.58 22.955Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M91.7792 29.3183C91.7792 30.304 91.9545 30.4573 92.7868 30.534C93.2249 30.5887 93.652 30.6106 94.0791 30.6544L93.1482 31.213H88.6908C89.2712 30.4464 89.3807 30.3697 89.3807 29.8659V29.2964L89.3698 14.1827H87.3984L89.2931 13.2627H92.9073C92.1187 13.7227 91.8887 13.9965 91.7902 14.8836L91.7792 29.3183Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M84.8679 20.5352C85.4484 21.0171 86.6531 22.0356 86.6531 23.9632C86.6531 25.8469 85.6017 26.734 84.5394 27.5773C84.2108 27.9059 83.8275 28.2673 83.8275 28.8258C83.8275 29.3844 84.2108 29.6911 84.4846 29.921L85.3936 30.6329C86.4998 31.5748 87.5073 32.44 87.5073 34.1923C87.5073 36.5799 85.2074 39.0002 80.8704 39.0002C77.2125 39.0002 75.4492 37.2479 75.4492 35.3642C75.4492 34.4442 75.8983 33.1519 77.3987 32.2648C78.9648 31.301 81.0785 31.1696 82.2175 31.0929C81.8671 30.6329 81.4619 30.151 81.4619 29.3625C81.4619 28.9354 81.5933 28.6725 81.7138 28.3659C81.44 28.3878 81.1552 28.4206 80.9033 28.4206C78.231 28.4206 76.7196 26.4055 76.7196 24.4232C76.7196 23.2513 77.2453 21.959 78.3405 21.0171C79.7752 19.8233 81.4947 19.6152 82.8528 19.6152H88.0549L86.4341 20.5352H84.8679ZM83.0937 31.8048C82.8856 31.7719 82.7651 31.7719 82.5132 31.7719C82.2833 31.7719 80.9033 31.8267 79.841 32.1881C79.2824 32.3962 77.6506 33.0205 77.6506 34.8604C77.6506 36.7003 79.4029 38.0255 82.1299 38.0255C84.5722 38.0255 85.8646 36.8317 85.8646 35.2328C85.8646 33.8966 85.0213 33.1957 83.0937 31.8048ZM83.8056 26.8983C84.386 26.3178 84.4408 25.5074 84.4408 25.0474C84.4408 23.2184 83.3675 20.3819 81.2757 20.3819C80.6295 20.3819 79.9176 20.7104 79.5124 21.2252C79.0853 21.7509 78.9648 22.4408 78.9648 23.098C78.9648 24.7955 79.9505 27.6102 82.108 27.6102C82.7323 27.6102 83.4113 27.3035 83.8056 26.8983Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M69.1386 31.5523C65.1192 31.5523 62.9727 28.3763 62.9727 25.5069C62.9727 22.1556 65.6778 19.2861 69.5219 19.2861C73.2347 19.2861 75.5674 22.2322 75.5674 25.3316C75.5674 28.3544 73.2675 31.5523 69.1386 31.5523ZM72.2818 29.4824C72.8952 28.661 73.0485 27.6315 73.0485 26.6349C73.0485 24.3679 71.9861 20.0528 68.832 20.0528C67.9996 20.0528 67.1563 20.3813 66.543 20.9289C65.5573 21.827 65.3711 22.955 65.3711 24.0612C65.3711 26.6021 66.6087 30.7857 69.6862 30.7857C70.6938 30.7857 71.7014 30.3038 72.2818 29.4824Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M55.6699 31.5523C51.6505 31.5523 49.5039 28.3763 49.5039 25.5069C49.5039 22.1556 52.209 19.2861 56.0532 19.2861C59.7659 19.2861 62.0987 22.2322 62.0987 25.3316C62.0987 28.3544 59.7988 31.5523 55.6699 31.5523ZM58.8131 29.4824C59.4264 28.661 59.5797 27.6315 59.5797 26.6349C59.5797 24.3679 58.5064 20.0528 55.3632 20.0528C54.5199 20.0528 53.6876 20.3813 53.0743 20.9289C52.0776 21.827 51.9024 22.955 51.9024 24.0612C51.9024 26.6021 53.1509 30.7857 56.2175 30.7857C57.2251 30.7857 58.2326 30.3038 58.8131 29.4824Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M47.8397 30.7973L44.4336 31.5859C43.0536 31.8049 41.8161 32.002 40.5018 32.002C33.9306 31.9911 31.4336 27.1284 31.4336 23.3171C31.4336 18.6735 34.982 14.3584 41.0494 14.3584C42.3308 14.3584 43.5684 14.5446 44.6964 14.8622C46.4816 15.366 47.314 15.9902 47.8397 16.3517L45.8573 18.2464L45.025 18.4325L45.6164 17.4797C44.806 16.6912 43.3274 15.2236 40.5237 15.2236C36.7672 15.2236 33.9306 18.093 33.9306 22.2876C33.9306 26.7889 37.1615 31.0273 42.3527 31.0273C43.875 31.0273 44.6636 30.7207 45.3755 30.4359V26.5699L41.7832 26.767L43.6889 25.7375H48.7377L48.1244 26.3399C47.9601 26.4822 47.9382 26.526 47.8835 26.7232C47.8616 26.9422 47.8397 27.6322 47.8397 27.8841V30.7973Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M111.57 29.57V36.0427H110.289V19.5818H111.57V21.4546C112.403 20.239 113.936 19.2861 115.699 19.2861C118.875 19.2861 121.022 21.7065 121.022 25.5288C121.022 29.3291 118.886 31.7933 115.699 31.7933C114.035 31.7933 112.534 30.9281 111.57 29.57ZM119.708 25.6273C119.708 22.7141 118.207 20.4909 115.535 20.4909C113.881 20.4909 112.293 21.8051 111.603 22.955V28.2777C112.293 29.4277 113.881 30.7857 115.535 30.7857C118.207 30.7857 119.708 28.5406 119.708 25.6273Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M122.77 15.0146H124.084V31.5521H122.77V15.0146Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M138.381 34.9043C138.654 35.0248 139.125 35.1015 139.421 35.1015C140.21 35.1015 140.746 34.7839 141.239 33.6449L142.17 31.5202L137.121 19.5059H138.556L142.882 29.9212L147.175 19.5059H148.621L142.466 34.0391C141.83 35.5396 140.823 36.2624 139.443 36.2624C139.027 36.2624 138.479 36.1857 138.162 36.0872L138.381 34.9043Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M134.758 31.5414C134.67 31.1252 134.604 30.7638 134.56 30.4572C134.517 30.1505 134.495 29.8438 134.495 29.5262C134.057 30.1724 133.432 30.72 132.622 31.1471C131.822 31.5743 131.056 31.7823 130.015 31.7823C128.756 31.7823 127.781 31.4757 127.091 30.8405C126.401 30.2162 126.051 29.362 126.051 28.2887C126.051 27.2154 126.555 26.3392 127.562 25.6711C128.57 25.0031 129.873 24.6636 131.483 24.6636H134.484V23.1741C134.484 22.3198 134.188 21.6408 133.608 21.1589C133.027 20.6661 132.206 20.4251 131.143 20.4251C130.169 20.4251 129.38 20.6551 128.778 21.0932C128.186 21.5422 127.88 22.1008 127.88 22.7689H126.566L126.544 22.7032C126.5 21.7941 126.905 21.0056 127.792 20.3156C128.668 19.6256 129.807 19.2861 131.22 19.2861C132.622 19.2861 133.761 19.6256 134.615 20.3047C135.469 20.9727 135.897 21.9475 135.897 23.2069V29.121C135.897 29.5481 135.919 29.9534 135.973 30.3586C136.028 30.7638 136.116 31.1581 136.225 31.5414H134.758ZM130.18 30.6762C131.275 30.6762 132.063 30.4243 132.863 29.9424C133.662 29.4605 134.199 28.8253 134.484 28.0587V25.7478H131.461C130.311 25.7478 129.358 25.9997 128.603 26.5254C127.847 27.0401 127.475 27.6644 127.475 28.3982C127.475 29.0882 127.715 29.6358 128.197 30.0519C128.69 30.4681 129.347 30.6762 130.18 30.6762Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M30.9922 3.877C30.9922 1.52232 32.8759 0 35.2197 0C36.7858 0 37.8153 0.700927 38.4614 1.55518L37.3115 2.16849C36.8734 1.60994 36.1177 1.17186 35.2197 1.17186C33.6316 1.17186 32.4378 2.29992 32.4378 3.877C32.4488 5.44313 33.6316 6.58214 35.2197 6.58214C36.041 6.58214 36.7639 6.23168 37.1253 5.90312V4.75316H34.7159V3.59225H38.5271V6.385C37.7386 7.2064 36.6106 7.754 35.2197 7.754C32.8759 7.76495 30.9922 6.23168 30.9922 3.877Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M40.3555 7.65508V0.120117H45.9519V1.28103H41.7902V3.21953H45.8643V4.39139H41.7902V6.49417H45.9519V7.65508H40.3555Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M49.7517 7.65508V1.28103H47.3203V0.120117H53.5958V1.28103H51.1645V7.65508H49.7517Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M58.625 0.120117H59.994V7.65508H58.625V0.120117Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M63.9157 7.65508V1.28103H61.4844V0.120117H67.7599V1.28103H65.3285V7.65508H63.9157Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M72.4414 3.88774C72.4414 1.65354 74.1609 0.0107422 76.6141 0.0107422C79.0455 0.0107422 80.7759 1.65354 80.7759 3.88774C80.7759 6.12195 79.0345 7.76474 76.6141 7.76474C74.1609 7.76474 72.4414 6.12195 72.4414 3.88774ZM79.2864 3.82203C79.2864 2.28875 78.235 1.1388 76.6032 1.1388C74.9604 1.1388 73.9199 2.28875 73.9199 3.82203C73.9199 5.34436 74.9604 6.50527 76.6032 6.50527C78.235 6.50527 79.2864 5.35531 79.2864 3.82203Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M87.9746 7.65508L83.78 2.26671V7.65508H82.3672V0.120117H83.8128L87.9198 5.34421V0.120117H89.3326V7.65508H87.9746Z",
                    fill: "black"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint0_linear_25_673",
                            x1: "6.08501",
                            y1: "19.6816",
                            x2: "15.3854",
                            y2: "33.3298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#FF177B"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#FFEC73"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint1_linear_25_673",
                            x1: "10.0453",
                            y1: "0.57355",
                            x2: "-6.65995",
                            y2: "36.0484",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#064AA2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#63FFD4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint2_linear_25_673",
                            x1: "15.1041",
                            y1: "16.5001",
                            x2: "-5.45565",
                            y2: "28.7994",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#FF4521"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#8A33DB"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint3_linear_25_673",
                            x1: "3.31219",
                            y1: "6.37832",
                            x2: "10.673",
                            y2: "25.5112",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#00A3B5"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#D6FFA1"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const icons_GooglePlay = (GooglePlay);

;// CONCATENATED MODULE: ./src/components/Helpers/icons/AppleStore.jsx


function AppleStore(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "132",
            height: "36",
            viewBox: "0 0 132 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M21.7562 16.5232C21.7238 12.6588 24.9189 10.7806 25.0593 10.6942C23.2458 8.06041 20.4393 7.6934 19.457 7.66102C17.1038 7.41275 14.8154 9.07509 13.6172 9.07509C12.3974 9.07509 10.5408 7.6934 8.55464 7.72579C5.99637 7.76896 3.58922 9.2478 2.2831 11.5578C-0.426295 16.2534 1.59226 23.1618 4.19371 26.9614C5.49983 28.818 7.01104 30.9014 9.00801 30.8258C10.951 30.7502 11.685 29.5844 14.0274 29.5844C16.359 29.5844 17.039 30.8258 19.0684 30.7826C21.1625 30.7502 22.4686 28.9152 23.7316 27.037C25.232 24.9105 25.8365 22.8056 25.8581 22.6976C25.8041 22.676 21.7994 21.1432 21.7562 16.5232Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M17.9255 5.16726C18.9726 3.86114 19.685 2.08006 19.4907 0.266602C17.9795 0.331368 16.0797 1.31366 14.9895 2.59819C14.0288 3.7316 13.1652 5.57745 13.3811 7.31534C15.0866 7.44488 16.8353 6.45179 17.9255 5.16726Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M49.9498 30.5556H47.2296L45.74 25.8709H40.5587L39.1446 30.5556H36.5L41.6273 14.6123H44.8009L49.9498 30.5556ZM45.2974 23.9063L43.9481 19.7504C43.8078 19.3187 43.5379 18.3256 43.1493 16.7496H43.0954C42.9335 17.4296 42.6852 18.4335 42.3398 19.7504L41.0121 23.9063H45.2974Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M63.1297 24.6728C63.1297 26.6266 62.6008 28.1702 61.5322 29.3036C60.5823 30.3183 59.3949 30.8148 57.9916 30.8148C56.4696 30.8148 55.3794 30.2751 54.7101 29.1849V35.219H52.1518V22.8378C52.1518 21.6072 52.1195 20.3551 52.0547 19.0597H54.2999L54.4402 20.884H54.4834C55.3362 19.5131 56.6315 18.8223 58.3586 18.8223C59.7187 18.8223 60.8413 19.362 61.7481 20.4306C62.6764 21.5101 63.1297 22.9133 63.1297 24.6728ZM60.5283 24.7592C60.5283 23.6366 60.28 22.719 59.7727 21.9958C59.2222 21.2402 58.4774 20.8624 57.549 20.8624C56.923 20.8624 56.3509 21.0783 55.8327 21.4885C55.3254 21.9095 54.98 22.4492 54.8288 23.1292C54.7533 23.4423 54.7101 23.7013 54.7101 23.9064V25.8278C54.7101 26.659 54.9692 27.3714 55.4765 27.9435C55.9838 28.5156 56.6531 28.8071 57.4735 28.8071C58.4342 28.8071 59.179 28.4293 59.7187 27.6953C60.2584 26.9504 60.5283 25.979 60.5283 24.7592Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M76.3407 24.6728C76.3407 26.6266 75.8118 28.1702 74.7431 29.3036C73.7932 30.3183 72.6058 30.8148 71.2025 30.8148C69.6805 30.8148 68.5903 30.2751 67.921 29.1849V35.219H65.3628V22.8378C65.3628 21.6072 65.3304 20.3551 65.2656 19.0597H67.5109L67.6512 20.884H67.6944C68.5471 19.5131 69.8424 18.8223 71.5696 18.8223C72.9296 18.8223 74.0523 19.362 74.959 20.4306C75.8873 21.5101 76.3407 22.9133 76.3407 24.6728ZM73.7392 24.7592C73.7392 23.6366 73.491 22.719 72.9836 21.9958C72.4331 21.2402 71.6883 20.8624 70.76 20.8624C70.1339 20.8624 69.5618 21.0783 69.0437 21.4885C68.5363 21.9095 68.2017 22.4492 68.0398 23.1292C67.9642 23.4423 67.921 23.7013 67.921 23.9064V25.8278C67.921 26.659 68.1801 27.3714 68.6875 27.9435C69.1948 28.5156 69.864 28.8071 70.6844 28.8071C71.6451 28.8071 72.4007 28.4293 72.9296 27.6953C73.4802 26.9504 73.7392 25.979 73.7392 24.7592Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M91.1308 26.0869C91.1308 27.447 90.6558 28.548 89.7167 29.4008C88.6805 30.3291 87.234 30.7932 85.3774 30.7932C83.6611 30.7932 82.2902 30.4586 81.2539 29.8001L81.8476 27.6736C82.9702 28.3321 84.2008 28.6667 85.5393 28.6667C86.5 28.6667 87.2556 28.4508 87.7845 28.0191C88.3242 27.5873 88.5941 27.0044 88.5941 26.2812C88.5941 25.6335 88.3674 25.0938 87.9356 24.6512C87.4931 24.2086 86.759 23.7985 85.7336 23.4207C82.9162 22.3736 81.5238 20.8516 81.5238 18.8546C81.5238 17.5485 82.0203 16.4799 83.0026 15.6379C83.9849 14.8067 85.291 14.3857 86.921 14.3857C88.3674 14.3857 89.5764 14.634 90.5371 15.1414L89.8894 17.2139C88.9827 16.7281 87.968 16.4799 86.8238 16.4799C85.9279 16.4799 85.2155 16.7065 84.7081 17.1383C84.2871 17.5377 84.0712 18.0127 84.0712 18.5848C84.0712 19.2108 84.3195 19.7398 84.8053 20.1392C85.2262 20.517 86.0034 20.9271 87.1261 21.3697C88.4969 21.9202 89.5008 22.5679 90.1485 23.3127C90.8069 24.0575 91.1308 24.9858 91.1308 26.0869Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M99.5924 20.9811H96.7751V26.5618C96.7751 27.9759 97.2716 28.6883 98.2647 28.6883C98.7181 28.6883 99.0959 28.6452 99.3981 28.5696L99.4737 30.5126C98.9664 30.6961 98.3079 30.7932 97.4875 30.7932C96.4729 30.7932 95.6957 30.4802 95.1235 29.8649C94.5514 29.2496 94.2708 28.2134 94.2708 26.7669V20.9703H92.5977V19.0597H94.2708V16.9548L96.7751 16.1992V19.0597H99.5924V20.9811Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M112.266 24.716C112.266 26.4862 111.759 27.9327 110.755 29.0661C109.697 30.2319 108.294 30.8148 106.545 30.8148C104.861 30.8148 103.512 30.2535 102.508 29.1417C101.504 28.0298 101.008 26.6158 101.008 24.9103C101.008 23.1292 101.526 21.6719 102.551 20.5385C103.588 19.4051 104.98 18.833 106.729 18.833C108.413 18.833 109.773 19.3943 110.798 20.5169C111.781 21.5964 112.266 22.9996 112.266 24.716ZM109.622 24.7699C109.622 23.7121 109.395 22.8161 108.942 22.0605C108.402 21.143 107.636 20.6896 106.642 20.6896C105.617 20.6896 104.829 21.143 104.3 22.0605C103.836 22.8161 103.62 23.7337 103.62 24.8239C103.62 25.8817 103.847 26.7885 104.3 27.5333C104.851 28.4508 105.628 28.9042 106.621 28.9042C107.592 28.9042 108.359 28.44 108.92 27.5117C109.384 26.7345 109.622 25.8278 109.622 24.7699Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M120.578 21.305C120.329 21.2618 120.06 21.2402 119.768 21.2402C118.872 21.2402 118.171 21.5748 117.685 22.2549C117.264 22.8486 117.048 23.615 117.048 24.5217V30.5558H114.49V22.6759C114.49 21.3482 114.468 20.1392 114.414 19.0597H116.638L116.735 21.2618H116.81C117.08 20.5062 117.501 19.8909 118.084 19.4375C118.656 19.0274 119.272 18.8223 119.93 18.8223C120.167 18.8223 120.383 18.8439 120.567 18.8654L120.578 21.305Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M131.996 24.2628C131.996 24.7162 131.963 25.1048 131.899 25.4178H124.235C124.267 26.5512 124.634 27.4256 125.346 28.0192C125.994 28.5482 126.825 28.818 127.851 28.818C128.984 28.818 130.02 28.6345 130.949 28.2783L131.348 30.0486C130.258 30.5236 128.973 30.761 127.494 30.761C125.713 30.761 124.31 30.2321 123.295 29.185C122.281 28.138 121.773 26.7239 121.773 24.9644C121.773 23.2373 122.248 21.7909 123.198 20.6359C124.191 19.4053 125.53 18.79 127.214 18.79C128.865 18.79 130.128 19.4053 130.97 20.6359C131.65 21.629 131.996 22.8271 131.996 24.2628ZM129.556 23.6043C129.578 22.8487 129.405 22.1903 129.06 21.6398C128.617 20.9273 127.937 20.5711 127.03 20.5711C126.199 20.5711 125.519 20.9165 125.001 21.6074C124.58 22.1579 124.321 22.8271 124.245 23.5935L129.556 23.6043Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M44.0701 8.9129H42.7316L41.9976 6.6137H39.4501L38.7485 8.9129H37.4531L39.9682 1.07617H41.5226L44.0701 8.9129ZM41.7709 5.6422L41.1124 3.59127C41.0477 3.38617 40.9181 2.88963 40.713 2.11243H40.6914C40.6051 2.44706 40.4971 2.93281 40.3136 3.59127L39.666 5.6422H41.7709Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M50.3749 3.25684L48.2376 8.9131H47.0178L44.9453 3.25684H46.2946L47.2553 6.24688C47.4172 6.74343 47.5576 7.21838 47.6655 7.67174H47.6979C47.795 7.26156 47.9354 6.7866 48.1081 6.24688L49.058 3.25684H50.3749Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M54.9301 8.91259L54.8329 8.26493H54.8005C54.4119 8.78306 53.8614 9.04213 53.149 9.04213C52.1343 9.04213 51.4219 8.3297 51.4219 7.37979C51.4219 5.98731 52.6308 5.26409 54.725 5.26409V5.15614C54.725 4.41133 54.3256 4.04432 53.5484 4.04432C52.9871 4.04432 52.5013 4.18465 52.0695 4.4653L51.8105 3.64493C52.3286 3.3211 52.9871 3.15918 53.7535 3.15918C55.2323 3.15918 55.9771 3.93638 55.9771 5.50156V7.58488C55.9771 8.15699 55.9987 8.59956 56.0635 8.93418L54.9301 8.91259ZM54.7573 6.09526C53.3649 6.09526 52.6632 6.42988 52.6632 7.23946C52.6632 7.83315 53.0194 8.1246 53.5268 8.1246C54.1637 8.1246 54.7573 7.63885 54.7573 6.9696V6.09526Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M58.7722 2.32855C58.3512 2.32855 58.0273 2.00471 58.0273 1.57294C58.0273 1.14116 58.362 0.828125 58.7937 0.828125C59.2255 0.828125 59.5709 1.14116 59.5601 1.57294C59.5601 2.0263 59.2363 2.32855 58.7722 2.32855ZM58.1677 3.25686H59.4198V8.90234H58.1677V3.25686Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M61.6562 0.666016H62.9084V8.90214H61.6562V0.666016Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M68.2426 8.91265L68.1454 8.26498H68.113C67.7244 8.78311 67.1739 9.04218 66.4615 9.04218C65.4468 9.04218 64.7344 8.32975 64.7344 7.37984C64.7344 5.98736 65.9433 5.26414 68.0375 5.26414V5.1562C68.0375 4.41138 67.6381 4.04437 66.8609 4.04437C66.2996 4.04437 65.8138 4.1847 65.382 4.46535L65.123 3.63419C65.6411 3.31035 66.2996 3.14844 67.066 3.14844C68.5448 3.14844 69.2896 3.92563 69.2896 5.49082V7.57414C69.2896 8.14624 69.3112 8.58881 69.3652 8.92344H68.2426V8.91265ZM68.0698 6.09531C66.6774 6.09531 65.9757 6.42993 65.9757 7.23951C65.9757 7.83321 66.3319 8.12466 66.8393 8.12466C67.4762 8.12466 68.0698 7.63891 68.0698 6.96965V6.09531Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M74.3805 9.04247C73.5817 9.04247 72.988 8.70784 72.5994 8.03859H72.5778L72.5022 8.91294H71.4336C71.466 8.45957 71.4768 7.95223 71.4768 7.39093V0.666016H72.7397V4.08784H72.7613C73.1391 3.46176 73.7328 3.14873 74.564 3.14873C75.9241 3.14873 76.874 4.31452 76.874 6.00924C76.874 7.75794 75.8161 9.04247 74.3805 9.04247ZM74.1214 4.13102C73.3982 4.13102 72.7397 4.75709 72.7397 5.63144V6.62452C72.7397 7.40172 73.3334 8.03859 74.0998 8.03859C75.0389 8.03859 75.6002 7.27219 75.6002 6.05242C75.6002 4.90821 75.0173 4.13102 74.1214 4.13102Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M78.7305 0.666016H79.9826V8.90214H78.7305V0.666016Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M86.8161 6.38686H83.0488C83.0704 7.45551 83.7828 8.05999 84.8299 8.05999C85.3912 8.05999 85.8985 7.96284 86.3519 7.79013L86.5462 8.66448C86.0173 8.90196 85.3912 9.0099 84.6572 9.0099C82.8869 9.0099 81.8398 7.89808 81.8398 6.16018C81.8398 4.43308 82.9085 3.12695 84.5169 3.12695C85.9525 3.12695 86.87 4.1956 86.87 5.81476C86.87 6.04144 86.8592 6.23574 86.8161 6.38686ZM85.6719 5.49093C85.6719 4.61658 85.2293 4.0013 84.4305 4.0013C83.7073 4.0013 83.146 4.62737 83.0596 5.49093H85.6719Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M94.4272 9.04218C92.7757 9.04218 91.707 7.81162 91.707 6.13849C91.707 4.38979 92.7973 3.14844 94.5244 3.14844C96.1543 3.14844 97.2446 4.32503 97.2446 6.04134C97.2446 7.80082 96.1219 9.04218 94.4272 9.04218ZM94.4812 4.06596C93.5745 4.06596 92.9916 4.91872 92.9916 6.09531C92.9916 7.2611 93.5853 8.10307 94.4704 8.10307C95.3555 8.10307 95.9492 7.19634 95.9492 6.06293C95.9384 4.91872 95.3663 4.06596 94.4812 4.06596Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M103.991 8.9127H102.739V5.66358C102.739 4.65971 102.35 4.16316 101.594 4.16316C100.85 4.16316 100.342 4.80003 100.342 5.54485V8.9019H99.0901V4.87559C99.0901 4.37905 99.0793 3.83933 99.0469 3.25643H100.148L100.202 4.13078H100.234C100.569 3.52629 101.26 3.1377 102.026 3.1377C103.214 3.1377 103.991 4.04442 103.991 5.52326V8.9127Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M112.203 4.20669H110.821V6.94847C110.821 7.65011 111.07 7.99553 111.555 7.99553C111.771 7.99553 111.966 7.97394 112.117 7.94156L112.149 8.89146C111.901 8.98861 111.577 9.03179 111.178 9.03179C110.185 9.03179 109.602 8.48128 109.602 7.05642V4.20669H108.781V3.26758H109.602V2.23132L110.832 1.85352V3.25679H112.214V4.20669",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M118.85 8.91294H117.598V5.68541C117.598 4.67074 117.209 4.1634 116.454 4.1634C115.806 4.1634 115.201 4.60597 115.201 5.50191V8.90214H113.949V0.666016H115.201V4.05546H115.223C115.622 3.44018 116.184 3.13793 116.918 3.13793C118.116 3.13793 118.85 4.06625 118.85 5.54508V8.91294Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M125.265 6.38686H121.498C121.52 7.45551 122.232 8.05999 123.279 8.05999C123.84 8.05999 124.348 7.96284 124.801 7.79013L124.995 8.66448C124.466 8.90196 123.84 9.0099 123.106 9.0099C121.336 9.0099 120.289 7.89808 120.289 6.16018C120.289 4.43308 121.358 3.12695 122.966 3.12695C124.402 3.12695 125.319 4.1956 125.319 5.81476C125.319 6.04144 125.308 6.23574 125.265 6.38686ZM124.121 5.49093C124.121 4.61658 123.679 4.0013 122.88 4.0013C122.156 4.0013 121.584 4.62737 121.509 5.49093H124.121Z",
                    fill: "black"
                })
            ]
        })
    });
}
/* harmony default export */ const icons_AppleStore = (AppleStore);

// EXTERNAL MODULE: ./src/components/Helpers/ServeLangItem.js
var ServeLangItem = __webpack_require__(6681);
;// CONCATENATED MODULE: ./src/components/Home/CampaignCountDown.jsx








function CampaignCountDown({ className , lastDate , downloadData , flashSaleData ,  }) {
    const { showDate , showHour , showMinute , showSecound  } = (0,CountDown/* default */.Z)(lastDate);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `w-full lg:h-[460px] ${className || ""}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-x mx-auto h-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:flex xl:space-x-[30px] lg:space-x-5 rtl:space-x-reverse items-center h-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-aos": "fade-right",
                            className: "campaign-countdown lg:w-1/2 group h-[300px] sm:h-[400px] lg:h-full w-full mb-5 lg:mb-0 ",
                            style: {
                                background: `url(${"https://jaralayoun.com/srv/" + flashSaleData.homepage_image || 0}) no-repeat`,
                                backgroundSize: "cover"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full xl:p-12 p-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "countdown-wrapper w-full flex lg:justify-between justify-evenly lg:mb-10 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "countdown-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-700 sm:text-[30px] text-[14px] text-[#EB5757]",
                                                            children: showDate
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                        children: (0,ServeLangItem/* default */.Z)()?.Days
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "countdown-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-700 sm:text-[30px] text-[14px] text-[#2F80ED]",
                                                            children: showHour
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                        children: (0,ServeLangItem/* default */.Z)()?.Hours
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "countdown-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-700 sm:text-[30px] text-[14px] text-[#219653]",
                                                            children: showMinute
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                        children: (0,ServeLangItem/* default */.Z)()?.Minutes
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "countdown-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-700 sm:text-[30px] text-[14px] text-[#EF5DA8]",
                                                            children: showSecound
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                        children: (0,ServeLangItem/* default */.Z)()?.Seconds
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "countdown-title mb-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-[44px] text-qblack font-600",
                                            children: flashSaleData.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-[90px]",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/flash-sale",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(ShopNowBtn/* default */.Z, {})
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-aos": "fade-left",
                            className: "download-app flex-1 lg:h-full h-[430px] xl:p-12 p-5",
                            style: {
                                backgroundImage: `url(${downloadData.image ? "https://jaralayoun.com/srv/" + downloadData.image : "/assets/images/download-app-cover.png"})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col h-full justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "get-app",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-[13px] font-600 text-qblack mb-3",
                                            children: (0,ServeLangItem/* default */.Z)()?.MOBILE_APP_VERSION
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "lg:text-[30px] text-2xl font-600 text-qblack leading-10 mb-8",
                                            children: [
                                                (0,ServeLangItem/* default */.Z)()?.Get_Our,
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-qred border-b-2 border-qred mx-2",
                                                    children: (0,ServeLangItem/* default */.Z)()?.Mobile_App
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                (0,ServeLangItem/* default */.Z)()?.Its_Make_easy_for_you_life
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex space-x-5 rtl:space-x-reverse items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bg-white w-[170px] h-[60px] flex justify-center items-center cursor-pointer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: downloadData.play_store ? downloadData.play_store : "#",
                                                        passHref: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_GooglePlay, {})
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bg-white w-[170px] h-[60px] flex justify-center items-center cursor-pointer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: downloadData.app_store ? downloadData.app_store : "#",
                                                        passHref: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_AppleStore, {})
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
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

/***/ 8909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function CategorySection({ sectionTitle , categories  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-aos": "fade-up",
        className: "category-section-wrapper w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-x mx-auto pb-[60px]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full grid xl:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-[30px]",
                    children: categories && categories.length > 0 && categories.slice(0, categories.length > 8 ? 8 : categories.length).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "data-aos": "fade-left",
                            "data-aos-delay": i + "00",
                            className: "item w-full cursor-pointer group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: {
                                    pathname: "/products",
                                    query: {
                                        category: item.slug
                                    }
                                },
                                passhref: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full h-[120px] relative rounded bg-white flex justify-center items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    layout: "fill",
                                                    objectFit: "scale-down",
                                                    src: "https://jaralayoun.com/srv/" + item.image,
                                                    alt: ""
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-base text-qgray text-center mt-5 group-hover:text-qgreen transition duration-300 ease-in-out",
                                            children: item.name
                                        })
                                    ]
                                })
                            })
                        }, i))
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySection);


/***/ }),

/***/ 54:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8418);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6681);




function OneColumnAdsOne({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `one-column-ads-one md:h-[295px] h-[190px] md:mb-[60px] mb-[30px] w-full`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-x mx-auto h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-aos": "fade-right",
                style: {
                    backgroundImage: `url(${"https://jaralayoun.com/srv/" + data.image})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`
                },
                className: "w-full h-full flex justify-center items-center xl:py-[60px] md:py-[40px] py-4 group",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex flex-col justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "md:mb-3 text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-qblack uppercase text-xs font-semibold",
                                        children: data.title_one
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "w-[300px] md:text-[30px] text-[20px] md:leading-[40px] leading-1 text-qblack font-semibold text-center",
                                        children: data.title_two
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_client_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: {
                                    pathname: "/products",
                                    query: {
                                        category: data.product_slug
                                    }
                                },
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[136px] h-[40px] bg-white relative flex justify-center overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full h-full primary-bg absolute transition-all duration-300 ease-in-out -left-[140px] group-hover:left-0 top-0"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex space-x-2 rtl:space-x-reverse items-center relative z-10",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm text-semibold transition-all duration-300 ease-in-out primary-text group-hover:text-white",
                                                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)()?.Shop_Now
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "primary-text transition-all duration-300 ease-in-out group-hover:text-white",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "6",
                                                            height: "11",
                                                            viewBox: "0 0 6 11",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "fill-current transform rtl:rotate-180",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                    x: "1.08984",
                                                                    y: "0.636719",
                                                                    width: "6.94219",
                                                                    height: "1.54271",
                                                                    transform: "rotate(45 1.08984 0.636719)"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                    x: "6",
                                                                    y: "5.54492",
                                                                    width: "6.94219",
                                                                    height: "1.54271",
                                                                    transform: "rotate(135 6 5.54492)"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneColumnAdsOne);


/***/ }),

/***/ 5949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6418);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6681);





function TwoColumnAds({ bannerOne , bannerTwo  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `two-column-ads-section md:mb-[60px] lg:h-[295px] h-[200px] mb-[30px] w-full`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-x mx-auto h-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `sm:flex xl:space-x-[30px] md:space-x-5 rtl:space-x-reverse items-center w-full h-full  overflow-hidden`,
                children: [
                    bannerOne && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "data-aos": "fade-right",
                        className: `h-full sm:w-1/2 w-full`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                backgroundImage: `url(${"https://jaralayoun.com/srv/" + bannerOne.image})`,
                                backgroundSize: `cover`,
                                backgroundRepeat: `no-repeat`
                            },
                            className: "w-full h-full relative ltr:pl-[50px] rtl:pr-[50px] py-[35px] flex flex-col justify-between group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "lg:mb-[22px] mb-2.5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-qblack uppercase text-xs font-semibold",
                                                children: bannerOne.badge
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "lg:mb-[30px] mb-2.5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "lg:text-[30px] text-[20px] leading-none text-qblack font-semibold lg:mb-3",
                                                    children: bannerOne.title_one
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "lg:text-[30px] text-[20px] lg:leading-[40px] text-qblack font-semibold",
                                                    children: bannerOne.title_two
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[90px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: {
                                                pathname: "/products",
                                                query: {
                                                    category: bannerOne.product_slug
                                                }
                                            },
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    bannerTwo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "data-aos": "fade-left",
                        className: `h-full sm:w-1/2 w-full`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                backgroundImage: `url(${"https://jaralayoun.com/srv/" + bannerTwo.image})`,
                                backgroundSize: `cover`,
                                backgroundRepeat: `no-repeat`
                            },
                            className: "w-full h-full relative bg-blue-100 ltr:pl-[50px] rtl:pr-[50px] py-[35px] flex flex-col justify-between group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "lg:mb-[22px] mb-2.5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-qblack uppercase text-xs font-semibold",
                                                children: bannerTwo.badge
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "lg:mb-[30px] mb-2.5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "lg:text-[30px] leading-none text-qblack font-semibold lg:mb-3",
                                                    children: bannerTwo.title_one
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "lg:text-[30px] text-[20px] lg:leading-[40px] text-qblack font-semibold",
                                                    children: bannerTwo.title_two
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[90px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: {
                                                pathname: "/products",
                                                query: {
                                                    category: bannerTwo.product_slug
                                                }
                                            },
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cursor-pointer w-full relative ",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "inline-flex space-x-1.5 items-center relative z-20",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-sm text-qblack font-medium leading-[30px]",
                                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)()?.Shop_Now
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "leading-[30px]",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                        width: "7",
                                                                        height: "11",
                                                                        viewBox: "0 0 7 11",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                x: "2.08984",
                                                                                y: "0.636719",
                                                                                width: "6.94219",
                                                                                height: "1.54271",
                                                                                transform: "rotate(45 2.08984 0.636719)",
                                                                                fill: "#1D1D1D"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                x: "7",
                                                                                y: "5.54492",
                                                                                width: "6.94219",
                                                                                height: "1.54271",
                                                                                transform: "rotate(135 7 5.54492)",
                                                                                fill: "#1D1D1D"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] primary-bg absolute left-0 bottom-0 z-10"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TwoColumnAds);


/***/ }),

/***/ 7261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8522);
/* harmony import */ var _Helpers_SectionStyleFour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6140);
/* harmony import */ var _Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2842);
/* harmony import */ var _Helpers_SectionStyleThree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3603);
/* harmony import */ var _Helpers_SectionStyleTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1543);
/* harmony import */ var _Helpers_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5924);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4790);
/* harmony import */ var _Ads__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2693);
/* harmony import */ var _BestSellers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4181);
/* harmony import */ var _BrandSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9577);
/* harmony import */ var _CampaignCountDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8708);
/* harmony import */ var _CategorySection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8909);
/* harmony import */ var _ProductAds_OneColumnAdsOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54);
/* harmony import */ var _ProductAds_OneColumnAdsTwo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7849);
/* harmony import */ var _ProductAds_TwoColumnAds__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Helpers_SectionStyleFour__WEBPACK_IMPORTED_MODULE_2__, _Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__, _Helpers_SectionStyleThree__WEBPACK_IMPORTED_MODULE_4__, _Helpers_SectionStyleTwo__WEBPACK_IMPORTED_MODULE_5__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_7__, _Ads__WEBPACK_IMPORTED_MODULE_8__]);
([_Helpers_SectionStyleFour__WEBPACK_IMPORTED_MODULE_2__, _Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__, _Helpers_SectionStyleThree__WEBPACK_IMPORTED_MODULE_4__, _Helpers_SectionStyleTwo__WEBPACK_IMPORTED_MODULE_5__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_7__, _Ads__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













// import ProductsAds from "./ProductsAds";




function Home({ homepageData  }) {
    const getsectionTitles = homepageData.section_title;
    const { 0: sectionTitles , 1: setSectionTitles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!sectionTitles) {
            let tem = getsectionTitles && getsectionTitles.map((item, i)=>{
                return {
                    [item.key]: item.custom ? item.custom : item.default
                };
            });
            setSectionTitles(Object.assign.apply(Object, tem));
        }
    }, [
        sectionTitles
    ]);
    const { 0: homepage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(homepageData);
    const { enable_multivendor  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
    const { 0: isMultivendor , 1: setIsMultivendor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isMultivendor) {
            setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
        }
    }, [
        isMultivendor
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Partials_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            childrenClasses: "pt-[30px] pb-[60px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Ads__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategorySection__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    categories: homepage.homepage_categories,
                    sectionTitle: sectionTitles && sectionTitles.Trending_Category
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CampaignCountDown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    className: "md:mb-[60px] mb-[30px]",
                    flashSaleData: homepage.flashSale,
                    downloadData: homepage.flashSaleSidebarBanner,
                    lastDate: homepage.flashSale.end_time
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleThree__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    products: homepage.newArrivalProducts.length > 0 ? homepage.newArrivalProducts.slice(0, homepage.newArrivalProducts.length > 16 ? 16 : homepage.newArrivalProducts.length) : [],
                    sectionTitle: sectionTitles && sectionTitles.New_Arrivals,
                    seeMoreUrl: `/products?highlight=new_arrival`,
                    className: "new-products md:mb-[60px] mb-[30px]"
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full text-white md:mb-[60px] mb-[30px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-x mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductAds_OneColumnAdsTwo__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            data: homepage.singleBannerTwo
                        })
                    })
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    products: homepage.popularCategoryProducts,
                    categories: homepage.popularCategories,
                    categoryBackground: "https://jaralayoun.com/srv/" + homepage.popularCategorySidebarBanner,
                    categoryTitle: sectionTitles && sectionTitles.Popular_Category,
                    sectionTitle: sectionTitles && sectionTitles.Popular_Category,
                    seeMoreUrl: `/products?highlight=popular_category`,
                    className: "category-products md:mb-[60px] mb-[30px]"
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BrandSection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    brands: homepage.brands.length > 0 ? homepage.brands : [],
                    sectionTitle: sectionTitles && sectionTitles.Shop_by_Brand,
                    className: "brand-section-wrapper md:mb-[60px] mb-[30px]"
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CampaignCountDown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    className: "md:mb-[60px] mb-[30px]",
                    flashSaleData: homepage.flashSale,
                    downloadData: homepage.flashSaleSidebarBanner,
                    lastDate: homepage.flashSale.end_time
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "top-selling-product md:mb-[60px] mb-[30px]",
                    seeMoreUrl: `/products?highlight=top_product`,
                    categoryTitle: sectionTitles && sectionTitles.Top_Rated_Products,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleTwo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        products: homepage.topRatedProducts.length && homepage.topRatedProducts.length > 0 ? homepage.topRatedProducts : []
                    })
                }),
                homepage && isMultivendor === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "best-sallers-section md:mb-[60px] mb-[30px]",
                    seeMoreUrl: "/sellers",
                    categoryTitle: sectionTitles && sectionTitles.Best_Seller,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BestSellers__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        sallers: homepage.sellers.length > 0 ? homepage.sellers : []
                    })
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductAds_TwoColumnAds__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    bannerOne: homepage.twoColumnBannerOne,
                    bannerTwo: homepage.twoColumnBannerTwo
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    categories: homepage.featuredCategories.length > 0 ? homepage.featuredCategories : [],
                    categoryBackground: "https://jaralayoun.com/srv/" + homepage.featuredCategorySidebarBanner,
                    categoryTitle: sectionTitles && sectionTitles.Featured_Products,
                    products: homepage.featuredCategoryProducts.length > 0 ? homepage.featuredCategoryProducts : [],
                    sectionTitle: sectionTitles && sectionTitles.Featured_Products,
                    seeMoreUrl: `/products?highlight=featured_product`,
                    className: "category-products md:mb-[60px] mb-[30px]"
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductAds_OneColumnAdsOne__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    data: homepage.singleBannerOne
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleFour__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    products: homepage.bestProducts.length > 0 ? homepage.bestProducts : [],
                    sectionTitle: sectionTitles && sectionTitles.Best_Products,
                    seeMoreUrl: `/products?highlight=best_product`,
                    className: "category-products md:mb-[60px] mb-[30px]"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

// components/Preloader.js

const Preloader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "preloader",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "spinner"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);


/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 6158:
/***/ ((module) => {

module.exports = require("react-share");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,4994,9808,570,4790,990,16,1839,8995,8635,3402], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();