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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _aos = __webpack_require__(/*! aos */ "aos");

var _aos2 = _interopRequireDefault(_aos);

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

var _FAQ = __webpack_require__(/*! ./FAQ.jsx */ "./components/FAQ.jsx");

var _FAQ2 = _interopRequireDefault(_FAQ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// using NavLink for the activeClassName, otherwise, for 
// a plain link, use Link.


// Our Pure and clean App component. In the browser, we'll wrap
// this inside a BrowserRouter component and put it in the DOM,
// otherwise on server render, we'll stick this in a StaticRouter
// component and renderToString it.

var FlexContainer = _styledComponents2.default.div.withConfig({
  displayName: 'App__FlexContainer',
  componentId: 's11rgi1q-0'
})(['width:100%;height:auto;display:flex;flex-flow:row wrap;justify-content:space-between;']);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
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
          _react2.default.createElement(_reactRouterDom.Route, { path: '/registry', component: _Registry2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/faqs', component: _FAQ2.default })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

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

var _PictureChange = __webpack_require__(/*! ./PictureChange.jsx */ "./components/PictureChange.jsx");

var _PictureChange2 = _interopRequireDefault(_PictureChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'Bio__Wrapper',
	componentId: 's19xhq9i-0'
})(['display:flex;width:100%;flex-flow:column wrap;justify-content:flex-start;align-items:center;padding-top:20px;padding-bottom:20px;']);

var Name = _styledComponents2.default.p.withConfig({
	displayName: 'Bio__Name',
	componentId: 's19xhq9i-1'
})(['font-family:\'Pompiere\',cursive;font-size:36px;margin-bottom:0em;']);

var Nickname = _styledComponents2.default.p.withConfig({
	displayName: 'Bio__Nickname',
	componentId: 's19xhq9i-2'
})(['font-family:\'Pompiere\',cursive;font-size:20px;']);

var Information = _styledComponents2.default.p.withConfig({
	displayName: 'Bio__Information',
	componentId: 's19xhq9i-3'
})(['font-family:\'Pompiere\',cursive;font-size:26px;margin:auto;max-width:350px;width:350px;text-align:center;']);

var Bio = function Bio(_ref) {
	var name = _ref.name,
	    nickname = _ref.nickname,
	    blurb = _ref.blurb,
	    nPicture = _ref.nPicture,
	    fPicture = _ref.fPicture,
	    x = _ref.x;
	return _react2.default.createElement(
		Wrapper,
		{ 'data-aos': x },
		_react2.default.createElement(
			Name,
			null,
			' ',
			name,
			' '
		),
		_react2.default.createElement(_PictureChange2.default, { nPicture: nPicture, fPicture: fPicture }),
		_react2.default.createElement(
			Information,
			null,
			' ',
			blurb
		)
	);
};

exports.default = Bio;

/***/ }),

/***/ "./components/FAQ.jsx":
/*!****************************!*\
  !*** ./components/FAQ.jsx ***!
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

var _FAQItem = __webpack_require__(/*! ./FAQItem.jsx */ "./components/FAQItem.jsx");

var _FAQItem2 = _interopRequireDefault(_FAQItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'FAQ__Wrapper',
	componentId: 's1fhbcg8-0'
})(['font-family:\'Pompiere\',cursive;display:flex;width:100%;flex-flow:column wrap;justify-content:center;align-items:center;']);

var HiddenTitle = _styledComponents2.default.h1.withConfig({
	displayName: 'FAQ__HiddenTitle',
	componentId: 's1fhbcg8-1'
})(['font-family:\'Pompiere\',cursive;font-size:36px;margin-bottom:10px;padding-top:10px;margin-left:5px;@media (min-width:768px){display:None;}']);

var FAQ = function FAQ() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			HiddenTitle,
			null,
			' FAQ '
		),
		_react2.default.createElement(_FAQItem2.default, { question: 'Are kids invited?', answer: 'We love all of the kids in our lives!   But due to limited space and a GIANT family,  if your invitation did not specifically say family or your child\'s name,  we\'d prefer you leave them home for the festivities.' }),
		_react2.default.createElement(_FAQItem2.default, { question: 'Can I bring a date?', answer: 'I wish we could say the more the merrier!,  but due to limited space and a GIANT family we will not be including plus 1\'s for everyone to this wedding.   If your invitation specifies a plus 1 please feel free to bring your date' }),
		_react2.default.createElement(_FAQItem2.default, { question: 'I have a food allergy, can I make a special request', answer: 'If you do have a food allergy,  please reach out to Matthew as soon as possible to let  him know so he can work with the Ashford Estate to try to accommodate your request.' })
	);
};

exports.default = FAQ;

/***/ }),

/***/ "./components/FAQItem.jsx":
/*!********************************!*\
  !*** ./components/FAQItem.jsx ***!
  \********************************/
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
	displayName: 'FAQItem__Wrapper',
	componentId: 's1jstwkp-0'
})(['font-family:\'Pompiere\',cursive;display:flex;width:100%;flex-flow:row wrap;justify-content:flex-start;align-items:flex-start;margin-top:25px;margin-bottom:80px;width:350;@media (max-width:768px){margin-bottom:20px;&:not(:first-child){margin-top:0px;}&:not(:last-child){border-bottom:1px solid black;padding-bottom:40px;}}']);

var QuestionWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'FAQItem__QuestionWrapper',
	componentId: 's1jstwkp-1'
})(['flex:1 0 50%;font-size:30px;flex-flow:column wrap;justify-content:center;align-items:center;text-align:center;align-self:center;']);

var AnswerWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'FAQItem__AnswerWrapper',
	componentId: 's1jstwkp-2'
})(['flex:1 0 50%;font-size:30px;flex-flow:column wrap;justify-content:center;align-items:center;text-align:center;border-left:1px solid black;@media (max-width:768px){border-left:0px}']);

var Title = _styledComponents2.default.h1.withConfig({
	displayName: 'FAQItem__Title',
	componentId: 's1jstwkp-3'
})(['font-family:\'Pompiere\',cursive;font-size:36px;']);

var QInformation = _styledComponents2.default.p.withConfig({
	displayName: 'FAQItem__QInformation',
	componentId: 's1jstwkp-4'
})(['width:350px;font-size:30px;text-align:center;margin:auto;']);

var AInformation = _styledComponents2.default.p.withConfig({
	displayName: 'FAQItem__AInformation',
	componentId: 's1jstwkp-5'
})(['width:350px;font-size:20px;text-align:center;margin:auto;']);

var FAQItem = function FAQItem(_ref) {
	var question = _ref.question,
	    answer = _ref.answer;
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			QuestionWrapper,
			null,
			_react2.default.createElement(
				Title,
				null,
				' Question '
			),
			_react2.default.createElement(
				QInformation,
				null,
				question
			)
		),
		_react2.default.createElement(
			AnswerWrapper,
			null,
			_react2.default.createElement(
				Title,
				null,
				' Answer '
			),
			_react2.default.createElement(
				AInformation,
				null,
				answer
			)
		)
	);
};

exports.default = FAQItem;

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

var _reactSpring = __webpack_require__(/*! react-spring */ "react-spring");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'Home__Wrapper',
	componentId: 's1ofh9nm-0'
})(['display:flex;flex-flow:column;width:100%;transform-style:preserve-3d;']);

var Title = _styledComponents2.default.p.withConfig({
	displayName: 'Home__Title',
	componentId: 's1ofh9nm-1'
})(['font-family:Dancing Script,cursive;font-size:36px;']);

var HomePicture = _styledComponents2.default.img.withConfig({
	displayName: 'Home__HomePicture',
	componentId: 's1ofh9nm-2'
})(['display:flex;width:50vw;@media (max-width:768px){width:100vw}']);

var HomePicture2 = _styledComponents2.default.img.withConfig({
	displayName: 'Home__HomePicture2',
	componentId: 's1ofh9nm-3'
})(['display:flex;width:50vw;@media (max-width:768px){display:none}']);

var OurNames = _styledComponents2.default.div.withConfig({
	displayName: 'Home__OurNames',
	componentId: 's1ofh9nm-4'
})(['display:flex;flex-flow:column;justify-content:center;align-items:center;font-size:46px;font-family:\'Pompiere\',cursive;']);

var AnnounceWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'Home__AnnounceWrapper',
	componentId: 's1ofh9nm-5'
})(['display:flex;flex-flow:column;justify-content:center;align-items:center;border-top:1px solid black;border-bottom:1px solid black;font-family:\'Pompiere\',cursive;@media (min-width:768px){margin-left:200px;margin-right:200px;}']);

var HashTag = _styledComponents2.default.p.withConfig({
	displayName: 'Home__HashTag',
	componentId: 's1ofh9nm-6'
})(['margin-top:25px;font-size:20px;']);

var DateTag = _styledComponents2.default.p.withConfig({
	displayName: 'Home__DateTag',
	componentId: 's1ofh9nm-7'
})(['font-size:36px;']);

var AshfordTag = _styledComponents2.default.p.withConfig({
	displayName: 'Home__AshfordTag',
	componentId: 's1ofh9nm-8'
})(['font-size:20px;']);

var StyledSection = _styledComponents2.default.div.withConfig({
	displayName: 'Home__StyledSection',
	componentId: 's1ofh9nm-9'
})(['display:flex;flex-flow:column;justify-content:center;align-items:center;font-size:46px;font-family:\'Pompiere\',cursive;']);

var SectionTitle = _styledComponents2.default.p.withConfig({
	displayName: 'Home__SectionTitle',
	componentId: 's1ofh9nm-10'
})(['font-size:36px;text-align:center;']);

var SectionContent = _styledComponents2.default.p.withConfig({
	displayName: 'Home__SectionContent',
	componentId: 's1ofh9nm-11'
})(['font-size:20px;text-align:center;@media (min-width:768px){margin-left:300px;margin-right:300px;}@media (max-width:768px){flex:0;overflow:hidden;}']);

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		{ className: 'parwrap' },
		_react2.default.createElement(
			'div',
			{ className: 'parsection' },
			_react2.default.createElement(
				'div',
				{ className: 'parallax2 bg1' },
				_react2.default.createElement(HomePicture, { src: '/public/images/home1.jpg' }),
				_react2.default.createElement(HomePicture2, { src: '/public/images/home2.jpg' })
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'parsection static' },
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
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'parsection bg1' },
			_react2.default.createElement(
				'div',
				{ className: 'parallax2' },
				_react2.default.createElement(HomePicture, { src: '/public/images/home5.png' }),
				_react2.default.createElement(HomePicture2, { src: '/public/images/home6.jpg' })
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'parsection static2' },
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
					'Juliette and Matt met when they were just 15 years old. Juliette was told at a young age she was going to meet a Nice Jewish Boy and live happily ever after. So, after many arguments, Juliette found her way to Confirmation at the Temple on a Wednesday evening during the Fall. She was sitting in the front of class when the teacher called on the kid squirming in his seat and he stood up to answer. The tall boy explained the correct answer and Juliette twirled back in her seat and whispered \u201CWho is that?\u201D Her friend just laughed and said, \u201COh him? That\u2019s just Matt.\u201D ',
					_react2.default.createElement('br', null),
					' ',
					_react2.default.createElement('br', null),
					'The hunt for this \u201CMatt\u201D began. Googling, facebooking, and texting every Jewish friend Juliette had. Before she knew of the wonderment of Jewish Geography this was the method. Finally on a Monday afternoon she got a text message from an acquaintance \u201CMatthew Brandman\u201D was all it said. She immediately found and friend requested. She literally sat by the computer and waited for THE LITTLE GREEN LIGHT TO TURN ON. Then finally after two days of waiting (see stalking) it did. Juliette immediately messaged him and after some witty back and forth she left him her number. ',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'The two started to text nonstop, even during school hours (which Juliette would later find out Matt got detention for). If any of you have ever met Juliette you know she doesn\u2019t play around. Within two days of texting she had brought up the awkward question - what was he looking for if he was going to be so nice? His response was \u201CI treat all my friends like this.\u201D Juliette quickly called him out on the proposed friend zone and was immediately asked on a date (Ladies take note). After about a week, the two planned a date for that Saturday. During this time, Juliette\u2019s family was preparing for her sister Victoria\u2019s Bat Mitzvah. ',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'They were at the temple in the Rabbi\u2019s office and Cherie was flipping through Kippahs when she saw a deep purple one. She picked it up because she had just ordered Victoria\u2019s and was starting to regret her choice. Sitting in the room with the Rabbi she saw in a silver inscription, \u201CKyra Brandman\u2019s Bat Mitzvah.\u201D She laughed and said \u201COh how funny! Juliette has a date with a boy with the last name Brandman this weekend!\u201D The Rabbi smiled, \u201COH! If only the two kids were older they would be the perfect match!\u201D It was like he had an intuition about the two. Juliette and Matt, and the Jewish Yenta Cosmos watching on high alert, met each other at the Bridgewater Mall on a Saturday Afternoon. The two sat down at a corner table and seemingly couldn\u2019t stop sharing their lives. There was instant connection from both attending summer camp and a love for movies. Matt asked to buy Juliette lunch and in a complete panic (because no boy had ever offered to buy her a meal) played coy like she wasn\u2019t fucking starving. They sat down and in one of those weird life aligning moments Juliette asked Matt what his favorite book was. ',
					_react2.default.createElement('br', null),
					' ',
					_react2.default.createElement('br', null),
					'[Aside] Everyone has a real favorite book and everyone has a favorite book they tell people to seem smart or cool or whatever it is they need to seem. Juliette very rarely shared what her actual favorite book was. Matt definitely was delighted by this question he smiled one of those crooked smiles that Juliette would eventually come to love and answered, \u201COkay, don\u2019t judge but I actually really like these children\u2019s novels by Rick Riordan, the Percy Jackson novels\u201D. It was in this moment I think Juliette knew he was going to be something special. In a high pitched excited voice she exclaimed \u201CWait no way! Me too!!!\u201D The two in a smiling bliss decided it was time after three hours to grab some ice cream. A quick walk and chat around the mall, with Matt\u2019s arm around Juliette ended with him spilling ice cream all over her sweater. Laughing off the spill and removing the sweater the two continued to walk and it was then that Matt was smitten. 15 minutes after hugging goodbye they planed a second date for the following Saturday. It was then in the old Manville Movie Theater in theater number four a stolen first kiss took place. That would spark their forever & always. '
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'parsection bg1' },
			_react2.default.createElement(
				'div',
				{ className: 'parallax2' },
				_react2.default.createElement(HomePicture, { src: '/public/images/home3.jpeg' }),
				_react2.default.createElement(HomePicture2, { src: '/public/images/home4.jpeg' })
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'parsection static3' },
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
					'Matt knew Juliette was the one by the time they were 16 years old. Sitting in his basement talking about their dreams laying on a blue punching bag, Juliette asked him if he saw more of a future than next week. Matt smiled and knew he did, and since that day Matt has always known that Juliette would be his wife.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'\xA0Flash Forward to 2018 and Matt and Juliette are living together in New York City. Finally at a time where the two could get married, Matt realized he wanted to propose to Juliette; but he knew it would be no easy task. \xA0The first thing he knew to do was ask for her Father\u2019s permission.\xA0',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'Matt and Mr. Trautman met at a steakhouse in Hoboken. \xA0This would have been a simple enjoyable task, if Juliette was a simple woman, alas we know that is not the case. Barraged with questions and an inquisitiveness that knows no boundaries Matt had to come up with a cover story. Matt told Juliette that he had a big Cyber happy hour she couldn\u2019t attend, and was met with a classic Juliette \u201Cwho, what, when, where, why questionnaire\u201D. \xA0After a few made up answers and dodged questions he was able to get out the door and meet Mr. Trautman.\xA0',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'At dinner, before the meal arrived, Matt asked for, and graciously received, Mr. Trautman\u2019s blessing to marry his daughter. \xA0Filled with elation, Matt returned home to Juliette and prepared for the even harder job of discreetly shopping for a ring under Juliette\u2019s nose.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'For those of you who do not know, Juliette is the opposite of subtle. Juliette was sending Instagram ring post tags and messaged screenshots on a daily basis since the two moved in together. After the 400th ring post Juliette had showed him, he had a pretty definitive idea of what ring she wanted. \xA0',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'In the beginning of February, Juliette and Matt went with the Brandman\u2019s to see Rain Grandma in Florida. The proposal was on many people\u2019s minds. Juliette\u2019s friends thought it would be on this last minute trip, Cherie thought it could be any moment of any day and would ask 12 times a day, and Rain Grandma wanted to know too.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'That night at dinner, she asked Juliette, \u201CSo where is the ring, I don\u2019t want any accidents, it\u2019s been long enough.\u201D \xA0\xA0',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'Juliette responded, \u201CThat is a good question, do you have an answer Matt?\u201D and Matt laughed and hugged his grandma and told her he would tell her more later on. On the last day of that vacation, Matt pulled Rain Grandma aside to tell her how important Juliette was to him and that he was planning to propose very soon. \xA0While the two were on their way back from Florida Juliette showed Matt the Ring Concierge account on Instagram. After looking through some posts on his own phone later that night Matt decided this person was going to design Juliette\u2019s ring.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'He was able to escape work early and meet with the woman behind the Instagram feed for a consultation. \xA0After consulting friends (See: Amanda) and family he settled on a Radiant cut diamond set on a platinum ring with two accompanying baguette diamonds. \xA0However, it needed to be assembled offsite so it would have to be shipped to his house in New Jersey the following week. \xA0In the meantime Matt started to work on various proposal ideas and pitch them to his closest confidants.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'Matt knew the week of Passover Juliette was getting ancy. She was dressing nicer for work and she would come home asking if they were going to dinner every night only to find Matt in his Pajamas. Matt\u2019s plans started to come together on\xA0March 28\xA0(Happy Birthday Amanda). That day the ring arrived at 6 Wolf Hill. \xA0He knew that both families would be home for Passover, and Matt knew Juliette was planning to leave the City on that\xA0Thursday\xA0in the early afternoon. Though he had not planned to propose that day and had no formal plans to, the universe clearly disagreed and offered an opportunity he could not pass up. \xA0First he told his boss at the time what was going on and got an enthusiastic greenlight to take off of work so he could meet his Mom in Secaucus and get the ring. \xA0He told Amanda his plan to do propose that week and had arranged for he to come surprise Juliette that\xA0Friday. Then he called up a photographer to capture the moment and pinged Juliette at work to meet him outside the PwC office for a date (not an uncommon request given that they both work at the same company).',
					_react2.default.createElement('br', null),
					'\xA0',
					_react2.default.createElement('br', null),
					'Just when everything seemed to be going well and he was about to meet Juliette in the lobby, the photographer called and canceled, with only about an hours\u2019 notice. \xA0In a slight (see: major) panic, Matt called the one person who always knows what to in a crisis, his Dad\u2019s longtime assistant, Dianna. And in an act of unbelievable selflessness she agreed to be the photographer. \xA0',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'With the crisis averted Matt met Juliette in the lobby right after getting off the phone with Dianna, and requested she put in her headphones and close her eyes while he got a cab to their date location. \xA0While this no doubt caught her by surprise she agreed and played along. \xA0He directed the cab to take them to the Museum of Natural History. It was closed, but that didn\u2019t matter to either of them. They had been on many dates there especially when they first started dating. Upon arrival Matt had her take off her headphones and open her eyes. \xA0He walked her up the steps and told her how the Museum has always been there with them through every up and down in their relationship and much like the Museum is a fixture in their lives he wanted to make sure she would be one in his. \xA0He got down on one knee and asked for her hand in marriage, there was a brief shocked pause as tears started to stream down her face, and after what seemed to be an eternity for him (but was most likely less than a few seconds) she said yes and kissed him!',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'Dianna captured beautiful in the moment photos and the two kept it a secret all through dinner. They called their parents in a cab to Del Friscos where they shared VIPs and mashed potatoes as they called all their friends and family.'
				)
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
	componentId: 's17u0hou-0'
})(['display:flex;width:100%;flex-flow:column;justify-content:center;align-items:center;font-family:\'Pompiere\',cursive;font-size:26px']);
var ST = _styledComponents2.default.p.withConfig({
	displayName: 'MainEvent__ST',
	componentId: 's17u0hou-1'
})(['font-size:36px;text-align:center;max-width:450px;margin:auto;font-weight:bold;']);

var SP = _styledComponents2.default.p.withConfig({
	displayName: 'MainEvent__SP',
	componentId: 's17u0hou-2'
})(['text-align:center;max-width:450px;margin:auto;']);

var StyleWrap = _styledComponents2.default.img.withConfig({
	displayName: 'MainEvent__StyleWrap',
	componentId: 's17u0hou-3'
})(['width:300px;margin:10px;}']);

var MainEvent = function MainEvent() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(StyleWrap, { src: 'public/images/prom.jpeg' }),
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
			'November 9th, 2019'
		),
		_react2.default.createElement(
			SP,
			null,
			'The Ashford Estate'
		),
		_react2.default.createElement(
			SP,
			null,
			'Details to follow'
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
  componentId: 'xyic54-0'
})(['display:flex;position:sticky;z-index:100;top:0;width:100%;flex-flow:column;justify-content:space-around;align-items:center;border-bottom:1px solid black;background-color:#F9F8F6;@media (max-width:768px){height:auto;}@media (min-width:768px){height:15vh;min-height:100px;}']);

var NavbarWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Navigation__NavbarWrapper',
  componentId: 'xyic54-1'
})(['@media (min-width:768px){display:flex;width:100%;justify-content:space-around;}@media (max-width:768px){display:none;flex-flow:column;justify-content:space-around;align-items:center;position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.9);z-index:2;cursor:pointer;overflow-x:hidden;overflow-y:hidden;}']);

var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'Navigation__Title',
  componentId: 'xyic54-2'
})(['font-family:\'Pompiere\',cursive;font-size:36px;margin-top:15px;margin-bottom:15px;@media (max-width:768px){display:None;}']);

var HiddenTitle = _styledComponents2.default.h1.withConfig({
  displayName: 'Navigation__HiddenTitle',
  componentId: 'xyic54-3'
})(['font-family:\'Pompiere\',cursive;font-size:36px;margin-bottom:10px;padding-top:10px;margin-left:5px;']);

var StyledLink = (0, _styledComponents2.default)(_reactRouterDom.Link).withConfig({
  displayName: 'Navigation__StyledLink',
  componentId: 'xyic54-4'
})(['color:black;&:hover{color:black;text-decoration:none;}font-size:20px;font-family:\'Pompiere\',cursive;@media (max-width:768px){color:white;}']);

var HiddenWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Navigation__HiddenWrapper',
  componentId: 'xyic54-5'
})(['display:flex;width:100%;align-items:center;font-family:\'Pompiere\',cursive;@media (min-width:768px){display:None;}']);

var MenuToggle = _styledComponents2.default.button.withConfig({
  displayName: 'Navigation__MenuToggle',
  componentId: 'xyic54-6'
})(['display:flex;margin-left:auto;margin-right:10px;border-radius:4px;cursor:pointer;touch-action:manipulation;']);

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.closeMenu = _this.closeMenu.bind(_this);
    _this.navRef = _react2.default.createRef();
    _this.state = {
      isOpen: false,
      navState: ''
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.navRef.current.addEventListener('animationend', function (e) {
        return console.log(e);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.navRef.current.removeEventListener('animationend', function (e) {
        return console.log(e);
      });
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu() {
      this.setState({
        navState: 'navOpen animated slideOutUp',
        isOpen: false
      });
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var currentState = this.state.isOpen;
      var newState = !this.state.isOpen;
      this.setState({
        isOpen: true,
        navState: 'navOpen slideInDown'
      });

      if (newState == true) {
        this.setState({
          navState: 'navOpen animated slideInDown'
        });
      } else {
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
          { onClick: this.closeMenu, innerRef: this.navRef, className: "animated " + this.state.navState },
          _react2.default.createElement(
            StyledLink,
            { onClick: this.closeMenu, to: '/' },
            ' Home '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.closeMenu, to: '/main-event' },
            ' Main Event '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.closeMenu, to: '/travel-stay' },
            ' Travel and Stay '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.closeMenu, to: '/wedding-party' },
            ' Wedding Party '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.closeMenu, to: '/registry' },
            ' Registry '
          ),
          _react2.default.createElement(
            StyledLink,
            { onClick: this.closeMenu, to: '/faqs' },
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

/***/ "./components/PictureChange.jsx":
/*!**************************************!*\
  !*** ./components/PictureChange.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleAvatar = _styledComponents2.default.img.withConfig({
	displayName: 'PictureChange__CircleAvatar',
	componentId: 's1h4ajod-0'
})(['height:170px;']);

var PictureChange = function (_React$Component) {
	_inherits(PictureChange, _React$Component);

	function PictureChange(props) {
		_classCallCheck(this, PictureChange);

		var _this = _possibleConstructorReturn(this, (PictureChange.__proto__ || Object.getPrototypeOf(PictureChange)).call(this, props));

		_this.state = {
			firstPicture: true
		};
		return _this;
	}

	_createClass(PictureChange, [{
		key: 'handleEnter',
		value: function handleEnter(e) {
			this.setState({
				firstPicture: false
			});
		}
	}, {
		key: 'handleLeave',
		value: function handleLeave(e) {
			this.setState({
				firstPicture: true
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ style: { cursor: 'pointer' }, onPointerEnter: function onPointerEnter(e) {
						return _this2.handleEnter(e);
					}, onTouchStart: function onTouchStart(e) {
						return _this2.handleEnter(e);
					}, onTouchEnd: function onTouchEnd(e) {
						return _this2.handleLeave(e);
					}, onMouseLeave: function onMouseLeave(e) {
						return _this2.handleLeave(e);
					} },
				this.state.firstPicture ? _react2.default.createElement(CircleAvatar, { src: this.props.nPicture, alt: 'avatar' }) : _react2.default.createElement(CircleAvatar, { src: this.props.fPicture, alt: 'avatar' })
			);
		}
	}]);

	return PictureChange;
}(_react2.default.Component);

exports.default = PictureChange;

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
	componentId: 'llkzbm-0'
})(['display:flex;width:100%;flex-flow:column;justify-content:center;align-items:center;']);

var Title = _styledComponents2.default.h1.withConfig({
	displayName: 'Registry__Title',
	componentId: 'llkzbm-1'
})(['font-family:\'Pompiere\',cursive;font-size:30px;margin-top:25px;margin-left:25px;margin-right:25px;text-align:center;']);

var SubTitle = _styledComponents2.default.h1.withConfig({
	displayName: 'Registry__SubTitle',
	componentId: 'llkzbm-2'
})(['font-family:\'Pompiere\',cursive;font-size:30px;margin-left:25px;margin-right:25px;text-align:center;']);

var StyleWrap = _styledComponents2.default.img.withConfig({
	displayName: 'Registry__StyleWrap',
	componentId: 'llkzbm-3'
})(['width:300px;margin:10px;&:hover{opacity:0.5;}']);
var WrapperLong = _styledComponents2.default.div.withConfig({
	displayName: 'Registry__WrapperLong',
	componentId: 'llkzbm-4'
})(['display:flex;flex-flow:column wrap;justify-content:center;align-items:center;width:100%;']);
var Registry = function Registry() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			Title,
			null,
			'We are registered at Bloomingdales and Macy\'s '
		),
		_react2.default.createElement(
			SubTitle,
			null,
			'(Click Image to View Registry)'
		),
		_react2.default.createElement(
			WrapperLong,
			null,
			_react2.default.createElement(
				'a',
				{ href: 'https://www.bloomingdales.com/registry/wedding/guest/?registryId=2387933' },
				_react2.default.createElement(StyleWrap, { src: '/public/images/Bloomingdales.svg' })
			),
			_react2.default.createElement(
				'a',
				{ href: 'https://www.macys.com/wgl/registry/guest/2388310' },
				_react2.default.createElement(StyleWrap, { src: '/public/images/Macys.png' })
			)
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
	componentId: 's1ag73o0-0'
})(['display:flex;width:100%;flex-flow:column wrap;justify-content:flex-start;align-items:center;']);

var Title = _styledComponents2.default.h1.withConfig({
	displayName: 'TravelStay__Title',
	componentId: 's1ag73o0-1'
})(['font-family:\'Pompiere\',cursive;font-size:30px;margin-bottom:25px;margin-top:25px;']);

var StyledP = _styledComponents2.default.p.withConfig({
	displayName: 'TravelStay__StyledP',
	componentId: 's1ag73o0-2'
})(['font-size:30px;font-family:\'Pompiere\',cursive;']);

var TravelStay = function TravelStay() {
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			Title,
			null,
			' To Be Announced '
		)
	);
};

exports.default = TravelStay;

/***/ }),

/***/ "./components/WeddingBios.js":
/*!***********************************!*\
  !*** ./components/WeddingBios.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var WeddingBios = {
	groomsmen: [{
		name: 'Jared Lipshutz',
		nickname: 'The Good Cop',
		blurb: 'Matt’s Cousin. The Murtaugh to Juliette’s Riggs, can often be found ',
		nPicture: '/public/images/njared.png',
		fPicture: '/public/images/jared.png'
	}, {
		name: 'Alec Brandman',
		nickname: '',
		blurb: 'Matt’s Brother. The Brandman that got it. 3 weeks into Matt and Juliette’s relationship, Alec approached the happy couple with a drawing and game plan for their wedding. Thanks for having foresight! ',
		nPicture: '/public/images/nalec.png',
		fPicture: '/public/images/nalec.png'
	}, {
		name: 'Jack Detiveaux',
		nickname: 'Ironfist',
		blurb: 'Matt’s Freshman year roommate. Jack recently found out he is a jew which better explained why all his non-Texan friends were part of the tribe. Its instinctual! ',
		nPicture: '/public/images/njack.png',
		fPicture: '/public/images/jack.png'

	}, {
		name: 'Greg Pfadenhaeur',
		nickname: 'Po',
		blurb: 'Greg is a Freshman year friend that actually made the life cut! When Greg is not being a super smarty pants at Dartmouth he is usually cleaning bags of holding as the Orc in our party.  ',
		nPicture: '/public/images/ngreg.png',
		fPicture: '/public/images/greg.png'
	}, {
		name: 'Ben Andre',
		nickname: 'Greenbottle',
		blurb: 'Ben is another freshman year friend that made it. You can find Ben casually performing at every hotspot as a the typical lead singer and guitarist, or drinking a specialized beer as he stealthily pulls out his nine. Our favorite Halfling that should have been the bard. ',
		nPicture: '/public/images/nben.png',
		fPicture: '/public/images/ben.png'
	}, {
		name: 'Michael Giordano',
		nickname: '',
		blurb: 'Matt and Mike have been friends for a grand total of 15 weeks. After 15 Aruba vacations, you can usually find mike belly up in a baby pool looking for this lost Aruban Arriba',
		nPicture: '/public/images/nmike.png',
		fPicture: '/public/images/mike.png'
	}, {
		name: 'Zach Berlant',
		nickname: '',
		blurb: 'Zach is Juliette’s cousin but more accurately Matt’s soulmate as the two have an ever increasing creepy list of things in common (board games, color blindness, rock climbing, Black wranglers, I could go on and on). Every time we all hangout Juliette becomes the third wheel',
		nPicture: '/public/images/nzach.png',
		fPicture: '/public/images/zach.png'
	}, {
		name: 'Jon Leeds',
		nickname: '',
		blurb: 'Matt’s little, Juliette’s Bougie Bestie. Jon is there to educate matt when he thinks Hermes is just some Grecian god in winged high tops',
		nPicture: '/public/images/njon.png',
		fPicture: '/public/images/jon.png'
	}, {
		name: 'JJ Surkin',
		nickname: 'Abrams',
		blurb: 'Juliette picked JJ as a friend for Matt. He seemed nice, had a blonde girlfriend, and really got into Dayenu at the AEPI Passover. There is nobody else I would rather call to break into Matt’s Boston apartment and ensure Matt had not been kidnapped',
		nPicture: '/public/images/njj.png',
		fPicture: '/public/images/jj.png'
	}],
	bridesmaids: [{
		name: 'Victoria Trautman',
		nickname: '',
		blurb: 'Juliette’s Sister. Enjoys eating crunchy gluten free food and is a master at self-tanning. Her eye for editing made this wedding appear normal',
		nPicture: '/public/images/nvictoria.png',
		fPicture: '/public/images/victoria.png'
	}, {
		name: 'Amanda Waltman',
		nickname: '',
		blurb: 'The rock, the Juliette wrangler, the Fixer. She was Juliette’s little in AEPHI, but somewhere along the way roles were reversed. This is who Cherie calls when the flowers come in ivory not white',
		nPicture: '/public/images/namanda.png',
		fPicture: '/public/images/amanda.png'
	}, {
		name: 'Katie Wirth',
		nickname: '',
		blurb: 'Kaite and Juliette have been friends since the fourth grade and both ended up in college in CT and jobs in NYC after. Our doorman thinks Kaite is our shared mistress',
		nPicture: '/public/images/nkatie.png',
		fPicture: '/public/images/katie.png'
	}, {
		name: 'Kim Daly',
		nickname: '',
		blurb: 'Kim is the wildest “nice girl” you will ever meet. Kim is the one we used to put in front of parents whenever we needed someone to seamlessly lie about our whereabouts the night before. ',
		nPicture: '/public/images/nkim.png',
		fPicture: '/public/images/kim.png'
	}, {
		name: 'Kyra Brandman',
		nickname: '',
		blurb: 'Matt’s Sister. Kyra has more talent in her left eyebrow than Matt and I have in our entire bodies combined. When she is not gallivanting across earth or teaching the Jeep Wave to the West coast you can usually find her enjoying Turf&Surf. The actual favorite child',
		nPicture: '/public/images/nkyra.png',
		fPicture: '/public/images/kyra.png'
	}, {
		name: 'Madie Wirth',
		nickname: '',
		blurb: 'Madie and Juliette have been friends for as long as the  two can remember. Madie was the fairy godmother to Juliette’s Evil Stepmother. Memory highlights include a bender with whole wheat bread, sloth running together at field hockey practice, and countless watches of She’s the Man',
		nPicture: '/public/images/nmadie.png',
		fPicture: '/public/images/madie.png'
	}, {
		name: 'Jill Berlant',
		nickname: '',
		blurb: 'Jill and Juliette were destined to be friends, they jus didn’t know it. Born 2 days apart the blondes both attended high schools near each other, with Jill in Matt’s classes, and colleges near each other. The summer before Senior year the 2 saw each other in random locations all across NYC and NJ. Fate pushed the two girls together and they have been inseparable ever since.',
		nPicture: '/public/images/njill.png',
		fPicture: '/public/images/jill.png'
	}, {
		name: 'Chloe Vincente',
		nickname: '',
		blurb: 'Chloe is famous. She is a news anchor who has been planning Juliette’s wedding and engagement against her will. Chloe and Juliette were in the same pledge class but through Chloe’s kind heart and good naturedness and Juliette’s lack of friend making skills the two became best friends in college. Matt and Juliette fought over who got her to stand on which side at the wedding. ',
		nPicture: '/public/images/nchloe.png',
		fPicture: '/public/images/chloe.png'
	}, {
		name: 'Caroline Barberi',
		nickname: '',
		blurb: 'Caroline is the first one you call for 3 very specific things, 1. How does one play basketball or any sport, 2. what country music should I be listening to? 3. Will there be hard seltzers and tanning oil? Caroline has been rooting for Matt and Juliette since the moment she met him and we couldn’t be luckier!',
		nPicture: '/public/images/ncaroline.png',
		fPicture: '/public/images/caroline.png'
	}]
};

exports.default = WeddingBios;

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Bio = __webpack_require__(/*! ./Bio.jsx */ "./components/Bio.jsx");

var _Bio2 = _interopRequireDefault(_Bio);

var _WeddingBios = __webpack_require__(/*! ./WeddingBios.js */ "./components/WeddingBios.js");

var _WeddingBios2 = _interopRequireDefault(_WeddingBios);

var _aos = __webpack_require__(/*! aos */ "aos");

var _aos2 = _interopRequireDefault(_aos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'WeddingParty__Wrapper',
	componentId: 's39ct1k-0'
})(['display:flex;width:100%;flex-flow:column wrap;justify-content:center;align-items:center;overflow-x:hidden;']);

var Title = _styledComponents2.default.h1.withConfig({
	displayName: 'WeddingParty__Title',
	componentId: 's39ct1k-1'
})(['font-family:\'Pompiere\',cursive;font-size:36px;margin-bottom:25px;margin-top:25px;']);

var BioColumn = _styledComponents2.default.div.withConfig({
	displayName: 'WeddingParty__BioColumn',
	componentId: 's39ct1k-2'
})(['display:flex;flex:1 0 50%;flex-flow:column wrap;justify-content:flex-start;align-items:center;border-right:solid 1px black;@media (max-width:700px){border-right:0px;}']);

var BioWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'WeddingParty__BioWrapper',
	componentId: 's39ct1k-3'
})(['display:flex;width:100%;flex-flow:row wrap;justify-content:flex-start;align-items:flex-start;']);

var HiddenTitle = _styledComponents2.default.h1.withConfig({
	displayName: 'WeddingParty__HiddenTitle',
	componentId: 's39ct1k-4'
})(['font-family:\'Pompiere\',cursive;font-size:36px;margin-bottom:10px;padding-top:10px;margin-left:5px;@media (min-width:768px){display:None;}']);

var WeddingParty = function (_React$Component) {
	_inherits(WeddingParty, _React$Component);

	function WeddingParty(props, context) {
		_classCallCheck(this, WeddingParty);

		return _possibleConstructorReturn(this, (WeddingParty.__proto__ || Object.getPrototypeOf(WeddingParty)).call(this, props, context));
	}

	_createClass(WeddingParty, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_aos2.default.init();
			{
				_WeddingBios2.default.groomsmen.forEach(function (element) {
					var img = new Image();
					img.src = element.fPicture;
				});
			}
			{
				_WeddingBios2.default.bridesmaids.forEach(function (element) {
					var img = new Image();
					img.src = element.fPicture;
				});
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			_aos2.default.refresh();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				Wrapper,
				null,
				_react2.default.createElement(
					HiddenTitle,
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
						_WeddingBios2.default.groomsmen.map(function (bio, i) {
							return _react2.default.createElement(_Bio2.default, _extends({ x: 'fade-right', key: i }, bio));
						})
					),
					_react2.default.createElement(
						BioColumn,
						null,
						_react2.default.createElement(
							Title,
							null,
							' Bridesmaids '
						),
						_WeddingBios2.default.bridesmaids.map(function (bio, i) {
							return _react2.default.createElement(_Bio2.default, _extends({ x: 'fade-left', key: i }, bio));
						})
					)
				)
			);
		}
	}]);

	return WeddingParty;
}(_react2.default.Component);

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
  return '\n    <!doctype html>\n    <html>\n      <head>\n          <base href="/"><meta name="viewport" content="width=device-width">\n          <title> Brandman Wedding </title>\n          ' + styleTags + '\n\n          <link rel="stylesheet"\n          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">\n          <link rel="shortcut icon" href="/public/images/favicon.ico" />\n          <link rel="stylesheet" type="text/css" href="/public/css/style.css">\n          <link rel="stylesheet" type="text/css" href="/public/css/aos.css">\n          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">\n          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" \n          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" \n          crossorigin="anonymous">\n          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Homemade+Apple|Pompiere|Shadows+Into+Light" rel="stylesheet">\n          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800|Roboto:400,500,900" \n          rel="stylesheet">\n          \n      </head>\n      <body style="background-size:cover; background-color:#F9F8F6">\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/public/client.js"></script>\n      </body>\n    </html>\n    ';
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

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

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

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

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