'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Sider = require('./Sider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function generator(props) {
  return function (BasicComponent) {
    return function (_React$Component) {
      _inherits(Adapter, _React$Component);

      function Adapter() {
        _classCallCheck(this, Adapter);

        return _possibleConstructorReturn(this, (Adapter.__proto__ || Object.getPrototypeOf(Adapter)).apply(this, arguments));
      }

      _createClass(Adapter, [{
        key: 'render',
        value: function render() {
          var prefixCls = props.prefixCls;

          return React.createElement(BasicComponent, _extends({ prefixCls: prefixCls }, this.props));
        }
      }]);

      return Adapter;
    }(React.Component);
  };
}

var Basic = function (_React$Component2) {
  _inherits(Basic, _React$Component2);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          children = _props.children,
          others = _objectWithoutProperties(_props, ['prefixCls', 'className', 'children']);

      var divCls = (0, _classnames2.default)(className, prefixCls);
      return React.createElement(
        'div',
        _extends({ className: divCls }, others),
        children
      );
    }
  }]);

  return Basic;
}(React.Component);

var BasicLayout = function (_React$Component3) {
  _inherits(BasicLayout, _React$Component3);

  function BasicLayout() {
    var _ref;

    var _temp, _this3, _ret;

    _classCallCheck(this, BasicLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).call.apply(_ref, [this].concat(args))), _this3), _this3.state = { siders: [] }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(BasicLayout, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this4 = this;

      return {
        siderHook: {
          addSider: function addSider(id) {
            _this4.setState({
              siders: [].concat(_toConsumableArray(_this4.state.siders), [id])
            });
          },
          removeSider: function removeSider(id) {
            _this4.setState({
              siders: _this4.state.siders.filter(function (currentId) {
                return currentId !== id;
              })
            });
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          className = _props2.className,
          children = _props2.children,
          others = _objectWithoutProperties(_props2, ['prefixCls', 'className', 'children']);

      var divCls = (0, _classnames2.default)(className, prefixCls, _defineProperty({}, prefixCls + '-has-sider', this.state.siders.length > 0));
      return React.createElement(
        'div',
        _extends({ className: divCls }, others),
        children
      );
    }
  }]);

  return BasicLayout;
}(React.Component);

BasicLayout.childContextTypes = {
  siderHook: _propTypes2.default.object
};


var Layout = generator({
  prefixCls: 'ant-layout'
})(BasicLayout);

var Header = generator({
  prefixCls: 'ant-layout-header'
})(Basic);

var Footer = generator({
  prefixCls: 'ant-layout-footer'
})(Basic);

var Content = generator({
  prefixCls: 'ant-layout-content'
})(Basic);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

exports.default = Layout;