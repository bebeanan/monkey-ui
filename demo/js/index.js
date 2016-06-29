import React from 'react';
import ReactDOM from 'react-dom';
// import MonkeyUi from '../../monkeyui.js';
import MonkeyUi from '../../components/monkeyui.js';

var Row = MonkeyUi.Row;
var Col = MonkeyUi.Col;

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

ReactDOM.render(
  <div>
    <Row>
		<Col>123</Col>
    </Row>
  </div>
,
 document.getElementById('hello'));