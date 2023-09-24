"use strict";
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 16:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Selectbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6681);



function Selectbox({ datas =[] , defaultValue ="" , className , action , children ,  }) {
    const { 0: item , 1: setItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: defaultValue
    });
    const { 0: toggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handler = (e, value)=>{
        if (action) {
            action(value);
        }
        setItem(value);
        setToggle(!toggle);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultValue) {
            setItem({
                name: defaultValue
            });
        } else {
            setItem({
                name: "Select"
            });
        }
    }, [
        datas,
        defaultValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `my-select-box ${className || ""}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>setToggle(!toggle),
                    type: "button",
                    className: "my-select-box-btn ",
                    children: children ? children({
                        item: item && item.name
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: item && item.name
                    })
                }),
                toggle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "click-away",
                    onClick: ()=>setToggle(!toggle)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `my-select-box-section ${toggle ? "open" : ""}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "list",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "cursor-not-allowed selected pointer-events-none",
                                children: (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()?.Select_One
                            }),
                            datas && datas.length > 0 && datas.map((value)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: item && item.name === value.name ? "selected" : "",
                                    onClick: (e)=>handler(e, value),
                                    children: value.name
                                }, Math.random()))
                        ]
                    })
                })
            ]
        })
    });
};


/***/ })

};
;