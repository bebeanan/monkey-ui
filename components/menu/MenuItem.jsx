import * as React from 'react';
import { Item } from 'rc-menu';
import PropTypes from 'prop-types';
import Tooltip from '../tooltip';

class MenuItem extends React.Component {
  static contextTypes = {
    inlineCollapsed: PropTypes.bool,
  };
  static isMenuItem = 1;
   menuItem;
  onKeyDown = (e) => {
    this.menuItem.onKeyDown(e);
  }
  saveMenuItem = (menuItem) => {
    this.menuItem = menuItem;
  }
  render() {
    const { inlineCollapsed } = this.context;
    const props = this.props;
    return <Tooltip
      title={inlineCollapsed && props.level === 1 ? props.children : ''}
      placement="right"
      overlayClassName={`${props.rootPrefixCls}-inline-collapsed-tooltip`}
    >
      <Item {...props} ref={this.saveMenuItem} />
    </Tooltip>;
  }
}

export default MenuItem;
