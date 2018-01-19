'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function formatValue(value, format) {
  return value && value.format(format) || '';
}

var WeekPicker = function (_React$Component) {
  _inherits(WeekPicker, _React$Component);

  function WeekPicker(props) {
    _classCallCheck(this, WeekPicker);

    var _this = _possibleConstructorReturn(this, (WeekPicker.__proto__ || Object.getPrototypeOf(WeekPicker)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value || props.defaultValue;
    if (value && !moment.isMoment(value)) {
      throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' + 'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
    }
    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(WeekPicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          disabled = _props.disabled,
          pickerClass = _props.pickerClass,
          popupStyle = _props.popupStyle,
          pickerInputClass = _props.pickerInputClass,
          format = _props.format,
          allowClear = _props.allowClear,
          locale = _props.locale,
          localeCode = _props.localeCode,
          disabledDate = _props.disabledDate;


      var pickerValue = this.state.value;
      if (pickerValue && localeCode) {
        pickerValue.locale(localeCode);
      }

      var placeholder = 'placeholder' in this.props ? this.props.placeholder : locale.lang.placeholder;

      var calendar = React.createElement(_rcCalendar2.default, {
        showWeekNumber: true,
        dateRender: this.weekDateRender,
        prefixCls: prefixCls,
        format: format,
        locale: locale.lang,
        showDateInput: false,
        showToday: false,
        disabledDate: disabledDate
      });
      var clearIcon = !disabled && allowClear && this.state.value ? React.createElement(_icon2.default, {
        type: 'cross-circle',
        className: prefixCls + '-picker-clear',
        onClick: this.clearSelection
      }) : null;
      var input = function input(_ref) {
        var value = _ref.value;

        return React.createElement(
          'span',
          null,
          React.createElement('input', {
            ref: _this2.saveInput,
            disabled: disabled,
            readOnly: true,
            value: value && value.format(format) || '',
            placeholder: placeholder,
            className: pickerInputClass,
            onFocus: _this2.props.onFocus,
            onBlur: _this2.props.onBlur
          }),
          clearIcon,
          React.createElement('span', { className: prefixCls + '-picker-icon' })
        );
      };
      return React.createElement(
        'span',
        { className: (0, _classnames2.default)(className, pickerClass) },
        React.createElement(
          _Picker2.default,
          _extends({}, this.props, {
            calendar: calendar,
            prefixCls: prefixCls + '-picker-container',
            value: pickerValue,
            onChange: this.handleChange,
            style: popupStyle
          }),
          input
        )
      );
    }
  }]);

  return WeekPicker;
}(React.Component);

WeekPicker.defaultProps = {
  format: 'YYYY-Wo',
  allowClear: true
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.weekDateRender = function (current) {
    var selectedValue = _this3.state.value;
    var prefixCls = _this3.props.prefixCls;

    if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
      return React.createElement(
        'div',
        { className: prefixCls + '-selected-day' },
        React.createElement(
          'div',
          { className: prefixCls + '-date' },
          current.date()
        )
      );
    }
    return React.createElement(
      'div',
      { className: prefixCls + '-calendar-date' },
      current.date()
    );
  };

  this.handleChange = function (value) {
    if (!('value' in _this3.props)) {
      _this3.setState({ value: value });
    }
    _this3.props.onChange(value, formatValue(value, _this3.props.format));
  };

  this.clearSelection = function (e) {
    e.preventDefault();
    e.stopPropagation();
    _this3.handleChange(null);
  };

  this.saveInput = function (node) {
    _this3.input = node;
  };
};

exports.default = WeekPicker;