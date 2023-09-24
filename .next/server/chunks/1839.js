"use strict";
exports.id = 1839;
exports.ids = [1839];
exports.modules = {

/***/ 1839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rh": () => (/* binding */ fetchCompareProducts)
/* harmony export */ });
/* unused harmony export compareAction */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);


const initialState = {
    compareProducts: null,
    status: null
};
const fetchCompareProducts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("COMPARE/fetchCompareProducts", async ()=>{
    if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) {
        const res = await fetch(`${"https://jaralayoun.com/srv/"}api/user/compare-product?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().access_token}`, {
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
const compareAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "COMPARE",
    initialState,
    extraReducers: {
        [fetchCompareProducts.pending]: (state, action)=>{
            state.status = "loading";
        },
        [fetchCompareProducts.fulfilled]: (state, { payload  })=>{
            state.compareProducts = payload, state.status = "success";
        },
        [fetchCompareProducts.rejected]: (state, action)=>{
            state.status = "failed";
        }
    }
});
// Action creators are generated for each case reducer function
// export const { SET_WISHLIST_ACTION } = wishlistAction.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAction.reducer);


/***/ })

};
;