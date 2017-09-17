'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSelect = require('rc-select');

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//export interface OptionProps {
//    disabled?: boolean;
//    value?: any;
//}
//
//export interface OptGroupProps {
//    label?: string | React.ReactElement<any>;
//}

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          size = _props.size,
          mode = _props.mode,
          multiple = _props.multiple,
          tags = _props.tags,
          combobox = _props.combobox,
          notFoundContent = _props.notFoundContent,
          showSearch = _props.showSearch,
          optionLabelProp = _props.optionLabelProp;


      var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-show-search', showSearch), _classNames));

      var antLocale = this.context.antLocale;

      if (antLocale && antLocale.Select) {
        notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
      }

      if (combobox) {
        notFoundContent = null;
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var isCombobox = mode === 'combobox' || combobox;

      var modeConfig = {
        multiple: mode === 'multiple' || multiple,
        tags: mode === 'tags' || tags,
        combobox: isCombobox
      };

      return _react2.default.createElement(_rcSelect2.default, _extends({}, this.props, modeConfig, {
        className: cls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: notFoundContent
      }));
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.defaultProps = {
  prefixCls: 'ant-select',
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom',
  showSearch: false
};
Select.contextTypes = {
  antLocale: _react2.default.PropTypes.object
};
exports.default = Select;