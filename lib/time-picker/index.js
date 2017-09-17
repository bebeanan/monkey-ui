'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

var _TimePicker = require('rc-time-picker/lib/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePicker = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (value) {
      // console.log(value)
      // console.log(value.toDate())
      // console.log(value.format('HH:mm:ss'))
      var date = new _gregorianCalendar2.default(require('gregorian-calendar/lib/locale/zh_CN'));
      // console.log(date.setTime(new Date(value.format('HH:mm:ss'))));
      _this.props.onChange(value ? value : null,
      // value ? this.getFormatter().format(date.setTime(new Date(value.format('HH:mm:ss')))) : '',
      value ? value.format('HH:mm:ss') : '');
    }, _this.handleOpenClose = function (_ref2) {
      var open = _ref2.open;
      var onOpenChange = _this.props.onOpenChange;

      if (onOpenChange) {
        onOpenChange(open);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimePicker, [{
    key: 'getFormatter',
    value: function getFormatter() {
      var d = new _gregorianCalendarFormat2.default(this.props.format, this.getLocale().format);
      return d;
    }

    /**
     * 获得输入框的 className
     */

  }, {
    key: 'getSizeClass',
    value: function getSizeClass() {
      var sizeClass = '';
      if (this.props.size === 'large') {
        sizeClass = ' ant-input-lg';
      } else if (this.props.size === 'small') {
        sizeClass = ' ant-input-sm';
      }
      return sizeClass;
    }

    /**
     * 获得输入框的默认值
     */

  }, {
    key: 'parseTimeFromValue',
    value: function parseTimeFromValue(value) {
      if (value) {
        if (typeof value === 'string') {
          return this.getFormatter().parse(value, {
            locale: this.getLocale().calendar,
            obeyCount: true
          });
        } else if (value instanceof Date) {
          var date = new _gregorianCalendar2.default(this.getLocale().calendar);
          date.setTime(+value);
          return date;
        }
      }
      return value;
    }
  }, {
    key: 'getLocale',
    value: function getLocale() {
      var locale = _zh_CN2.default;
      if (this.context.antLocale && this.context.antLocale.TimePicker) {
        locale = this.context.antLocale.TimePicker;
      }
      // 统一合并为完整的 Locale
      return _extends({}, locale, this.props.locale);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var locale = this.getLocale();
      var props = _extends({}, this.props);
      var addon = function addon(panel) {
        return props.addon ? _react2.default.createElement(
          'div',
          { className: props.prefixCls + '-panel-addon' },
          props.addon(panel)
        ) : null;
      };
      props.placeholder = 'placeholder' in this.props ? props.placeholder : locale.placeholder;
      if (props.defaultValue) {
        props.defaultValue = this.parseTimeFromValue(props.defaultValue);
      } else {
        delete props.defaultValue;
      }
      if (props.value) {
        props.value = this.parseTimeFromValue(props.value);
      }
      var className = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, props.className, !!props.className), _defineProperty(_classNames, props.prefixCls + '-' + props.size, !!props.size), _classNames));
      if (props.format.indexOf('ss') < 0) {
        props.showSecond = false;
      }
      if (props.format.indexOf('HH') < 0) {
        props.showHour = false;
      }

      return _react2.default.createElement(_TimePicker2.default, _extends({}, props, {
        className: className,
        locale: locale,
        formatter: this.getFormatter(),
        onChange: this.handleChange,
        onOpen: this.handleOpenClose,
        onClose: this.handleOpenClose,
        addon: addon
      }));
    }
  }]);

  return TimePicker;
}(_react2.default.Component);

TimePicker.defaultProps = {
  format: 'HH:mm:ss',
  prefixCls: 'ant-time-picker',
  onChange: function onChange() {},

  locale: {},
  align: {
    offset: [0, -2]
  },
  disabled: false,
  disabledHours: undefined,
  disabledMinutes: undefined,
  disabledSeconds: undefined,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  transitionName: 'slide-up'
};
TimePicker.contextTypes = {
  antLocale: _react2.default.PropTypes.object
};
exports.default = TimePicker;