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
 
 