'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popover = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
  }

  _createClass(Popover, [{
    key: 'render',
    value: function render() {
      var arrowPointAtCenter = this.props.arrowPointAtCenter;

      return _react2.default.createElement(_tooltip2.default, _extends({
        builtinPlacements: (0, _placements2.default)({ arrowPointAtCenter: arrowPointAtCenter }),
        ref: 'tooltip'
      }, this.props, {
        overlay: this.getOverlay()
      }));
    }
  }, {
    key: 'getPopupDomNode',
    value: function getPopupDomNode() {
      return this.refs.tooltip.getPopupDomNode();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ('overlay' in this.props) {
        (0, _warning2.default)(false, '`overlay` prop of Popover is deprecated, use `content` instead.');
      }
    }
  }, {
    key: 'getOverlay',
    value: function getOverlay() {
      // use content replace overlay
      // keep overlay for compatibility
      var _props = this.props,
          title = _props.title,
          prefixCls = _props.prefixCls,
          overlay = _props.overlay,
          content = _props.content;


      return _react2.default.createElement(
        'div',
        null,
        title && _react2.default.createElement(
          'div',
          { className: prefixCls + '-title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-inner-content' },
          content || overlay
        )
      );
    }
  }]);

  return Popover;
}(_react2.default.Component);

Popover.defaultProps = {
  prefixCls: 'ant-popover',
  placement: 'top',
  transitionName: 'zoom-big',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false
};
exports.default = Popover;