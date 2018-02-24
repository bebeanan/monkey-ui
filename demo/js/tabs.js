import React, { Component } from 'react'
import MonkeyUi from '../../lib/monkeyui.js';
const { Tabs } = MonkeyUi;
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


export default class Tab extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}