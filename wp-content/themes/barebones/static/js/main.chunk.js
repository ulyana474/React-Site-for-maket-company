(this["webpackJsonpbarebones"] = this["webpackJsonpbarebones"] || []).push([["main"],{

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsideMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsideMenu */ "./src/AsideMenu.js");
/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Homepage */ "./src/Homepage.js");
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\App.js";





function App() {
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Homepage");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Menu_Homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsideMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setTitle: setTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Homepage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/AsideMenu.js":
/*!**************************!*\
  !*** ./src/AsideMenu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\AsideMenu.js";



function AsideMenu(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-aside-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-menu-item",
    id: "Item1",
    onClick: () => props.setTitle("Homepage"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-menu-item",
    id: "Item2",
    onClick: () => props.setTitle("page2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-menu-item",
    id: "Item3",
    onClick: () => props.setTitle("page3"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-menu-item",
    id: "Item4",
    onClick: () => props.setTitle("page4"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AsideMenu);

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\Header.js";




function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header-text-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Header-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, "\u041C\u0410\u0421\u0428\u0422\u0410\u0411\u041D\u042B\u0415 \u041A\u041E\u041F\u0418\u0418 \u0418 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 67
    }
  }), "\u041C\u0410\u041A\u0415\u0422\u042B \u0422\u0415\u0425\u041D\u0418\u041A\u0418,\u0421\u0423\u0414\u041E\u0412, \u0421\u041E\u0420\u0423\u0416\u0415\u041D\u0418\u0419", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 103
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "Tel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 1
    }
  }, "+375 29 685-25-15"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "logo image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "Logo_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "\u0422\u0415\u0425\u041D\u041E\u041C\u0410\u041A\u0415\u0422")));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Homepage.js":
/*!*************************!*\
  !*** ./src/Homepage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\Homepage.js";




function Homepage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header_page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "News_block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "News_item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Catalog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog_block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog_item item1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog_item item2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog_item item3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog_item item4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog_item item5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog_item item6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,UklGRiQTAABXRUJQVlA4WAoAAAAYAAAAVgAAZgAAVlA4TEQSAAAvVoAZEE0waBvJkZL5vsefcH0IEf2fAFZdaAQoQDl4Y0JCX0ALaGe6HMWh0heMpGgjUvad444fFoohSZLSn3Cfg7AOcyIQDUPmFkVRhKBt21hax5/aIBTCEVz9nwDUnBwBqUCQ/cKD1QAAAbSgYAEwBCCEJODDQYvQRPgAggIswOKWDh7oGexFuFhtW+VYzrf3lEqlkmVZlmW1+sBQq9WyrJZleTho9dVRmJmZmZmZmZnpipkGWgdbw3CgdaDVsiyrZJVKpa29L6psl6tKuX4uA8MzO3sqUOFBT9+0dlzS2RryCTlxKjiMVnpoqwIVcipM/7lKpnzuBu4ObA1fhRxVBitMTksVzgG5w5zDIFGQJEmRJJl7RefU9tXSMTP9/znMPNey2FvXm+0hwW0bQZJYRu/e/f+5hzoVLWbbjknS9b9Va9u2cWTbtm3b9h5pUOl0Kp3OsFPpjG3btq31bs33TYCgYOyPOp3is/eV4tcJ8VggAmkCbNEh/QTYAXZzKsAOsJtTAXaA3ZwKsAPs5lSAHWA3pwKkj4DtTTvA1sDwESVPrv/bBZkJv8dp8SKvRpDIh4L4iBejxhfZf0PBUO7Rb/LIDbFs1zCShJwSY7SILv56nb69BEtg9fziw4JK9x7/fPEib14KE3te+pGbPuq8m656cU2c7RdiyHWjE1m2ZU3UBqva0z24gwR/oyPe669RKXDg2fEf9GQPHRoPXX3uuPgkDLpXJ/fNVjZEqNhzmLc7Vd9oqypYTaqJeI2/dkly7qkrxh0jsYswEaQQklBU8gDKlDAQ5Sg2XcC6dVPTG3zYMMF2Dj/v1PfYNY/sztl0mRAYqI9OIZ7blm+7SxKwhMXhFrQ8gaWxNSIcWSE8FrPN0lF00EQxpRwK915IakZNDEnpKLcPnmzlZbY74wJ33guY2Hmv375xxnTGhey/tlJuhSyS4eCJEYZCIkRAr49OdPDvTamKW99WzAarD025vQsB6Acwm4VRiAFh077Qq/Sv9FYGhhQZJUFZ8Idcz5l7/PSVBP+sjcoIc3mLz4a9NVcMIbNuEIJbmeRQZugCw8EMizqjmxb3xtJRQGuwLR9anhNBSyyP1s/4ps7TOtzeWaJJqu8vLCSaETAWHhkpegbrB30jx3TXJQZhagoTjbzfmyXe6oNaVy22hFDuDAwLExLgdZswRGo6ia+bNjg4jE4eOgyEQZillpAKJQs0HmzOe0hzXPaJD7k9MAe+b4IBiU6MGV2JviSycCHoM32kv7J6pAw0eShlQfnrdDQhyLsEK9Z3taQwJRHy4GMmy54nTKdZ6nI6zNktPWwGY5KEYSaUtHzfB0pVDcARjvqcNKKnSNUl1fdNMMPZI0zcCYWo2X2hD3qUAVjrqww08TzfZQlB/VRBC6ITfMgFnkoqnZaSUkb6ZY1XlLR+AGE41vAcu7zYAXQNOsxO/1ZbYGc8nHuDVrkF4ECBWYDyUfc2zM5YJlaEJourR/oHawfrRwbWlIEmpljxXQARs5ZkLQh2QKIdVRSCsb3dgAXckrRC68c5cbbqkrqMmSQh7Gk3XMgY5MaVrx3KMBx2hjxhQktMBWixvDw6GTE8snPQN/idnpH7tdUF0FxZ4XxNABTn6o+Zte+qR6Fqgn6g4DX+FPQsfr3xvbFFCqeIU4TCbNUl1QymMRKDudXi4p6GxdbWsGXCcNj5pxFiQiKcbJIIn4jTt2b9Sm/Rs7LKlxigyTK+BqTO3V4j2IH0UZq7awkEbagpUDzPTX26y4SEhBKUZoRXFEk7FdxeSywfxSkXwPMqCVPpMkthWF2c3UludcXJoZM47FlcdJveyvqR3StloMlDKbsATS2PZVzGedeGEpQFk+RkDQrghf4Rgv/70Oiv6Aj+MkgHU5ZnCdEDRaougHetswzwuuDb28zqypu8fokBmnie75LafEjJdSgyzrrWLxdoCBqRByINDL7ank/3xzdjaHcEQckea5xVtwAuqV87NNky6d0o43m60XQEgMZRdcnoYxzh5OnvlYtmxnyq4xfqlR7dTz513+fXZKYgzcTsghvYj3MLszRbfoe5Lc0qaHqsPpqzlFwyq0VGIegg2CqvCpUOBo8d/FS335xkYKZUmhhOsaoJbB5D1cUDaGp9EGwv4NZnM/MYBGXBX5IaqTDmhle/UK/yx/05gUKh5WUnAxnU+mEy6zMoBDXBXBlCjbUFodbYuRGkZSydbE9lweTOlewaEu2oMO6BUbffVIjkUo5ZnPwQ1RAMEoxEjecTL0K9yj1XhVDyilqX7RxzRAdItEFYMP5GzzAqjkL9m/TLOdZQgpJghjzRDTW+d9oFg3TP/nZBpCXhBN+fUzM1QV1wujzwHGLBBNXgsd0/fdknf+07lk8hfQQ542itKNQQvCfTvoqJPpW+4FW+2QuxOO33KTJv41ieeaeYTXZgExQCG0FdcKiUj/jDCaHe6cOOP1A+a4kloHHXWelXBFBy7Gx5nBYe92/zDSiixJ6TOFkx8Q3Hgnd7uU82xy4ryauyIXQkHVEDqrPzxcfZ2WAX7CLCyw2U4tSaYBfBF/xhBlAfhyNjZcva2rSO8pdeMDIJmYj569YSoEEBm5KdoTql6lS1ig2VlbIOGnLjuxBsEYwR2yDTiYrMCpa93de99X7v37teq+8dm/adKrjn8Nl5l8+YmVi4sb+8jF8G12rYbm+v2+OoY/Vx/PG2Lf0ArHgeLkBFrFXQKrjBPHfH3v/8e0kwj0zXEPz3iVfbLp3dF8Nzh86dfL1V8IBlr6u4lXfjROJ5AkAgPHWqY+FsgypHex6+70Pl0GbjMleFfT0HQjtGRaTDmz0axVaUM0bPjZveIx65dHZDPHbb2kQ1Okk0/96uWVrjhMy9Qp6R8LvekhHmW77PeAvYK/yDT+rIZN/mirBx+Vw9JJuYhkizEnuFyP/sHdeEj9+Up4qm/8nUGwyhniXe+0x8G850RL22a7PRYbgZEiHGDKx2IkW76TJw1tbJCFMZDt58i0UfCivgk2pcuXzYW3N5uDwzAvFgiGhD3OhMm4guWWcGIvWmtOewpxk3SswTTDUjVGZgcGvPp/jumzKSHdOFFBE3vlBoU0FrlGzOJMOWEJvcQEwIVpkbd1c6YOnGdz4wxCa6GQkjYCi4PlC50Q9cudm72dJjXhktwkwIfspUoppw0UN6TA9cNOlSyii5INMKQTd8MvxsZ6Ge76lPNmaf66wuKVYSEgudEBWL64s/8lpDk81M5fCQmOOXI9BdlDtIm1n0i7egcmjYBHe+tD/fcJ1RT3gSaZIiceCWkc6qAwPQK3qVtU6Z1O+6Zk3Qge6Ia2YKVuHoV/prE+LYL4TEb7CycO8H0G3mo8UFjJFEjH/4ZCh4343/0FBNN4TInguv8s1c2hNnEi/zBxF97p0QYTiufWEA1iknXdRXGRAdmGLFdwWZhuAvmTpRIeMbtkK9zHdfZaM8HW31muVTCKfQ+gHwlr1k4Ei/0xx5VhweOhSMMAqbE91zltEIk1DE0yaiC+tEX9JH+kzbEgARpljhfE0AzKAEJYkatWtm7tIINRCnvkOZlOjtpJuSxnPi/O3ZBniYiWEeuuOMnzdh9+LnR5J2ZWGTJwYXKgZgrelPVh8CELCA7wLNeWe7tRzCy1qgIdHIJH+M1PZnt0ckNW6v9StO3MajAq0jHBbMAcJgEhNulYD2ZdqbpDJg3uTzqwwErFTKGpA2kGb+xNmjtS6X1LRgEKjJuOxFqP5VRWo85nCkj6I7W0TjKBarmrAazQBoeWJhaObqoYzn6eZXAFyLw00BzgnYDki0QyKY3Bd4vX7tNuzbVMOy7J7ImHbBxSkVp9yliKdFAEfzPVT5B8arITfU9JfIrZpicl/qvFD9VfWhzBxb1fKMhR1Qn6NA2ups3a0HswHjrVr9/BucINhemyR4o7dvl/ayKIESkxkw8dlAWp4WrJCLZiY9uv+G4M+1QwUVLGQug7YlGcWvCbbKm2LSPmi/eIV7dWmzTQZKWJxC9GQPDoLyMTdg8tUuweLe0mokCuHk7LGQUQhqgrkyhJo03uz2w16rNm01X0A9e9CgxvFko0IwcQ16GI3SeGbqTjYUuKujGoIRgqGoLOA9JFjXNerm3mi8XLKzweaOLpyAWJCNipe6c3t1lzlfzgyFbChw518XlAQLZGqhkhW80K0Q/LteVZYkJe41lQ1VrWUUEk2C3/9QZcf7vBVe53Cbo7IsKSVKTjbYd77jqYJ1MjVQITtV9MVvCNavk2ZTXJMZwJkEm6pdtXgZhaBFsFpKqCzhHXzxPF1Lh9V3YiHbDiWLw8kYOIHoZY2X4ZoSDVTIVoVg8oYYMhqFLnUAjfK9yLj0ywXueEeOaQj67URlDZsQqs+uepOx/sPNLXUk3Ut+rYZT2D5nccw/Zoy61rGWozgFzDS4pnCiBkhU+UOy+oryyqGLR658s+NjbS/igbDH933AKdnpjoITKVQQoyM3PAT/6VglMeWb5JFWVHbBJdXRnzt26ifa0aE4z2i3HSx7JJkdwxM/5PFbPn5K3dTBiu8DqiaxTqxBMEymZQdPK+6D4H+y/PXuLRSf/end8c16lwxlD2xePBCVnbpMciZSw4ETc/K1w6EVNcngUdV5SB0N+zJXXri8ZuOOjn/CaIqWlo9/9w4SbOdUsn5w7eB3aS986mFPxS8O2awJMWEw4b5/we7FT3pC4pl7tpuIASqbYG/N1c2+nq3hn+JF5DphEjPJMdFJWzXlzV6t24ZjFcHK7Bt0hz7HD5vSzg7ouqobitFii0UsY4QFYdjRYX7eJJ1F35q24jMf8Ua3s/eFLftc62tDfI40OsmFqCZkdh88SWXNKvWM0p6lHDY6nSiYn3V76W+o5/rh/nxZeTkq9VXXwpToNA+Ngw7+lmCGRBgKLZbbPS9x+jz0Tx+aqER7wk6X6Gv6RE+yXhED1zxV8LPg1VrWHehC9bcLXuvHjUxkMBe+K2lu2w50DW7r3/bsm1UOhUq0pqPoHemBvmsGIFQh1QSv/EsynS2YKxZZpxCM6itDduiWWovCYIJnJklPxLTBn1+g2HHjZ9joH2kfAQgqhsHXkH0daVrQC1TWcXkWXHJbOymWkT7ZkkIDUh/q7buzFQaPPMV2EfBQyi6ABVoDgiZqOaB4qnu3de0wJx4hLFk+GlpiedD6qbqw1AFDQNVzSdv8wZo6VTBJ/rIGRQ6+0L4Q/Psko8qiiYTWsVihkSIUtHBixQsB/+DOFlxpArAtn6zlZRoSPyHvipz4kA1e4NU6rF6tiUdZh+8SvWIWsE98CGktM2txzIF94nlKsINgmjwyD0Uuqq7TQrD2SUqHpcfXjrK0Yh6gme5YRAD21wCCKrXcYP8BL/Pqbdi9+ic+K7UZUydr/YpmypgBqfaJWl46VbBGpkGUyU1B2iWY/WSr1nIUdfHiKxvjSn9HVEPQARlCUM8RoiXUqnLJy502NJlgIdvOROpUmRb896tUyOHPvRg0ikIxY0/Amft1FII+gumo3NmIUJe0ewyUDCQsnexMQPqozhYtnQJBG8SCXB58tR3XrOZ9x/8ivDyBx0if7KiaYJygLyqXXuEs1PM96JUElUyk4swE7McAggbEgtz+7E/v3m3DmgQKKNjjqhctTp4WLJGpC5XceqrjF4LDBtc+i1NxTf7NsYOx6jMoJJr+s6ZyC8Hnl3737h8uW5KBeolxOnOcKvhD0EyFHH+jt78QbOwpVSFqQeuXnbFK56EQtDz6RirXPuw2PE/dNmFvmxklCsWx7GZpGol2VMh1pQ8hWLzWtexQzDjpCnd2FIIBgrGonOMdTr94mk2HNmMioJ5O68O1QaJCjdxXCAZeaBj1m6q6kM7Syw01/cvyTCsqD/Bmc8EFqoYWc3a67b8ODxT8XyMfvt4Kr/LmbWkvC5JRopgumJn+llPIj+oZjov7rB+qplGknUHxIMFGuSdUXgDWHDr2JX79JsSwTzo4VfCXRCMV8uSGrVCv8u2qn5s9qlJmUAhqgrmyCpUvNkmofpz9ZjHOQCkFahxPhTz6cagZoFJUQzBIMBKVPz7TQkW9KzAhBSTaUCOfDm7t2DVMMyIUqOlflie6ofLJ8/23UH1VBynMSAAPLNfIr6/36q1GbVmClf9XTX+LXGomzz7fWQjWrisNPF4h6HCWPBAqv8BLbbdDm/sjgXLtmuZUpUKe1YcQLOwfusVAED/++6h884n/DD147ZJVj28SvEH+Vfyc4GbBlYKVeejzi0VYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAADydgEA6AMAAPJ2AQDoAwAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFcAAAADoAQAAQAAAGcAAAAAAAAA"

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\OpenServer\domains\site\wp-content\themes\barebones\react-src\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map