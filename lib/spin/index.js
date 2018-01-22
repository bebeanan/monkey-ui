'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spin = function (_React$Component) {
  _inherits(Spin, _React$Component);

  function Spin(props) {
    _classCallCheck(this, Spin);

    var _this = _possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, props));

    var spinning = props.spinning;
    _this.state = {
      spinning: spinning
    };
    return _this;
  }

  _createClass(Spin, [{
    key: 'isNestedPattern',
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!(0, _isCssAnimationSupported2.default)()) {
        // Show text in IE8/9
        (0, _reactDom.findDOMNode)(this).className += ' ' + this.props.prefixCls + '-show-text';
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var currentSpinning = this.props.spinning;
      var spinning = nextProps.spinning;
      var delay = this.props.delay;


      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      if (currentSpinning && !spinning) {
        this.debounceTimeout = setTimeout(function () {
          return _this2.setState({ spinning: spinning });
        }, 300);
        if (this.delayTimeout) {
          clearTimeout(this.delayTimeout);
        }
      } else {
        if (spinning && delay && !isNaN(Number(delay))) {
          this.delayTimeout = setTimeout(function () {
            return _this2.setState({ spinning: spinning });
          }, delay);
        } else {
          this.setState({ spinning: spinning });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          className = _props.className,
          size = _props.size,
          prefixCls = _props.prefixCls,
          tip = _props.tip,
          restProps = _objectWithoutProperties(_props, ['className', 'size', 'prefixCls', 'tip']);

      var spinning = this.state.spinning;


      var spinClassName = (0, _classnames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-yyxlg', size === 'yyx-large'), _defineProperty(_classNames, prefixCls + '-spinning', spinning), _defineProperty(_classNames, prefixCls + '-show-text', !!tip), _classNames), className);

      // fix https://fb.me/react-unknown-prop
      var divProps = (0, _object2.default)(restProps, ['spinning', 'delay']);

      var spinElement = _react2.default.createElement(
        'div',
        _extends({}, divProps, { className: spinClassName }),
        _react2.default.createElement(
          'span',
          { className: prefixCls + '-dot' },
          _react2.default.createElement('i', null),
          _react2.default.createElement('i', null),
          _react2.default.createElement('i', null),
          _react2.default.createElement('i', null)
        ),
        tip ? _react2.default.createElement(
          'div',
          { className: prefixCls + '-text' },
          tip
        ) : null
      );
      if (this.isNestedPattern()) {
        var _classNames2;

        var containerClassName = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-container', true), _defineProperty(_classNames2, prefixCls + '-blur', spinning), _classNames2));
        return _react2.default.createElement(
          _rcAnimate2.default,
          _extends({}, divProps, {
            component: 'div',
            className: prefixCls + '-nested-loading',
            style: null,
            transitionName: 'fade'
          }),
          spinning && _react2.default.createElement(
            'div',
            { key: 'loading' },
            spinElement
          ),
          _react2.default.createElement(
            'div',
            { className: containerClassName, key: 'container' },
            this.props.children
          )
        );
      }
      return spinElement;
    }
  }]);

  return Spin;
}(_react2.default.Component);

Spin.defaultProps = {
  prefixCls: 'ant-spin',
  spinning: true,
  size: 'default'
};
exports.default = Spin;