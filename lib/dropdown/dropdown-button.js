'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = _button2.default.Group;

var DropdownButton = function (_React$Component) {
  _inherits(DropdownButton, _React$Component);

  function DropdownButton() {
    _classCallCheck(this, DropdownButton);

    return _possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).apply(this, arguments));
  }

  _createClass(DropdownButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          overlay = _props.overlay,
          trigger = _props.trigger,
          align = _props.align,
          children = _props.children,
          className = _props.className,
          onClick = _props.onClick,
          restProps = _objectWithoutProperties(_props, ['type', 'overlay', 'trigger', 'align', 'children', 'className', 'onClick']);

      var cls = (0, _classnames2.default)(_defineProperty({
        'ant-dropdown-button': true
      }, className, !!className));
      return _react2.default.createElement(
        ButtonGroup,
        _extends({}, restProps, { className: cls }),
        _react2.default.createElement(
          _button2.default,
          { type: type, onClick: onClick },
          children
        ),
        _react2.default.createElement(
          _dropdown2.default,
          { align: align, overlay: overlay, trigger: trigger },
          _react2.default.createElement(
            _button2.default,
            { type: type },
            _react2.default.createElement(_icon2.default, { type: 'down' })
          )
        )
      );
    }
  }]);

  return DropdownButton;
}(_react2.default.Component);

DropdownButton.defaultProps = {
  align: {
    points: ['tr', 'br'],
    overlay: {
      adjustX: 1,
      adjustY: 1
    },
    offset: [0, 4],
    targetOffset: [0, 0]
  },
  type: 'default'
};
exports.default = DropdownButton;