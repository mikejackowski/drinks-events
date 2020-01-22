webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/search/Search.tsx":
/*!**************************************!*\
  !*** ./components/search/Search.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-debounce-input */ "./node_modules/react-debounce-input/lib/index.js");
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_debounce_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_EventThumbnail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event/EventThumbnail */ "./components/event/EventThumbnail.tsx");

var _jsxFileName = "/Users/mj/repo/siliconrhino/components/search/Search.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Search__SearchWrapper",
  componentId: "sc-1flz1c3-0"
})([""]);
var SearchParamButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Search__SearchParamButton",
  componentId: "sc-1flz1c3-1"
})(["display:grid;justify-content:center;place-items:center;font-weight:bold;border:1px solid black;box-shadow:0 0 0 0 black;background:", ";"], function (props) {
  return props.isSelected ? 'blue' : 'none';
});
var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_debounce_input__WEBPACK_IMPORTED_MODULE_3__["DebounceInput"]).withConfig({
  displayName: "Search__SearchInput",
  componentId: "sc-1flz1c3-2"
})(["width:50%;border:1px solid black;"]);
var PageNumberButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Search__PageNumberButtonWrapper",
  componentId: "sc-1flz1c3-3"
})(["display:flex;justify-content:space-around;"]);

var Search = function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      pageNo = _useState[0],
      selectPageNo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2),
      pageSize = _useState2[0],
      setPageSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      searchQ = _useState3[0],
      setSearchQ = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      allEvents = _useState4[0],
      setEvents = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState5[0],
      setLoading = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isError = _useState6[0],
      setError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      eventsNo = _useState7[0],
      setEventsNo = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getEvents();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getEvents();
  }, [pageSize, pageNo, searchQ]);

  var getEvents = function getEvents() {
    var res, evnts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getEvents$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://mock-api.drinks.test.siliconrhino.io/events?page=".concat(pageNo, "&pageSize=").concat(pageSize, "&search=").concat(searchQ)));

          case 4:
            res = _context.sent;
            evnts = res.data;
            setEvents(evnts);
            setEventsNo(evnts.length + 1);
            setLoading(false);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            setLoading(false);
            setError(true);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 11]]);
  };

  if (isError) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Failed to load data.");
  }

  return __jsx(SearchWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(SearchInput, {
    minLength: 1,
    debounceTimeout: 300,
    placeholder: 'asdf' //@ts-ignore
    ,
    onChange: function onChange(event) {
      return setSearchQ(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "events: "), isLoading ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "loading...") : allEvents.map(function (event) {
    return __jsx(_event_EventThumbnail__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: event.id,
      time: event.time,
      title: event.title,
      creator: event.creator,
      guests: event.guests,
      type: event.type,
      location: event.location,
      comments: event.comments,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    });
  }), __jsx(PageNumberButtonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Current page:"), __jsx(SearchParamButton, {
    isSelected: pageNo === 1,
    onClick: function onClick() {
      return selectPageNo(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "1"), __jsx(SearchParamButton, {
    isSelected: pageNo === 2,
    onClick: function onClick() {
      return selectPageNo(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "2"), __jsx(SearchParamButton, {
    isSelected: pageNo === 3,
    onClick: function onClick() {
      return selectPageNo(3);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "3"), __jsx(SearchParamButton, {
    isSelected: pageNo === 4,
    onClick: function onClick() {
      return selectPageNo(4);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "4"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Items per page:"), __jsx(SearchParamButton, {
    isSelected: pageSize === 10,
    onClick: function onClick() {
      return setPageSize(10);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "10"), __jsx(SearchParamButton, {
    isSelected: pageSize === 15,
    onClick: function onClick() {
      return setPageSize(15);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "15"), __jsx(SearchParamButton, {
    isSelected: pageSize === 20,
    onClick: function onClick() {
      return setPageSize(20);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "20")));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.0f00b5d89ec91d3413ff.hot-update.js.map