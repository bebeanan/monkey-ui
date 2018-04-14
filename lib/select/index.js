'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSelect = require('rc-select');

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = require('../locale-provider/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectPropTypes = {
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['default', 'large', 'small']),
  combobox: _propTypes2.default.bool,
  notFoundContent: _propTypes2.default.any,
  showSearch: _propTypes2.default.bool,
  optionLabelProp: _propTypes2.default.string,
  transitionName: _propTypes2.default.string,
  choiceTransitionName: _propTypes2.default.string
};

// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.saveSelect = function (node) {
      _this.rcSelect = node;
    }, _this.renderSelect = function (locale) {
      var _classNames;

      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          _this$props$className = _this$props.className,
          className = _this$props$className === undefined ? '' : _this$props$className,
          size = _this$props.size,
          mode = _this$props.mode,
          restProps = _objectWithoutProperties(_this$props, ['prefixCls', 'className', 'size', 'mode']);

      var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);

      var optionLabelProp = _this.props.optionLabelProp;

      var isCombobox = mode === 'combobox';
      if (isCombobox) {
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var modeConfig = {
        multiple: mode === 'multiple',
        tags: mode === 'tags',
        combobox: isCombobox
      };

      return React.createElement(_rcSelect2.default, _extends({}, restProps, modeConfig, {
        prefixCls: prefixCls,
        className: cls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: _this.getNotFoundContent(locale),
        ref: _this.saveSelect
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'focus',
    value: function focus() {
      this.rcSelect.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.rcSelect.blur();
    }
  }, {
    key: 'getNotFoundContent',
    value: function getNotFoundContent(locale) {
      var _props = this.props,
          notFoundContent = _props.notFoundContent,
          mode = _props.mode;

      var isCombobox = mode === 'combobox';
      if (isCombobox) {
        // AutoComplete don't have notFoundContent defaultly
        return notFoundContent === undefined ? null : notFoundContent;
      }
      return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'Select',
          defaultLocale: _default2.default.Select
        },
        this.renderSelect
      );
    }
  }]);

  return Select;
}(React.Component);

Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.defaultProps = {
  prefixCls: 'ant-select',
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;
exports.default = Select;