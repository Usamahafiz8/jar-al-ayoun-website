"use strict";
exports.id = 3402;
exports.ids = [3402];
exports.modules = {

/***/ 3402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-underscore-dangle */ 
function CountDown(lastDate) {
    const { 0: showDate , 1: setDate  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { 0: showHour , 1: setHour  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { 0: showMinute , 1: setMinute  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { 0: showSecound , 1: setDateSecound  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    // count Down
    const provideDate = new Date(lastDate);
    // format date
    const year = provideDate.getFullYear();
    const month = provideDate.getMonth();
    //   console.log(month);
    const date = provideDate.getDate();
    //   console.log(date);
    const hours = provideDate.getHours();
    //   console.log(hours);
    const minutes = provideDate.getMinutes();
    //   console.log(minutes);
    const seconds = provideDate.getSeconds();
    //   console.log(seconds);
    // date calculation logic
    const _seconds = 1000;
    const _minutes = _seconds * 60;
    const _hours = _minutes * 60;
    const _date = _hours * 24;
    // interval function
    const startInterval = ()=>{
        const timer = setInterval(()=>{
            const now = new Date();
            const distance = new Date(year, month, date, hours, minutes, seconds).getTime() - now.getTime();
            if (distance < 0) {
                clearInterval(timer);
                return;
            }
            setDate(Math.floor(distance / _date));
            setMinute(Math.floor(distance % _hours / _minutes));
            setHour(Math.floor(distance % _date / _hours));
            setDateSecound(Math.floor(distance % _minutes / _seconds));
        }, 1000);
    };
    // effect
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (lastDate !== "") {
            startInterval();
        }
    });
    return {
        showDate,
        showHour,
        showMinute,
        showSecound
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountDown);


/***/ })

};
;