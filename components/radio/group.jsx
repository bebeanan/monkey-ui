import React from 'react';
import classNames from 'classnames';
import Radio from './radio';
import RadioButton from './radioButton';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import assign from 'object-assign';

function getCheckedValue(children) {
  let value = null;
  let matched = false;
  React.Children.forEach(children, (radio: any) => {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? { value } : undefined;
}

export interface RadioGroupProps {
  /** 选项变化时的回调函数*/
  onChange?: React.FormEventHandler<any>;
  /** 用于设置当前选中的值*/
  value?: string | number;
  /** 默认选中的值*/
  defaultValue?: string | number;
  /**  大小，只对按钮样式生效*/
  size?: 'large' | 'default' | 'small';
  style?: React.CSSProperties;
  prefixCls?: string;
  disabled?: boolean;
}

export default class RadioGroup extends React.Component<RadioGroupProps, any> {
  static defaultProps = {
    prefixCls: 'ant-radio-group',
    disabled: false,
    onChange() {
    },
  };
  constructor(props) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      const checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }
    this.state = {
      value:value
    };
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    } else {
      const checkedValue = getCheckedValue(nextProps.children);
      if (checkedValue) {
        this.setState({
          value: checkedValue.value,
        });
      }
    }
  }
  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }
  onRadioChange = (ev) => {
    if (!('value' in this.props)) {
      this.setState({
        value: ev.target.value,
      });
    }
    this.props.onChange(ev);
  }
  render() {
    const props = this.props;
    const children = React.Children.map(props.children, (radio: any) => {
      if (radio && (radio.type === Radio || radio.type === RadioButton) && radio.props) {
        const keyProps = {};
        // (keyProps as any)
        if (!('key' in radio) && typeof radio.props.value === 'string') {
          keyProps.key = radio.props.value;
        }
        return React.cloneElement(radio, assign({}, keyProps, radio.props, {
          onChange: this.onRadioChange,
          checked: this.state.value === radio.props.value,
          disabled: radio.props.disabled || this.props.disabled,
        }));
      }
      return radio;
    });
    const classString = classNames({
      [props.prefixCls]: true,
      [`${props.prefixCls}-${props.size}`]: props.size,
    });
    return <div className={classString} style={props.style}>{children}</div>;
  }
}
