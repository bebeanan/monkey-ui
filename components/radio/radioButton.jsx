import React from 'react';
import Radio from './radio';

export default class RadioButton extends React.Component {
  render() {
    return (
      <Radio {...this.props} />
    );
  }
}

RadioButton.defaultProps = {
    prefixCls: 'ant-radio-button',
}
