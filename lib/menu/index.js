'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _SubMenu = require('./SubMenu');

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Sider = require('../layout/Sider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _initialiseProps.call(_this);

    (0, _warning2.default)(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead, ' + 'see: https://u.ant.design/menu-on-open-change.');

    (0, _warning2.default)(!('inlineCollapsed' in props && props.mode !== 'inline'), '`inlineCollapsed` should only be used when Menu\'s `mode` is inline.');

    var openKeys = void 0;
    if ('defaultOpenKeys' in props) {
      openKeys = props.defaultOpenKeys;
    } else if ('openKeys' in props) {
      openKeys = props.openKeys;
    }

    _this.state = {
      openKeys: openKeys || []
    };
    return _this;
  }

  _createClass(Menu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        inlineCollapsed: this.getInlineCollapsed(),
        antdMenuTheme: this.props.theme
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var prefixCls = this.props.prefixCls;

      if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
        this.switchModeFromInline = true;
      }
      if ('openKeys' in nextProps) {
        this.setState({ openKeys: nextProps.openKeys });
        return;
      }
      if (nextProps.inlineCollapsed && !this.props.inlineCollapsed || nextContext.siderCollapsed && !this.context.siderCollapsed) {
        this.switchModeFromInline = !!this.state.openKeys.length && !!(0, _reactDom.findDOMNode)(this).querySelectorAll('.' + prefixCls + '-submenu-open').length;
        this.inlineOpenKeys = this.state.openKeys;
        this.setState({ openKeys: [] });
      }
      if (!nextProps.inlineCollapsed && this.props.inlineCollapsed || !nextContext.siderCollapsed && this.context.siderCollapsed) {
        this.setState({ openKeys: this.inlineOpenKeys });
        this.inlineOpenKeys = [];
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
    key: 'getRealMenuMode',
    value: function getRealMenuMode() {
      var inlineCollapsed = this.getInlineCollapsed();
      if (this.switchModeFromInline && inlineCollapsed) {
        return 'inline';
      }
      var mode = this.props.mode;

      return inlineCollapsed ? 'vertical' : mode;
    }
  }, {
    key: 'getInlineCollapsed',
    value: function getInlineCollapsed() {
      var inlineCollapsed = this.props.inlineCollapsed;

      if (this.context.siderCollapsed !== undefined) {
        return this.context.siderCollapsed;
      }
      return inlineCollapsed;
    }
  }, {
    key: 'getMenuOpenAnimation',
    value: function getMenuOpenAnimation(menuMode) {
      var _this2 = this;

      var _props = this.props,
          openAnimation = _props.openAnimation,
          openTransitionName = _props.openTransitionName;

      var menuOpenAnimation = openAnimation || openTransitionName;
      if (openAnimation === undefined && openTransitionName === undefined) {
        switch (menuMode) {
          case 'horizontal':
            menuOpenAnimation = 'slide-up';
            break;
          case 'vertical':
          case 'vertical-left':
          case 'vertical-right':
            // When mode switch from inline
            // submenu should hide without animation
            if (this.switchModeFromInline) {
              menuOpenAnimation = '';
              this.switchModeFromInline = false;
            } else {
              menuOpenAnimation = 'zoom-big';
            }
            break;
          case 'inline':
            menuOpenAnimation = _extends({}, _openAnimation2.default, {
              leave: function leave(node, done) {
                return _openAnimation2.default.leave(node, function () {
                  // Make sure inline menu leave animation finished before mode is switched
                  _this2.switchModeFromInline = false;
                  _this2.setState({});
                  // when inlineCollapsed change false to true, all submenu will be unmounted,
                  // so that we don't need handle animation leaving.
                  if (_this2.getRealMenuMode() === 'vertical') {
                    return;
                  }
                  done();
                });
              }
            });
            break;
          default:
        }
      }
      return menuOpenAnimation;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          className = _props2.className,
          theme = _props2.theme;

      var menuMode = this.getRealMenuMode();
      var menuOpenAnimation = this.getMenuOpenAnimation(menuMode);

      var menuClassName = (0, _classnames2.default)(className, prefixCls + '-' + theme, _defineProperty({}, prefixCls + '-inline-collapsed', this.getInlineCollapsed()));

      var menuProps = {
        openKeys: this.state.openKeys,
        onOpenChange: this.handleOpenChange,
        className: menuClassName,
        mode: menuMode
      };

      if (menuMode !== 'inline') {
        // closing vertical popup submenu after click it
        menuProps.onClick = this.handleClick;
        menuProps.openTransitionName = menuOpenAnimation;
      } else {
        menuProps.openAnimation = menuOpenAnimation;
      }

      // https://github.com/ant-design/ant-design/issues/8587
      var collapsedWidth = this.context.collapsedWidth;

      if (this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px')) {
        return null;
      }

      return React.createElement(_rcMenu2.default, _extends({}, this.props, menuProps));
    }
  }]);

  return Menu;
}(React.Component);

Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem2.default;
Menu.SubMenu = _SubMenu2.default;
Menu.ItemGroup = _rcMenu.ItemGroup;
Menu.defaultProps = {
  prefixCls: 'ant-menu',
  className: '',
  theme: 'light' // or dark
};
Menu.childContextTypes = {
  inlineCollapsed: _propTypes2.default.bool,
  antdMenuTheme: _propTypes2.default.string
};
Menu.contextTypes = {
  siderCollapsed: _propTypes2.default.bool,
  collapsedWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.inlineOpenKeys = [];

  this.handleClick = function (e) {
    _this3.handleOpenChange([]);

    var onClick = _this3.props.onClick;

    if (onClick) {
      onClick(e);
    }
  };

  this.handleOpenChange = function (openKeys) {
    _this3.setOpenKeys(openKeys);

    var onOpenChange = _this3.props.onOpenChange;

    if (onOpenChange) {
      onOpenChange(openKeys);
    }
  };
};

exports.default = Menu;