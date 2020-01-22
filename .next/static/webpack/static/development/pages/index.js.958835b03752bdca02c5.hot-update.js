webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/event/EventThumbnail.tsx":
/*!*********************************************!*\
  !*** ./components/event/EventThumbnail.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/colors */ "./theme/colors.ts");
/* harmony import */ var geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolib/es/getDistance */ "./node_modules/geolib/es/getDistance.js");
/* harmony import */ var geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mj/repo/siliconrhino/components/event/EventThumbnail.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var EventThumbnailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "EventThumbnail__EventThumbnailWrapper",
  componentId: "sc-16a7lug-0"
})(["display:flex;flex-wrap:wrap;border-radius:10%;box-shadow:", ";cursor:pointer;&:hover{box-shadow:", ";}"], _theme_colors__WEBPACK_IMPORTED_MODULE_2__["BoxShadows"].unfocusedBoxShadow, _theme_colors__WEBPACK_IMPORTED_MODULE_2__["BoxShadows"].focusedBoxShadow);
var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "EventThumbnail__TitleWrapper",
  componentId: "sc-16a7lug-1"
})(["display:flex;"]);
var IdWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "EventThumbnail__IdWrapper",
  componentId: "sc-16a7lug-2"
})(["color:", ";"], _theme_colors__WEBPACK_IMPORTED_MODULE_2__["Colors"].gray);
var ThumbnailTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "EventThumbnail__ThumbnailTitle",
  componentId: "sc-16a7lug-3"
})(["font-weight:bold;"]);
var LocationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "EventThumbnail__LocationWrapper",
  componentId: "sc-16a7lug-4"
})([""]);

var EventThumbnail = function EventThumbnail(event) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      userLat = _useState[0],
      setUserLat = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      userLon = _useState2[0],
      setUserLon = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLat(position.coords.latitude);
      setUserLon(position.coords.longitude);
    });
  }, []);
  var eventLat = event.location.latitude;
  var eventLon = event.location.longitude;
  return __jsx(EventThumbnailWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(TitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(IdWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "#", event.id), __jsx(ThumbnailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, event.title), __jsx(LocationWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_3___default()({
    latitude: userLat,
    longitude: userLon
  }, {
    latitude: eventLat,
    longitude: eventLon
  }, 100) / 1000)));
};

/* harmony default export */ __webpack_exports__["default"] = (EventThumbnail);

/***/ })

})
//# sourceMappingURL=index.js.958835b03752bdca02c5.hot-update.js.map