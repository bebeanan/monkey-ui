import React from 'react';
import ReactDOM from 'react-dom';
// import MonkeyUi from '../../components/monkeyui.js';
import MonkeyUi from '../../lib/monkeyui.js';
var Collapse=MonkeyUi.Collapse;
var Checkbox=MonkeyUi.Checkbox;
var CheckboxGroup = Checkbox.Group;
const Panel=Collapse.Panel;

const optionsWithDisabled = [
  { label: '苹果', value: 'Apple' },
  { label: '梨', value: 'Pear' },
  { label: '橘', value: 'Orange'},
];

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


const Page = React.createClass({
  render() {
    return (
      <div>     
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
         <Checkbox >Checkbox</Checkbox>
        <CheckboxGroup options={optionsWithDisabled} defaultValue={['Apple']} />

      </div>
    );
  },
});

export default Page;
