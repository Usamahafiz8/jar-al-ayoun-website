"use strict";
(() => {
var exports = {};
exports.id = 1491;
exports.ids = [1491];
exports.modules = {

/***/ 8207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4987);
/* harmony import */ var _src_components_SingleProductPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3841);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_SingleProductPage__WEBPACK_IMPORTED_MODULE_4__]);
_src_components_SingleProductPage__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SingleProduct = ({ data  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (router && !router.query.slug) {
            router.push("*");
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: `${data.product && data.product.seo_title}`,
                metaDes: data.product && data.product.seo_description
            }),
            router.query.slug && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_SingleProductPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                details: data
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const res = await fetch(`${"https://jaralayoun.com/srv/"}api/product/${context.query.slug}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

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


/***/ }),

/***/ 2545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Reviews)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(990);



// import InputCom from "../Helpers/InputCom";
// import LoaderStyleOne from "../Helpers/Loaders/LoaderStyleOne";
// import StarRating from "../Helpers/StarRating";
function Reviews({ comments  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "review-wrapper w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full reviews mb-[60px]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full comments mb-[60px]",
                children: comments && comments.length > 0 && comments.map((comment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "comment-item bg-white px-10 py-[32px] mb-2.5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "comment-author flex justify-between items-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-3 items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[50px] h-[50px] rounded-full overflow-hidden relative",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    layout: "fill",
                                                    src: comment.image ? comment.image : `/assets/images/comment-user-1.png`,
                                                    alt: "",
                                                    className: "w-full h-full object-cover"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[18px] font-medium text-qblack",
                                                    children: comment.author
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                    Array.from(Array(comment.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                                        }, comment.review + Math.random())),
                                                    comment.review < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: Array.from(Array(5 - comment.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-gray-500",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                    defaultValue: false
                                                                })
                                                            }, comment.review + Math.random()))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-[13px] font-normal text-qblack mt-1 inline-block",
                                                children: [
                                                    "(",
                                                    comment.review,
                                                    ".0)"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "comment mb-[30px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[15px] text-qgray leading-7 text-normal",
                                    children: comment.comments
                                })
                            }),
                            comment.replys && comment.replys.length > 0 && comment.replys.map((reply)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sub-comment-item bg-white px-10 pt-[32px] border-t",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "comment-author mb-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex space-x-3 items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[50px] h-[50px] rounded-full overflow-hidden relative",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            layout: "fill",
                                                            src: `/assets/images/comment-user-2.png`,
                                                            alt: "",
                                                            className: "w-full h-full object-cover"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[18px] font-medium text-qblack",
                                                            children: reply.author
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "comment mb-[30px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-[15px] text-qgray leading-7 text-normal",
                                                children: reply.comments
                                            })
                                        })
                                    ]
                                }, reply.id))
                        ]
                    }, comment.id))
            })
        })
    });
};


/***/ }),

/***/ 1267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SallerInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5798);
/* harmony import */ var _Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8650);
/* harmony import */ var _Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(990);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_2__]);
_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function SallerInfo({ products , sellerInfo  }) {
    const { seller  } = sellerInfo;
    const rs = products.length > 0 && products.map((item)=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "saller-info-wrapper w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "saller-info sm:flex justify-between items-center pb-[30px] border-b border-[#E8E8E8]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:flex sm:space-x-5 items-center sm:w-1/4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "saller w-[73px] h-[73px] rounded-full overflow-hidden relative",
                                children: seller.user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    layout: "fill",
                                    src: `${seller.user.image ? "https://jaralayoun.com/srv/" + seller.user.image : "/assets/images/Group.png"}`,
                                    alt: "saller",
                                    className: "w-full h-full object-cover"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "text-[18px] font-medium leading-[30px]",
                                        children: seller.user.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[13px] font-normal text-qgray leading-[30px]",
                                        children: seller.address
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center mt-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                    Array.from(Array(parseInt(seller.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                                        }, parseInt(seller.averageRating) + Math.random())),
                                                    parseInt(seller.averageRating) < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: Array.from(Array(5 - parseInt(seller.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-gray-500",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                    defaultValue: false
                                                                })
                                                            }, parseInt(seller.averageRating) + Math.random()))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-[13px] font-normal ml-1 leading-none",
                                                children: [
                                                    "(",
                                                    parseInt(seller.averageRating),
                                                    ")"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 w-full sm:flex sm:space-x-5 justify-between sm:ml-[60px] mt-5 sm:mt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full mb-5 sm:mb-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-qgray leading-[30px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[15px] text-qblack font-medium capitalize",
                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)()?.products
                                                }),
                                                ": ",
                                                seller.sellerTotalProducts
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-qgray leading-[30px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[15px] text-qblack font-medium capitalize",
                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)()?.Shop_Name
                                                }),
                                                ": ",
                                                seller.shop_name
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-qgray leading-[30px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[15px] text-qblack font-medium capitalize",
                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)()?.phone
                                                }),
                                                ": ",
                                                seller.phone
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "saller-product w-full mt-[30px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-[18px] font-medium mb-5",
                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)()?.Product_from_Shop
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            datas: rs,
                            startLength: 0,
                            endLength: rs.length > 4 ? 4 : rs.length,
                            children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        datas: datas
                                    })
                                }, datas.id)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[40px] w-full flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: {
                        pathname: "/seller-products",
                        query: {
                            seller: seller.slug
                        }
                    },
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:w-[300px] w-full h-[50px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-full yellow-btn text-qblack font-semibold",
                                style: {
                                    fontSize: "16px"
                                },
                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)()?.View_Shop
                            })
                        })
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SingleProductPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9808);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5564);
/* harmony import */ var _BreadcrumbCom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1546);
/* harmony import */ var _Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5798);
/* harmony import */ var _Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8650);
/* harmony import */ var _Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7528);
/* harmony import */ var _Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1311);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4790);
/* harmony import */ var _Shared_Multivendor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9732);
/* harmony import */ var _ProductView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5827);
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2545);
/* harmony import */ var _SallerInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1267);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_6__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_10__, _ProductView__WEBPACK_IMPORTED_MODULE_12__, _SallerInfo__WEBPACK_IMPORTED_MODULE_14__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_6__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_10__, _ProductView__WEBPACK_IMPORTED_MODULE_12__, _SallerInfo__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function SingleProductPage({ details  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("des");
    const reviewElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: report , 1: setReport  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const ReportHandler = ()=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)()) {
            setReport(!report);
        } else {
            router.push("/login");
        }
    };
    const { 0: reportLoading , 1: setReportLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    //report state
    const { 0: subject , 1: setSubject  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: reportErrors , 1: setReportErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: commnets , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!commnets) {
            const reviews = details && details.productReviews.length > 0 && details.productReviews.map((review)=>{
                return {
                    id: review.id,
                    author: review.user.name,
                    comments: review.review,
                    review: parseInt(review.rating),
                    replys: null,
                    image: review.user.image ? "https://jaralayoun.com/srv/" + review.user.image : null
                };
            });
            setComments(reviews);
        }
    }, [
        commnets
    ]);
    const sellerInfo = details.seller ? {
        seller: {
            ...details.seller,
            sellerTotalProducts: parseInt(details.sellerTotalProducts),
            sellerTotalReview: parseInt(details.sellerTotalReview)
        }
    } : null;
    const relatedProducts = details.relatedProducts.map((item)=>{
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
    /*product report action method
   * @params (token)
   * if user exists then next process otherwise redirect login page
   * submit request using post method*/ const productReport = async (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)()) {
            setReportLoading(true);
            await _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__/* ["default"].reportProduct */ .Z.reportProduct({
                subject: subject,
                description: description,
                product_id: id
            }, (0,_utils_auth__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)().access_token).then((res)=>{
                setReportLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(res.data && res.data.message);
                setSubject("");
                setDescription("");
                setReport(!report);
            }).catch((err)=>{
                setReportLoading(false);
                console.log(err);
                setReportErrors(err.response && err.response.data.errors);
            });
        } else {
            router.push("/");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            childrenClasses: "pt-0 pb-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "single-product-wrapper w-full ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-view-main-wrapper bg-white pt-[30px] w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "breadcrumb-wrapper w-full ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "container-x mx-auto",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BreadcrumbCom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                paths: [
                                                    {
                                                        name: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.home,
                                                        path: "/"
                                                    },
                                                    {
                                                        name: details.product.slug,
                                                        path: `/single-product?slug=${details.product.slug}`
                                                    }, 
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full bg-white pb-[60px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "container-x mx-auto",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductView__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                product: details.product,
                                                images: details.gellery,
                                                reportHandler: ReportHandler,
                                                seller: details.seller ? details.seller : false
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-des-wrapper w-full relative pb-[60px]",
                                ref: reviewElement,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "tab-buttons w-full mb-10 mt-5 sm:mt-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "container-x mx-auto",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "flex space-x-12 ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: ()=>setTab("des"),
                                                                className: `py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === "des" ? "border-qyellow text-qblack " : "border-transparent text-qgray"}`,
                                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Description
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: ()=>setTab("review"),
                                                                className: `py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === "review" ? "border-qyellow text-qblack " : "border-transparent text-qgray"}`,
                                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Reviews
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "tab-contents w-full ",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "container-x mx-auto",
                                            children: [
                                                tab === "des" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "text-[20px] font-bold text-qblack mb-5",
                                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Introduction
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "product-detail-des mb-10",
                                                            dangerouslySetInnerHTML: {
                                                                __html: details.product.long_description
                                                            }
                                                        }),
                                                        details.specifications && details.specifications.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "product-specifications",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                                    className: "text-[20px] font-bold mb-4",
                                                                    children: [
                                                                        (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Features,
                                                                        " :"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "",
                                                                    children: details.specifications.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: " leading-9 flex space-x-3 items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    className: "text-qblack font-medium capitalize",
                                                                                    children: [
                                                                                        " ",
                                                                                        item.key.key,
                                                                                        ":"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "font-normal text-qgray",
                                                                                    children: item.specification
                                                                                })
                                                                            ]
                                                                        }, i))
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                tab === "review" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    "data-aos": "fade-up",
                                                    className: "w-full tab-content-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "text-[20px] font-bold text-qblack mb-2",
                                                            children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Reviews
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-full",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Reviews__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                comments: commnets.length > 0 && commnets.slice(0, 2)
                                                            })
                                                        })
                                                    ]
                                                }),
                                                tab === "info" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    "data-aos": "fade-up",
                                                    className: "w-full tab-content-item",
                                                    children: details.seller && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SallerInfo__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        sellerInfo: sellerInfo,
                                                        products: details.this_seller_products.length > 0 && details.this_seller_products.slice(0, details.this_seller_products.length > 8 ? 8 : details.this_seller_products.length)
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            relatedProducts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "related-product w-full bg-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container-x mx-auto",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full py-[60px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "sm:text-3xl text-xl font-600 text-qblacktext leading-none mb-[30px]",
                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Related_Product
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                "data-aos": "fade-up",
                                                className: "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    datas: relatedProducts,
                                                    startLength: 0,
                                                    endLength: relatedProducts.length > 4 ? 4 : relatedProducts.length,
                                                    children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "item",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                datas: datas
                                                            })
                                                        }, datas.id)
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    report && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setReport(!report),
                                className: "w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "sm:w-[548px] w-full bg-white relative py-[40px] px-[38px]",
                                style: {
                                    zIndex: "999"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title-bar flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "text-2xl font-medium",
                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Report_Products
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "cursor-pointer",
                                                onClick: ()=>setReport(!report),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "54",
                                                    height: "54",
                                                    viewBox: "0 0 54 54",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M26.9399 54.0001C12.0678 53.9832 -0.0210736 41.827 2.75822e-05 26.9125C0.0211287 12.0507 12.1965 -0.0315946 27.115 6.20658e-05C41.9703 0.0317188 54.0401 12.2153 54 27.1404C53.9599 41.9452 41.7972 54.0191 26.9399 54.0001ZM18.8476 16.4088C17.6765 16.4404 16.9844 16.871 16.6151 17.7194C16.1952 18.6881 16.3893 19.5745 17.1363 20.3258C19.0966 22.2906 21.0252 24.2913 23.0425 26.197C23.7599 26.8745 23.6397 27.2206 23.0045 27.8305C21.078 29.6793 19.2148 31.5956 17.3241 33.4802C16.9211 33.8812 16.5581 34.3012 16.4505 34.8857C16.269 35.884 16.6953 36.8337 17.5456 37.3106C18.4382 37.8129 19.5038 37.6631 20.3394 36.8421C22.3673 34.8435 24.3866 32.8365 26.3723 30.7999C26.8513 30.3082 27.1298 30.2871 27.6193 30.7915C29.529 32.7584 31.4851 34.6789 33.4201 36.6184C33.8463 37.0447 34.2831 37.4436 34.9098 37.5491C35.9184 37.7201 36.849 37.2895 37.3196 36.4264C37.7964 35.5548 37.6677 34.508 36.8912 33.7144C34.9731 31.756 33.0677 29.7806 31.0631 27.9149C30.238 27.1467 30.3688 26.7479 31.1031 26.0535C32.9896 24.266 34.8022 22.3982 36.6338 20.5516C37.7922 19.3845 37.8914 17.9832 36.9081 17.0293C35.9501 16.1007 34.5975 16.2146 33.4623 17.3416C31.5188 19.2748 29.5649 21.1995 27.6594 23.1664C27.1446 23.6983 26.8492 23.6962 26.3343 23.1664C24.4267 21.1974 22.4664 19.2811 20.5336 17.3374C19.9997 16.7971 19.4258 16.3666 18.8476 16.4088Z",
                                                        fill: "#F34336"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "inputs w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-full mb-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        label: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Enter_Report_Ttile + "*",
                                                        placeholder: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Reports_Headline_here,
                                                        type: "text",
                                                        name: "name",
                                                        inputClasses: "h-[50px]",
                                                        labelClasses: "text-[13px] font-600 leading-[24px] text-qblack",
                                                        value: subject,
                                                        inputHandler: (e)=>setSubject(e.target.value),
                                                        error: !!(reportErrors && Object.hasOwn(reportErrors, "subject"))
                                                    }),
                                                    reportErrors && Object.hasOwn(reportErrors, "subject") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm mt-1 text-qred",
                                                        children: reportErrors.subject[0]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-full mb-[40px]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                        className: "input-label capitalize text-[13px] font-600 leading-[24px] text-qblack block mb-2 ",
                                                        children: [
                                                            (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Enter_Report_Note,
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        name: "",
                                                        id: "",
                                                        cols: "30",
                                                        rows: "6",
                                                        className: `w-full focus:ring-0 focus:outline-none py-3 px-4 border  placeholder:text-sm text-sm ${reportErrors ? "border-qred" : "border-qgray-border"}`,
                                                        placeholder: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Type_Here,
                                                        value: description,
                                                        onChange: (e)=>setDescription(e.target.value)
                                                    }),
                                                    reportErrors && Object.hasOwn(reportErrors, "description") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm mt-1 text-qred",
                                                        children: reportErrors.description[0]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>productReport(details.product.id),
                                                type: "button",
                                                className: "black-btn flex h-[50px] items-center justify-center w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)()?.Submit_Report
                                                    }),
                                                    reportLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "w-5 ",
                                                        style: {
                                                            transform: "scale(0.3)"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                                    })
                                                ]
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
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,4994,9808,570,4790,1546,7528,990,16,1839,8995], () => (__webpack_exec__(8207)));
module.exports = __webpack_exports__;

})();