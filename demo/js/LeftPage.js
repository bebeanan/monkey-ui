import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
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
          <Menu.Item key="1">Row</Menu.Item>
          <Menu.Item key="2">Col</Menu.Item>
          <Menu.Item key="3">Alert</Menu.Item>
          <Menu.Item key="4">Button</Menu.Item>
          <Menu.Item key="5">Checkbox</Menu.Item>
          <Menu.Item key="6">Modal</Menu.Item>
          <Menu.Item key="7">Tree</Menu.Item>
          <Menu.Item key="8">Message</Menu.Item>
          <Menu.Item key="9">Collapse</Menu.Item>
          <Menu.Item key="10">Input</Menu.Item>
          <Menu.Item key="11">Table</Menu.Item>
          <Menu.Item key="12">Radio</Menu.Item>
          <Menu.Item key="13">Select</Menu.Item>
          <Menu.Item key="14">Pagination</Menu.Item>
          <Menu.Item key="15">Dropdown</Menu.Item>
          <Menu.Item key="16">Menu</Menu.Item>
          <Menu.Item key="17">Icon</Menu.Item>
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