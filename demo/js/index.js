import React from 'react';
import ReactDOM from 'react-dom';
// import MonkeyUi from '../../components/monkeyui.js';
import MonkeyUi from '../../monkeyui.js';

var Row = MonkeyUi.Row;
var Col = MonkeyUi.Col;
var Button = MonkeyUi.Button;
var CheckBox = MonkeyUi.CheckBox;
var Modal =MonkeyUi.Modal;
var Tree = MonkeyUi.Tree;
var message=MonkeyUi.Message;
var Alert=MonkeyUi.Alert;
const confirm = Modal.confirm;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
  </div>
,
 document.getElementById('hello'));

ReactDOM.render(
  <div>
    <CheckBox>Checkbox</CheckBox>
  </div>
,
 document.getElementById('checkboxdemo'));
 

function showConfirm() {
  confirm({
    title: '您是否确认要删除这项内容',
    content: '点确认 1 秒后关闭',
    onOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    },
    onCancel() {},
  });
}

ReactDOM.render(
  <Button onClick={showConfirm}>
    确认对话框
  </Button>
,
 document.getElementById('modal'));
 
 const App = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('点击了确定');
    this.setState({
      visible: false,
    });
  },
  handleCancel(){
    console.log('点击了取消');
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>显示对话框</Button>
        <Modal title="第一个 Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('modal2'));

const TreeNode=Tree.TreeNode;
const Demo = React.createClass({
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
      <Tree className="myCls" showLine checkable
        defaultExpandedKeys={this.state.defaultExpandedKeys}
        defaultSelectedKeys={this.state.defaultSelectedKeys}
        defaultCheckedKeys={this.state.defaultCheckedKeys}
        onSelect={this.onSelect} onCheck={this.onCheck}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" >
            <TreeNode title="leaf" key="0-0-0-0"  />
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

ReactDOM.render(<Demo />, document.getElementById('tree'));


const success = function () {
  // message.success('成功');
  message.info('这是一条普通的提醒',1000);
};

ReactDOM.render(<div>
  <Button onClick={success}>显示成功提示</Button>
  
</div>, document.getElementById('message'));
 




ReactDOM.render(<div>
  <Alert message="成功提示的文案" type="success" showIcon />
  <Alert message="消息提示的文案" type="info" showIcon />
  <Alert message="警告提示的文案" type="warning" showIcon />
  <Alert message="错误提示的文案" type="error" showIcon />
  </div>,document.getElementById('alert'))
 