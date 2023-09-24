"use strict";
exports.id = 7024;
exports.ids = [7024];
exports.modules = {

/***/ 7024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8522);

/* eslint-disable react/display-name */ 


const isMultivendor = (WrappedComponent)=>{
    return (props)=>{
        const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const { 0: isActiveMultivendor , 1: setIsActiveMultivendor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
        const { enable_multivendor  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            const multivendor = !!(enable_multivendor && parseInt(enable_multivendor) === 1);
            if (!multivendor) {
                Router.replace("/");
            } else {
                setIsActiveMultivendor(true);
            }
        }, [
            Router
        ]);
        // console.log(checkAuth);
        // console.log(isActiveMultivendor);
        if (isActiveMultivendor) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
                ...props
            });
        } else {
            return null;
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMultivendor);


/***/ })

};
;