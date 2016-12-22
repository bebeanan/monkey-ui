import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
var Button=MonkeyUi.Button;
var Icon=MonkeyUi.Icon;
var Checkbox=MonkeyUi.Checkbox;
const CheckboxGroup = Checkbox.Group;
const defaultCheckedList = ['Apple', 'Orange'];
function onChange1(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' }, 
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
const Page6 = React.createClass({
  getInitialState() {
    return {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
       checked: true,
      disabled: false,
    };
  },
  onChange(e){
    console.log('checked',e.target.checked);
    this.setState({ checked: !this.state.checked });
  },
  render() {
  	const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <div className="mancatain">
	      <h3><Icon type="setting" />基本语法</h3>
	      <div className="mancatain_div"> 
	        <div>简单的checkbox</div>
			<div>
				<Checkbox onChange={this.onChange} checked={this.state.checked}>Checkbox</Checkbox>
				<Checkbox onChange={onChange1}>Checkbox</Checkbox>
		    </div>
		  </div>
	      <h3><Icon type="setting" />不可用</h3>
	      <div  className="mancatain_div">
			  <div>checkbox 不可用。</div>
			  <div>
				  <Checkbox defaultChecked={false} disabled />
				  <br />
				  <Checkbox defaultChecked disabled />
			  </div>
		  </div>
      </div>
    );
  }
});

export default Page6;