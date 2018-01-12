// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
let enquire;
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = (mediaQuery) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() {
      },
      removeListener() {
      },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = require('enquire.js');
}

import * as React from 'react';
import { Children, cloneElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';



const responsiveArray= ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

const responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

export default class Row extends React.Component{
  static defaultProps = {
    gutter: 0,
  };

  static propTypes = {
    type: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    prefixCls: PropTypes.string,
  };

  state = {
    screens: {},
  };

  componentDidMount() {
    Object.keys(responsiveMap)
      .map((screen) => enquire.register(responsiveMap[screen], {
          match: () => {
            if (typeof this.props.gutter !== 'object') {
              return;
            }
            this.setState((prevState) => ({
              screens: {
                ...prevState.screens,
                [screen]: true,
              },
            }));
          },
          unmatch: () => {
            if (typeof this.props.gutter !== 'object') {
              return;
            }
            this.setState((prevState) => ({
              screens: {
                ...prevState.screens,
                [screen]: false,
              },
            }));
          },
          // Keep a empty destory to avoid triggering unmatch when unregister
          destroy() {},
        },
      ));
  }
  componentWillUnmount() {
    Object.keys(responsiveMap)
      .map((screen) => enquire.unregister(responsiveMap[screen]));
  }
  getGutter() {
    const { gutter } = this.props;
    if (typeof gutter === 'object') {
      for (let i = 0; i <= responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
          return gutter[breakpoint];
        }
      }
    }
    return gutter;
  }
  render() {
    const {
      type, justify, align, className, style, children,
      prefixCls = 'ant-row', ...others,
    } = this.props;
    const gutter = this.getGutter();
    const classes = classNames({
      [prefixCls]: !type,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${type}-${justify}`]: type && justify,
      [`${prefixCls}-${type}-${align}`]: type && align,
    }, className);
    const rowStyle = (gutter ) > 0 ? {
      marginLeft: (gutter ) / -2,
      marginRight: (gutter ) / -2,
      ...style,
    } : style;
    const cols = Children.map(children, (col) => {
      if (!col) {
        return null;
      }
      if (col.props && (gutter ) > 0) {
        return cloneElement(col, {
          style: {
            paddingLeft: (gutter ) / 2,
            paddingRight: (gutter ) / 2,
            ...col.props.style,
          },
        });
      }
      return col;
    });
    const otherProps = { ...others };
    delete otherProps.gutter;
    return <div {...otherProps} className={classes} style={rowStyle}>{cols}</div>;
  }
}