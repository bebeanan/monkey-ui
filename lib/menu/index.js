'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.handleClick = function (e) {
      _this.setOpenKeys([]);
      _this.props.onClick(e);
    };

    _this.handleOpenChange = function (openKeys) {
      _this.setOpenKeys(openKeys);
      _this.props.onOpenChange(openKeys);
    };

    (0, _warning2.default)(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead.');

    _this.state = {
      openKeys: []
    };
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
        this.switchModeFromInline = true;
      }
      if ('openKeys' in nextProps) {
        this.setOpenKeys(nextProps.openKeys);
      }
    }
  }, {
    key: 'setOpenKeys',
    value: function setOpenKeys(openKeys) {
      if (!('openKeys' in this.props)) {
        this.setState({ openKeys: openKeys });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var openAnimation = this.props.openAnimation || this.props.openTransitionName;
      if (!openAnimation) {
        switch (this.props.mode) {
          case 'horizontal':
            openAnimation = 'slide-up';
            break;
          case 'vertical':
            // When mode switch from inline
            // submenu should hide without animation
            if (this.switchModeFromInline) {
              openAnimation = '';
              this.switchModeFromInline = false;
            } else {
              openAnimation = 'zoom-big';
            }
            break;
          case 'inline':
            openAnimation = _openAnimation2.default;
            break;
          default:
        }
      }

      var props = {};
      var className = this.props.className + ' ' + this.props.prefixCls + '-' + this.props.theme;
      if (this.props.mode !== 'inline') {
        // 这组属性的目的是
        // 弹出型的菜单需要点击后立即关闭
        // 另外，弹出型的菜单的受控模式没有使用场景
        props = {
          openKeys: this.state.openKeys,
          onClick: this.handleClick,
          onOpenChange: this.handleOpenChange,
          openTransitionName: openAnimation,
          className: className
        };
      } else {
        props = {
          openAnimation: openAnimation,
          className: className
        };
      }
      return _react2.default.createElement(_rcMenu2.default, _extends({}, this.props, props));
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.Divider = _rcMenu.Divider;
Menu.Item = _rcMenu.Item;
Menu.SubMenu = _rcMenu.SubMenu;
Menu.ItemGroup = _rcMenu.ItemGroup;
Menu.defaultProps = {
  prefixCls: 'ant-menu',
  onClick: noop,
  onOpenChange: noop,
  className: '',
  theme: 'light' // or dark
};
exports.default = Menu;