"use strict";
exports.id = 9305;
exports.ids = [9305];
exports.modules = {

/***/ 8028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductsFilter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Helpers/Checkbox.jsx

function Checkbox(props) {
    const { id , name , handleChange , checked , className  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
            className: className,
            id: id,
            type: "checkbox",
            name: name,
            onChange: handleChange,
            checked: checked
        })
    });
};

// EXTERNAL MODULE: ./src/components/Helpers/ServeLangItem.js
var ServeLangItem = __webpack_require__(6681);
// EXTERNAL MODULE: external "react-range-slider-input"
var external_react_range_slider_input_ = __webpack_require__(8056);
var external_react_range_slider_input_default = /*#__PURE__*/__webpack_require__.n(external_react_range_slider_input_);
;// CONCATENATED MODULE: ./src/components/AllProductPage/ProductsFilter.jsx





function ProductsFilter({ categories , categoryHandler , varientHandler , brandsHandler , volume , volumeHandler , className , filterToggle , filterToggleHandler , variantsFilter , priceMin , priceMax , brands ,  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${className || ""}  ${filterToggle ? "block" : "hidden lg:block"}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "filter-subject-item pb-10 border-b border-qgray-border",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "subject-title mb-[30px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-black text-base font-500",
                                children: (0,ServeLangItem/* default */.Z)()?.Product_categories
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "filter-items",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: categories && categories.length > 0 && categories.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "item mb-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-between items-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex space-x-[14px] rtl:space-x-reverse items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Checkbox, {
                                                            id: item.slug,
                                                            name: item.id,
                                                            handleChange: (e)=>categoryHandler(e),
                                                            checked: item.selected
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: item.slug,
                                                        className: "text-xs font-black font-400 capitalize",
                                                        children: item.name
                                                    })
                                                ]
                                            })
                                        })
                                    }, i))
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "filter-subject-item pb-10 border-b border-qgray-border mt-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "subject-title mb-[30px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-black text-base font-500",
                                children: (0,ServeLangItem/* default */.Z)()?.Price_Range
                            })
                        }),
                        volume && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "price-range mb-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_range_slider_input_default()), {
                                        value: volume,
                                        onInput: volumeHandler,
                                        min: priceMin,
                                        max: priceMax
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-xs text-qblack font-400",
                                    children: [
                                        (0,ServeLangItem/* default */.Z)()?.Price,
                                        ": $",
                                        volume[0],
                                        " - $",
                                        volume[1]
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "filter-subject-item pb-10 border-b border-qgray-border mt-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "subject-title mb-[30px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-black text-base font-500",
                                children: (0,ServeLangItem/* default */.Z)()?.Brands
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "filter-items",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: brands && brands.length > 0 && brands.map((brand, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "item flex justify-between items-center mb-5",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex space-x-[14px] rtl:space-x-reverse items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Checkbox, {
                                                        id: brand.name,
                                                        name: brand.id,
                                                        handleChange: (e)=>brandsHandler(e),
                                                        checked: brand.selected
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: brand.name,
                                                    className: "text-xs font-black font-400 capitalize",
                                                    children: brand.name
                                                })
                                            ]
                                        })
                                    }, i))
                            })
                        })
                    ]
                }),
                variantsFilter && variantsFilter.length && variantsFilter.map((variant, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "filter-subject-item pb-10 border-b border-qgray-border mt-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "subject-title mb-[30px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-black text-base font-500",
                                    children: variant.name
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "filter-items",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: variant && variant.active_variant_items.length > 0 && variant.active_variant_items.map((varientItem, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "item flex justify-between items-center mb-5",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex space-x-[14px] rtl:space-x-reverse items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Checkbox, {
                                                            id: varientItem.name,
                                                            name: varientItem.name,
                                                            handleChange: (e)=>varientHandler(e),
                                                            checked: varientItem.selected
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: varientItem.name,
                                                        className: "text-xs font-black font-400 capitalize",
                                                        children: varientItem.name
                                                    })
                                                ]
                                            })
                                        }, i))
                                })
                            })
                        ]
                    }, i)),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: filterToggleHandler,
                    type: "button",
                    className: "w-10 h-10 fixed top-5 right-5 z-50 rounded lg:hidden flex justify-center items-center border border-qred text-qred",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                        })
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 9305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AllProductPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5798);
/* harmony import */ var _Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8650);
/* harmony import */ var _Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(990);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4790);
/* harmony import */ var _ProductsFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8028);
/* harmony import */ var _Home_ProductAds_OneColumnAdsTwo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7849);
/* harmony import */ var _Helpers_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7039);
/* harmony import */ var _Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1311);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_5__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_8__, _Helpers_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_11__]);
([_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_5__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_8__, _Helpers_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import BreadcrumbCom from "../BreadcrumbCom";












function AllProductPage({ response , sellerInfo  }) {
    const { 0: resProducts , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: nxtPage , 1: setNxtPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: variantsFilter , 1: setVariantsFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: categoriesFilter , 1: setCategoriesFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: brands , 1: setBrands  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: cardViewStyle , 1: setCardViewStyle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("col");
    const products = resProducts && resProducts.length > 0 && resProducts.map((item)=>{
        return {
            id: item.id,
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
    const { 0: selectedVarientFilterItem , 1: setSelectedVarientFilterItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedCategoryFilterItem , 1: setSelectedCategoryFilterItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedBrandsFilterItem , 1: setSelectedBrandsFilterItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: volume , 1: setVolume  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        0,
        0
    ]);
    const volumeHandler = (value)=>{
        setVolume(value);
    };
    const varientHandler = (e)=>{
        const { name  } = e.target;
        const filterVariant = variantsFilter && variantsFilter.length > 0 && variantsFilter.map((varient)=>{
            return {
                ...varient,
                active_variant_items: varient.active_variant_items && varient.active_variant_items.length > 0 && varient.active_variant_items.map((variant_item)=>{
                    if (variant_item.name === name) {
                        return {
                            ...variant_item,
                            selected: !variant_item.selected
                        };
                    } else {
                        return {
                            ...variant_item
                        };
                    }
                })
            };
        });
        setVariantsFilter(filterVariant);
        if (selectedVarientFilterItem.includes(name)) {
            const newArr = selectedVarientFilterItem.filter((like)=>like !== name);
            setSelectedVarientFilterItem(newArr);
        } else {
            setSelectedVarientFilterItem((p)=>[
                    ...p,
                    name
                ]);
        }
    };
    const categoryHandler = (e)=>{
        const { name  } = e.target;
        const filterCat = categoriesFilter && categoriesFilter.length > 0 && categoriesFilter.map((item)=>{
            if (parseInt(item.id) === parseInt(name)) {
                return {
                    ...item,
                    selected: !item.selected
                };
            } else {
                return {
                    ...item
                };
            }
        });
        setCategoriesFilter(filterCat);
        if (selectedCategoryFilterItem.includes(name)) {
            const newArr = selectedCategoryFilterItem.filter((like)=>like !== name);
            setSelectedCategoryFilterItem(newArr);
        } else {
            setSelectedCategoryFilterItem((p)=>[
                    ...p,
                    name
                ]);
        }
    };
    const brandsHandler = (e)=>{
        const { name  } = e.target;
        const filterBrands = brands && brands.length > 0 && brands.map((item)=>{
            if (parseInt(item.id) === parseInt(name)) {
                return {
                    ...item,
                    selected: !item.selected
                };
            } else {
                return {
                    ...item
                };
            }
        });
        setBrands(filterBrands);
        if (selectedBrandsFilterItem.includes(name)) {
            const newArr = selectedBrandsFilterItem.filter((like)=>like !== name);
            setSelectedBrandsFilterItem(newArr);
        } else {
            setSelectedBrandsFilterItem((p)=>[
                    ...p,
                    name
                ]);
        }
    };
    const { 0: filterToggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setProducts(response.data && response.data.products.data);
        setNxtPage(response.data && response.data.products.next_page_url);
        setCategoriesFilter(response.data && response.data.categories.length > 0 && response.data.categories.map((item)=>{
            return {
                ...item,
                selected: false
            };
        }));
        setVariantsFilter(response.data && response.data.activeVariants.length > 0 && response.data.activeVariants.map((varient)=>{
            return {
                ...varient,
                active_variant_items: varient.active_variant_items && varient.active_variant_items.length > 0 && varient.active_variant_items.map((variant_item)=>{
                    return {
                        ...variant_item,
                        selected: false
                    };
                })
            };
        }));
        setBrands(response.data && response.data.brands.length > 0 && response.data.brands.map((item)=>{
            return {
                ...item,
                selected: false
            };
        }));
        const min = response.data && response.data.products.data && Math.min(...response.data.products.data.map((item)=>parseInt(item.price)));
        const max = response.data && response.data.products.data && Math.max(...response.data.products.data.map((item)=>parseInt(item.price)));
        const volumeArr = [
            min,
            max
        ];
        setVolume(volumeArr);
    }, [
        response.data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (response.data) {
            const min = response.data && Math.min(...response.data.products.data.map((item)=>parseInt(item.price)));
            const max = response.data && Math.max(...response.data.products.data.map((item)=>parseInt(item.price)));
            const check = selectedVarientFilterItem.length > 0 || selectedCategoryFilterItem.length > 0 || selectedBrandsFilterItem.length > 0 || volume[0] && volume[0] !== min || volume[1] && volume[1] !== max;
            if (check) {
                const brandsQuery = selectedBrandsFilterItem.length > 0 ? selectedBrandsFilterItem.map((value)=>{
                    return `brands[]=${value}`;
                }) : [];
                const brandString = brandsQuery.length > 0 ? brandsQuery.map((value)=>value + "&").join("") : "";
                const categoryQuery = selectedCategoryFilterItem.length > 0 ? selectedCategoryFilterItem.map((value)=>{
                    return `categories[]=${value}`;
                }) : [];
                const categoryString = categoryQuery.length > 0 ? categoryQuery.map((value)=>value + "&").join("") : "";
                const variantQuery = selectedVarientFilterItem.length > 0 ? selectedVarientFilterItem.map((value)=>{
                    return `variantItems[]=${value}`;
                }) : [];
                const variantString = variantQuery.length > 0 ? variantQuery.map((value)=>value + "&").join("") : "";
                axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"https://jaralayoun.com/srv/"}api/search-product?${brandString && brandString}${categoryString && categoryString}${variantString && variantString}min_price=${volume[0]}&max_price=${volume[1]}${sellerInfo ? `&shop_name=${sellerInfo.seller.slug}` : ""}`).then((res)=>{
                    res.data && res.data.products.data.length > 0 ? setProducts(res.data.products.data) : setProducts(response.data.products.data);
                }).catch((err)=>{
                    console.log(err);
                });
            } else {
                setProducts(response.data.products.data);
            }
        } else {
            return false;
        }
    }, [
        selectedVarientFilterItem,
        selectedCategoryFilterItem,
        selectedBrandsFilterItem,
        volume,
        response.data, 
    ]);
    // const shopStatus = (startTime, endTime) => {
    //   const openTime = startTime;
    //   const closeTime = endTime;
    //   const getOpen = openTime.split(":");
    //   const getClose = closeTime.split(":");
    //   const opening = new Date();
    //   opening.setHours(getOpen[0], getOpen[1]);
    //   const getOpeningTime = opening.getTime();
    //   const closing = new Date();
    //   closing.setHours(getClose[0], getClose[1]);
    //   const getClosingTimg = closing.getTime();
    //   const currentTime = new Date().getTime();
    //   if (getOpeningTime < currentTime && getClosingTimg > currentTime) {
    //     return "Store Open";
    //   } else {
    //     return "Store Close";
    //   }
    // };
    const nextPageHandler = async ()=>{
        setLoading(true);
        if (nxtPage) {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${nxtPage}`).then((res)=>{
                setLoading(false);
                if (res.data) {
                    if (res.data.products.data.length > 0) {
                        res.data.products.data.map((item)=>{
                            setProducts((prev)=>[
                                    ...prev,
                                    item
                                ]);
                        });
                        setNxtPage(res.data.products.next_page_url);
                    }
                }
                // res.data && res.data.products.data.length > 0;
                // setNxtPage(response.data && response.data.products.next_page_url);
                console.log(res);
            }).catch((err)=>{
                setLoading(false);
                console.log(err);
            });
        } else if (nxtPage === "null") {
            setLoading(false);
            return false;
        } else {
            setLoading(false);
            return false;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "products-page-wrapper w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-x mx-auto",
                    children: [
                        sellerInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-aos": "fade-right",
                            className: "saller-info w-full mb-[40px] sm:h-[328px] sm:flex justify-between items-center px-11 overflow-hidden relative py-10 sm:py-0",
                            style: {
                                background: `url(/assets/images/saller-cover.png) no-repeat`,
                                backgroundSize: "cover"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "saller-text-details w-72",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "text-black flex space-x-5 rtl:space-x-reverse items-center leading-9 text-base font-normal",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "16",
                                                            height: "12",
                                                            viewBox: "0 0 16 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z",
                                                                    fill: "black"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z",
                                                                    fill: "black"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: sellerInfo.seller.email
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "text-black flex space-x-5 rtl:space-x-reverse items-center leading-9 text-base font-normal",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "15",
                                                            height: "14",
                                                            viewBox: "0 0 15 14",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z",
                                                                fill: "black"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: sellerInfo.seller.phone
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "text-black flex space-x-5 rtl:space-x-reverse items-center leading-9 text-base font-normal",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "14",
                                                            height: "19",
                                                            viewBox: "0 0 14 19",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z",
                                                                fill: "black"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: sellerInfo.seller.address
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "saller-name lg:block hidden",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-[60px] font-bold",
                                            children: sellerInfo.seller.shop_name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-center",
                                            children: [
                                                Array.from(Array(parseInt(sellerInfo.seller.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                                    }, parseInt(sellerInfo.seller.averageRating) + Math.random())),
                                                parseInt(sellerInfo.seller.averageRating) < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: Array.from(Array(5 - parseInt(sellerInfo.seller.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-gray-500",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                width: "18",
                                                                height: "17",
                                                                viewBox: "0 0 18 17",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "fill-current",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                                                                })
                                                            })
                                                        }, parseInt(sellerInfo.seller.averageRating) + Math.random()))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "saller-logo mt-5 sm:mt-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex sm:justify-center justify-start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[170px] h-[170px] flex justify-center items-center rounded-full bg-white relative mb-1 overflow-hidden",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    layout: "fill",
                                                    objectFit: "scale-down",
                                                    src: `${"https://jaralayoun.com/srv/" + sellerInfo.seller.logo}`,
                                                    alt: "logo",
                                                    className: "object-contain"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex sm:justify-center justify-start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-[30px] font-medium text-center",
                                                children: sellerInfo.seller.shop_name
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full lg:flex lg:space-x-[30px] rtl:space-x-reverse",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "lg:w-[270px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductsFilter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            filterToggle: filterToggle,
                                            filterToggleHandler: ()=>setToggle(!filterToggle),
                                            categories: categoriesFilter,
                                            brands: brands,
                                            varientHandler: varientHandler,
                                            categoryHandler: categoryHandler,
                                            brandsHandler: brandsHandler,
                                            volume: volume,
                                            priceMax: response.data && Math.max(...response.data.products.data.map((item)=>parseInt(item.price))),
                                            priceMin: response.data && Math.min(...response.data.products.data.map((item)=>parseInt(item.price))),
                                            volumeHandler: (value)=>volumeHandler(value),
                                            className: "mb-[30px]",
                                            variantsFilter: variantsFilter
                                        }),
                                        response.data && response.data.shopPageSidebarBanner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                backgroundImage: `url(${"https://jaralayoun.com/srv/" + response.data.shopPageSidebarBanner.image})`,
                                                backgroundSize: `cover`,
                                                backgroundRepeat: `no-repeat`
                                            },
                                            className: "w-full hidden py-[35px] ltr:pl-[40px] rtl:pr-[40px] group lg:block h-[295px] relative",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col justify-between w-full h-full",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mb-[10px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-qblack uppercase text-xs font-semibold",
                                                                    children: response.data.shopPageSidebarBanner.title_one
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mb-[30px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "w-[162px] text-[24px] leading-[40px] text-qblack font-semibold",
                                                                    children: response.data.shopPageSidebarBanner.title_two
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[90px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: {
                                                                pathname: "/products",
                                                                query: {
                                                                    category: response.data.shopPageSidebarBanner.product_slug
                                                                }
                                                            },
                                                            passhref: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "cursor-pointer w-full relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "inline-flex space-x-1.5 rtl:space-x-reverse items-center relative z-20",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-sm text-qblack font-medium leading-[30px]",
                                                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)()?.Shop_Now
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
                                                                            className: "w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[2px] primary-bg absolute ltr:left-0 rtl:right-0 bottom-0 z-10"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-1",
                                    children: response.data && response.data.products.data.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "font-400 text-[13px]",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "text-qgray",
                                                                    children: [
                                                                        " ",
                                                                        (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)()?.Showing
                                                                    ]
                                                                }),
                                                                " ",
                                                                "1\u2013",
                                                                response.data.products.data.length,
                                                                " ",
                                                                (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)()?.of,
                                                                " ",
                                                                response.data.products.total,
                                                                " ",
                                                                (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)()?.results
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex space-x-3 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "font-bold text-qblack text-[13px]",
                                                                children: [
                                                                    (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)()?.View_by,
                                                                    " :"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>setCardViewStyle("col"),
                                                                type: "button",
                                                                className: `hover:text-qgreen w-6 h-6 ${cardViewStyle === "col" ? "text-qgreen" : "text-qgray"}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "fill-current",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            fill: "none",
                                                                            d: "M0 0h24v24H0z"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M11 5H5v14h6V5zm2 0v14h6V5h-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>setCardViewStyle("row"),
                                                                type: "button",
                                                                className: `hover:text-qgreen w-6 h-6 ${cardViewStyle === "row" ? "text-qgreen" : "text-qgray"}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "fill-current",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            fill: "none",
                                                                            d: "M0 0h24v24H0z"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M19 11V5H5v6h14zm0 2H5v6h14v-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>setToggle(!filterToggle),
                                                        type: "button",
                                                        className: "w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow primary-text",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-6 w-6",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            products && cardViewStyle === "col" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    datas: products && products,
                                                    startLength: 0,
                                                    endLength: products && products.length >= 6 ? 6 : products && products.length,
                                                    children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            "data-aos": "fade-up",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                datas: datas
                                                            })
                                                        }, datas.id)
                                                })
                                            }),
                                            products && cardViewStyle === "row" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid lg:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    datas: products && products,
                                                    startLength: 0,
                                                    endLength: products && products.length >= 6 ? 6 : products && products.length,
                                                    children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            "data-aos": "fade-up",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                datas: datas
                                                            })
                                                        }, datas.id)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full relative text-qblack mb-[40px]",
                                                children: response.data && response.data.shopPageCenterBanner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Home_ProductAds_OneColumnAdsTwo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    data: response.data.shopPageCenterBanner
                                                })
                                            }),
                                            products && cardViewStyle === "col" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    datas: products && products,
                                                    startLength: 6,
                                                    endLength: products && products.length >= 14 ? 14 : products && products.length,
                                                    children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            "data-aos": "fade-up",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                datas: datas
                                                            })
                                                        }, datas.id)
                                                })
                                            }),
                                            products && cardViewStyle === "row" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid lg:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    datas: products && products,
                                                    startLength: 0,
                                                    endLength: products && products.length >= 6 ? 6 : products && products.length,
                                                    children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            "data-aos": "fade-up",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                datas: datas
                                                            })
                                                        }, datas.id)
                                                })
                                            }),
                                            nxtPage && nxtPage !== "null" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: nextPageHandler,
                                                    type: "button",
                                                    className: "w-[180px] h-[54px] primary-bg rounded mt-10",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-center w-full h-full items-center group rounded relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center transition-all duration-300 ease-in-out relative z-10 text-white hover:text-white",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-sm font-600 tracking-wide leading-7 mr-2",
                                                                        children: [
                                                                            (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)()?.Show_more,
                                                                            "..."
                                                                        ]
                                                                    }),
                                                                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "w-5 ",
                                                                        style: {
                                                                            transform: "scale(0.3)"
                                                                        },
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                style: {
                                                                    transition: `transform 0.25s ease-in-out`
                                                                },
                                                                className: "w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-5 flex justify-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-2xl font-medium text-tblack",
                                            children: "Products not available"
                                        })
                                    })
                                })
                            ]
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

/***/ 1311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoaderStyleOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function LoaderStyleOne() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lds-spinner",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
            ]
        })
    });
};


/***/ })

};
;