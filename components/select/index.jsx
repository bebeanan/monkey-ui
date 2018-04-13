// import React from 'react';
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

import * as React from 'react';
import PropTypes from 'prop-types';
import RcSelect, { Option, OptGroup } from 'rc-select';
import classNames from 'classnames';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale-provider/default';







const SelectPropTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large', 'small']),
  combobox: PropTypes.bool,
  notFoundContent: PropTypes.any,
  showSearch: PropTypes.bool,
  optionLabelProp: PropTypes.string,
  transitionName: PropTypes.string,
  choiceTransitionName: PropTypes.string,
};

// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };
export default class Select extends React.Component {
  static Option = Option ;
  static OptGroup = OptGroup ;

  static defaultProps = {
    prefixCls: 'ant-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
  };

  static propTypes = SelectPropTypes;

  rcSelect;

  focus() {
    this.rcSelect.focus();
  }

  blur() {
    this.rcSelect.blur();
  }

  saveSelect = (node) => {
    this.rcSelect = node;
  }

  getNotFoundContent(locale) {
    const { notFoundContent, mode } = this.props;
    const isCombobox = mode === 'combobox';
    if (isCombobox) {
      // AutoComplete don't have notFoundContent defaultly
      return notFoundContent === undefined ? null : notFoundContent;
    }
    return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
  }

  renderSelect = (locale) => {
    const {
      prefixCls,
      className = '',
      size,
      mode,
      ...restProps,
    } = this.props;
    const cls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
    }, className);

    let { optionLabelProp } = this.props;
    const isCombobox = mode === 'combobox';
    if (isCombobox) {
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }

    const modeConfig = {
      multiple: mode === 'multiple',
      tags: mode === 'tags',
      combobox: isCombobox,
    };

    return (
      <RcSelect
        {...restProps}
        {...modeConfig}
        prefixCls={prefixCls}
        className={cls}
        optionLabelProp={optionLabelProp || 'children'}
        notFoundContent={this.getNotFoundContent(locale)}
        ref={this.saveSelect}
      />
    );
  }

  render() {
    return (
      <LocaleReceiver
        componentName="Select"
        defaultLocale={defaultLocale.Select}
      >
        {this.renderSelect}
      </LocaleReceiver>
    );
  }
}