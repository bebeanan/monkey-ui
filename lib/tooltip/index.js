'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

var _index = require('../button/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var splitObject = function splitObject(obj, keys) {
  var picked = {};
  var omited = _extends({}, obj);
  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omited[key];
    }
  });
  return { picked: picked, omited: omited };
};

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (!('visible' in _this.props)) {
        _this.setState({ visible: _this.isNoTitle() ? false : visible });
      }
      if (onVisibleChange && !_this.isNoTitle()) {
        onVisibleChange(visible);
      }
    };

    _this.onPopupAlign = function (domNode, align) {
      var placements = _this.getPlacements();
      // 当前返回的位置
      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];
      if (!placement) {
        return;
      }
      // 根据当前坐标设置动画点
      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };
      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = rect.height - align.offset[1] + 'px';
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = -align.offset[1] + 'px';
      }
      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = rect.width - align.offset[0] + 'px';
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = -align.offset[0] + 'px';
      }
      domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
    };

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.state = {
      visible: !!props.visible || !!props.defaultVisible
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('visible' in nextProps) {
        this.setState({ visible: nextProps.visible });
      }
    }
  }, {
    key: 'getPopupDomNode',
    value: function getPopupDomNode() {
      return this.tooltip.getPopupDomNode();
    }
  }, {
    key: 'getPlacements',
    value: function getPlacements() {
      var _props = this.props,
          builtinPlacements = _props.builtinPlacements,
          arrowPointAtCenter = _props.arrowPointAtCenter,
          autoAdjustOverflow = _props.autoAdjustOverflow;

      return builtinPlacements || (0, _placements2.default)({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    }
  }, {
    key: 'isHoverTrigger',
    value: function isHoverTrigger() {
      var trigger = this.props.trigger;

      if (!trigger || trigger === 'hover') {
        return true;
      }
      if (Array.isArray(trigger)) {
        return trigger.indexOf('hover') >= 0;
      }
      return false;
    }

    // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18

  }, {
    key: 'getDisabledCompatibleChildren',
    value: function getDisabledCompatibleChildren(element) {
      if ((element.type.__ANT_BUTTON || element.type === 'button') && element.props.disabled && this.isHoverTrigger()) {
        // Pick some layout related style properties up to span
        // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
        var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omited = _splitObject.omited;

        var spanStyle = _extends({
          display: 'inline-block' }, picked, {
          cursor: 'not-allowed'
        });
        var buttonStyle = _extends({}, omited, {
          pointerEvents: 'none'
        });
        var child = (0, _react.cloneElement)(element, {
          style: buttonStyle,
          className: null
        });
        return React.createElement(
          'span',
          { style: spanStyle, className: element.props.className },
          child
        );
      }
      return element;
    }
  }, {
    key: 'isNoTitle',
    value: function isNoTitle() {
      var _props2 = this.props,
          title = _props2.title,
          overlay = _props2.overlay;

      return !title && !overlay; // overlay for old version compatibility
    }

    // 动态设置动画点

  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          state = this.state;
      var prefixCls = props.prefixCls,
          title = props.title,
          overlay = props.overlay,
          openClassName = props.openClassName,
          getPopupContainer = props.getPopupContainer,
          getTooltipContainer = props.getTooltipContainer;

      var children = props.children;
      var visible = state.visible;
      // Hide tooltip when there is no title
      if (!('visible' in props) && this.isNoTitle()) {
        visible = false;
      }

      var child = this.getDisabledCompatibleChildren(React.isValidElement(children) ? children : React.createElement(
        'span',
        null,
        children
      ));
      var childProps = child.props;
      var childCls = (0, _classnames2.default)(childProps.className, _defineProperty({}, openClassName || prefixCls + '-open', true));

      return React.createElement(
        _rcTooltip2.default,
        _extends({}, this.props, {
          getTooltipContainer: getPopupContainer || getTooltipContainer,
          ref: this.saveTooltip,
          builtinPlacements: this.getPlacements(),
          overlay: overlay || title || '',
          visible: visible,
          onVisibleChange: this.onVisibleChange,
          onPopupAlign: this.onPopupAlign
        }),
        visible ? (0, _react.cloneElement)(child, { className: childCls }) : child
      );
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip.defaultProps = {
  prefixCls: 'ant-tooltip',
  placement: 'top',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
exports.default = Tooltip;