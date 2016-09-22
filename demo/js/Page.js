import React from 'react';
import ReactDOM from 'react-dom';
// import MonkeyUi from '../../components/monkeyui.js';
import MonkeyUi from '../../monkeyui.js';
var Collapse=MonkeyUi.Collapse;
const Page = React.createClass({
  render() {
    return (
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
    );
  },
});

export default Page;