import React from 'react';
import ReactDOM from 'react-dom';
// import MonkeyUi from '../../components/monkeyui.js';
import MonkeyUi from '../../monkeyui.js';

var Row = MonkeyUi.Row;
var Col = MonkeyUi.Col;
var Button = MonkeyUi.Button;

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