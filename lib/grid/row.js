'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
var enquire = void 0;
if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = require('enquire.js');
}

var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Row.__proto__ || Object.getPrototypeOf(Row)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      screens: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Row, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      Object.keys(responsiveMap).map(function (screen) {
        return enquire.register(responsiveMap[screen], {
          match: function match() {
            if (_typeof(_this2.props.gutter) !== 'object') {
              return;
            }
            _this2.setState(function (prevState) {
              return {
                screens: _extends({}, prevState.screens, _defineProperty({}, screen, true))
              };
            });
          },
          unmatch: function unmatch() {
            if (_typeof(_this2.props.gutter) !== 'object') {
              return;
            }
            _this2.setState(function (prevState) {
              return {
                screens: _extends({}, prevState.screens, _defineProperty({}, screen, false))
              };
            });
          },
          // Keep a empty destory to avoid triggering unmatch when unregister
          destroy: function destroy() {}
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Object.keys(responsiveMap).map(function (screen) {
        return enquire.unregister(responsiveMap[screen]);
      });
    }
  }, {
    key: 'getGutter',
    value: function getGutter() {
      var gutter = this.props.gutter;

      if ((typeof gutter === 'undefined' ? 'undefined' : _typeof(gutter)) === 'object') {
        for (var i = 0; i <= responsiveArray.length; i++) {
          var breakpoint = responsiveArray[i];
          if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
            return gutter[breakpoint];
          }
        }
      }
      return gutter;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          type = _props.type,
          justify = _props.justify,
          align = _props.align,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          _props$prefixCls = _props.prefixCls,
          prefixCls = _props$prefixCls === undefined ? 'ant-row' : _props$prefixCls,
          others = _objectWithoutProperties(_props, ['type', 'justify', 'align', 'className', 'style', 'children', 'prefixCls']);

      var gutter = this.getGutter();
      var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, !type), _defineProperty(_classNames, prefixCls + '-' + type, type), _defineProperty(_classNames, prefixCls + '-' + type + '-' + justify, type && justify), _defineProperty(_classNames, prefixCls + '-' + type + '-' + align, type && align), _classNames), className);
      var rowStyle = gutter > 0 ? _extends({
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      }, style) : style;
      var cols = _react.Children.map(children, function (col) {
        if (!col) {
          return null;
        }
        if (col.props && gutter > 0) {
          return (0, _react.cloneElement)(col, {
            style: _extends({
              paddingLeft: gutter / 2,
              paddingRight: gutter / 2
            }, col.props.style)
          });
        }
        return col;
      });
      var otherProps = _extends({}, others);
      delete otherProps.gutter;
      return React.createElement(
        'div',
        _extends({}, otherProps, { className: classes, style: rowStyle }),
        cols
      );
    }
  }]);

  return Row;
}(React.Component);

Row.defaultProps = {
  gutter: 0
};
Row.propTypes = {
  type: _propTypes2.default.string,
  align: _propTypes2.default.string,
  justify: _propTypes2.default.string,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  gutter: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.number]),
  prefixCls: _propTypes2.default.string
};
exports.default = Row;