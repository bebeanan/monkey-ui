'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return _react2.default.cloneElement(child, {}, child.props.children.split('').join(' '));
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }
    return _react2.default.createElement(
      'span',
      null,
      child
    );
  }
  return child;
}

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.clickedTimeout) {
        clearTimeout(this.clickedTimeout);
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'clearButton',
    value: function clearButton(button) {
      button.className = button.className.replace(' ' + this.props.prefixCls + '-clicked', '');
    }

    // Handle auto focus when click button in Chrome

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props;

      var type = props.type,
          shape = props.shape,
          size = props.size,
          className = props.className,
          htmlType = props.htmlType,
          children = props.children,
          icon = props.icon,
          loading = props.loading,
          prefixCls = props.prefixCls,
          others = _objectWithoutProperties(props, ['type', 'shape', 'size', 'className', 'htmlType', 'children', 'icon', 'loading', 'prefixCls']);

      // large => lg
      // small => sm


      var sizeCls = {
        large: 'lg',
        small: 'sm'
      }[size] || '';

      var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + type, type), _defineProperty(_classNames, prefixCls + '-' + shape, shape), _defineProperty(_classNames, prefixCls + '-' + sizeCls, sizeCls), _defineProperty(_classNames, prefixCls + '-icon-only', !children && icon), _defineProperty(_classNames, prefixCls + '-loading', loading), _defineProperty(_classNames, className, className), _classNames));

      var iconType = loading ? 'loading' : icon;

      var kids = _react2.default.Children.map(children, insertSpace);

      return _react2.default.createElement(
        'button',
        _extends({}, others, {
          type: htmlType || 'button',
          className: classes,
          onMouseUp: this.handleMouseUp,
          onClick: this.handleClick
        }),
        iconType ? _react2.default.createElement(_icon2.default, { type: iconType }) : null,
        kids
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleClick = function () {
    var _props;

    // Add click effect
    var buttonNode = (0, _reactDom.findDOMNode)(_this2);
    _this2.clearButton(buttonNode);
    _this2.clickedTimeout = setTimeout(function () {
      return buttonNode.className += ' ' + _this2.props.prefixCls + '-clicked';
    }, 10);
    clearTimeout(_this2.timeout);
    _this2.timeout = setTimeout(function () {
      return _this2.clearButton(buttonNode);
    }, 500);

    (_props = _this2.props).onClick.apply(_props, arguments);
  };

  this.handleMouseUp = function (e) {
    (0, _reactDom.findDOMNode)(_this2).blur();
    if (_this2.props.onMouseUp) {
      _this2.props.onMouseUp(e);
    }
  };
};

exports.default = Button;


Button.propTypes = {
  type: _react2.default.PropTypes.string,
  shape: _react2.default.PropTypes.oneOf(['circle', 'circle-outline']),
  size: _react2.default.PropTypes.oneOf(['large', 'default', 'small']),
  htmlType: _react2.default.PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: _react2.default.PropTypes.func,
  loading: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  icon: _react2.default.PropTypes.string,
  prefixCls: _react2.default.PropTypes.string
};

Button.defaultProps = {
  prefixCls: 'ant-btn',
  onClick: function onClick() {},

  loading: false
};