'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState) || !(0, _shallowequal2.default)(this.context.checkboxGroup, nextContext.checkboxGroup);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props,
          context = this.context;

      var prefixCls = props.prefixCls,
          className = props.className,
          children = props.children,
          indeterminate = props.indeterminate,
          style = props.style,
          onMouseEnter = props.onMouseEnter,
          onMouseLeave = props.onMouseLeave,
          restProps = _objectWithoutProperties(props, ['prefixCls', 'className', 'children', 'indeterminate', 'style', 'onMouseEnter', 'onMouseLeave']);

      var checkboxGroup = context.checkboxGroup;

      var checkboxProps = _extends({}, restProps);
      // console.log(checkboxGroup)
      if (checkboxGroup) {
        checkboxProps.onChange = function () {
          return checkboxGroup.toggleOption({ label: children, value: props.value });
        };
        checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
      }

      var classString = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-wrapper', true), _classNames));

      var checkboxClass = (0, _classnames2.default)(_defineProperty({}, prefixCls + '-indeterminate', indeterminate));

      return _react2.default.createElement(
        'label',
        {
          className: classString,
          style: style,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave },
        _react2.default.createElement(_rcCheckbox2.default, _extends({}, checkboxProps, {
          className: checkboxClass,
          prefixCls: prefixCls })),
        children !== undefined ? _react2.default.createElement(
          'span',
          null,
          children
        ) : null
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

Checkbox.Group = typeof _Group2.default === 'undefined' ? 'undefined' : _typeof(_Group2.default);
Checkbox.contextTypes = {
  checkboxGroup: _propTypes2.default.any
};
Checkbox.defaultProps = {
  prefixCls: 'ant-checkbox',
  indeterminate: false
};
exports.default = Checkbox;