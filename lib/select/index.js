'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSelect = require('rc-select');

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from 'react';
// import RcSelect, { Option, OptGroup } from 'rc-select';
// import classNames from 'classnames';

// //export interface OptionProps {
// //    disabled?: boolean;
// //    value?: any;
// //}
// //
// //export interface OptGroupProps {
// //    label?: string | React.ReactElement<any>;
// //}

// export default class Select extends React.Component {
//   static Option = Option;
//   static OptGroup = OptGroup;

//   static defaultProps = {
//     prefixCls: 'ant-select',
//     transitionName: 'slide-up',
//     choiceTransitionName: 'zoom',
//     showSearch: false
//   }

//   static contextTypes = {
//     antLocale: React.PropTypes.object
//   }

//   render() {
//     let {
//       prefixCls,
//       className = '',
//       size,
//       mode,
//       multiple,
//       tags,
//       combobox,
//       notFoundContent, 
//       showSearch, 
//       optionLabelProp,
//     } = this.props;

//     const cls = classNames({
//       [`${prefixCls}-lg`]: size === 'large',
//       [`${prefixCls}-sm`]: size === 'small',
//       [className]: !!className,
//       [`${prefixCls}-show-search`]: showSearch,
//     });

//     const { antLocale } = this.context;
//     if (antLocale && antLocale.Select) {
//       notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
//     }

//     if (combobox) {
//       notFoundContent = null;
//       // children 带 dom 结构时，无法填入输入框
//       optionLabelProp = optionLabelProp || 'value';
//     }

//     const isCombobox = mode === 'combobox' || combobox;

//     const modeConfig = {
//       multiple: mode === 'multiple' || multiple,
//       tags: mode === 'tags' || tags,
//       combobox: isCombobox,
//     };

//     return (
//       <RcSelect {...this.props}
//         {...modeConfig}
//         className={cls}
//         optionLabelProp={optionLabelProp || 'children'}
//         notFoundContent={notFoundContent}
//       />
//     );
//   }
// }

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import RcSelect, { Option, OptGroup } from 'rc-select';
// import classNames from 'classnames';
// import LocaleReceiver from '../locale-provider/LocaleReceiver';
// import defaultLocale from '../locale-provider/default';


// const SelectPropTypes = {
//   prefixCls: PropTypes.string,
//   className: PropTypes.string,
//   size: PropTypes.oneOf(['default', 'large', 'small']),
//   combobox: PropTypes.bool,
//   notFoundContent: PropTypes.any,
//   showSearch: PropTypes.bool,
//   optionLabelProp: PropTypes.string,
//   transitionName: PropTypes.string,
//   choiceTransitionName: PropTypes.string,
// };

// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };
// export default class Select extends React.Component {
//   static Option = Option ;
//   static OptGroup = OptGroup ;

//   static defaultProps = {
//     prefixCls: 'ant-select',
//     showSearch: false,
//     transitionName: 'slide-up',
//     choiceTransitionName: 'zoom',
//   };

//   static propTypes = SelectPropTypes;

//   rcSelect;

//   focus() {
//     this.rcSelect.focus();
//   }

//   blur() {
//     this.rcSelect.blur();
//   }

//   saveSelect = (node) => {
//     this.rcSelect = node;
//   }

//   getNotFoundContent(locale) {
//     const { notFoundContent, mode } = this.props;
//     const isCombobox = mode === 'combobox';
//     if (isCombobox) {
//       // AutoComplete don't have notFoundContent defaultly
//       return notFoundContent === undefined ? null : notFoundContent;
//     }
//     return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
//   }

//   renderSelect = (locale) => {
//     const {
//       prefixCls,
//       className = '',
//       size,
//       mode,
//       ...restProps,
//     } = this.props;
//     const cls = classNames({
//       [`${prefixCls}-lg`]: size === 'large',
//       [`${prefixCls}-sm`]: size === 'small',
//     }, className);

//     let { optionLabelProp } = this.props;
//     const isCombobox = mode === 'combobox';
//     if (isCombobox) {
//       // children 带 dom 结构时，无法填入输入框
//       optionLabelProp = optionLabelProp || 'value';
//     }

//     const modeConfig = {
//       multiple: mode === 'multiple',
//       tags: mode === 'tags',
//       combobox: isCombobox,
//     };

//     return (
//       <RcSelect
//         {...restProps}
//         {...modeConfig}
//         prefixCls={prefixCls}
//         className={cls}
//         optionLabelProp={optionLabelProp || 'children'}
//         notFoundContent={this.getNotFoundContent(locale)}
//         ref={this.saveSelect}
//       />
//     );
//   }

//   render() {
//     return (
//       <LocaleReceiver
//         componentName="Select"
//         defaultLocale={defaultLocale.Select}
//       >
//         {this.renderSelect}
//       </LocaleReceiver>
//     );
//   }
// }


// ------------


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
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'getLocale',
    value: function getLocale() {
      var antLocale = this.context.antLocale;

      if (antLocale && antLocale.Select) {
        return antLocale.Select;
      }
      return {
        notFoundContent: '无匹配结果'
      };
    }
  }, {
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
          restProps = _objectWithoutProperties(_props, ['prefixCls', 'className', 'size', 'mode', 'multiple', 'tags', 'combobox']);

      (0, _warning2.default)(!multiple && !tags && !combobox, '`Select[multiple|tags|combobox]` is deprecated, please use `Select[mode]` instead.');

      var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);

      var locale = this.getLocale();
      var _props2 = this.props,
          _props2$notFoundConte = _props2.notFoundContent,
          notFoundContent = _props2$notFoundConte === undefined ? locale.notFoundContent : _props2$notFoundConte,
          optionLabelProp = _props2.optionLabelProp;

      var isCombobox = mode === 'combobox' || combobox;
      if (isCombobox) {
        notFoundContent = null;
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var modeConfig = {
        multiple: mode === 'multiple' || multiple,
        tags: mode === 'tags' || tags,
        combobox: isCombobox
      };

      return _react2.default.createElement(_rcSelect2.default, _extends({}, restProps, modeConfig, {
        prefixCls: prefixCls,
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
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;
Select.contextTypes = {
  antLocale: _propTypes2.default.object
};
exports.default = Select;