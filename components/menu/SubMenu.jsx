import * as React from 'react';
import PropTypes from 'prop-types';
import { SubMenu as RcSubMenu } from 'rc-menu';
import classNames from 'classnames';

class SubMenu extends React.Component {
  static contextTypes = {
    antdMenuTheme: PropTypes.string,
  };
   subMenu;
  onKeyDown = (e) => {
    this.subMenu.onKeyDown(e);
  }
  saveSubMenu = (subMenu) => {
    this.subMenu = subMenu;
  }
  render() {
    const { rootPrefixCls, className } = this.props;
    const theme = this.context.antdMenuTheme;
    return (
      <RcSubMenu
        {...this.props}
        ref={this.saveSubMenu}
        popupClassName={classNames(`${rootPrefixCls}-${theme}`, className)}
      />
    );
  }
}

export default SubMenu;
