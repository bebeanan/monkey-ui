import React from 'react';
import Tooltip from '../tooltip';
import getPlacements from './placements';
import warning from 'warning';

export default class Popover extends React.Component {
  static defaultProps = {
    prefixCls: 'ant-popover',
    placement: 'top',
    transitionName: 'zoom-big',
    trigger: 'hover',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
  }

  render() {
    const { arrowPointAtCenter } = this.props;
    return (
      <Tooltip
        builtinPlacements={getPlacements({ arrowPointAtCenter })}
        ref="tooltip"
        {...this.props}
        overlay={this.getOverlay()}
      />
    );
  }

  getPopupDomNode() {
    return this.refs.tooltip.getPopupDomNode();
  }

  componentDidMount() {
    if ('overlay' in this.props) {
      warning(false, '`overlay` prop of Popover is deprecated, use `content` instead.');
    }
  }

  getOverlay() {
    // use content replace overlay
    // keep overlay for compatibility
    const { title, prefixCls, overlay, content } = this.props;

    return (
      <div>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        <div className={`${prefixCls}-inner-content`}>
          {content || overlay}
        </div>
      </div>
    );
  }
}
