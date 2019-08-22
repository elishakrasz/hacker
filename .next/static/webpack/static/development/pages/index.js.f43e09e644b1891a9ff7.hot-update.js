webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\emallard\\hacker-next\\components\\StoryList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return __jsx("div", {
    className: "jsx-3051850232" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-3051850232" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-3051850232" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("a", {
      href: story.url,
      className: "jsx-3051850232",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), __jsx("div", {
      className: "jsx-3051850232",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3051850232",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.points || 0, " points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3051850232",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, story.comments_count || 0, " comments"))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3051850232",
    __self: this
  }, ".story.jsx-3051850232{padding:1em 0;}.story-title.jsx-3051850232{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-3051850232 a.jsx-3051850232{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3051850232 a.jsx-3051850232:hover,.story-details.jsx-3051850232 a.jsx-3051850232:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-3051850232{font-size:0.8rem;font-weight:bold;}.story-details.jsx-3051850232 span.jsx-3051850232{margin-right:1em;}.story-details.jsx-3051850232 a.jsx-3051850232{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZW1hbGxhcmRcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JTLEFBRytCLEFBR0MsQUFNSixBQUllLEFBR1QsQUFJQSxBQUdILFdBYk8sR0FUekIsQUF1QnlCLENBcEJMLEVBYUMsQUFJckIsY0FoQmEsR0FhYixNQVp3QixvQkFDeEIsQUFPQSxDQUhBLEdBY0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxlbWFsbGFyZFxcaGFja2VyLW5leHRcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxyXG4gICAge3N0b3JpZXMubWFwKHN0b3J5ID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeVwiIGtleT17c3RvcnkuaWR9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntzdG9yeS5jb21tZW50c19jb3VudCB8fCAwfSBjb21tZW50czwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpfVxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgICAuc3Rvcnkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3RvcnktdGl0bGUgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciwgLnN0b3J5LWRldGFpbHMgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3RvcnktZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5LWRldGFpbHMgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2MDBmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\emallard\\hacker-next\\components\\StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.f43e09e644b1891a9ff7.hot-update.js.map