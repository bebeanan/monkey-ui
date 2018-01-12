'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);
var objectOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.number]);

var Col = function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props;

      var span = props.span,
          order = props.order,
          offset = props.offset,
          push = props.push,
          pull = props.pull,
          className = props.className,
          children = props.children,
          _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === undefined ? 'ant-col' : _props$prefixCls,
          others = _objectWithoutProperties(props, ['span', 'order', 'offset', 'push', 'pull', 'className', 'children', 'prefixCls']);

      var sizeClassObj = {};
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
        var _extends2;

        var sizeProps = {};
        if (typeof props[size] === 'number') {
          sizeProps.span = props[size];
        } else if (_typeof(props[size]) === 'object') {
          sizeProps = props[size] || {};
        }

        delete others[size];

        sizeClassObj = _extends({}, sizeClassObj, (_extends2 = {}, _defineProperty(_extends2, prefixCls + '-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), _defineProperty(_extends2, prefixCls + '-' + size + '-order-' + sizeProps.order, sizeProps.order || sizeProps.order === 0), _defineProperty(_extends2, prefixCls + '-' + size + '-offset-' + sizeProps.offset, sizeProps.offset || sizeProps.offset === 0), _defineProperty(_extends2, prefixCls + '-' + size + '-push-' + sizeProps.push, sizeProps.push || sizeProps.push === 0), _defineProperty(_extends2, prefixCls + '-' + size + '-pull-' + sizeProps.pull, sizeProps.pull || sizeProps.pull === 0), _extends2));
      });
      var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-' + span, span !== undefined), _defineProperty(_classNames, prefixCls + '-order-' + order, order), _defineProperty(_classNames, prefixCls + '-offset-' + offset, offset), _defineProperty(_classNames, prefixCls + '-push-' + push, push), _defineProperty(_classNames, prefixCls + '-pull-' + pull, pull), _classNames), className, sizeClassObj);

      return _react2.default.createElement(
        'div',
        _extends({}, others, { className: classes }),
        children
      );
    }
  }]);

  return Col;
}(_react2.default.Component);

Col.propTypes = {
  span: stringOrNumber,
  order: stringOrNumber,
  offset: stringOrNumber,
  push: stringOrNumber,
  pull: stringOrNumber,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
  xl: objectOrNumber
};
exports.default = Col;