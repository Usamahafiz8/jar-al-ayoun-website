"use strict";
exports.id = 9971;
exports.ids = [9971];
exports.modules = {

/***/ 9971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Blogs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_Cards_BlogCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2058);
/* harmony import */ var _Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8650);
/* harmony import */ var _Helpers_PageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8146);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4790);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1311);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Partials_Layout__WEBPACK_IMPORTED_MODULE_4__]);
_Partials_Layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Blogs({ blogs , nextPageUrl  }) {
    const { 0: getBlogs , 1: setGetBlogs  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { 0: nxtPage , 1: setNxtPage  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(nextPageUrl);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (getBlogs.length === 0) {
            const rs = blogs.map((item)=>{
                return {
                    id: item.id,
                    by: item.admin_id,
                    comments_length: item.active_comments.length,
                    title: item.title,
                    article: item.description,
                    picture: "https://jaralayoun.com/srv/" + item.image,
                    slug: item.slug
                };
            });
            setGetBlogs(rs);
        }
    }, [
        blogs,
        getBlogs
    ]);
    const nextPageHandler = async ()=>{
        setLoading(true);
        if (nxtPage) {
            await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${nxtPage}`).then((res)=>{
                console.log(res);
                setLoading(false);
                if (res.data) {
                    if (res.data.blogs) {
                        res.data.blogs.data.map((item)=>{
                            setGetBlogs((prev)=>[
                                    ...prev,
                                    {
                                        id: item.id,
                                        by: item.admin_id,
                                        comments_length: item.active_comments.length,
                                        title: item.title,
                                        article: item.description,
                                        picture: "https://jaralayoun.com/srv/" + item.image,
                                        slug: item.slug
                                    }, 
                                ]);
                        });
                        setNxtPage(res.data.blogs.next_page_url);
                    }
                }
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
    //   const rs = blogs.map((item) => {
    //   return {
    //     id: item.id,
    //     by: item.admin_id,
    //     comments_length: item.active_comments.length,
    //     title: item.title,
    //     article: item.description,
    //     picture: process.env.NEXT_PUBLIC_BASE_URL + item.image,
    //     slug: item.slug,
    //   };
    // });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Partials_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        childrenClasses: "pt-0 pb-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "blogs-wrapper w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title-bar",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_PageTitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: "Blogs",
                        breadcrumb: [
                            {
                                name: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.home,
                                path: "/"
                            },
                            {
                                name: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.blogs,
                                path: "/blogs"
                            }, 
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full pt-[60px] bg-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-x mx-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full",
                        children: getBlogs && getBlogs.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5 ${nextPageUrl ? "pb-[60px]" : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        datas: getBlogs,
                                        startLength: 0,
                                        endLength: getBlogs.length,
                                        children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                "data-aos": "fade-up",
                                                className: "item w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_BlogCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    datas: datas
                                                })
                                            }, datas.id)
                                    })
                                }),
                                nxtPage && nxtPage !== "null" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center pb-[60px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: nextPageHandler,
                                        type: "button",
                                        className: "w-[180px] h-[54px] primary-bg rounded mt-10",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-center w-full h-full items-center group rounded relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center transition-all duration-300 ease-in-out relative z-10 text-qblack",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "text-sm font-600 tracking-wide leading-7 mr-2",
                                                            children: [
                                                                (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Show_more,
                                                                "..."
                                                            ]
                                                        }),
                                                        loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "w-5 ",
                                                            style: {
                                                                transform: "scale(0.3)"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
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
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-lg font-medium tracking-wide",
                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)()?.Blog_Not_Found
                                })
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