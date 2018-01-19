'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* tslint:disable jsx-no-multiline-js */


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _RangeCalendar = require('rc-calendar/lib/RangeCalendar');

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _callMoment = require('../_util/callMoment');

var _callMoment2 = _interopRequireDefault(_callMoment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getShowDateFromValue(value) {
  var _value = _slicedToArray(value, 2),
      start = _value[0],
      end = _value[1];
  // value could be an empty array, then we should not reset showDate


  if (!start && !end) {
    return;
  }
  var newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
  return [start, newEnd];
}

function formatValue(value, format) {
  return value && value.format(format) || '';
}

function pickerValueAdapter(value) {
  if (!value) {
    return;
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value, value.clone().add(1, 'month')];
}

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0 || arr.every(function (i) {
      return !i;
    });
  }
  return false;
}

var RangePicker = function (_React$Component) {
  _inherits(RangePicker, _React$Component);

  function RangePicker(props) {
    _classCallCheck(this, RangePicker);

    var _this = _possibleConstructorReturn(this, (RangePicker.__proto__ || Object.getPrototypeOf(RangePicker)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value || props.defaultValue || [];
    if (value[0] && !moment.isMoment(value[0]) || value[1] && !moment.isMoment(value[1])) {
      throw new Error('The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' + 'see: https://u.ant.design/date-picker-value');
    }
    var pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
    _this.state = {
      value: value,
      showDate: pickerValueAdapter(pickerValue || (0, _callMoment2.default)(moment)),
      open: props.open,
      hoverValue: []
    };
    return _this;
  }

  _createClass(RangePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        var state = this.state;
        var value = nextProps.value || [];
        this.setState({
          value: value,
          showDate: getShowDateFromValue(value) || state.showDate
        });
      }
      if ('open' in nextProps) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value, hidePanel) {
      this.handleChange(value);
      if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
        this.setState({ open: false });
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
      var _classNames,
          _this2 = this;

      var state = this.state,
          props = this.props;
      var value = state.value,
          showDate = state.showDate,
          hoverValue = state.hoverValue,
          open = state.open;
      var prefixCls = props.prefixCls,
          popupStyle = props.popupStyle,
          style = props.style,
          disabledDate = props.disabledDate,
          disabledTime = props.disabledTime,
          showTime = props.showTime,
          showToday = props.showToday,
          ranges = props.ranges,
          onOk = props.onOk,
          locale = props.locale,
          localeCode = props.localeCode,
          format = props.format,
          dateRender = props.dateRender,
          onCalendarChange = props.onCalendarChange;

      if (value && localeCode) {
        if (value[0]) {
          value[0].locale(localeCode);
        }
        if (value[1]) {
          value[1].locale(localeCode);
        }
      }

      (0, _warning2.default)(!('onOK' in props), 'It should be `RangePicker[onOk]`, instead of `onOK`!');

      var calendarClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-time', showTime), _defineProperty(_classNames, prefixCls + '-range-with-ranges', ranges), _classNames));

      // 需要选择时间时，点击 ok 时才触发 onChange
      var pickerChangeHandler = {
        onChange: this.handleChange
      };
      var calendarProps = {
        onOk: this.handleChange
      };
      if (props.timePicker) {
        pickerChangeHandler.onChange = function (changedValue) {
          return _this2.handleChange(changedValue);
        };
      } else {
        calendarProps = {};
      }
      if ('mode' in props) {
        calendarProps.mode = props.mode;
      }

      var startPlaceholder = 'placeholder' in props ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
      var endPlaceholder = 'placeholder' in props ? props.placeholder[1] : locale.lang.rangePlaceholder[1];

      var calendar = React.createElement(_RangeCalendar2.default, _extends({}, calendarProps, {
        onChange: onCalendarChange,
        format: format,
        prefixCls: prefixCls,
        className: calendarClassName,
        renderFooter: this.renderFooter,
        timePicker: props.timePicker,
        disabledDate: disabledDate,
        disabledTime: disabledTime,
        dateInputPlaceholder: [startPlaceholder, endPlaceholder],
        locale: locale.lang,
        onOk: onOk,
        dateRender: dateRender,
        value: showDate,
        onValueChange: this.handleShowDateChange,
        hoverValue: hoverValue,
        onHoverChange: this.handleHoverChange,
        onPanelChange: props.onPanelChange,
        showToday: showToday
      }));

      // default width for showTime
      var pickerStyle = {};
      if (props.showTime) {
        pickerStyle.width = style && style.width || 350;
      }

      var clearIcon = !props.disabled && props.allowClear && value && (value[0] || value[1]) ? React.createElement(_icon2.default, {
        type: 'cross-circle',
        className: prefixCls + '-picker-clear',
        onClick: this.clearSelection
      }) : null;

      var input = function input(_ref) {
        var inputValue = _ref.value;

        var start = inputValue[0];
        var end = inputValue[1];
        return React.createElement(
          'span',
          { className: props.pickerInputClass },
          React.createElement('input', {
            disabled: props.disabled,
            readOnly: true,
            value: start && start.format(props.format) || '',
            placeholder: startPlaceholder,
            className: prefixCls + '-range-picker-input',
            tabIndex: -1
          }),
          React.createElement(
            'span',
            { className: prefixCls + '-range-picker-separator' },
            ' ~ '
          ),
          React.createElement('input', {
            disabled: props.disabled,
            readOnly: true,
            value: end && end.format(props.format) || '',
            placeholder: endPlaceholder,
            className: prefixCls + '-range-picker-input',
            tabIndex: -1
          }),
          clearIcon,
          React.createElement('span', { className: prefixCls + '-picker-icon' })
        );
      };

      return React.createElement(
        'span',
        {
          ref: this.savePicker,
          className: (0, _classnames2.default)(props.className, props.pickerClass),
          style: _extends({}, style, pickerStyle),
          tabIndex: props.disabled ? -1 : 0,
          onFocus: props.onFocus,
          onBlur: props.onBlur
        },
        React.createElement(
          _Picker2.default,
          _extends({}, props, pickerChangeHandler, {
            calendar: calendar,
            value: value,
            open: open,
            onOpenChange: this.handleOpenChange,
            prefixCls: prefixCls + '-picker-container',
            style: popupStyle
          }),
          input
        )
      );
    }
  }]);

  return RangePicker;
}(React.Component);

RangePicker.defaultProps = {
  prefixCls: 'ant-calendar',
  allowClear: true,
  showToday: false
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.clearSelection = function (e) {
    e.preventDefault();
    e.stopPropagation();
    _this3.setState({ value: [] });
    _this3.handleChange([]);
  };

  this.clearHoverValue = function () {
    return _this3.setState({ hoverValue: [] });
  };

  this.handleChange = function (value) {
    var props = _this3.props;
    if (!('value' in props)) {
      _this3.setState(function (_ref2) {
        var showDate = _ref2.showDate;
        return {
          value: value,
          showDate: getShowDateFromValue(value) || showDate
        };
      });
    }
    props.onChange(value, [formatValue(value[0], props.format), formatValue(value[1], props.format)]);
  };

  this.handleOpenChange = function (open) {
    if (!('open' in _this3.props)) {
      _this3.setState({ open: open });
    }

    var onOpenChange = _this3.props.onOpenChange;

    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  this.handleShowDateChange = function (showDate) {
    return _this3.setState({ showDate: showDate });
  };

  this.handleHoverChange = function (hoverValue) {
    return _this3.setState({ hoverValue: hoverValue });
  };

  this.savePicker = function (node) {
    _this3.picker = node;
  };

  this.renderFooter = function () {
    var _props = _this3.props,
        prefixCls = _props.prefixCls,
        ranges = _props.ranges,
        renderExtraFooter = _props.renderExtraFooter;

    if (!ranges && !renderExtraFooter) {
      return null;
    }
    var customFooter = renderExtraFooter ? React.createElement(
      'div',
      { className: prefixCls + '-footer-extra', key: 'extra' },
      renderExtraFooter.apply(undefined, arguments)
    ) : null;
    var operations = Object.keys(ranges || {}).map(function (range) {
      var value = ranges[range];
      return React.createElement(
        'a',
        {
          key: range,
          onClick: function onClick() {
            return _this3.setValue(value, true);
          },
          onMouseEnter: function onMouseEnter() {
            return _this3.setState({ hoverValue: value });
          },
          onMouseLeave: _this3.clearHoverValue
        },
        range
      );
    });
    var rangeNode = React.createElement(
      'div',
      { className: prefixCls + '-footer-extra ' + prefixCls + '-range-quick-selector', key: 'range' },
      operations
    );
    return [rangeNode, customFooter];
  };
};

exports.default = RangePicker;