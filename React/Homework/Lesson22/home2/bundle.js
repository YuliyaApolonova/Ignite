/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Person = function Person() {
	   var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "John";
	   var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Doe';
	   var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	   var gender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Male';

	   _classCallCheck(this, Person);

	   this.firstName = firstName;
	   this.lastName = lastName;
	   this.age = age;
	   this.gender = gender;
	};

	var User = function (_Person) {
	   _inherits(User, _Person);

	   function User(firstName, lastName, age, gender) {
	      var date = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '0';
	      var id = arguments[5];

	      _classCallCheck(this, User);

	      var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, firstName, lastName, age, gender));

	      _this.date = date;
	      _this.id = id;
	      return _this;
	   }

	   return User;
	}(Person);

	var user_1 = new User('Vasya', 'Surname', 45, 'Male', '05.08.17', 1);
	var user_2 = new User('Vasya2', 'Surname2', 35, 'Male', '05.09.17', 2);
	var user_3 = new User('Vasya3', 'Surname3', 4, 'Male', '05.10.17', 3);
	var user_4 = new User('Vasya4', 'Surname4', 5, 'Male', '06.08.17', 4);

	var users = [user_1, user_2, user_3, user_4];
	//alert(user_2.date);

/***/ }
/******/ ]);