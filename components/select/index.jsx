import React from 'react';
import RcSelect, { Option, OptGroup } from 'rc-select';
import classNames from 'classnames';

//export interface OptionProps {
//    disabled?: boolean;
//    value?: any;
//}
//
//export interface OptGroupProps {
//    label?: string | React.ReactElement<any>;
//}

export default class Select extends React.Component {
  static Option = Option;
  static OptGroup = OptGroup;

  static defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false
  }

  static contextTypes = {
    antLocale: React.PropTypes.object
  }

  render() {
    let {
      prefixCls,
      className = '',
      size,
      mode,
      multiple,
      tags,
      combobox,
      notFoundContent, 
      showSearch, 
      optionLabelProp,
    } = this.props;

    const cls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [className]: !!className,
      [`${prefixCls}-show-search`]: showSearch,
    });

    const { antLocale } = this.context;
    if (antLocale && antLocale.Select) {
      notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
    }

    if (combobox) {
      notFoundContent = null;
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }

    const isCombobox = mode === 'combobox' || combobox;
    
    const modeConfig = {
      multiple: mode === 'multiple' || multiple,
      tags: mode === 'tags' || tags,
      combobox: isCombobox,
    };

    return (
      <RcSelect {...this.props}
        {...modeConfig}
        className={cls}
        optionLabelProp={optionLabelProp || 'children'}
        notFoundContent={notFoundContent}
      />
    );
  }
}