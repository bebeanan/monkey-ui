'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = function (_React$Component) {
  _inherits(InputElement, _React$Component);

  function InputElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
      _this.ele.focus ? _this.ele.focus() : ReactDOM.findDOMNode(_this.ele).focus();
    }, _this.blur = function () {
      _this.ele.blur ? _this.ele.blur() : ReactDOM.findDOMNode(_this.ele).blur();
    }, _this.saveRef = function (ele) {
      _this.ele = ele;
      var childRef = _this.props.children.ref;

      if (typeof childRef === 'function') {
        childRef(ele);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputElement, [{
    key: 'render',
    value: function render() {
      return React.cloneElement(this.props.children, _extends({}, this.props, {
        ref: this.saveRef
      }), null);
    }
  }]);

  return InputElement;
}(React.Component);

exports.default = InputElement;