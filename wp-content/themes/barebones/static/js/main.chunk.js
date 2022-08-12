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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/Footer.js");
/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Homepage */ "./src/Homepage.js");
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\App.js";






function App() {
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Homepage");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Menu_Homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsideMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setTitle: setTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Homepage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Home */ "./node_modules/@mui/icons-material/Home.js");
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Image */ "./node_modules/@mui/icons-material/Image.js");
/* harmony import */ var _mui_icons_material_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Call */ "./node_modules/@mui/icons-material/Call.js");
/* harmony import */ var _mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\AsideMenu.js";






function AsideMenu(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-aside-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sx: {
      size: 'large'
    },
    className: "App-menu-item",
    id: "Item1",
    onClick: () => props.setTitle("Homepage"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "App-menu-item",
    id: "Item2",
    onClick: () => props.setTitle("page2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "App-menu-item",
    id: "Item3",
    onClick: () => props.setTitle("page3"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AsideMenu);

/***/ }),

/***/ "./src/Footer.js":
/*!***********************!*\
  !*** ./src/Footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Instagram */ "./node_modules/@mui/icons-material/Instagram.js");
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Twitter */ "./node_modules/@mui/icons-material/Twitter.js");
/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Facebook */ "./node_modules/@mui/icons-material/Facebook.js");
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\Footer.js";






function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Footer_block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Footer_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Footer_name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "\u0422\u0415\u0425\u041D\u041E\u041C\u0410\u041A\u0415\u0422 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 51
    }
  }), " \u041C\u0410\u041A\u0415\u0422\u042B \u0418 \u041C\u041E\u0414\u0415\u041B\u0418 \u0422\u0415\u0425\u041D\u0418\u041A\u0418 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 81
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "Tel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 86
    }
  }, "+375 29 685-25-15"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 127
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "Tel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 132
    }
  }, "+7 812 336-5024"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Footer_c",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 171
    }
  }, "\xA9 2011-2019 \xAB\u0422\u0415\u0425\u041D\u041E\u041C\u0410\u041A\u0415\u0422\xBB.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Footer_icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "Insta_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "Twitter_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "Facebook_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Gallery.js":
/*!************************!*\
  !*** ./src/Gallery.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Gallery_Architecture_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery/Architecture.png */ "./src/Gallery/Architecture.png");
/* harmony import */ var _Gallery_Architecture_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Gallery_Architecture_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Gallery_Ships_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gallery/Ships.png */ "./src/Gallery/Ships.png");
/* harmony import */ var _Gallery_Ships_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Gallery_Ships_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Gallery_Army_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gallery/Army.png */ "./src/Gallery/Army.png");
/* harmony import */ var _Gallery_Army_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Gallery_Army_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Gallery_Avia_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Gallery/Avia.png */ "./src/Gallery/Avia.png");
/* harmony import */ var _Gallery_Avia_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Gallery_Avia_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Gallery_Auto_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Gallery/Auto.png */ "./src/Gallery/Auto.png");
/* harmony import */ var _Gallery_Auto_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Gallery_Auto_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Gallery_Transport_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Gallery/Transport.png */ "./src/Gallery/Transport.png");
/* harmony import */ var _Gallery_Transport_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Gallery_Transport_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\Gallery.js";









function Gallery() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog_block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Img_with_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Gallery_Ships_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "Catalog_item item1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Img_descr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "\u041A\u043E\u0440\u0430\u0431\u043B\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Img_with_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Gallery_Army_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "Catalog_item item2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Img_descr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "\u041C\u0430\u043A\u0435\u0442\u044B \u0432\u043E\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Img_with_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Gallery_Architecture_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "Catalog_item item3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Img_descr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Img_with_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Gallery_Avia_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "Catalog_item item4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Img_descr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "\u0410\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043C\u0430\u043A\u0435\u0442\u044B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Img_with_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Gallery_Transport_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "Catalog_item item5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Img_descr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Img_with_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Gallery_Auto_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "Catalog_item item6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Img_descr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438 \u0438 \u0442\u0440\u0430\u043A\u0442\u043E\u0440\u044B")));
}

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./src/Gallery/Architecture.png":
/*!**************************************!*\
  !*** ./src/Gallery/Architecture.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Architecture.dff59c10.png";

/***/ }),

/***/ "./src/Gallery/Army.png":
/*!******************************!*\
  !*** ./src/Gallery/Army.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Army.f53653f8.png";

/***/ }),

/***/ "./src/Gallery/Auto.png":
/*!******************************!*\
  !*** ./src/Gallery/Auto.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Auto.8276e189.png";

/***/ }),

/***/ "./src/Gallery/Avia.png":
/*!******************************!*\
  !*** ./src/Gallery/Avia.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Avia.ee0a6a81.png";

/***/ }),

/***/ "./src/Gallery/Ships.png":
/*!*******************************!*\
  !*** ./src/Gallery/Ships.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Ships.72d2d5e8.png";

/***/ }),

/***/ "./src/Gallery/Transport.png":
/*!***********************************!*\
  !*** ./src/Gallery/Transport.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Transport.5160b0b4.png";

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
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery */ "./src/Gallery.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider/Slider */ "./src/Slider/Slider.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\Homepage.js";






function Homepage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header_page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }, "console.log(", props.title, ");", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Slider_About",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "About_us",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "About_us_bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "\u041E \u043D\u0430\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "About_us_bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 32
    }
  }, "\u0422\u0435\u0445\u043D\u043E\u043C\u0430\u043A\u0435\u0442"), " - \u043C\u0430\u043A\u0435\u0442\u043D\u0430\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u0438 3d \u043A\u043E\u043F\u0438\u0438 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u043C\u0430\u043A\u0435\u0442\u044B \u0434\u043B\u044F \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u043A \u0438 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0439.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 203
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 208
    }
  }, "\u0423\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442 \u043C\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u043D\u0430\u0448\u0438\u0445 \u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0447\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B\u043E \u043D\u0430\u0441 \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438 \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445 \u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0445 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u0432."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 356
    }
  }, "\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0434\u043B\u044F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 379
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 383
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 387
    }
  }, "\u043C\u0443\u0437\u0435\u0435\u0432,")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 412
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 416
    }
  }, "\u0432\u044B\u0441\u0442\u0430\u0432\u043E\u043A \u0438 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0439,")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 457
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 461
    }
  }, "\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438,")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 510
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 514
    }
  }, "\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0446\u0435\u043D\u0442\u0440\u043E\u0432.")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "We_do",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "We_do_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 44
    }
  }, "\u041C\u044B \u0434\u0435\u043B\u0430\u0435\u043C: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "We_do_underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 81
    }
  }, "\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u044B\u0435 \u043C\u0430\u043A\u0435\u0442\u044B, "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "We_do_underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 139
    }
  }, "\u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u044B\u0435 \u043C\u0430\u043A\u0435\u0442\u044B \u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 (\u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043C\u0430\u043A\u0435\u0442\u044B),"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "We_do_underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 239
    }
  }, "\u043C\u0430\u043A\u0435\u0442\u044B \u043A\u043E\u0440\u0430\u0431\u043B\u0435\u0439,"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "We_do_underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 291
    }
  }, " \u0434\u0438\u043E\u0440\u0430\u043C\u044B,"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "We_do_underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 336
    }
  }, "\u0440\u0435\u043F\u043B\u0438\u043A\u0438 \u043E\u0440\u0443\u0436\u0438\u044F"), " \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "We_do_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 408
    }
  }, "\u0422\u0430\u043A\u0436\u0435 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "We_do_underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 461
    }
  }, "\u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0438 \u0438 \u043A\u043E\u043B\u043F\u0430\u043A\u0438,"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "We_do_underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 533
    }
  }, "\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u043A\u043E\u0440\u043E\u0431\u0430 \u0438 \u043A\u043E\u0444\u0440\u044B."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Catalog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Gallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "Gallery_button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E")));
}

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./src/Slider/Slider.js":
/*!******************************!*\
  !*** ./src/Slider/Slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_image1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/image1.png */ "./src/Slider/icons/image1.png");
/* harmony import */ var _icons_image1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_image1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_image2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/image2.png */ "./src/Slider/icons/image2.png");
/* harmony import */ var _icons_image2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_image2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_image3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/image3.png */ "./src/Slider/icons/image3.png");
/* harmony import */ var _icons_image3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_icons_image3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons_image4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/image4.png */ "./src/Slider/icons/image4.png");
/* harmony import */ var _icons_image4_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_image4_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons_image5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/image5.png */ "./src/Slider/icons/image5.png");
/* harmony import */ var _icons_image5_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_icons_image5_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_image6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/image6.png */ "./src/Slider/icons/image6.png");
/* harmony import */ var _icons_image6_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_icons_image6_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icons_image7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/image7.png */ "./src/Slider/icons/image7.png");
/* harmony import */ var _icons_image7_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_icons_image7_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icons_image8_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/image8.png */ "./src/Slider/icons/image8.png");
/* harmony import */ var _icons_image8_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_icons_image8_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons_image9_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/image9.png */ "./src/Slider/icons/image9.png");
/* harmony import */ var _icons_image9_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_icons_image9_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _icons_image10_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/image10.png */ "./src/Slider/icons/image10.png");
/* harmony import */ var _icons_image10_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_icons_image10_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icons_image11_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/image11.png */ "./src/Slider/icons/image11.png");
/* harmony import */ var _icons_image11_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_icons_image11_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _icons_image12_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/image12.png */ "./src/Slider/icons/image12.png");
/* harmony import */ var _icons_image12_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_icons_image12_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icons_image13_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/image13.png */ "./src/Slider/icons/image13.png");
/* harmony import */ var _icons_image13_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_image13_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _icons_image14_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/image14.png */ "./src/Slider/icons/image14.png");
/* harmony import */ var _icons_image14_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_icons_image14_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _icons_image15_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/image15.png */ "./src/Slider/icons/image15.png");
/* harmony import */ var _icons_image15_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_icons_image15_png__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\OpenServer\\domains\\site\\wp-content\\themes\\barebones\\react-src\\src\\Slider\\Slider.js";



















function Slider() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Carousel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    autoPlay: true,
    autoPlayInterval: "5000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image4_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image5_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image6_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image7_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image8_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image9_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image11_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image12_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image13_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image14_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_image15_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    className: "Slider_image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/Slider/icons/image1.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/Slider/icons/image10.png":
/*!**************************************!*\
  !*** ./src/Slider/icons/image10.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image10.bf0ddcfc.png";

/***/ }),

/***/ "./src/Slider/icons/image11.png":
/*!**************************************!*\
  !*** ./src/Slider/icons/image11.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image11.c804303d.png";

/***/ }),

/***/ "./src/Slider/icons/image12.png":
/*!**************************************!*\
  !*** ./src/Slider/icons/image12.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image12.ddd3931e.png";

/***/ }),

/***/ "./src/Slider/icons/image13.png":
/*!**************************************!*\
  !*** ./src/Slider/icons/image13.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image13.8925fef5.png";

/***/ }),

/***/ "./src/Slider/icons/image14.png":
/*!**************************************!*\
  !*** ./src/Slider/icons/image14.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image14.178eaafe.png";

/***/ }),

/***/ "./src/Slider/icons/image15.png":
/*!**************************************!*\
  !*** ./src/Slider/icons/image15.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image15.06b667f8.png";

/***/ }),

/***/ "./src/Slider/icons/image2.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image2.3eac6700.png";

/***/ }),

/***/ "./src/Slider/icons/image3.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image3.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image3.0dedffa3.png";

/***/ }),

/***/ "./src/Slider/icons/image4.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image4.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image4.ee09b1d6.png";

/***/ }),

/***/ "./src/Slider/icons/image5.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image5.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image5.54b52a4b.png";

/***/ }),

/***/ "./src/Slider/icons/image6.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image6.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image6.260da65c.png";

/***/ }),

/***/ "./src/Slider/icons/image7.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image7.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image7.03697acb.png";

/***/ }),

/***/ "./src/Slider/icons/image8.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image8.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image8.8a6a74c3.png";

/***/ }),

/***/ "./src/Slider/icons/image9.png":
/*!*************************************!*\
  !*** ./src/Slider/icons/image9.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image9.d6476771.png";

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

module.exports = "data:image/png;base64,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"

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