module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/event/EventThumbnail.tsx":
/*!*********************************************!*\
  !*** ./components/event/EventThumbnail.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/colors */ "./theme/colors.ts");
/* harmony import */ var geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolib/es/getDistance */ "geolib/es/getDistance");
/* harmony import */ var geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mj/repo/siliconrhino/components/event/EventThumbnail.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const EventThumbnailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EventThumbnail__EventThumbnailWrapper",
  componentId: "sc-16a7lug-0"
})(["display:flex;flex-wrap:wrap;border-radius:10%;box-shadow:", ";cursor:pointer;&:hover{box-shadow:", ";}"], _theme_colors__WEBPACK_IMPORTED_MODULE_2__["BoxShadows"].unfocusedBoxShadow, _theme_colors__WEBPACK_IMPORTED_MODULE_2__["BoxShadows"].focusedBoxShadow);
const TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EventThumbnail__TitleWrapper",
  componentId: "sc-16a7lug-1"
})(["display:flex;"]);
const IdWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EventThumbnail__IdWrapper",
  componentId: "sc-16a7lug-2"
})(["color:", ";"], _theme_colors__WEBPACK_IMPORTED_MODULE_2__["Colors"].gray);
const ThumbnailTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EventThumbnail__ThumbnailTitle",
  componentId: "sc-16a7lug-3"
})(["font-weight:bold;"]);
const LocationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EventThumbnail__LocationWrapper",
  componentId: "sc-16a7lug-4"
})([""]);

const EventThumbnail = event => {
  const {
    0: userLat,
    1: setUserLat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: userLon,
    1: setUserLon
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setUserLat(position.coords.latitude);
      setUserLon(position.coords.longitude);
    });
  }, []);
  const eventLat = event.location.latitude;
  const eventLon = event.location.longitude;
  return __jsx(EventThumbnailWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(TitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(IdWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "#", event.id), __jsx(ThumbnailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, event.title), __jsx(LocationWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_3___default()({
    latitude: userLat,
    longitude: userLon
  }, {
    latitude: eventLat,
    longitude: eventLon
  }, 100) / 1000)));
};

/* harmony default export */ __webpack_exports__["default"] = (EventThumbnail);

/***/ }),

/***/ "./components/layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mj/repo/siliconrhino/components/layout/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__LayoutWrapper",
  componentId: "sc-17n0ot6-0"
})(["display:grid;"]);

const Layout = props => __jsx(LayoutWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/search/Search.tsx":
/*!**************************************!*\
  !*** ./components/search/Search.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-debounce-input */ "react-debounce-input");
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_debounce_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _event_EventThumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event/EventThumbnail */ "./components/event/EventThumbnail.tsx");
var _jsxFileName = "/Users/mj/repo/siliconrhino/components/search/Search.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Search__SearchWrapper",
  componentId: "sc-1flz1c3-0"
})([""]);
const SearchParamButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Search__SearchParamButton",
  componentId: "sc-1flz1c3-1"
})(["display:grid;justify-content:center;place-items:center;font-weight:bold;border:1px solid black;background:", ";"], props => props.isSelected ? 'aqua' : 'none');
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_debounce_input__WEBPACK_IMPORTED_MODULE_2__["DebounceInput"]).withConfig({
  displayName: "Search__SearchInput",
  componentId: "sc-1flz1c3-2"
})(["width:50%;border:1px solid black;"]);
const PageNumberButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Search__PageNumberButtonWrapper",
  componentId: "sc-1flz1c3-3"
})(["display:flex;justify-content:space-around;"]);

const Search = () => {
  const {
    0: pageNo,
    1: selectPageNo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: pageSize,
    1: setPageSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5);
  const {
    0: searchQ,
    1: setSearchQ
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: allEvents,
    1: setEvents
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: currentEvents,
    1: setCurrentEvents
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: eventsNo,
    1: setEventsNo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: totalPages,
    1: setTotalPages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  /**
   * setting up local state as database
   */

  const getInitialData = async () => {
    let data = [];
    let page = 1;
    setLoading(true);

    while (true) {
      const r = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://mock-api.drinks.test.siliconrhino.io/events?page=${page}&pageSize=20`);
      page++;
      data.push(...r.data);

      if (r.data.length === 0) {
        setEventsNo(r.data.length);
        break;
      }
    }

    setEvents(data);
    setTotalPages(Math.floor(eventsNo / pageSize) + 1);
    setLoading(false);
    getEvents(); // not working
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getInitialData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getEvents();
  }, [pageSize, pageNo, searchQ]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTotalPages(Math.floor(eventsNo / pageSize) + 1);
  }, [pageSize]);

  const getEvents = async () => {
    let newEvents = [];
    console.log('getEvents allEvents: ', allEvents);
    allEvents.map(event => {
      if (event.id > (pageNo - 1) * pageSize || event.id < pageNo * pageSize) {
        newEvents.push(event);
      }
    });
    console.log('newEvents: ', newEvents);
    setCurrentEvents(newEvents);
  };

  const pageButtons = () => {
    let buttons = [];

    for (let i = 0; i < totalPages; i++) {
      buttons.push(__jsx(SearchParamButton, {
        key: i,
        isSelected: pageNo === i,
        onClick: () => selectPageNo(i),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: undefined
      }, i + 1));
    }

    return buttons;
  };

  return __jsx(SearchWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(SearchInput, {
    minLength: 1,
    debounceTimeout: 300,
    placeholder: 'asdf' //@ts-ignore
    ,
    onChange: event => setSearchQ(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "events: "), isLoading ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "loading...") : currentEvents.map(event => __jsx(_event_EventThumbnail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: event.id,
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
      lineNumber: 114
    },
    __self: undefined
  })), __jsx(PageNumberButtonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "Select page:"), pageButtons(), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "Items per page:"), __jsx(SearchParamButton, {
    isSelected: pageSize === 5,
    onClick: () => setPageSize(5),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "5"), __jsx(SearchParamButton, {
    isSelected: pageSize === 15,
    onClick: () => setPageSize(15),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "15"), __jsx(SearchParamButton, {
    isSelected: pageSize === 22,
    onClick: () => setPageSize(25),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "25")));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.tsx");
/* harmony import */ var _components_search_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/search/Search */ "./components/search/Search.tsx");
var _jsxFileName = "/Users/mj/repo/siliconrhino/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Home = () => __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_components_search_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./theme/colors.ts":
/*!*************************!*\
  !*** ./theme/colors.ts ***!
  \*************************/
/*! exports provided: Colors, BoxShadows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxShadows", function() { return BoxShadows; });
const Colors = {
  gray: '#b7b7b7',
  black: '#000',
  white: '#fff'
};
const BoxShadows = {
  unfocusedBoxShadow: '1px 1px 10px 5px rgba(0,0,0,0.2)',
  focusedBoxShadow: '1px 1px 10px 5px rgba(0,0,0,0.5)'
};

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mj/repo/siliconrhino/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "geolib/es/getDistance":
/*!****************************************!*\
  !*** external "geolib/es/getDistance" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geolib/es/getDistance");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-debounce-input":
/*!***************************************!*\
  !*** external "react-debounce-input" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-debounce-input");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map