import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
import {Link } from 'react-router'
const Menu=MonkeyUi.Menu;
const Icon=MonkeyUi.Icon;
const SubMenu = Menu.SubMenu;
const Page = React.createClass({
  getInitialState() {
    return {
      current: '1',
      openKeys: [],
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({ current: e.key });
  },
  onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));
    this.setState({ openKeys: this.getKeyPath(latestOpenKey) });
  },
  getKeyPath(key) {
    const map = {
      sub1: ['sub1'],
      sub2: ['sub2'],
      sub3: ['sub2', 'sub3'],
      sub4: ['sub4'],
    };
    return map[key] || [];
  },
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>主要模块说明</span></span>}>
          <Menu.Item key="0"><Link to="/page">测试页面</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/alert">Alert</Link></Menu.Item>
          <Menu.Item key="17"><Link to="/icon">Icon</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/button">Button</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/checkbox">Checkbox</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/modal">Modal</Link></Menu.Item>
          <Menu.Item key="7"><Link to="/tree">Tree</Link></Menu.Item>
          <Menu.Item key="8"><Link to="/message">Message</Link></Menu.Item>
          <Menu.Item key="9"><Link to="/collapse">Collapse</Link></Menu.Item>
          <Menu.Item key="10"><Link to="/input">Input</Link></Menu.Item>
          <Menu.Item key="11"><Link to="/table">Table</Link></Menu.Item>
          <Menu.Item key="12"><Link to="/radio">Radio</Link></Menu.Item>
          <Menu.Item key="13"><Link to="/select">Select</Link></Menu.Item>
          <Menu.Item key="14"><Link to="/pagination">Pagination</Link></Menu.Item>
          <Menu.Item key="15"><Link to="/dropdown">Dropdown</Link></Menu.Item>
          <Menu.Item key="16"><Link to="/menu">Menu</Link></Menu.Item>
          <Menu.Item key="18"><Link to="/timeline">Timeline</Link></Menu.Item>
          <Menu.Item key="19"><Link to="/carousel">Carousel</Link></Menu.Item>
          <Menu.Item key="20"><Link to="/complete">Complete</Link></Menu.Item>
          <Menu.Item key="21"><Link to="/Form">Form</Link></Menu.Item>
          <Menu.Item key="22"><Link to="/Table">Table</Link></Menu.Item>
          <Menu.Item key="23"><Link to="/upload">Upload</Link></Menu.Item>
          <Menu.Item key="24"><Link to="/grid">Grid</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>详细介绍</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>关于我们</span></span>}>
        </SubMenu>
      </Menu>
    );
  },
});

export default Page;