"use strict";
exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 3591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DefaultUser = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultUser);


/***/ }),

/***/ 6681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9363);

function ServeLangItem() {
    const langCntnt = (0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    return langCntnt && langCntnt;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServeLangItem);


/***/ }),

/***/ 4339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8522);



function CheckProductIsExistsInFlashSale({ id , price , sign =true , className ,  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.websiteSetup);
    const { 0: flashSale , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: calPrice , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (websiteSetup) {
            setData({
                flashSale: websiteSetup.payload.flashSale,
                flashSaleActive: websiteSetup.payload.flashSaleActive,
                flashSaleProducts: websiteSetup.payload.flashSaleProducts
            });
        }
    }, [
        websiteSetup
    ]);
    const calcProductPrice = (id, price)=>{
        // console.log(id, price);
        // console.log(flashSale);
        if (flashSale && flashSale.flashSaleActive) {
            const getId = flashSale.flashSaleProducts.find((item)=>parseInt(item.product_id) === parseInt(id));
            if (getId) {
                const offer = parseInt(flashSale.flashSale.offer);
                const discountPrice = offer / 100 * price;
                const mainPrice = parseFloat(price) - discountPrice;
                setPrice(mainPrice);
            } else {
                setPrice(price);
            }
        } else {
            setPrice(price);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (id && price) {
            calcProductPrice(id, price);
        }
    });
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    if (sign) {
        return currency_icon ? currency_icon + parseFloat(calPrice).toFixed(2) : "$" + parseFloat(calPrice).toFixed(2);
    } else {
        return parseFloat(calPrice).toFixed(2);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckProductIsExistsInFlashSale); //(27 * 20 /100)-27
 //offer =(20/100*price)
 //total=price-offer


/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x7": () => (/* binding */ fetchCart)
/* harmony export */ });
/* unused harmony export cart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);


//constant
const CART = "CART";
//intialState
const initialState = {
    cart: null,
    status: null
};
//fetch data from api
const fetchCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("CART/fetchCart", async ()=>{
    if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) {
        const res = await fetch(`${"https://jaralayoun.com/srv/"}api/cart?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().access_token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        return data;
    }
    return false;
});
//create action and reducer
const cart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: CART,
    initialState,
    extraReducers: {
        [fetchCart.pending]: (state, action)=>{
            state.status = "loading";
        },
        [fetchCart.fulfilled]: (state, { payload  })=>{
            state.cart = payload;
            state.status = "success";
        },
        [fetchCart.rejected]: (state, action)=>{
            state.status = "failed";
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart.reducer);


/***/ }),

/***/ 9363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ languageModel)
/* harmony export */ });
function languageModel() {
    if (false) {}
    return false;
};


/***/ }),

/***/ 8522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ settings)
/* harmony export */ });
function settings() {
    if (false) {}
    return false;
};


/***/ })

};
;