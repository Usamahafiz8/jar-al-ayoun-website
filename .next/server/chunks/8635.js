"use strict";
exports.id = 8635;
exports.ids = [8635];
exports.modules = {

/***/ 7039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCardRowStyleTwo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8522);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5564);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9808);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4178);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4339);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
react_toastify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Redirect = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-2 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm text-gray-500",
                children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Item_added
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/cart",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",
                    children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Go_To_Cart
                })
            })
        ]
    });
};
function ProductCardRowStyleTwo({ className , datas  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    //cart
    const varients = datas && datas.variants.length > 0 && datas.variants;
    const { 0: getFirstVarients , 1: setFirstVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(varients && varients.map((v)=>v.active_variant_items[0]));
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: offerPrice , 1: setOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const addToCart = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) {
            const data = {
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)() && (0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)().access_token,
                quantity: 1,
                variants: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? parseInt(v.product_variant_id) : null),
                variantItems: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? v.id : null)
            };
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
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].addToCard */ .Z.addToCard(uri).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_8__/* .fetchCart */ .x7)());
            } else {
                const uri1 = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_8__/* .fetchCart */ .x7)());
            }
        } else {
            router.push("/login");
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
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.websiteSetup);
    const { 0: isProductInFlashSale , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-aos": "fade-up",
        className: `product-card-row-two w-full  ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-[105px] bg-white border border-primarygray px-5 ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full flex space-x-5 justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[75px] h-full relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            layout: "fill",
                            objectFit: "scale-down",
                            src: `${datas.image}`,
                            alt: "",
                            className: "w-full h-full object-contain"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 h-full flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                                        className: "title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer",
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
                                                    className: "line-through text-qgray font-500 text-base mr-2",
                                                    children: currency_icon && currency_icon + parseFloat(price).toFixed(2)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    id: datas.id,
                                                    price: price
                                                })
                                            ]
                                        })
                                    }),
                                    offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: "offer-price text-qred font-600 text-[18px] ml-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            id: datas.id,
                                            price: offerPrice
                                        })
                                    })
                                ]
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

/***/ 7849:
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




function OneColumnAdsTwo({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `one-column-ads-one sm:h-[166px] h-[100px] w-full`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "data-aos": "fade-right",
            style: {
                backgroundImage: `url(${"https://jaralayoun.com/srv/" + data.image})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`
            },
            className: "w-full h-full flex justify-center items-center ltr:md:pl-[80px] rtl:md:pr-[80px] ltr:pl-3 rtl:pr-3 md:py-[40px] py-4 group",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full flex flex-col justify-evenly",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "md:text-[30px] text-[20px] md:leading-[40px] font-semibold",
                                children: data.title_one
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[90px]",
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
                                    className: "cursor-pointer w-full relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inline-flex text-qred rtl:space-x-reverse space-x-1.5 items-center relative z-20",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm font-semibold leading-[30px]",
                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)()?.Shop_Now
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "leading-[30px]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "7",
                                                        height: "11",
                                                        viewBox: "0 0 7 11",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "fill-current transform rtl:rotate-180",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "2.08984",
                                                                y: "0.636719",
                                                                width: "6.94219",
                                                                height: "1.54271",
                                                                transform: "rotate(45 2.08984 0.636719)"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "7",
                                                                y: "5.54492",
                                                                width: "6.94219",
                                                                height: "1.54271",
                                                                transform: "rotate(135 7 5.54492)"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] primary-bg absolute left-0 rtl:right-0 bottom-0 z-10"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneColumnAdsTwo);


/***/ })

};
;