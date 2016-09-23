import React from 'react';
import ReactDOM from 'react-dom';
// import MonkeyUi from '../../components/monkeyui.js';
import MonkeyUi from '../../lib/monkeyui.js';
var Collapse=MonkeyUi.Collapse;
const Panel=Collapse.Panel;
const Page = React.createClass({
  render() {
    return (
  <Collapse >
    <Panel header="This is panel header 1" key="1">
      <p>123</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>456</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>567</p>
    </Panel>
  </Collapse>
    );
  },
});

export default Page;