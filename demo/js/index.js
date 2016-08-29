import React from 'react';
import ReactDOM from 'react-dom';
// import MonkeyUi from '../../components/monkeyui.js';
import MonkeyUi from '../../monkeyui.js';

var Row = MonkeyUi.Row;
var Col = MonkeyUi.Col;
var Button = MonkeyUi.Button;
var CheckBox = MonkeyUi.CheckBox;
var Modal =MonkeyUi.Modal;

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
 
 