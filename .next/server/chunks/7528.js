"use strict";
exports.id = 7528;
exports.ids = [7528];
exports.modules = {

/***/ 7528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputCom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function InputCom({ label , type , name , placeholder , children , inputHandler , value , inputClasses , error =false , labelClasses ="text-qgray text-[13px] font-normal" ,  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "input-com w-full h-full",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `input-label capitalize block  mb-2 ${labelClasses || ""}`,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `input-wrapper border  w-full h-full overflow-hidden relative ${error ? "border-qred" : "border-qgray-border"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        placeholder: placeholder,
                        value: value,
                        onChange: inputHandler,
                        className: `input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none ${inputClasses || "h-full"}`,
                        type: type,
                        id: name
                    }),
                    children && children
                ]
            })
        ]
    });
};


/***/ })

};
;