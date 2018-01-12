import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';

var Row=MonkeyUi.Row;
console.log('------------')
console.log(Row)
var Button=MonkeyUi.Button;
var Col=MonkeyUi.Col;
var Menu=MonkeyUi.Menu;
var Icon=MonkeyUi.Icon;
var Dropdown=MonkeyUi.Dropdown;
const menu = (
                <Menu  mode="horizontal">
                  <Menu.Item key="1">菜单1</Menu.Item>
                  <Menu.Item key="2">菜单2</Menu.Item>
                  <Menu.Item key="3">菜单3</Menu.Item>
                  <Menu.Item key="4">菜单4</Menu.Item>
                </Menu>
);
const Head = React.createClass({
  render() {
    return (
       <div>
          <header id="header" className="clearfix">
          <Row>
            <Col xs={16} sm={8} md={8} lg={8}><div  className="headname">MONKEY-UI</div></Col>
            <Col xs={0} sm={16} md={16} lg={16}>
                <Menu  mode="horizontal">
                  <Menu.Item key="1">菜单1</Menu.Item>
                  <Menu.Item key="2">菜单2</Menu.Item>
                  <Menu.Item key="3">菜单3</Menu.Item>
                  <Menu.Item key="4">菜单4</Menu.Item>
                </Menu>
            </Col>
            <Col xs={8} sm={0} md={0} lg={0}>
              <div  className="headbt"> 
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" href="#"><Button type="ghost" icon="bars" /></a>
                </Dropdown>          
                
              </div>
            </Col>
          </Row>
          </header>
       </div>
    );
  },
});

export default Head;