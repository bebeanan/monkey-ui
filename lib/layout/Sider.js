'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
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
}

var dimensionMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
};

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    i += 1;
    return '' + prefix + i;
  };
}();

var Sider = function (_React$Component) {
  _inherits(Sider, _React$Component);

  function Sider(props) {
    _classCallCheck(this, Sider);

    var _this = _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

    _initialiseProps.call(_this);

    _this.uniqueId = generateId('ant-sider-');
    var matchMedia = void 0;
    if (typeof window !== 'undefined') {
      matchMedia = window.matchMedia;
    }
    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMap) {
      _this.mql = matchMedia('(max-width: ' + dimensionMap[props.breakpoint] + ')');
    }
    var collapsed = void 0;
    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = props.defaultCollapsed;
    }
    _this.state = {
      collapsed: collapsed,
      below: false
    };
    return _this;
  }

  _createClass(Sider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        siderCollapsed: this.state.collapsed,
        collapsedWidth: this.props.collapsedWidth
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('collapsed' in nextProps) {
        this.setState({
          collapsed: nextProps.collapsed
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.mql) {
        this.mql.addListener(this.responsiveHandler);
        this.responsiveHandler(this.mql);
      }

      if (this.context.siderHook) {
        this.context.siderHook.addSider(this.uniqueId);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.mql) {
        this.mql.removeListener(this.responsiveHandler);
      }

      if (this.context.siderHook) {
        this.context.siderHook.removeSider(this.uniqueId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          collapsible = _props.collapsible,
          reverseArrow = _props.reverseArrow,
          trigger = _props.trigger,
          style = _props.style,
          width = _props.width,
          collapsedWidth = _props.collapsedWidth,
          others = _objectWithoutProperties(_props, ['prefixCls', 'className', 'collapsible', 'reverseArrow', 'trigger', 'style', 'width', 'collapsedWidth']);

      var divProps = (0, _omit2.default)(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint']);
      var siderWidth = this.state.collapsed ? collapsedWidth : width;
      // special trigger when collapsedWidth == 0
      var zeroWidthTrigger = collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px' ? React.createElement(
        'span',
        { onClick: this.toggle, className: prefixCls + '-zero-width-trigger' },
        React.createElement(_icon2.default, { type: 'bars' })
      ) : null;
      var iconObj = {
        'expanded': reverseArrow ? React.createElement(_icon2.default, { type: 'right' }) : React.createElement(_icon2.default, { type: 'left' }),
        'collapsed': reverseArrow ? React.createElement(_icon2.default, { type: 'left' }) : React.createElement(_icon2.default, { type: 'right' })
      };
      var status = this.state.collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || React.createElement(
        'div',
        { className: prefixCls + '-trigger', onClick: this.toggle, style: { width: siderWidth } },
        trigger || defaultTrigger
      ) : null;
      var divStyle = _extends({}, style, {
        flex: '0 0 ' + siderWidth + 'px',
        maxWidth: siderWidth + 'px', // Fix width transition bug in IE11
        minWidth: siderWidth + 'px', // https://github.com/ant-design/ant-design/issues/6349
        width: siderWidth + 'px'
      });
      var siderCls = (0, _classnames2.default)(className, prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-collapsed', !!this.state.collapsed), _defineProperty(_classNames, prefixCls + '-has-trigger', !!trigger), _defineProperty(_classNames, prefixCls + '-below', !!this.state.below), _defineProperty(_classNames, prefixCls + '-zero-width', siderWidth === 0 || siderWidth === '0' || siderWidth === '0px'), _classNames));
      return React.createElement(
        'div',
        _extends({ className: siderCls }, divProps, { style: divStyle }),
        React.createElement(
          'div',
          { className: prefixCls + '-children' },
          this.props.children
        ),
        collapsible || this.state.below && zeroWidthTrigger ? triggerDom : null
      );
    }
  }]);

  return Sider;
}(React.Component);

Sider.__ANT_LAYOUT_SIDER = true;
Sider.defaultProps = {
  prefixCls: 'ant-layout-sider',
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
  collapsedWidth: 80,
  style: {}
};
Sider.childContextTypes = {
  siderCollapsed: _propTypes2.default.bool,
  collapsedWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
Sider.contextTypes = {
  siderHook: _propTypes2.default.object
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.responsiveHandler = function (mql) {
    _this2.setState({ below: mql.matches });
    if (_this2.state.collapsed !== mql.matches) {
      _this2.setCollapsed(mql.matches, 'responsive');
    }
  };

  this.setCollapsed = function (collapsed, type) {
    if (!('collapsed' in _this2.props)) {
      _this2.setState({
        collapsed: collapsed
      });
    }
    var onCollapse = _this2.props.onCollapse;

    if (onCollapse) {
      onCollapse(collapsed, type);
    }
  };

  this.toggle = function () {
    var collapsed = !_this2.state.collapsed;
    _this2.setCollapsed(collapsed, 'clickTrigger');
  };

  this.belowShowChange = function () {
    _this2.setState({ belowShow: !_this2.state.belowShow });
  };
};

exports.default = Sider;