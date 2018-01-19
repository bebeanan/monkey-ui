'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generateShowHourMinuteSecond = generateShowHourMinuteSecond;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _TimePicker = require('rc-time-picker/lib/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _en_US = require('./locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function generateShowHourMinuteSecond(format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  };
}

var TimePicker = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value || props.defaultValue;
    if (value && !moment.isMoment(value)) {
      throw new Error('The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' + 'see: https://u.ant.design/time-picker-value');
    }
    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(TimePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.timePickerRef.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.timePickerRef.blur();
    }
  }, {
    key: 'getDefaultFormat',
    value: function getDefaultFormat() {
      var _props = this.props,
          format = _props.format,
          use12Hours = _props.use12Hours;

      if (format) {
        return format;
      } else if (use12Hours) {
        return 'h:mm:ss a';
      }
      return 'HH:mm:ss';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'TimePicker',
          defaultLocale: _en_US2.default
        },
        this.renderTimePicker
      );
    }
  }]);

  return TimePicker;
}(React.Component);

TimePicker.defaultProps = {
  prefixCls: 'ant-time-picker',
  align: {
    offset: [0, -2]
  },
  disabled: false,
  disabledHours: undefined,
  disabledMinutes: undefined,
  disabledSeconds: undefined,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  transitionName: 'slide-up',
  focusOnOpen: true
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (value) {
    if (!('value' in _this2.props)) {
      _this2.setState({ value: value });
    }
    var _props2 = _this2.props,
        onChange = _props2.onChange,
        _props2$format = _props2.format,
        format = _props2$format === undefined ? 'HH:mm:ss' : _props2$format;

    if (onChange) {
      onChange(value, value && value.format(format) || '');
    }
  };

  this.handleOpenClose = function (_ref) {
    var open = _ref.open;
    var onOpenChange = _this2.props.onOpenChange;

    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  this.saveTimePicker = function (timePickerRef) {
    _this2.timePickerRef = timePickerRef;
  };

  this.renderTimePicker = function (locale) {
    var props = _extends({}, _this2.props);
    delete props.defaultValue;

    var format = _this2.getDefaultFormat();
    var className = (0, _classnames2.default)(props.className, _defineProperty({}, props.prefixCls + '-' + props.size, !!props.size));

    var addon = function addon(panel) {
      return props.addon ? React.createElement(
        'div',
        { className: props.prefixCls + '-panel-addon' },
        props.addon(panel)
      ) : null;
    };
    return React.createElement(_TimePicker2.default, _extends({}, generateShowHourMinuteSecond(format), props, {
      ref: _this2.saveTimePicker,
      format: format,
      className: className,
      value: _this2.state.value,
      placeholder: props.placeholder === undefined ? locale.placeholder : props.placeholder,
      onChange: _this2.handleChange,
      onOpen: _this2.handleOpenClose,
      onClose: _this2.handleOpenClose,
      addon: addon
    }));
  };
};

exports.default = TimePicker;