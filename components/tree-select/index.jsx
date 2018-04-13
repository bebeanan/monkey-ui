// import React from 'react';
// import RcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from 'rc-tree-select';
// import classNames from 'classnames';

// export default class TreeSelect extends React.Component {
//   static TreeNode = TreeNode;
//   static SHOW_ALL = SHOW_ALL;
//   static SHOW_PARENT = SHOW_PARENT;
//   static SHOW_CHILD = SHOW_CHILD;

//   static defaultProps = {
//     prefixCls: 'ant-select',
//     transitionName: 'slide-up',
//     choiceTransitionName: 'zoom',
//     showSearch: false,
//     dropdownClassName: 'ant-select-tree-dropdown',
//   }

//   static contextTypes = {
//     antLocale: React.PropTypes.object,
//   }

//   render() {
//     const props = this.props;
//     let {
//       size, className, combobox, notFoundContent, prefixCls,
//     } = this.props;

//     const cls = classNames({
//       [`${prefixCls}-lg`]: size === 'large',
//       [`${prefixCls}-sm`]: size === 'small',
//       [className]: !!className,
//     });

//     const { antLocale } = this.context;
//     if (antLocale && antLocale.Select) {
//       notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
//     }

//     if (combobox) {
//       notFoundContent = null;
//     }

//     let checkable = props.treeCheckable;
//     if (checkable) {
//       checkable = <span className={`${prefixCls}-tree-checkbox-inner`}></span>;
//     }

//     return (
//       <RcTreeSelect {...this.props}
//         treeCheckable={checkable}
//         className={cls}
//         notFoundContent={notFoundContent}
//       />
//     );
//   }
// }


// ---------

import * as React from 'react';
import RcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from 'rc-tree-select';
import classNames from 'classnames';
// import { SelectLocale } from '../select';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import warning from '../_util/warning';


export default class TreeSelect extends React.Component{
  static TreeNode = TreeNode;
  static SHOW_ALL = SHOW_ALL;
  static SHOW_PARENT = SHOW_PARENT;
  static SHOW_CHILD = SHOW_CHILD;

  static defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false,
  };

  rcTreeSelect;

  constructor(props) {
    super(props);

    warning(
      props.multiple !== false || !props.treeCheckable,
      '`multiple` will alway be `true` when `treeCheckable` is true',
    );
  }

  focus() {
    this.rcTreeSelect.focus();
  }

  blur() {
    this.rcTreeSelect.blur();
  }

  saveTreeSelect = (node) => {
    this.rcTreeSelect = node;
  }

  renderTreeSelect = (locale) => {
    const {
      prefixCls,
      className,
      size,
      notFoundContent,
      dropdownStyle,
      dropdownClassName,
      ...restProps,
    } = this.props;

    const cls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
    }, className);

    let checkable = restProps.treeCheckable;
    if (checkable) {
      checkable = <span className={`${prefixCls}-tree-checkbox-inner`} />;
    }
    return (
      <RcTreeSelect
        {...restProps}
        dropdownClassName={classNames(dropdownClassName, `${prefixCls}-tree-dropdown`)}
        prefixCls={prefixCls}
        className={cls}
        dropdownStyle={{ maxHeight: '100vh', overflow: 'auto', ...dropdownStyle }}
        treeCheckable={checkable}
        notFoundContent={notFoundContent || locale.notFoundContent}
        ref={this.saveTreeSelect}
      />
    );
  }

  render() {
    return (
      <LocaleReceiver
        componentName="Select"
        defaultLocale={{}}
      >
        {this.renderTreeSelect}
      </LocaleReceiver>
    );
  }
}