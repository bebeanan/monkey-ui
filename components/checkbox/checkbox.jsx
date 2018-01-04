import RcCheckbox from 'rc-checkbox';
import React from 'react';
import CheckboxGroup from './Group';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Checkbox extends React.Component {
  static Group = typeof CheckboxGroup;
  static contextTypes = {
    checkboxGroup: PropTypes.any,
  };

  static defaultProps = {
    prefixCls: 'ant-checkbox',
    indeterminate: false
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState) ||
           !shallowEqual(this.context.checkboxGroup, nextContext.checkboxGroup);
  }
  render() {
    const { props, context } = this;
    
    const { 
        prefixCls,
        className,
        children,
        indeterminate,
        style,
        onMouseEnter,
        onMouseLeave,
        ...restProps
      } = props;
    
    const { checkboxGroup } = context;
    let checkboxProps = { ...restProps };
    // console.log(checkboxGroup)
    if (checkboxGroup) {
      checkboxProps.onChange = () => checkboxGroup.toggleOption({ label: children, value: props.value });
      checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
      checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
    }
    
    const classString = classNames({
      [className]: !!className,
      [`${prefixCls}-wrapper`]: true,
    });

    const checkboxClass = classNames({
      [`${prefixCls}-indeterminate`]: indeterminate,
    });

    return (
      <label 
            className={classString} 
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
        <RcCheckbox 
                    {...checkboxProps} 
                    className={checkboxClass}
                    prefixCls={prefixCls}/>
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}