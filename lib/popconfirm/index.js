'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = require('../locale-provider/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popconfirm = function (_React$Component) {
  _inherits(Popconfirm, _React$Component);

  function Popconfirm(props) {
    _classCallCheck(this, Popconfirm);

    var _this = _possibleConstructorReturn(this, (Popconfirm.__proto__ || Object.getPrototypeOf(Popconfirm)).call(this, props));

    _this.onConfirm = function (e) {
      _this.setVisible(false);

      var onConfirm = _this.props.onConfirm;

      if (onConfirm) {
        onConfirm.call(_this, e);
      }
    };

    _this.onCancel = function (e) {
      _this.setVisible(false);

      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel.call(_this, e);
      }
    };

    _this.onVisibleChange = function (visible) {
      _this.setVisible(visible);
    };

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.renderOverlay = function (popconfirmLocale) {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          cancelText = _this$props.cancelText,
          okText = _this$props.okText,
          okType = _this$props.okType;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: prefixCls + '-inner-content' },
          React.createElement(
            'div',
            { className: prefixCls + '-message' },
            React.createElement(_icon2.default, { type: 'exclamation-circle' }),
            React.createElement(
              'div',
              { className: prefixCls + '-message-title' },
              title
            )
          ),
          React.createElement(
            'div',
            { className: prefixCls + '-buttons' },
            React.createElement(
              _button2.default,
              { onClick: _this.onCancel, size: 'small' },
              cancelText || popconfirmLocale.cancelText
            ),
            React.createElement(
              _button2.default,
              { onClick: _this.onConfirm, type: okType, size: 'small' },
              okText || popconfirmLocale.okText
            )
          )
        )
      );
    };

    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  _createClass(Popconfirm, [{
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
    key: 'setVisible',
    value: function setVisible(visible) {
      var props = this.props;
      if (!('visible' in props)) {
        this.setState({ visible: visible });
      }

      var onVisibleChange = props.onVisibleChange;

      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          placement = _props.placement,
          restProps = _objectWithoutProperties(_props, ['prefixCls', 'placement']);

      var overlay = React.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'Popconfirm',
          defaultLocale: _default2.default.Popconfirm
        },
        this.renderOverlay
      );
      return React.createElement(_tooltip2.default, _extends({}, restProps, {
        prefixCls: prefixCls,
        placement: placement,
        onVisibleChange: this.onVisibleChange,
        visible: this.state.visible,
        overlay: overlay,
        ref: this.saveTooltip
      }));
    }
  }]);

  return Popconfirm;
}(React.Component);

Popconfirm.defaultProps = {
  prefixCls: 'ant-popover',
  transitionName: 'zoom-big',
  placement: 'top',
  trigger: 'click',
  okType: 'primary'
};
exports.default = Popconfirm;