import React from 'react';
import ReactDOM from 'react-dom';
import BiosanUi from '../../components/BiosanUi.js'

var Row = BiosanUi.Row;
var Col = BiosanUi.Col;

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

ReactDOM.render(
<Row/>,
 document.getElementById('hello'));