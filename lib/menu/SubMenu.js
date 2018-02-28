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

var _rcMenu = require('rc-menu');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = function (_React$Component) {
  _inherits(SubMenu, _React$Component);

  function SubMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SubMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (e) {
      _this.subMenu.onKeyDown(e);
    }, _this.saveSubMenu = function (subMenu) {
      _this.subMenu = subMenu;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SubMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootPrefixCls = _props.rootPrefixCls,
          className = _props.className;

      var theme = this.context.antdMenuTheme;
      return React.createElement(_rcMenu.SubMenu, _extends({}, this.props, {
        ref: this.saveSubMenu,
        popupClassName: (0, _classnames2.default)(rootPrefixCls + '-' + theme, className)
      }));
    }
  }]);

  return SubMenu;
}(React.Component);

SubMenu.contextTypes = {
  antdMenuTheme: _propTypes2.default.string
};
exports.default = SubMenu;