import React, { cloneElement } from 'react';
import RcTooltip from 'rc-tooltip';
import getPlacements from '../popover/placements';

export default class Tooltip extends React.Component {
  static defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    onVisibleChange() {},
    arrowPointAtCenter: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onVisibleChange = (visible) => {
    this.setState({ visible });
    this.props.onVisibleChange(visible);
  }

  getPopupDomNode() {
    return this.refs.tooltip.getPopupDomNode();
  }

  getPlacements() {
    const { builtinPlacements, arrowPointAtCenter } = this.props;
    return builtinPlacements || getPlacements({
      arrowPointAtCenter,
      verticalArrowShift: 8,
    });
  }

  // 动态设置动画点
  onPopupAlign = (domNode, align) => {
    const placements = this.getPlacements();
    // 当前返回的位置
    const placement = Object.keys(placements).filter(
      key => (
        placements[key].points[0] === align.points[0] &&
        placements[key].points[1] === align.points[1]
      )
    )[0];
    if (!placement) {
      return;
    }
    // 根据当前坐标设置动画点
    const rect = domNode.getBoundingClientRect();
    const transformOrigin = {
      top: '50%',
      left: '50%',
    };
    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = `${rect.height - align.offset[1]}px`;
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = `${-align.offset[1]}px`;
    }
    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = `${rect.width - align.offset[0]}px`;
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = `${-align.offset[0]}px`;
    }
    domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`;
  }

  render() {
    const { prefixCls, title, overlay, children } = this.props;
    // Hide tooltip when there is no title
    let visible = this.state.visible;
    if (!title && !overlay) {
      visible = false;
    }
    if ('visible' in this.props) {
      visible = this.props.visible;
    }
    const openClassName = this.props.openClassName || `${prefixCls}-open`;
    const childrenCls = (children && children.props && children.props.className)
      ? `${children.props.className} ${openClassName}` : openClassName;

    return (
      <RcTooltip
        overlay={title}
        visible={visible}
        onPopupAlign={this.onPopupAlign}
        ref="tooltip"
        {...this.props}
        builtinPlacements={this.getPlacements()}
        onVisibleChange={this.onVisibleChange}
      >
        {visible ? cloneElement(children, { className: childrenCls }) : children}
      </RcTooltip>
    );
  }
}
