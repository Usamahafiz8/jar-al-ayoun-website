"use strict";
(() => {
var exports = {};
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 2634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ faqPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Faq_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(330);
/* harmony import */ var _src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Faq_index__WEBPACK_IMPORTED_MODULE_2__]);
_src_components_Faq_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function faqPage({ data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "shopo | FAQ"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Faq_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                datas: data
            })
        ]
    });
};
async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${"https://jaralayoun.com/srv/"}api/faq`);
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

/***/ 330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Faq)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9808);
/* harmony import */ var _Helpers_Accodion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9853);
/* harmony import */ var _Helpers_InputCom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7528);
/* harmony import */ var _Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1311);
/* harmony import */ var _Helpers_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8146);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6681);
/* harmony import */ var _Helpers_icons_Curvelive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8699);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_9__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Faq({ datas  }) {
    const { faqs  } = datas;
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: subject , 1: setSubject  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const sendHandler = ()=>{
        setLoading(true);
        _utils_apiRequest__WEBPACK_IMPORTED_MODULE_3__/* ["default"].contact */ .Z.contact({
            name: name,
            email: email,
            subject: subject,
            message: message
        }).then((res)=>{
            setLoading(false);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(res && res.data.notification);
        }).catch((err)=>{
            setLoading(false);
            console.error(err);
            setErrors(err.response.data.errors);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Partials_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        childrenClasses: "pt-0 pb-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "faq-page-wrapper w-full mb-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "page-title w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_PageTitle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        title: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Frequently_asked_questions,
                        breadcrumb: [
                            {
                                name: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.home,
                                path: "/"
                            },
                            {
                                name: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.FAQ,
                                path: "/faq"
                            }, 
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "contact-wrapper w-full mb-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-x mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "main-wrapper w-full lg:flex lg:space-x-[30px] rtl:space-x-reverse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:w-1/2 w-full mb-10 lg:mb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-qblack font-bold text-[22px] mb-4",
                                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Frequently_asked_questions
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-col space-y-7 justify-between",
                                        children: faqs.map((faq)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Accodion__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                title: faq.question,
                                                des: faq.answer
                                            }, faq.id))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-white sm:p-10 p-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "title flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "lg:text-[34px] text-xl font-bold text-qblack",
                                                    children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Have_Any_Qustion
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Curvelive__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inputs mt-5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            label: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Name + "*",
                                                            placeholder: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Name,
                                                            name: "first_name",
                                                            inputClasses: "h-[50px]",
                                                            value: name,
                                                            inputHandler: (e)=>setName(e.target.value),
                                                            error: !!(errors && Object.hasOwn(errors, "name"))
                                                        }),
                                                        errors && Object.hasOwn(errors, "name") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm mt-1 text-qred",
                                                            children: errors.name[0]
                                                        }) : ""
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            label: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Email_Address + "*",
                                                            placeholder: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Email_Address,
                                                            name: "email",
                                                            inputClasses: "h-[50px]",
                                                            value: email,
                                                            inputHandler: (e)=>setEmail(e.target.value),
                                                            error: !!(errors && Object.hasOwn(errors, "email"))
                                                        }),
                                                        errors && Object.hasOwn(errors, "email") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm mt-1 text-qred",
                                                            children: errors.email[0]
                                                        }) : ""
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            label: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Subject + "*",
                                                            placeholder: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Subject,
                                                            name: "subject",
                                                            inputClasses: "h-[50px]",
                                                            value: subject,
                                                            error: !!(errors && Object.hasOwn(errors, "subject")),
                                                            inputHandler: (e)=>setSubject(e.target.value)
                                                        }),
                                                        errors && Object.hasOwn(errors, "subject") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm mt-1 text-qred",
                                                            children: errors.subject[0]
                                                        }) : ""
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-5",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                            className: "input-label text-qgray capitalize text-[13px] font-normal block mb-2 ",
                                                            children: [
                                                                (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Message,
                                                                "*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            value: message,
                                                            onChange: (e)=>setMessage(e.target.value),
                                                            placeholder: "Type your message here",
                                                            className: ` w-full h-[105px] focus:ring-0 focus:outline-none p-3 border placeholder:text-sm ${!!(errors && Object.hasOwn(errors, "message")) ? "border-qred" : "border-qgray-border"}`
                                                        }),
                                                        errors && Object.hasOwn(errors, "message") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm mt-1 text-qred",
                                                            children: errors.message[0]
                                                        }) : ""
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        disabled: name && email && subject && message ? false : true,
                                                        onClick: sendHandler,
                                                        type: "button",
                                                        className: "disabled:bg-gray-400 disabled:cursor-not-allowed bg-qblack text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()?.Send_Now
                                                            }),
                                                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "w-5",
                                                                style: {
                                                                    transform: "scale(0.3)"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Accodion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Accodion({ init , title , des  }) {
    const { 0: collaps , 1: setCollaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(init || false);
    const handler = ()=>{
        setCollaps(!collaps);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `accordion-item w-full bg-white overflow-hidden ${collaps ? "primary-bg" : "bg-white"}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: handler,
                type: "button",
                className: `w-full h-[60px]  flex justify-between items-center px-5 ${collaps ? "text-white" : "text-qblack"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sm:text-base text-sm font-semibold text-start capitalize",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-[#9A9A9A]",
                        children: collaps ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            width: "20",
                            height: "4",
                            viewBox: "0 0 20 4",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M19.9798 2.27979C19.8586 2.56995 19.7575 2.90155 19.5959 3.17098C19.212 3.73057 18.6665 3.97927 17.9998 4C17.9593 4 17.9189 4 17.8785 4C12.6051 4 7.33175 4 2.05836 4C1.51284 4 1.02793 3.85492 0.603634 3.48187C-0.204548 2.71503 -0.204548 1.26425 0.623839 0.518135C1.02793 0.165803 1.47243 0 1.99775 0C7.33175 0 12.6455 0 17.9795 0C18.9898 0 19.7373 0.621762 19.9596 1.63731C19.9596 1.65803 19.9798 1.67876 20 1.69948C19.9798 1.88601 19.9798 2.07254 19.9798 2.27979Z",
                                fill: "#ffffff"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            width: "21",
                            height: "20",
                            viewBox: "0 0 21 20",
                            className: "fill-current",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M20.9974 10.2344C20.9974 10.0781 20.9974 9.92188 20.9974 9.76562C20.987 9.75 20.9766 9.72917 20.9714 9.71354C20.7109 8.71354 20.1068 8.24479 19.0755 8.24479C17.0495 8.24479 15.0287 8.24479 13.0026 8.24479C12.9245 8.24479 12.8516 8.24479 12.7526 8.24479C12.7526 8.15104 12.7526 8.07292 12.7526 7.99479C12.7526 5.93229 12.7526 3.86979 12.7526 1.80208C12.7526 1.01042 12.2995 0.354168 11.5807 0.104168C11.4662 0.0625019 11.3464 0.036459 11.2266 0C11.0703 0 10.9141 0 10.7578 0C10.7474 0.00520897 10.737 0.015625 10.7266 0.020834C9.70052 0.291668 9.23698 0.885418 9.23698 1.94271C9.23698 3.95833 9.23698 5.97917 9.23698 7.99479C9.23698 8.07292 9.23698 8.14583 9.23698 8.24479C9.14323 8.24479 9.06511 8.24479 8.98698 8.24479C6.92448 8.24479 4.86198 8.24479 2.79427 8.24479C1.90365 8.24479 1.22656 8.79167 1.02865 9.65625C1.01823 9.69271 1.0026 9.72917 0.992188 9.76562C0.992188 9.92188 0.992188 10.0781 0.992188 10.2344C1.0026 10.2604 1.01302 10.2812 1.02344 10.3073C1.26823 11.2708 1.89323 11.7604 2.89323 11.7604C4.92969 11.7604 6.96615 11.7604 8.9974 11.7604C9.07032 11.7604 9.14844 11.7604 9.23698 11.7604C9.23698 11.8646 9.23698 11.9427 9.23698 12.0156C9.23698 14.0781 9.23698 16.1406 9.23698 18.1979C9.23698 18.901 9.54427 19.4375 10.1589 19.7813C10.3411 19.8854 10.5599 19.9271 10.7578 20C10.9141 20 11.0703 20 11.2266 20C11.237 19.9948 11.2474 19.9844 11.2578 19.9792C12.2787 19.7188 12.7474 19.1146 12.7474 18.0573C12.7474 16.0417 12.7474 14.0208 12.7474 12.0052C12.7474 11.9271 12.7474 11.8542 12.7474 11.7552C12.8412 11.7552 12.9193 11.7552 12.9974 11.7552C15.0599 11.7552 17.1224 11.7552 19.1901 11.7552C19.8307 11.7552 20.3464 11.5 20.6901 10.9635C20.8359 10.75 20.8984 10.4792 20.9974 10.2344Z"
                            })
                        })
                    })
                ]
            }),
            collaps && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "faq-body p-5 border-t border-[#E5A832]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    "data-aos": "fade-up",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `sm:text-[15px] text-xs ${collaps ? "text-white" : ""}`,
                        dangerouslySetInnerHTML: {
                            __html: des
                        }
                    })
                })
            })
        ]
    });
};


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

/***/ 8146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BreadcrumbCom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1546);


function PageTitle({ title , breadcrumb =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "page-title-wrapper bg-trasparent w-full h-[173px] py-10",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-x mx-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BreadcrumbCom__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        paths: breadcrumb
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-3xl font-semibold text-qblack",
                        children: title
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 8699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CureveICon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CureveICon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "-mt-5 block",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "354",
                height: "30",
                viewBox: "0 0 354 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",
                    stroke: "#ED1B24",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                })
            })
        })
    });
};


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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,4994,9808,570,4790,1546,7528], () => (__webpack_exec__(2634)));
module.exports = __webpack_exports__;

})();