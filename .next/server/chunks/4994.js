"use strict";
exports.id = 4994;
exports.ids = [4994];
exports.modules = {

/***/ 4994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BW": () => (/* binding */ fetchWishlist),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export wishlistAction */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);


const initialState = {
    wishlistData: null,
    status: null
};
const fetchWishlist = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("WISHLIST/fetchWishlist", async ()=>{
    if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) {
        const res = await fetch(`${"https://jaralayoun.com/srv/"}api/user/wishlist?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().access_token}`, {
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
const wishlistAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "WISHLIST",
    initialState,
    extraReducers: {
        [fetchWishlist.pending]: (state, action)=>{
            state.status = "loading";
        },
        [fetchWishlist.fulfilled]: (state, { payload  })=>{
            state.wishlistData = payload, state.status = "success";
        },
        [fetchWishlist.rejected]: (state, action)=>{
            state.status = "failed";
        }
    }
});
// Action creators are generated for each case reducer function
// export const { SET_WISHLIST_ACTION } = wishlistAction.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistAction.reducer);


/***/ }),

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ auth)
/* harmony export */ });
function auth() {
    if (false) {}
    return false;
};


/***/ })

};
;