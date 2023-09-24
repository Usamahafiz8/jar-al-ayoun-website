"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(303);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6721);
/* harmony import */ var javascript_time_ago_locale_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9389);
/* harmony import */ var javascript_time_ago_locale_ru_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_Helpers_Toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(530);
/* harmony import */ var _src_components_Partials_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3194);
/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7245);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_components_Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3591);
/* harmony import */ var _src_components_Contexts_MessageContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9587);
/* harmony import */ var _src_components_Partials_Headers_MaintenanceWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4574);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, javascript_time_ago__WEBPACK_IMPORTED_MODULE_6__, javascript_time_ago_locale_en_json__WEBPACK_IMPORTED_MODULE_7__, javascript_time_ago_locale_ru_json__WEBPACK_IMPORTED_MODULE_8__, _src_components_Helpers_Toaster__WEBPACK_IMPORTED_MODULE_11__, _src_components_Partials_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__]);
([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, javascript_time_ago__WEBPACK_IMPORTED_MODULE_6__, javascript_time_ago_locale_en_json__WEBPACK_IMPORTED_MODULE_7__, javascript_time_ago_locale_ru_json__WEBPACK_IMPORTED_MODULE_8__, _src_components_Helpers_Toaster__WEBPACK_IMPORTED_MODULE_11__, _src_components_Partials_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










javascript_time_ago__WEBPACK_IMPORTED_MODULE_6__["default"].addDefaultLocale(javascript_time_ago_locale_en_json__WEBPACK_IMPORTED_MODULE_7__["default"]);
javascript_time_ago__WEBPACK_IMPORTED_MODULE_6__["default"].addLocale(javascript_time_ago_locale_ru_json__WEBPACK_IMPORTED_MODULE_8__["default"]);








/*page loader
 *package name:nProgress
 * github: https://github.com/rstacruz/nprogress */ 
 //nprogress module





//Binding events.
next_router__WEBPACK_IMPORTED_MODULE_14___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_15___default().start());
next_router__WEBPACK_IMPORTED_MODULE_14___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_15___default().done());
next_router__WEBPACK_IMPORTED_MODULE_14___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_15___default().done());
//page loader end
//font awesome
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.fas, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.fab, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.far);
function MyApp({ Component , pageProps  }) {
    const { 0: loginPopup , 1: setLoginPopup  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const handlerPopup = (value)=>{
        setLoginPopup(value);
    };
    const { 0: toggleMessage , 1: setToggleMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const { 0: addNewSeller , 1: setNewSeller  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null);
    const toggleHandler = (value)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()) {
            if (value) {
                setNewSeller(value);
            } else {
                setNewSeller(null);
            }
            setToggleMessage(!toggleMessage);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_5___default().init();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__.Provider, {
                store: _src_store_store__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Contexts_MessageContext__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Provider */ .Z.Provider, {
                    value: {
                        toggle: toggleMessage,
                        toggleHandler: toggleHandler,
                        newSeller: addNewSeller
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_16__/* ["default"].Provider */ .Z.Provider, {
                        value: {
                            loginPopup: loginPopup,
                            handlerPopup: handlerPopup
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Partials_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Partials_Headers_MaintenanceWrapper__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Helpers_Toaster__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 7208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Helpers_Consent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "cookies-next"
const external_cookies_next_namespaceObject = require("cookies-next");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Helpers/ServeLangItem.js
var ServeLangItem = __webpack_require__(6681);
;// CONCATENATED MODULE: ./src/components/Helpers/Consent.jsx






function Consent() {
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const { 0: consent , 1: setConsent  } = (0,external_react_.useState)(true);
    const { 0: consentData , 1: setConsentData  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (websiteSetup) {
            if (!consentData) {
                setConsentData(websiteSetup?.payload.cookie_consent);
            }
        }
    }, [
        consentData,
        websiteSetup
    ]);
    (0,external_react_.useEffect)(()=>{
        setConsent((0,external_cookies_next_namespaceObject.hasCookie)("localConsent"));
    }, []);
    const acceptCookie = ()=>{
        setConsent(true);
        (0,external_cookies_next_namespaceObject.setCookie)("localConsent", "true", {
            maxAge: 60 * 60 * 24 * 365
        });
        console.log("accepring cookies");
    };
    const closeP = ()=>{
        setConsent(true);
        console.log("closing");
    };
    const denyCookie = ()=>{
        setConsent(true);
        (0,external_cookies_next_namespaceObject.setCookie)("localConsent", "false", {
            maxAge: 60 * 60 * 24 * 365
        });
        console.log("denying cookie");
    };
    if (consent === true) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: consentData && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "fixed md:w-[420px] w-full h-[260px] rounded bg-white shadow md:left-8 md:bottom-8 left-0 bottom-0 p-7",
            style: {
                boxShadow: "rgb(0 0 0 / 14%) 0px 15px 50px 0px",
                zIndex: "9999999999"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-full flex flex-col justify-between relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-base text-qgray line-clamp-4",
                                children: consentData.message
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/privacy-policy",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-sm text-blue-500 cursor-pointer",
                                    children: [
                                        (0,ServeLangItem/* default */.Z)()?.Read_more,
                                        "..."
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex space-x-4 rtl:space-x-reverse items-center h-[42px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>{
                                    acceptCookie();
                                },
                                type: "button",
                                className: "w-1/2 h-full rounded text-base font-bold primary-bg text-qblack antialiased tracking-wide",
                                children: (0,ServeLangItem/* default */.Z)()?.Accept_All
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: (e)=>denyCookie(),
                                type: "button",
                                className: "w-1/2 h-full rounded text-base font-bold primary-bglow text-qblack antialiased tracking-wide",
                                children: (0,ServeLangItem/* default */.Z)()?.Deny
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: (e)=>{
                            closeP();
                        },
                        type: "button",
                        className: "text-qred absolute -right-16 -top-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            className: "w-6 h-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Helpers_Consent = (Consent);


/***/ }),

/***/ 530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Toaster() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1243);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emoji_picker_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(387);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_time_ago__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5657);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5564);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8522);
/* harmony import */ var _Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3591);
/* harmony import */ var _Contexts_MessageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9587);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6681);
/* harmony import */ var _Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(990);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4339);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_time_ago__WEBPACK_IMPORTED_MODULE_6__]);
react_time_ago__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function Index({ pusher  }) {
    //== states
    const toggleMessage = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Contexts_MessageContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
    const loginPopupBoard = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: messages , 1: setMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { 0: sellerMessages , 1: setSellerMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { 0: selectedSellerId , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: sellerVendorId , 1: setSellerVendorId  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: toggleEmoji , 1: setToggleEmoji  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { query  } = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const getSlug = query.slug;
    const { 0: isSeller , 1: setSeller  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: product , 1: setProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: varients , 1: setVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: getFirstVarients , 1: setFirstVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: offerPrice , 1: setOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    //== connector
    const options = {
        broadcaster: "pusher",
        key: pusher?.app_key,
        cluster: pusher?.app_cluster,
        forceTLS: true,
        encrypted: false,
        //authEndpoint is your apiUrl + /broadcasting/auth
        authEndpoint: "https://jaralayoun.com/srv/" + "api/broadcasting/auth",
        // As I'm using JWT tokens, I need to manually set up the headers.
        auth: {
            headers: {
                Authorization: `Bearer ${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)() && (0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)().access_token}`,
                Accept: "application/json"
            }
        }
    };
    //== methods
    let newMessageHandler = (n, id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) {
            if (n.message.seller_id === id) {
                let newMessage = n.message;
                setSellerMessages((prev)=>{
                    const messageFilter = prev.filter((item)=>item.id === n.message.id);
                    if (messageFilter.length === 0) {
                        return [
                            ...prev,
                            newMessage
                        ];
                    } else {
                        return [
                            ...prev
                        ];
                    }
                });
            } else {
                axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://jaralayoun.com/srv/"}api/user/message-with-seller?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)().access_token}`).then((res)=>{
                    if (res && res.data) {
                        setMessages(res.data.seller_list);
                    }
                }).catch((err)=>{
                    console.log(err);
                });
            }
        }
    };
    const activeSellerHandler = (value, vendorId)=>{
        localStorage.setItem("active-chat-seller", `${value}`);
        setId(value);
        setSellerVendorId(vendorId);
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) {
            axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://jaralayoun.com/srv/"}api/user/load-active-seller-message/${parseInt(value)}?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)().access_token}`).then((res)=>{
                if (res && res.data) {
                    setSellerMessages(res.data.messages);
                    if (messages && messages.length > 0) {
                        setMessages((prev)=>{
                            const objIndex = prev.findIndex((item)=>item.shop_owner_id === value);
                            prev[objIndex].unread_message = 0;
                            return prev;
                        });
                    }
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
    };
    const messageHandler = (e)=>{
        setMessage(e.target.value);
    };
    const send = (productId)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) {
            if (selectedSellerId) {
                axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"https://jaralayoun.com/srv/"}api/user/send-message-to-seller?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)().access_token}`, {
                    seller_id: parseInt(selectedSellerId),
                    message: message,
                    product_id: productId ? productId : null
                }).then((res)=>{
                    if (res) {
                        setSellerMessages(res.data.messages);
                        fixedScrollBottom();
                        setMessage("");
                        setProduct(null);
                    }
                });
            } else {
                return false;
            }
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const fixedScrollBottom = ()=>{
        const messages = messageRef.current;
        messages.scrollTop = messages.scrollHeight;
    };
    function emojiHandler(emojiData) {
        setMessage((prev)=>prev + emojiData.emoji);
    }
    //time module
    const timeAgoHandler = (time)=>{
        return new Date(time).getTime();
    };
    //settings
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    //==effects
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const firstVarient = varients && varients.map((v)=>v.active_variant_items.length > 0 ? v.active_variant_items[0] : {});
        setFirstVarients(firstVarient);
    }, [
        varients
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (getFirstVarients) {
            const prices = getFirstVarients && getFirstVarients.map((v)=>v.price ? v.price : 0);
            const sumPrice = parseInt(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseInt(product.price));
            setPrice(sumPrice);
            if (product.offer_price) {
                const sumOfferPrice = parseInt(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseInt(product.offer_price));
                setOffer(sumOfferPrice);
            }
        }
    }, [
        getFirstVarients
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (getSlug) {
            if (!isSeller && !product) {
                axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://jaralayoun.com/srv/"}api/product/${getSlug}`).then((res)=>{
                    if (res) {
                        if (res.data) {
                            if (res.data.is_seller_product || res.data.is_seller_product === "true") {
                                setProduct(res.data.product);
                                setSeller(res.data.is_seller_product);
                                setVarients(res.data.product.active_variants);
                            }
                        }
                    } else {
                        setProduct(false);
                    }
                });
            }
        }
    });
    const fetchChat = ()=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) {
            axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://jaralayoun.com/srv/"}api/user/message-with-seller?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)().access_token}`).then((res)=>{
                if (res && res.data) {
                    setMessages(res.data.seller_list);
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!messages || messages.length === 0) {
            fetchChat();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (messages && messages.length > 0) {
            fixedScrollBottom();
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const messageBody = document.getElementById("message-body");
        if (sellerMessages && sellerMessages.length > 0) {
            if (messageBody && messageBody.offsetHeight <= 390) {
                messageRef.current.style.display = "flex";
                messageRef.current.style.alignItems = "end";
            } else {
                messageRef.current.style.display = "";
                messageRef.current.style.alignItems = "";
                fixedScrollBottom();
            }
        } else {
            messageRef.current.style.display = "";
            messageRef.current.style.alignItems = "";
            fixedScrollBottom();
        }
    }, [
        sellerMessages,
        selectedSellerId
    ]);
    //add new seller
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (toggleMessage.newSeller) {
            const newSellerObj = {
                shop_owner_id: toggleMessage.newSeller.user_id,
                shop_owner: toggleMessage.newSeller.user.name,
                shop_name: toggleMessage.newSeller.shop_name,
                shop_or_vendor_id: toggleMessage.newSeller.id,
                shop_slug: toggleMessage.newSeller.slug,
                shop_logo: toggleMessage.newSeller.logo,
                unread_message: 0,
                messages: []
            };
            const sellerExistOrNot = messages && messages.length > 0 && messages.find((seller)=>seller.shop_or_vendor_id === toggleMessage.newSeller.id);
            if (!sellerExistOrNot) {
                setMessages((prev)=>[
                        newSellerObj,
                        ...prev
                    ]);
            }
        }
    }, [
        toggleMessage,
        toggleMessage.newSeller
    ]);
    //==watches
    //   const echo = Echo(options);
    //   const [listenerAdded, setListenerAdded] = useState(false);
    //   useEffect(() => {
    //     if (!listenerAdded) {
    //       echo
    //         .private(`seller-to-user-message.${auth() && auth().user.id}`)
    //         .listen("SellerToUser", (e) => {
    //           let activeSeller = localStorage.getItem("active-chat-seller");
    //           newMessageHandler(e, activeSeller);
    //         });
    //       setListenerAdded(true);
    //     }
    //     return () => {
    //       echo.leave("seller-to-user-message");
    //     };
    //   }, [echo, listenerAdded]);
    //   Chat Box
    const messageToggleAction = ()=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) {
            setSeller(null);
            setProduct(null);
            toggleMessage.toggleHandler();
            if (!messages || messages.length === 0) {
                fetchChat();
            } else {
                return false;
            }
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            toggleMessage.toggle === false && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: messageToggleAction,
                type: "button",
                className: `w-[150px] print:hidden fixed xl:right-[180px] right-[-56px] transform rotate-90 xl:rotate-0 z-30  xl:bottom-0 bottom-[150px] h-[38px] primary-bg justify-center flex space-x-2.5 items-center cursor-pointer`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "21",
                            height: "19",
                            viewBox: "0 0 21 19",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "fill-current",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M1.30898 18.0944C0.962386 18.0925 0.630508 17.954 0.385424 17.7089C0.14034 17.4638 0.00183875 17.132 0 16.7854V6.01951C0.00184787 5.30162 0.287849 4.61366 0.795479 4.10603C1.30311 3.5984 1.99107 3.31239 2.70897 3.31055H15.4838C16.2029 3.31054 16.8927 3.59573 17.4018 4.10356C17.9109 4.61139 18.1979 5.30041 18.1998 6.01951V13.1944C18.1998 13.9135 17.9146 14.6033 17.4068 15.1124C16.8989 15.6216 16.2099 15.9085 15.4908 15.9104H4.83694C4.71593 15.9114 4.59833 15.9506 4.50094 16.0224L2.09997 17.8354C1.87104 18.0045 1.59364 18.0954 1.30898 18.0944ZM2.70897 4.71053C2.36237 4.71237 2.03049 4.85087 1.78541 5.09595C1.54032 5.34104 1.40182 5.67291 1.39998 6.01951V16.6104L3.66095 14.9024C4.00115 14.6497 4.41318 14.5124 4.83694 14.5104H15.4838C15.8328 14.5104 16.1675 14.3718 16.4143 14.125C16.6611 13.8782 16.7998 13.5434 16.7998 13.1944V6.01951C16.7979 5.67291 16.6594 5.34104 16.4144 5.09595C16.1693 4.85087 15.8374 4.71237 15.4908 4.71053H2.70897Z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M11.8601 10.3746C12.2467 10.3746 12.5601 10.0612 12.5601 9.6746C12.5601 9.28801 12.2467 8.97461 11.8601 8.97461C11.4736 8.97461 11.1602 9.28801 11.1602 9.6746C11.1602 10.0612 11.4736 10.3746 11.8601 10.3746Z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M9.1414 10.3746C9.52799 10.3746 9.84139 10.0612 9.84139 9.6746C9.84139 9.28801 9.52799 8.97461 9.1414 8.97461C8.7548 8.97461 8.44141 9.28801 8.44141 9.6746C8.44141 10.0612 8.7548 10.3746 9.1414 10.3746Z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M6.34062 10.3746C6.72721 10.3746 7.04061 10.0612 7.04061 9.6746C7.04061 9.28801 6.72721 8.97461 6.34062 8.97461C5.95402 8.97461 5.64062 9.28801 5.64062 9.6746C5.64062 10.0612 5.95402 10.3746 6.34062 10.3746Z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M20.2998 11.0116C20.1141 11.0116 19.9361 10.9378 19.8048 10.8066C19.6735 10.6753 19.5998 10.4972 19.5998 10.3116V3.22068C19.598 2.87409 19.4595 2.54221 19.2144 2.29712C18.9693 2.05204 18.6374 1.91354 18.2908 1.9117H4.19999C4.01434 1.9117 3.8363 1.83795 3.70502 1.70668C3.57375 1.5754 3.5 1.39736 3.5 1.21171C3.5 1.02606 3.57375 0.848015 3.70502 0.716741C3.8363 0.585468 4.01434 0.511719 4.19999 0.511719H18.2908C19.0087 0.513567 19.6967 0.799568 20.2043 1.3072C20.7119 1.81483 20.9979 2.50279 20.9998 3.22068V10.3116C20.9998 10.4972 20.926 10.6753 20.7948 10.8066C20.6635 10.9378 20.4854 11.0116 20.2998 11.0116Z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `text-base font-medium text-white`,
                        children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)().Messages
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `fixed print:hidden xl:right-[180px] right-0 bottom-0 w-full sm:w-auto`,
                style: {
                    zIndex: "9999999999999"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `bg-white transform   transition duration-700 ease-in-out ${toggleMessage.toggle ? "translate-y-0 md:w-[576px] w-full md:h-[474px] h-full" : "translate-y-[480px] w-0 h-0"}`,
                    style: {
                        boxShadow: "0px 4px 109px rgba(0, 0, 0, 0.12)"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `w-full h-[38px] primary-bg text-qblack`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `w-full h-full flex justify-between items-center px-[26px]`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `flex space-x-2.5 items-center`,
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
                                                className: `text-base font-medium text-qblack`,
                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)().Messages
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: messageToggleAction,
                                        type: "button",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "21",
                                            height: "21",
                                            viewBox: "0 0 21 21",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M10.5 0C4.70775 0 0 4.70775 0 10.5C0 16.2923 4.70775 21 10.5 21C16.2923 21 21 16.2923 21 10.5C21 4.70775 16.2923 0 10.5 0ZM10.5 19.9401C5.2993 19.9401 1.05986 15.7007 1.05986 10.5C1.05986 5.2993 5.2993 1.05986 10.5 1.05986C15.7007 1.05986 19.9401 5.2993 19.9401 10.5C19.9401 15.7007 15.7007 19.9401 10.5 19.9401Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M11.2409 10.4507L14.3219 7.36975C14.5191 7.17256 14.5191 6.82749 14.3219 6.63031C14.1248 6.43313 13.7797 6.43313 13.5825 6.63031L10.5015 9.7113L7.42053 6.63031C7.22334 6.43313 6.87827 6.43313 6.68109 6.63031C6.48391 6.82749 6.48391 7.17256 6.68109 7.36975L9.76208 10.4507L6.68109 13.5071C6.48391 13.7043 6.48391 14.0493 6.68109 14.2465C6.77968 14.3451 6.92757 14.3944 7.05081 14.3944C7.17405 14.3944 7.32194 14.3451 7.42053 14.2465L10.5015 11.1655L13.5825 14.2465C13.6811 14.3451 13.829 14.3944 13.9522 14.3944C14.0755 14.3944 14.2233 14.3451 14.3219 14.2465C14.5191 14.0493 14.5191 13.7043 14.3219 13.5071L11.2409 10.4507Z",
                                                    fill: "black"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `w-full md:flex`,
                            style: {
                                height: `calc(100% - 38px)`
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `md:w-[240px] bg-[#FFF2DA] md:bg-white  w-full md:h-full overflow-x-scroll md:overflow-x-hidden border-r border-[#E9E9E9] md:overflow-y-scroll overflow-style-none`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `seller-list w-full`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: `flex flex-row md:flex-col`,
                                            children: messages && messages.length > 0 && messages.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    onClick: ()=>activeSellerHandler(item.shop_owner_id, item.shop_or_vendor_id),
                                                    className: `flex w-[150px] md:w-auto space-x-3 items-center px-2.5 py-3 hover:bg-[#FFF2DA] cursor-pointer cursor-pointer ${item.shop_owner_id === selectedSellerId ? "bg-[#FFF2DA]" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `w-[44px] h-[44px]  relative `,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-full h-full rounded-full overflow-hidden bg-[#FAF9FA] relative shadow-lg",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                        layout: "fill",
                                                                        objectFit: "contain",
                                                                        src: "https://jaralayoun.com/srv/" + item.shop_logo,
                                                                        alt: "seller"
                                                                    })
                                                                }),
                                                                item.unread_message > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-[15px] h-[15px] inline-block flex justify-center items-center rounded-full primary-bg text-qblack absolute right-0 top-0 text-xs",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: item.unread_message > 99 ? "99" : item.unread_message
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `flex-1`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: `flex flex-col space-y-1`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: `font-medium text-base text-qblack line-clamp-1`,
                                                                        children: item.shop_name
                                                                    }),
                                                                    item.messages && item.messages.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "md:block hidden",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: `text-xs text-qgray line-clamp-1 `,
                                                                            children: item.messages[item.messages.length - 1].message
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, i))
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `md:w-[336px] w-full relative`,
                                    children: [
                                        toggleEmoji && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `absolute -left-4 -top-16 z-20`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>setToggleEmoji(!toggleEmoji),
                                                    className: `w-full h-full fixed left-0 top-0`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((emoji_picker_react__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    onEmojiClick: emojiHandler
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    ref: messageRef,
                                                    className: `w-full h-[392px] px-2.5 pt-2.5 overflow-y-scroll overflow-style-none relative`,
                                                    children: [
                                                        product && parseInt(product.vendor_id) === sellerVendorId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `fixed w-[318px] h-[100px] bg-qblack p-3 top-[50px] z-10`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: `flex space-x-2.5 items-center`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `w-[58px] h-[63px] rounded relative bg-white`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            layout: "fill",
                                                                            objectFit: "contain",
                                                                            src: `${"https://jaralayoun.com/srv/" + product.thumb_image}`,
                                                                            alt: "seller"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: `flex-1 flex flex-col`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "reviews flex space-x-[1px]",
                                                                                children: [
                                                                                    Array.from(Array(parseInt(product.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                                                                        }, parseInt(product.averageRating) + Math.random())),
                                                                                    parseInt(product.averageRating) < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: Array.from(Array(5 - parseInt(product.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "text-gray-500",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                                                    defaultValue: false
                                                                                                })
                                                                                            }, parseInt(product.averageRating) + Math.random()))
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                className: `text-white text-xs font-medium leading-[24px] line-clamp-1`,
                                                                                children: product.name
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "flex space-x-2 items-baseline",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        suppressHydrationWarning: true,
                                                                                        className: `main-price  font-600  ${offerPrice ? "line-through text-qgray text-xs" : "text-qred text-xs"}`,
                                                                                        children: offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: currency_icon + price
                                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                                            id: product.id,
                                                                                            price: price
                                                                                        })
                                                                                    }),
                                                                                    offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        suppressHydrationWarning: true,
                                                                                        className: "offer-price text-qred font-600 text-xs ml-2",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                                            id: product.id,
                                                                                            price: offerPrice
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                onClick: ()=>send(product.id),
                                                                                style: {
                                                                                    left: "calc(50% - 46px)",
                                                                                    bottom: "-16px"
                                                                                },
                                                                                type: "button",
                                                                                className: `w-[120px] h-[32px] bg-white text-sm primary-text font-semibold absolute shadow-lg`,
                                                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)().Send_Product
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        sellerMessages && sellerMessages.length > 0 && selectedSellerId ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                id: "message-body",
                                                                className: "w-full",
                                                                children: sellerMessages.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: item.send_by === "seller" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "mb-2 mr-10",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: `w-full`,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "bg-[#E8EEF2] py-[8px] px-[17px] flex justify-center rounded-[40px] text-qblack text-sm",
                                                                                        style: {
                                                                                            maxWidth: "fit-content",
                                                                                            minWidth: "82px"
                                                                                        },
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            className: "text-justify",
                                                                                            children: item.message
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: ` flex space-x-1.5 items-center`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            className: `text-xs text-[#797979] leading-[24px] flex space-x-1.5 items-center`,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_time_ago__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                                                                date: timeAgoHandler(new Date(item.created_at)),
                                                                                                locale: "en-US"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                                width: "17",
                                                                                                height: "8",
                                                                                                viewBox: "0 0 17 8",
                                                                                                fill: "none",
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                        d: "M9.72727 1L3.72727 7L1 4.27273",
                                                                                                        stroke: "#27AE60",
                                                                                                        strokeWidth: "1.5",
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                        d: "M15.7273 1L9.72727 7L7 4.27273",
                                                                                                        stroke: "#27AE60",
                                                                                                        strokeWidth: "1.5",
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }, i) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "mb-2 ml-10",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    item.product && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: `w-full bg-[#FFF2DA] p-3 mb-2`,
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: `flex space-x-2.5 items-center`,
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: `w-[58px] h-[63px] relative bg-white`,
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                                        layout: "fill",
                                                                                                        objectFit: "contain",
                                                                                                        src: `${"https://jaralayoun.com/srv/" + item.product.thumb_image}`,
                                                                                                        alt: "seller"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: `flex-1 flex flex-col`,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                            className: "reviews flex space-x-[1px]",
                                                                                                            children: [
                                                                                                                Array.from(Array(parseInt(item.product.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                                                                                                    }, parseInt(item.product.averageRating) + Math.random())),
                                                                                                                parseInt(item.product.averageRating) < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                                    children: Array.from(Array(5 - parseInt(item.product.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "text-gray-500",
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                                                                                defaultValue: false
                                                                                                                            })
                                                                                                                        }, parseInt(item.product.averageRating) + Math.random()))
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                            className: `text-qblack text-xs font-medium leading-[24px] line-clamp-1`,
                                                                                                            children: item.product.name
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    item.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: `flex justify-end `,
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "primary-bg py-[8px] px-[17px] flex justify-center rounded-[40px] text-qblack text-sm",
                                                                                                    style: {
                                                                                                        maxWidth: "fit-content",
                                                                                                        minWidth: "82px"
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "text-justify",
                                                                                                        children: item.message
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: `flex justify-end`,
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                        className: ` flex space-x-1.5 items-center`,
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                                className: `text-xs text-[#797979] leading-[24px] text-end`,
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_time_ago__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                                                                                    date: timeAgoHandler(new Date(item.created_at)),
                                                                                                                    locale: "en-US"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                                                    width: "17",
                                                                                                                    height: "8",
                                                                                                                    viewBox: "0 0 17 8",
                                                                                                                    fill: "none",
                                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                                            d: "M9.72727 1L3.72727 7L1 4.27273",
                                                                                                                            stroke: "#27AE60",
                                                                                                                            strokeWidth: "1.5",
                                                                                                                            strokeLinecap: "round",
                                                                                                                            strokeLinejoin: "round"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                                            d: "M15.7273 1L9.72727 7L7 4.27273",
                                                                                                                            stroke: "#27AE60",
                                                                                                                            strokeWidth: "1.5",
                                                                                                                            strokeLinecap: "round",
                                                                                                                            strokeLinejoin: "round"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }, i)
                                                                    }))
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-full h-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "mb-5 flex justify-center",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: "/assets/images/not-message-found.png",
                                                                            width: 158,
                                                                            height: 128,
                                                                            objectFit: "scale-down",
                                                                            alt: "no message"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                                className: "text-[#1D1D1D] font-bold text-[20px] text-center",
                                                                                children: (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)().No_Message_yet
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                className: "text-[#797979] text-sm text-center",
                                                                                children: [
                                                                                    " ",
                                                                                    (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)().Its_seems__No_Message_in_your_inbox
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `w-full h-[44px] flex justify-between bg-[#E2E8EB] pl-3`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `md:w-[240px] w-full h-full`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                onChange: (e)=>messageHandler(e),
                                                                onKeyDown: (e)=>e.key === "Enter" && send(),
                                                                value: message,
                                                                placeholder: `Message`,
                                                                className: `w-full h-full placeholder:text-[#85959E] text-[#85959E] focus:outline-none bg-[#E2E8EB]`
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center space-x-5",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    onClick: ()=>setToggleEmoji(!toggleEmoji),
                                                                    type: "button",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "19",
                                                                            height: "18",
                                                                            viewBox: "0 0 19 18",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M16.0913 2.63603C14.355 0.936172 12.0465 0 9.5911 0C7.13569 0 4.82715 0.936172 3.0909 2.63603C1.35465 4.33589 0.398438 6.59605 0.398438 9C0.398438 11.4039 1.35465 13.6641 3.0909 15.364C4.82715 17.0638 7.13569 18 9.5911 18C12.0465 18 14.355 17.0638 16.0913 15.364C17.8275 13.6641 18.7838 11.4039 18.7838 9C18.7838 6.59605 17.8275 4.33589 16.0913 2.63603ZM5.89964 7.35013C5.89964 6.84709 6.31778 6.43785 6.83159 6.43785C7.34539 6.43785 7.76339 6.84709 7.76339 7.35013C7.76339 7.85316 7.34539 8.26241 6.83159 8.26241C6.31778 8.26241 5.89964 7.85316 5.89964 7.35013ZM12.7944 11.5242C12.1345 12.6413 10.9065 13.3351 9.58984 13.3351C8.27061 13.3351 7.04143 12.6392 6.38217 11.5192C6.23362 11.2668 6.32213 10.9443 6.57995 10.799C6.83762 10.6534 7.16697 10.7402 7.31552 10.9925C7.78303 11.787 8.65452 12.2804 9.58984 12.2804C10.5233 12.2804 11.3938 11.7883 11.8619 10.9962C12.0109 10.7441 12.3404 10.658 12.5979 10.8038C12.8554 10.9495 12.9434 11.2722 12.7944 11.5242ZM12.3456 8.26241C11.8316 8.26241 11.4136 7.85316 11.4136 7.35013C11.4136 6.84709 11.8316 6.43785 12.3456 6.43785C12.8592 6.43785 13.2772 6.84709 13.2772 7.35013C13.2774 7.85316 12.8592 8.26241 12.3456 8.26241Z",
                                                                                fill: "#85959E"
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    onClick: ()=>send(),
                                                                    type: "button",
                                                                    className: `w-[50px] h-full primary-bg flex justify-center items-center text-qblack`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            width: "26",
                                                                            height: "26",
                                                                            className: `fill-current`,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    fill: "none",
                                                                                    d: "M0 0h24v24H0z"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    d: "M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                                                })
                                                                            ]
                                                                        })
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
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3194:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DefaultLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4178);
/* harmony import */ var _store_compareProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1839);
/* harmony import */ var _store_websiteSetup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5824);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4994);
/* harmony import */ var tawkto_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4782);
/* harmony import */ var tawkto_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tawkto_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Helpers_Consent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7208);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9363);
/* harmony import */ var _Auth_Login_LoginWidget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3865);
/* harmony import */ var _Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3591);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8522);
/* harmony import */ var _Auth_Signup_SignupWidget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3113);
/* harmony import */ var _Auth_Signup_VerifyWidget__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(685);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5564);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9808);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3590);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6681);
/* harmony import */ var _MessageWidget__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Auth_Login_LoginWidget__WEBPACK_IMPORTED_MODULE_12__, _Auth_Signup_SignupWidget__WEBPACK_IMPORTED_MODULE_14__, _Auth_Signup_VerifyWidget__WEBPACK_IMPORTED_MODULE_15__, react_toastify__WEBPACK_IMPORTED_MODULE_17__, _MessageWidget__WEBPACK_IMPORTED_MODULE_18__]);
([_Auth_Login_LoginWidget__WEBPACK_IMPORTED_MODULE_12__, _Auth_Signup_SignupWidget__WEBPACK_IMPORTED_MODULE_14__, _Auth_Signup_VerifyWidget__WEBPACK_IMPORTED_MODULE_15__, react_toastify__WEBPACK_IMPORTED_MODULE_17__, _MessageWidget__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























function DefaultLayout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const getLoginContexts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Contexts_LoginContext__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.websiteSetup);
    const { 0: twkData , 1: setTwkData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: gtagId , 1: setgTagId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: fbPixexl , 1: setFbPixel  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: load , 1: setLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: popupView , 1: setPopupView  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("login");
    const { 0: messageWid , 1: setMessageWid  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const apiFetch = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://jaralayoun.com/srv/"}api/website-setup`).then((res)=>{
            // handle success
            dispatch((0,_store_websiteSetup__WEBPACK_IMPORTED_MODULE_6__/* .setupAction */ .T)(res.data));
            localStorage.setItem("settings", JSON.stringify(res.data && res.data.setting));
            localStorage.setItem("pusher", JSON.stringify(res.data && res.data.pusher_info ? res.data.pusher_info : null));
            if (res.data) {
                setgTagId(res.data.googleAnalytic.analytic_id);
                setTwkData({
                    widgetId: res.data.tawk_setting.widget_id,
                    propertyId: res.data.tawk_setting.property_id
                });
                setFbPixel(res.data.facebookPixel);
                localStorage.setItem("language", JSON.stringify(res.data.language));
                const checkLangExists = localStorage.getItem("language");
                if (checkLangExists) {
                    setLoad(false);
                    if (!messageWid) {
                        if (localStorage.getItem("pusher")) {
                            const pusher = JSON.parse(localStorage.getItem("pusher"));
                            setMessageWid(pusher);
                        }
                    }
                }
            }
        }).catch((error)=>{
            // handle error
            console.log(error);
        });
        dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_7__/* .fetchWishlist */ .BW)());
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        !websiteSetup ? apiFetch() : false;
        dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_4__/* .fetchCart */ .x7)());
        dispatch((0,_store_compareProduct__WEBPACK_IMPORTED_MODULE_5__/* .fetchCompareProducts */ .rh)());
        const themeColor = JSON.parse(localStorage.getItem("settings"));
        if (themeColor) {
            const root = document.querySelector(":root");
            root.style.setProperty("--primary-color", `${themeColor?.theme_one}`);
            root.style.setProperty("--secondary-color", `${themeColor?.theme_two}`);
        }
        if ((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()) {
            setLoad(false);
        }
    }, [
        websiteSetup,
        apiFetch,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (twkData) {
            let tawk = new (tawkto_react__WEBPACK_IMPORTED_MODULE_8___default())(`${twkData.widgetId}`, `${twkData.propertyId}`);
            tawk.onStatusChange((status)=>{
                console.log(status);
            });
        }
    }, [
        twkData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (fbPixexl) {
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9578, 23)).then((x)=>x.default).then((ReactPixel)=>{
                ReactPixel.init(`${fbPixexl.app_id}`); // facebookPixelId
                ReactPixel.pageView();
                router.events.on("routeChangeComplete", ()=>{
                    ReactPixel.pageView();
                });
            });
        }
    }, [
        fbPixexl,
        router.events
    ]);
    const { text_direction , enable_multivendor  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const html = document.getElementsByTagName("html");
        html[0].dir = text_direction;
    });
    // components actions
    const loginActionPopup = ()=>{
        setPopupView("signup");
    };
    const notVerifyHandler = ()=>{
        setPopupView("verify");
    };
    const signupActionPopup = ()=>{
        setPopupView("login");
    };
    const singupActionHandle = ()=>{
        setPopupView("verify");
    };
    const verifyActionPopup = ()=>{
        setPopupView("login");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (getLoginContexts.loginPopup === false) {
            setPopupView("login");
            if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)()) {
                const holdData = JSON.parse(localStorage.getItem("data-hold"));
                if (holdData && holdData.type === "add-to-cart") {
                    if (holdData.variants) {
                        const variantQuery = holdData.variants.map((value, index)=>{
                            return value ? `variants[]=${value}` : `variants[]=-1`;
                        });
                        const variantString = variantQuery.map((value)=>value + "&").join("");
                        const itemsQuery = holdData.variantItems.map((value, index)=>{
                            return value ? `items[]=${value}` : `items[]=-1`;
                        });
                        const itemQueryStr = itemsQuery.map((value)=>value + "&").join("");
                        const uri = `token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)().access_token}&product_id=${holdData.id}&${variantString}${itemQueryStr}quantity=${holdData.quantity}`;
                        _utils_apiRequest__WEBPACK_IMPORTED_MODULE_16__/* ["default"].addToCard */ .Z.addToCard(uri).then((res)=>{
                            react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.success((0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)()?.Item_added);
                            localStorage.removeItem("data-hold");
                            router.push("/cart");
                        }).catch((err)=>{
                            console.log(err);
                            react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.error(err.response && err.response.data.message && err.response.data.message);
                        });
                        dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_4__/* .fetchCart */ .x7)());
                    } else {
                        const uri1 = `token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)().access_token}&product_id=${holdData.id}&quantity=${holdData.quantity}`;
                        _utils_apiRequest__WEBPACK_IMPORTED_MODULE_16__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>{
                            react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.success((0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)()?.Item_added);
                            localStorage.removeItem("data-hold");
                            router.push("/cart");
                        }).catch((err)=>{
                            console.log(err);
                            react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.error(err.response && err.response.data.message && err.response.data.message);
                        });
                        dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_4__/* .fetchCart */ .x7)());
                    }
                }
            }
        }
    }, [
        dispatch,
        getLoginContexts.loginPopup
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            gtagId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_10___default()), {
                        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
                        strategy: "afterInteractive"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_10___default()), {
                        id: "google-analytics",
                        strategy: "afterInteractive",
                        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtagId}');
        `
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `relative`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: !load && children ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Consent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: children
                            }),
                            getLoginContexts.loginPopup && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full h-screen fixed left-0 top-0 flex justify-center items-center z-40",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-full fixed left-0 top-0 bg-black bg-opacity-50"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        "data-aos": "fade-up",
                                        className: `lg:w-[572px] w-full lg:h-[670px] h-full bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0] relative z-40`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>getLoginContexts.handlerPopup(false),
                                                className: "absolute right-5 top-5 cursor-pointer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 54 54",
                                                    fill: "none",
                                                    className: "cursor-pointer md:w-[54px] md:h-[54px] w-[30px] h-[30px]",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M26.9399 53.9996C12.0678 53.9827 -0.0210736 41.8265 2.75822e-05 26.912C0.0211287 12.0502 12.1965 -0.0320829 27.115 -0.000426215C41.9703 0.0312305 54.0401 12.2148 54 27.1399C53.9599 41.9447 41.7972 54.0186 26.9399 53.9996ZM18.8476 16.4083C17.6765 16.44 16.9844 16.8705 16.6151 17.7189C16.1952 18.6876 16.3893 19.574 17.1363 20.3253C19.0966 22.2901 21.0252 24.2908 23.0425 26.1965C23.7599 26.874 23.6397 27.2201 23.0045 27.83C21.078 29.6788 19.2148 31.5951 17.3241 33.4797C16.9211 33.8807 16.5581 34.3007 16.4505 34.8853C16.269 35.8835 16.6953 36.8332 17.5456 37.3102C18.4382 37.8124 19.5038 37.6626 20.3394 36.8416C22.3673 34.843 24.3866 32.836 26.3723 30.7994C26.8513 30.3077 27.1298 30.2866 27.6193 30.791C29.529 32.7579 31.4851 34.6784 33.4201 36.6179C33.8463 37.0442 34.2831 37.4431 34.9098 37.5486C35.9184 37.7196 36.849 37.2891 37.3196 36.4259C37.7964 35.5543 37.6677 34.5075 36.8912 33.714C34.9731 31.7555 33.0677 29.7801 31.0631 27.9145C30.238 27.1462 30.3688 26.7474 31.1031 26.053C32.9896 24.2655 34.8022 22.3977 36.6338 20.5511C37.7922 19.384 37.8914 17.9827 36.9081 17.0288C35.9501 16.1002 34.5975 16.2141 33.4623 17.3411C31.5188 19.2743 29.5649 21.199 27.6594 23.1659C27.1446 23.6978 26.8492 23.6957 26.3343 23.1659C24.4267 21.1969 22.4664 19.2806 20.5336 17.3369C19.9997 16.7966 19.4258 16.3661 18.8476 16.4083Z",
                                                        fill: "#F34336"
                                                    })
                                                })
                                            }),
                                            popupView === "login" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth_Login_LoginWidget__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                redirect: false,
                                                loginActionPopup: loginActionPopup,
                                                notVerifyHandler: notVerifyHandler
                                            }) : popupView === "signup" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth_Signup_SignupWidget__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                redirect: false,
                                                signupActionPopup: signupActionPopup,
                                                changeContent: singupActionHandle
                                            }) : popupView === "verify" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth_Signup_VerifyWidget__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                redirect: false,
                                                verifyActionPopup: verifyActionPopup
                                            }) : ""
                                        ]
                                    })
                                ]
                            }),
                            parseInt(enable_multivendor) === 1 && messageWid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessageWidget__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                pusher: messageWid
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full fixed bg-white px-5 py-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "38",
                                height: "38",
                                viewBox: "0 0 38 38",
                                stroke: "#FCBB38",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                    fill: "none",
                                    fillRule: "evenodd",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                        transform: "translate(1 1)",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                strokeOpacity: ".5",
                                                cx: "18",
                                                cy: "18",
                                                r: "18"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M36 18c0-9.94-8.06-18-18-18",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animateTransform", {
                                                    attributeName: "transform",
                                                    type: "rotate",
                                                    from: "0 18 18",
                                                    to: "360 18 18",
                                                    dur: "1s",
                                                    repeatCount: "indefinite"
                                                })
                                            })
                                        ]
                                    })
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

/***/ 4574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Headers_MaintenanceWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Maintain.jsx




// import settings from "../../utils/settings";
function Maintain() {
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const { 0: maintain , 1: setMaintain  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (websiteSetup) {
            setMaintain(websiteSetup?.payload.maintainance);
        }
    }, [
        websiteSetup
    ]);
    // const { logo } = settings();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full h-screen flex justify-center items-center",
            children: maintain && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-5",
                        children: maintain && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: "300",
                            height: "300",
                            objectFit: "scale-down",
                            src: `${"https://jaralayoun.com/srv/" + maintain.image}`,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center text-3xl text-tblack w-4/5 font-bold",
                            children: maintain.description
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_Maintain = (Maintain);

;// CONCATENATED MODULE: ./Middleware/isMaintainance.js

/* eslint-disable react/display-name */ 



const isMaintainance = (WrappedComponent)=>{
    return (props)=>{
        const Router = (0,router_.useRouter)();
        const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
        const { 0: mode , 1: setMode  } = (0,external_react_.useState)(null);
        (0,external_react_.useEffect)(()=>{
            if (websiteSetup) {
                if (websiteSetup.payload) {
                    if (websiteSetup.payload.maintainance) {
                        setMode(parseInt(websiteSetup.payload.maintainance.status));
                    }
                }
            }
        });
        // useEffect(() => {
        //   if (mode === 1) {
        //     Router.replace("/maintenance");
        //   } else {
        //     return;
        //   }
        // }, [Router, mode]);
        if (mode === 0) {
            return /*#__PURE__*/ jsx_runtime_.jsx(WrappedComponent, {
                ...props
            });
        } else if (mode === 1) {
            return /*#__PURE__*/ jsx_runtime_.jsx(components_Maintain, {});
        } else {
            return false;
        }
    };
};
/* harmony default export */ const Middleware_isMaintainance = (isMaintainance);

;// CONCATENATED MODULE: ./src/components/Partials/Headers/MaintenanceWrapper.jsx



function MaintenanceWrapper({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: children && children
    });
}
/* harmony default export */ const Headers_MaintenanceWrapper = (Middleware_isMaintainance(MaintenanceWrapper));


/***/ }),

/***/ 7245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _websiteSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5824);
/* harmony import */ var _wishlistData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4994);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4178);
/* harmony import */ var _compareProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1839);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        websiteSetup: _websiteSetup__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        wishlistData: _wishlistData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        cart: _Cart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        compareProducts: _compareProduct__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP
    }
}));


/***/ }),

/***/ 5824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ setupAction),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export websiteSetup */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    websiteSetup: null
};
const websiteSetup = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "website-setup",
    initialState,
    reducers: {
        setupAction: (state, payload)=>{
            state.websiteSetup = payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setupAction  } = websiteSetup.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (websiteSetup.reducer);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1243:
/***/ ((module) => {

module.exports = require("emoji-picker-react");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9578:
/***/ ((module) => {

module.exports = require("react-facebook-pixel");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4782:
/***/ ((module) => {

module.exports = require("tawkto-react");

/***/ }),

/***/ 86:
/***/ ((module) => {

module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ 303:
/***/ ((module) => {

module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 2765:
/***/ ((module) => {

module.exports = import("@fortawesome/free-regular-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 6721:
/***/ ((module) => {

module.exports = import("javascript-time-ago");;

/***/ }),

/***/ 9389:
/***/ ((module) => {

module.exports = import("javascript-time-ago/locale/en.json");;

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = import("javascript-time-ago/locale/ru.json");;

/***/ }),

/***/ 5657:
/***/ ((module) => {

module.exports = import("react-time-ago");;

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,8146,4994,9808,570,7528,990,1839,3860,7932,3865], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();