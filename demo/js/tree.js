import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
var Button=MonkeyUi.Button;
var Icon=MonkeyUi.Icon;
var ButtonGroup=Button.ButtonGroup;
var Tree=MonkeyUi.Tree;
var TreeNode=Tree.TreeNode;
var Modal=MonkeyUi.Modal;
var AutoComplete=MonkeyUi.AutoComplete;
var Loading=MonkeyUi.Loading;
const ModalTree = React.createClass({
    getInitialState() {
        return { visible: false };
    },
    showModal() {
        this.setState({
            visible: true,
        });
    },
    handleOk() {
        console.log('Clicked OK');
        this.setState({
            visible: false,
        });
    },
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    },
    render() {
        return (
            <div>
            <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
                <Modal title="Basic Modal" visible={this.state.visible}
                onOk={this.handleOk} onCancel={this.handleCancel}
                >
                    <TreeDemo/>
                </Modal>
                </div>
    );
    },
});

const TreeDemo = React.createClass({
    getDefaultProps() {
        return {
            keys: ['0-0-0', '0-0-1'],
        };
    },
    getInitialState() {
        const keys = this.props.keys;
        return {
            defaultExpandedKeys: keys,
            defaultSelectedKeys: keys,
            defaultCheckedKeys: keys,
        };
    },
    onSelect(info) {
        console.log('selected', info);
    },
    onCheck(info) {
        console.log('onCheck', info);
    },
    render() {
        return (
            <Tree className="myCls"  checkable
                defaultExpandedKeys={this.state.defaultExpandedKeys}
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                defaultCheckedKeys={this.state.defaultCheckedKeys}
                onSelect={this.onSelect} onCheck={this.onCheck}
                >
                    <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled>
                    <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                    <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                    </TreeNode>
                    </TreeNode>
            </Tree>
    );
    },
    });


class Page4 extends React.Component{
  render() {
    return (
      <div className="mancatain">
	      <h3>Tree 树形控件</h3>
          <h3><Icon type="setting" />基本用法</h3>
            <TreeDemo/>
          <hr/>
      <h3><Icon type="setting" />配合模态框使用</h3>
          <ModalTree/>
      </div>
    );
  }
};

export default Page4;