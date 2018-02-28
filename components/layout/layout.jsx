import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SiderProps } from './Sider';



function generator(props) {
  return (BasicComponent) => {
    return class Adapter extends React.Component {
      static Header;
      static Footer;
      static Content;
      static Sider;
      render() {
        const { prefixCls } = props;
        return <BasicComponent prefixCls={prefixCls} {...this.props} />;
      }
    };
  };
}

class Basic extends React.Component {
  render() {
    const { prefixCls, className, children, ...others } = this.props;
    const divCls = classNames(className, prefixCls);
    return (
      <div className={divCls} {...others}>{children}</div>
    );
  }
}

class BasicLayout extends React.Component {
  static childContextTypes = {
    siderHook: PropTypes.object,
  };
  state = { siders: [] };

  getChildContext() {
    return {
      siderHook: {
        addSider: (id) => {
          this.setState({
            siders: [...this.state.siders, id],
          });
        },
        removeSider: (id) => {
          this.setState({
            siders: this.state.siders.filter(currentId => currentId !== id),
          });
        },
      },
    };
  }

  render() {
    const { prefixCls, className, children, ...others } = this.props;
    const divCls = classNames(className, prefixCls, {
      [`${prefixCls}-has-sider`]: this.state.siders.length > 0,
    });
    return (
      <div className={divCls} {...others}>{children}</div>
    );
  }
}

const Layout = generator({
  prefixCls: 'ant-layout',
})(BasicLayout);

const Header = generator({
  prefixCls: 'ant-layout-header',
})(Basic);

const Footer = generator({
  prefixCls: 'ant-layout-footer',
})(Basic);

const Content = generator({
  prefixCls: 'ant-layout-content',
})(Basic);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
