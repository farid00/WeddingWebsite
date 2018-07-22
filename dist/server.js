module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Navigation = __webpack_require__(/*! ./Navigation.jsx */ "./components/Navigation.jsx");

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Home = __webpack_require__(/*! ./Home.jsx */ "./components/Home.jsx");

var _Home2 = _interopRequireDefault(_Home);

var _postFormCntr = __webpack_require__(/*! ./forms/postFormCntr.jsx */ "./components/forms/postFormCntr.jsx");

var _postFormCntr2 = _interopRequireDefault(_postFormCntr);

var _post = __webpack_require__(/*! ../redux/actions/post.jsx */ "./redux/actions/post.jsx");

var _Registry = __webpack_require__(/*! ./Registry.jsx */ "./components/Registry.jsx");

var _Registry2 = _interopRequireDefault(_Registry);

var _WeddingParty = __webpack_require__(/*! ./WeddingParty.jsx */ "./components/WeddingParty.jsx");

var _WeddingParty2 = _interopRequireDefault(_WeddingParty);

var _TravelStay = __webpack_require__(/*! ./TravelStay.jsx */ "./components/TravelStay.jsx");

var _TravelStay2 = _interopRequireDefault(_TravelStay);

var _fontawesomeSvgCore = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");

var _MainEvent = __webpack_require__(/*! ./MainEvent.jsx */ "./components/MainEvent.jsx");

var _MainEvent2 = _interopRequireDefault(_MainEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Our Pure and clean App component. In the browser, we'll wrap
// this inside a BrowserRouter component and put it in the DOM,
// otherwise on server render, we'll stick this in a StaticRouter
// component and renderToString it.

var FlexContainer = _styledComponents2.default.div.withConfig({
  displayName: 'App__FlexContainer',
  componentId: 'md2ypg-0'
})(['width:100%;height:auto;display:flex;flex-flow:row wrap;justify-content:space-between;']);
// using NavLink for the activeClassName, otherwise, for 
// a plain link, use Link.


var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Navigation2.default, null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/wedding-party', component: _WeddingParty2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/main-event', component: _MainEvent2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/travel-stay', component: _TravelStay2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/registry', component: _Registry2.default })
    )
  );
};

exports.default = App;

/***/ }),

/***/ "./components/Bio.jsx":
/*!****************************!*\
  !*** ./components/Bio.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'Bio__Wrapper',
	componentId: 's1m91fc6-0'
})(['display:flex;width:100%;flex-flow:column wrap;justify-content:flex-start;align-items:center;padding-top:20px;padding-bottom:20px;']);

var Name = _styledComponents2.default.p.withConfig({
	displayName: 'Bio__Name',
	componentId: 's1m91fc6-1'
})(['font-family:Dancing Script,cursive;font-size:36px;']);

var Nickname = _styledComponents2.default.p.withConfig({
	displayName: 'Bio__Nickname',
	componentId: 's1m91fc6-2'
})(['font-family:Dancing Script,cursive;font-size:20px;']);

var Information = _styledComponents2.default.p.withConfig({
	displayName: 'Bio__Information',
	componentId: 's1m91fc6-3'
})(['margin:auto;max-width:350px;text-align:center;']);

var CircleAvatar = _styledComponents2.default.img.withConfig({
	displayName: 'Bio__CircleAvatar',
	componentId: 's1m91fc6-4'
})(['border-radius:50%;']);

var Bio = function Bio(_ref) {
	var name = _ref.name,
	    nickname = _ref.nickname,
	    information = _ref.information,
	    picture = _ref.picture;
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(CircleAvatar, { src: picture, alt: 'avatar' }),
		_react2.default.createElement(
			Name,
			null,
			' ',
			name,
			' '
		),
		_react2.default.createElement(
			Nickname,
			null,
			' ',
			nickname,
			' '
		),
		_react2.default.createElement(
			Information,
			null,
			' ',
			information
		)
	);
};

exports.default = Bio;

/***/ }),

/***/ "./components/Home.jsx":
/*!*****************************!*\
  !*** ./components/Home.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'Home__Wrapper',
	componentId: 's51dnrr-0'
})(['display:flex;flex-flow:column;justify-content:center;align-items:center width:100%;']);

var Title = _styledComponents2.default.p.withConfig({
	displayName: 'Home__Title',
	componentId: 's51dnrr-1'
})(['font-family:Dancing Script,cursive;font-size:36px;']);

var HomePicture = _styledComponents2.default.img.withConfig({
	displayName: 'Home__HomePicture',
	componentId: 's51dnrr-2'
})(['width:100%;@media (min-width:768px){height:auto;}@media (max-width:768px){height:auto;}']);

var OurNames = _styledComponents2.default.div.withConfig({
	displayName: 'Home__OurNames',
	componentId: 's51dnrr-3'
})(['margin-top:25px;display:flex;flex-flow:column;justify-content:center;align-items:center;font-size:46px;font-family:\'Pompiere\',cursive;']);

var AnnounceWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'Home__AnnounceWrapper',
	componentId: 's51dnrr-4'
})(['display:flex;flex-flow:column;justify-content:center;align-items:center;border-top:1px solid black;border-bottom:1px solid black;font-family:\'Pompiere\',cursive;@media (min-width:768px){margin-left:200px;margin-right:200px;}']);

var HashTag = _styledComponents2.default.p.withConfig({
	displayName: 'Home__HashTag',
	componentId: 's51dnrr-5'
})(['margin-top:25px;font-size:20px;']);

var DateTag = _styledComponents2.default.p.withConfig({
	displayName: 'Home__DateTag',
	componentId: 's51dnrr-6'
})(['font-size:36px;']);

var AshfordTag = _styledComponents2.default.p.withConfig({
	displayName: 'Home__AshfordTag',
	componentId: 's51dnrr-7'
})(['font-size:20px;']);

var StyledSection = _styledComponents2.default.div.withConfig({
	displayName: 'Home__StyledSection',
	componentId: 's51dnrr-8'
})(['margin-top:25px;display:flex;flex-flow:column;justify-content:center;align-items:center;font-size:46px;font-family:\'Pompiere\',cursive;']);

var SectionTitle = _styledComponents2.default.p.withConfig({
	displayName: 'Home__SectionTitle',
	componentId: 's51dnrr-9'
})(['font-size:36px;']);

var SectionContent = _styledComponents2.default.p.withConfig({
	displayName: 'Home__SectionContent',
	componentId: 's51dnrr-10'
})(['font-size:20px;']);

var IcecreamImage = _styledComponents2.default.img.withConfig({
	displayName: 'Home__IcecreamImage',
	componentId: 's51dnrr-11'
})(['position:absolute;right:60px;']);

var MZ = _styledComponents2.default.img.withConfig({
	displayName: 'Home__MZ',
	componentId: 's51dnrr-12'
})(['position:absolute;left:60px;width:200px;height:auto;']);
var Home = function Home() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(HomePicture, { src: 'public/images/HomePicture.jpg' }),
		_react2.default.createElement(
			OurNames,
			null,
			_react2.default.createElement(
				'p',
				null,
				' Juliette Trautman'
			),
			_react2.default.createElement(
				'p',
				null,
				' and '
			),
			_react2.default.createElement(
				'p',
				null,
				' Matt Brandman'
			)
		),
		_react2.default.createElement(
			AnnounceWrapper,
			null,
			_react2.default.createElement(
				HashTag,
				null,
				' #MandJWeddingDay2019 '
			),
			_react2.default.createElement(
				DateTag,
				null,
				' November 9, 2019 '
			),
			_react2.default.createElement(
				AshfordTag,
				null,
				' The Ashford Estate '
			)
		),
		_react2.default.createElement(
			StyledSection,
			null,
			_react2.default.createElement(
				SectionTitle,
				null,
				' How We Met '
			),
			_react2.default.createElement(
				SectionTitle,
				null,
				' So This One Time at Hebrew School...'
			),
			_react2.default.createElement(
				SectionContent,
				null,
				' LORUM IPSUM DOLOR IMET '
			)
		),
		_react2.default.createElement(
			StyledSection,
			null,
			_react2.default.createElement(
				SectionTitle,
				null,
				' The Proposal '
			),
			_react2.default.createElement(
				SectionTitle,
				null,
				' So This One Time at Hebrew School...'
			),
			_react2.default.createElement(
				SectionContent,
				null,
				' LORUM IPSUM DOLOR IMET '
			)
		)
	);
};

exports.default = Home;

/***/ }),

/***/ "./components/MainEvent.jsx":
/*!**********************************!*\
  !*** ./components/MainEvent.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'MainEvent__Wrapper',
	componentId: 's1asqmkc-0'
})(['display:flex;width:100%;flex-flow:column;justify-content:center;align-items:center;font-family:\'Pompiere\',cursive;font-size:26px']);
var ST = _styledComponents2.default.p.withConfig({
	displayName: 'MainEvent__ST',
	componentId: 's1asqmkc-1'
})(['font-size:36px;text-align:center;max-width:450px;margin:auto;font-weight:bold;']);

var SP = _styledComponents2.default.p.withConfig({
	displayName: 'MainEvent__SP',
	componentId: 's1asqmkc-2'
})(['text-align:center;max-width:450px;margin:auto;']);

var SectionWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'MainEvent__SectionWrapper',
	componentId: 's1asqmkc-3'
})(['']);

var MainEvent = function MainEvent() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement('img', { src: 'public/images/icecream.png' }),
		_react2.default.createElement(
			SP,
			null,
			' Thank you so much for joining us today... '
		),
		_react2.default.createElement(
			ST,
			null,
			' Ceremony '
		),
		_react2.default.createElement('img', { src: 'public/images/wr.png' }),
		_react2.default.createElement(
			SP,
			null,
			' The ceremony will be taking place in the carriage house at the Ashoford estate at XX:XXPM please try to arrive X early.'
		),
		_react2.default.createElement(
			ST,
			null,
			' Reception '
		),
		_react2.default.createElement('img', { src: 'public/images/champagne.png' }),
		_react2.default.createElement(
			SP,
			null,
			' The reception will take place following the ceremony around XX:XXPM, there will be champage toast followed by a cocktail hour, followed by 3 course entree in the grand ballroom.'
		)
	);
};

exports.default = MainEvent;

/***/ }),

/***/ "./components/Navigation.jsx":
/*!***********************************!*\
  !*** ./components/Navigation.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnimations = __webpack_require__(/*! react-animations */ "react-animations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var slideAnimation = (0, _styledComponents.keyframes)(['', ''], _reactAnimations.slideInDown);

var NavbarStyled = _styledComponents2.default.div.withConfig({
  displayName: 'Navigation__NavbarStyled',
  componentId: 's0o3k9-0'
})(['display:flex;position:sticky;top:0;width:100%;flex-flow:column;justify-content:space-around;align-items:center;border-bottom:1px solid black;background-color:#F9F8F6;']);

var NavbarWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Navigation__NavbarWrapper',
  componentId: 's0o3k9-1'
})(['@media (min-width:768px){display:flex;width:100%;justify-content:space-around;}@media (max-width:768px){display:none;flex-flow:column;justify-content:space-around;align-items:center;position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.7);z-index:2;cursor:pointer;overflow-x:hidden;overflow-y:hidden;}']);

var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'Navigation__Title',
  componentId: 's0o3k9-2'
})(['font-family:Dancing Script,cursive;font-size:36px;margin-bottom:25px;@media (max-width:768px){display:None;}']);

var HiddenTitle = _styledComponents2.default.h1.withConfig({
  displayName: 'Navigation__HiddenTitle',
  componentId: 's0o3k9-3'
})(['font-family:Dancing Script,cursive;font-size:36px;margin-bottom:10px;padding-top:10px;margin-left:5px;']);

var StyledLink = (0, _styledComponents2.default)(_reactRouterDom.Link).withConfig({
  displayName: 'Navigation__StyledLink',
  componentId: 's0o3k9-4'
})(['color:black;&:hover{color:black;text-decoration:none;}font-size:20px;font-family:Dancing Script,cursive;@media (max-width:768px){color:white;}']);

var HiddenWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Navigation__HiddenWrapper',
  componentId: 's0o3k9-5'
})(['display:flex;width:100%;align-items:center;font-family:Dancing Script,cursive;@media (min-width:768px){display:None;}']);

var MenuToggle = _styledComponents2.default.button.withConfig({
  displayName: 'Navigation__MenuToggle',
  componentId: 's0o3k9-6'
})(['display:flex;margin-left:auto;margin-right:10px;border-radius:4px;cursor:pointer;touch-action:manipulation;']);

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      isOpen: false,
      navState: 'navClosed',
      width: 0,
      height: 0
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    return _this;
  }

  _createClass(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      if (window.innerWidth > 768) {
        this.setState({
          navState: '',
          isOpen: false
        });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var currentState = this.state.isOpen;
      var newState = !this.state.isOpen;
      if (this.state.width < 768) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      if (newState == true && this.state.width < 768) {
        this.setState({
          navState: 'navOpen animated slideInDown'
        });
      } else if (this.state.width < 768) {
        this.setState({
          navState: 'navOpen animated slideOutUp'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        NavbarStyled,
        null,
        _react2.default.createElement(
          Title,
          null,
          ' Matt and Juliette '
        ),
        _react2.default.createElement(
          HiddenWrapper,
          null,
          _react2.default.createElement(
            HiddenTitle,
            null,
            ' Matt and Juliette '
          ),
          _react2.default.createElement(
            MenuToggle,
            { onClick: this.toggle },
            ' ',
            _react2.default.createElement('i', { className: 'fas fa-bars fa-2x' }),
            ' '
          )
        ),
        _react2.default.createElement(
          NavbarWrapper,
          { className: this.state.navState },
          _react2.default.createElement(
            StyledLink,
            { onClick: this.toggle, to: '/' },
            ' Home '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.toggle, to: '/main-event' },
            ' Main Event '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.toggle, to: '/travel-stay' },
            ' Travel and Stay '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.toggle, to: '/wedding-party' },
            ' Wedding Party '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.toggle, to: '/registry' },
            ' Registry '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.toggle, to: '/faqs' },
            ' FAQS '
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react2.default.Component);

exports.default = Navigation;

/***/ }),

/***/ "./components/Registry.jsx":
/*!*********************************!*\
  !*** ./components/Registry.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'Registry__Wrapper',
	componentId: 'hu3udi-0'
})(['display:flex;justify-content:center;width:100%;']);

var Title = _styledComponents2.default.h1.withConfig({
	displayName: 'Registry__Title',
	componentId: 'hu3udi-1'
})(['font-family:Dancing Script,cursive;font-size:36px;']);

var Registry = function Registry() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			Title,
			null,
			'Registry Details'
		)
	);
};

exports.default = Registry;

/***/ }),

/***/ "./components/TravelStay.jsx":
/*!***********************************!*\
  !*** ./components/TravelStay.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Bio = __webpack_require__(/*! ./Bio.jsx */ "./components/Bio.jsx");

var _Bio2 = _interopRequireDefault(_Bio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'TravelStay__Wrapper',
	componentId: 's8mevaj-0'
})(['display:flex;width:100%;flex-flow:column wrap;justify-content:center;align-items:center']);

var Title = _styledComponents2.default.h1.withConfig({
	displayName: 'TravelStay__Title',
	componentId: 's8mevaj-1'
})(['font-family:Dancing Script,cursive;font-size:36px;margin-bottom:25px;']);

var SubTitle = _styledComponents2.default.p.withConfig({
	displayName: 'TravelStay__SubTitle',
	componentId: 's8mevaj-2'
})(['font-size:20px;']);

var TravelStay = function TravelStay() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			Title,
			null,
			' Travel and Hotel Information '
		),
		_react2.default.createElement('i', { 'class': 'fas fa-hotel fa-2x' }),
		_react2.default.createElement(
			SubTitle,
			null,
			' Hilton Hotel '
		)
	);
};

exports.default = TravelStay;

/***/ }),

/***/ "./components/WeddingParty.jsx":
/*!*************************************!*\
  !*** ./components/WeddingParty.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Bio = __webpack_require__(/*! ./Bio.jsx */ "./components/Bio.jsx");

var _Bio2 = _interopRequireDefault(_Bio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'WeddingParty__Wrapper',
	componentId: 'mds02r-0'
})(['display:flex;width:100%;flex-flow:column wrap;justify-content:center;align-items:center']);

var Title = _styledComponents2.default.h1.withConfig({
	displayName: 'WeddingParty__Title',
	componentId: 'mds02r-1'
})(['font-family:Dancing Script,cursive;font-size:36px;margin-bottom:25px;']);

var BioColumn = _styledComponents2.default.div.withConfig({
	displayName: 'WeddingParty__BioColumn',
	componentId: 'mds02r-2'
})(['display:flex;flex-grow:1;flex-flow:column wrap;justify-content:flex-start;align-items:center;border-right:solid 1px black;']);

var BioWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'WeddingParty__BioWrapper',
	componentId: 'mds02r-3'
})(['display:flex;width:100%;flex-flow:row wrap;justify-content:flex-start;align-items:flex-start;']);

var WeddingParty = function WeddingParty() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			Title,
			null,
			' The Wedding Party '
		),
		_react2.default.createElement(
			BioWrapper,
			null,
			_react2.default.createElement(
				BioColumn,
				null,
				_react2.default.createElement(
					Title,
					null,
					' Groomsmen '
				),
				_react2.default.createElement(_Bio2.default, { name: 'Greg Pfadenhaeur', nickname: 'Po', information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec egestas eros. Donec porttitor nulla tellus, sit amet tempus tellus maximus a. Curabitur consequat ex eu magna tincidunt tincidunt. ' }),
				_react2.default.createElement(_Bio2.default, { name: 'Ben Andre', nickname: 'NA', information: 'hello' })
			),
			_react2.default.createElement(
				BioColumn,
				null,
				_react2.default.createElement(
					Title,
					null,
					' Bridesmaids '
				),
				_react2.default.createElement(_Bio2.default, { name: 'Kaite Wirth', nickname: 'NA', information: 'NNANANAANANNA' }),
				_react2.default.createElement(_Bio2.default, { name: 'Amanda Waltman', nickname: 'NA', information: 'hello' })
			)
		)
	);
};

exports.default = WeddingParty;

/***/ }),

/***/ "./components/forms/postForm.jsx":
/*!***************************************!*\
  !*** ./components/forms/postForm.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostForm = function PostForm(props) {
  var handleSubmit = props.handleSubmit;

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'firstName' },
        'Title'
      ),
      _react2.default.createElement(_reduxForm.Field, { name: 'title', component: 'input', type: 'text' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'lastName' },
        'Subtitle'
      ),
      _react2.default.createElement(_reduxForm.Field, { name: 'subtitle', component: 'input', type: 'text' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'meta' },
        'Meta'
      ),
      _react2.default.createElement(_reduxForm.Field, { name: 'meta', component: 'input', type: 'text' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'content' },
        'Content'
      ),
      _react2.default.createElement(_reduxForm.Field, { name: 'content', component: 'input', type: 'text' })
    ),
    _react2.default.createElement(
      'button',
      { type: 'submit' },
      'Submit'
    )
  );
};

PostForm = (0, _reduxForm.reduxForm)({
  // a unique name for the form
  form: 'contact'
})(PostForm);

exports.default = (0, _reactRedux.connect)()(PostForm);

/***/ }),

/***/ "./components/forms/postFormCntr.jsx":
/*!*******************************************!*\
  !*** ./components/forms/postFormCntr.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _postForm = __webpack_require__(/*! ./postForm.jsx */ "./components/forms/postForm.jsx");

var _postForm2 = _interopRequireDefault(_postForm);

var _post = __webpack_require__(/*! ../../redux/actions/post.jsx */ "./redux/actions/post.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onSubmit: function onSubmit(values) {
			dispatch((0, _post.submitPost)(values));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_postForm2.default);

/***/ }),

/***/ "./redux/actions/post.jsx":
/*!********************************!*\
  !*** ./redux/actions/post.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPost = fetchPost;
exports.submitPost = submitPost;
exports.fetchPostSuccess = fetchPostSuccess;
exports.fetchPostFailure = fetchPostFailure;
exports.addTodo = addTodo;
/*
 * action types
 */

var POST_FETCH_REQUESTED = exports.POST_FETCH_REQUESTED = 'POST_FETCH_REQUESTED';
var POST_FETCH_SUCCEEDED = exports.POST_FETCH_SUCCEEDED = 'POST_FETCH_SUCCEEDED';
var POST_FETCH_FAILED = exports.POST_FETCH_FAILED = 'POST_FETCH_FAILED';
var SUBMIT_POST = exports.SUBMIT_POST = 'SUBMIT_POST';

/*
 * action creators
 */
function fetchPost() {
  return { type: POST_FETCH_REQUESTED };
}

function submitPost(post) {
  return { type: SUBMIT_POST, post: post };
}

function fetchPostSuccess(posts) {
  return { type: POST_FETCH_SUCCEEDED, posts: posts };
}

function fetchPostFailure(message) {
  return { type: POST_FETCH_FAILED, message: message };
}
function addTodo(post) {
  return { type: ADD_TODO, post: post };
}

/***/ }),

/***/ "./redux/reducers/posts.jsx":
/*!**********************************!*\
  !*** ./redux/reducers/posts.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var posts = function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_POST':
      return [].concat(_toConsumableArray(state), [{
        id: action.id,
        title: action.title,
        subtitle: action.text,
        meta: action.meta,
        content: action.content
      }]);
    default:
      return state;
  }
};

exports.default = posts;

/***/ }),

/***/ "./redux/reducers/rootReducer.jsx":
/*!****************************************!*\
  !*** ./redux/reducers/rootReducer.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _posts = __webpack_require__(/*! ./posts.jsx */ "./redux/reducers/posts.jsx");

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
	posts: _posts2.default,
	form: _reduxForm.reducer
};
exports.default = (0, _redux.combineReducers)(reducers);

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serverRenderer;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _hoganExpress = __webpack_require__(/*! hogan-express */ "hogan-express");

var _hoganExpress2 = _interopRequireDefault(_hoganExpress);

var _App = __webpack_require__(/*! ./components/App.jsx */ "./components/App.jsx");

var _App2 = _interopRequireDefault(_App);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _rootReducer = __webpack_require__(/*! ./redux/reducers/rootReducer.jsx */ "./redux/reducers/rootReducer.jsx");

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _redux = __webpack_require__(/*! redux */ "redux");

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderFullPage(html, image, preloadedState, styleTags) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n          <title> Brandman Wedding </title>\n          ' + styleTags + '\n          <base href="/">\n          <meta name="viewport" content="width=device-width, initial-scale=1">\n                    <link rel="stylesheet" type="text/css" href="/public/css/style.css">\n          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">\n          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" \n          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" \n          crossorigin="anonymous">\n          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Homemade+Apple|Pompiere|Shadows+Into+Light" rel="stylesheet">\n          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800|Roboto:400,500,900" \n          rel="stylesheet">\n          <link rel="stylesheet"\n          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">\n      </head>\n      <body style="background-size:cover; background-color:#F9F8F6">\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/public/client.js"></script>\n      </body>\n    </html>\n    ';
}
// Express
/*const app = express()
app.engine('html', hogan)
app.set('port', (process.env.PORT || 3000))
app.set('views', path.join(__dirname + 'dist/views'))
app.use('/public', express.static('/Users/matthewbrandman/wedding/dist'))*/
function serverRenderer() {
  return function (req, res, next) {
    var context = {};
    var sheet = new _styledComponents.ServerStyleSheet();
    var store = (0, _redux.createStore)(_rootReducer2.default);
    var image = "public/images/Background.jpg";
    var html = _server2.default.renderToString(_react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _styledComponents.StyleSheetManager,
          { sheet: sheet.instance },
          _react2.default.createElement(_App2.default, null)
        )
      )
    ));
    var preloadedState = store.getState();
    var styleTags = sheet.getStyleTags();
    if (context.url) {
      res.writeHead(301, { Location: context.url });
      res.end();
    } else {
      res.send(renderFullPage(html, image, preloadedState, styleTags));
    }
  };
}

/*app.listen(app.get('port'))*/

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "hogan-express":
/*!********************************!*\
  !*** external "hogan-express" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hogan-express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animations":
/*!***********************************!*\
  !*** external "react-animations" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animations");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

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
//# sourceMappingURL=server.js.map