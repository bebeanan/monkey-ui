'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = wrapPicker;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Panel = require('rc-time-picker/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _timePicker = require('../time-picker');

var _en_US = require('./local/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getColumns(_ref) {
  var showHour = _ref.showHour,
      showMinute = _ref.showMinute,
      showSecond = _ref.showSecond,
      use12Hours = _ref.use12Hours;

  var column = 0;
  if (showHour) {
    column += 1;
  }
  if (showMinute) {
    column += 1;
  }
  if (showSecond) {
    column += 1;
  }
  if (use12Hours) {
    column += 1;
  }
  return column;
}

function wrapPicker(Picker, defaultFormat) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(PickerWrapper, _React$Component);

    function PickerWrapper() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, PickerWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = PickerWrapper.__proto__ || Object.getPrototypeOf(PickerWrapper)).call.apply(_ref2, [this].concat(args))), _this), _this.handleOpenChange = function (open) {
        var onOpenChange = _this.props.onOpenChange;

        onOpenChange(open);
      }, _this.handleFocus = function (e) {
        var onFocus = _this.props.onFocus;

        if (onFocus) {
          onFocus(e);
        }
      }, _this.handleBlur = function (e) {
        var onBlur = _this.props.onBlur;

        if (onBlur) {
          onBlur(e);
        }
      }, _this.savePicker = function (node) {
        _this.picker = node;
      }, _this.getDefaultLocale = function () {
        var result = _extends({}, _en_US2.default, _this.props.locale);
        result.lang = _extends({}, result.lang, (_this.props.locale || {}).lang);
        return result;
      }, _this.renderPicker = function (locale, localeCode) {
        var _classNames2;

        var props = _this.props;
        var prefixCls = props.prefixCls,
            inputPrefixCls = props.inputPrefixCls;

        var pickerClass = (0, _classnames2.default)(prefixCls + '-picker', _defineProperty({}, prefixCls + '-picker-' + props.size, !!props.size));
        var pickerInputClass = (0, _classnames2.default)(prefixCls + '-picker-input', inputPrefixCls, (_classNames2 = {}, _defineProperty(_classNames2, inputPrefixCls + '-lg', props.size === 'large'), _defineProperty(_classNames2, inputPrefixCls + '-sm', props.size === 'small'), _defineProperty(_classNames2, inputPrefixCls + '-disabled', props.disabled), _classNames2));

        var timeFormat = props.showTime && props.showTime.format || 'HH:mm:ss';
        var rcTimePickerProps = _extends({}, (0, _timePicker.generateShowHourMinuteSecond)(timeFormat), {
          format: timeFormat,
          use12Hours: props.showTime && props.showTime.use12Hours
        });
        var columns = getColumns(rcTimePickerProps);
        var timePickerCls = prefixCls + '-time-picker-column-' + columns;
        var timePicker = props.showTime ? React.createElement(_Panel2.default, _extends({}, rcTimePickerProps, props.showTime, {
          prefixCls: prefixCls + '-time-picker',
          className: timePickerCls,
          placeholder: locale.timePickerLocale.placeholder,
          transitionName: 'slide-up'
        })) : null;

        return React.createElement(Picker, _extends({}, props, {
          ref: _this.savePicker,
          pickerClass: pickerClass,
          pickerInputClass: pickerInputClass,
          locale: locale,
          localeCode: localeCode,
          timePicker: timePicker,
          onOpenChange: _this.handleOpenChange,
          onFocus: _this.handleFocus,
          onBlur: _this.handleBlur
        }));
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PickerWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            autoFocus = _props.autoFocus,
            disabled = _props.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.picker.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.picker.blur();
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          _LocaleReceiver2.default,
          {
            componentName: 'DatePicker',
            defaultLocale: this.getDefaultLocale
          },
          this.renderPicker
        );
      }
    }]);

    return PickerWrapper;
  }(React.Component), _class.defaultProps = {
    format: defaultFormat || 'YYYY-MM-DD',
    transitionName: 'slide-up',
    popupStyle: {},
    onChange: function onChange() {},
    onOk: function onOk() {},
    onOpenChange: function onOpenChange() {},

    locale: {},
    prefixCls: 'ant-calendar',
    inputPrefixCls: 'ant-input'
  }, _temp2;
}