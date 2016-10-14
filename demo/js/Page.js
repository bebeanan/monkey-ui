import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
import LeftPage from './LeftPage.js';
var Row=MonkeyUi.Row;
var Col=MonkeyUi.Col;
var Radio=MonkeyUi.Radio;
var Table=MonkeyUi.Table
var Input = MonkeyUi.Input
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];



class Page extends React.Component{
  constructor(){
		super();
		this.state={
			remark:""
		}
	}
  handleChangeTextarea(e){
		var remark = e.target.value;
		this.setState({remark:remark});
	}
  handleSelectTag(name){
		var text = this.state.remark;
		this.setState({remark:text + " " +name});
	}
  render() {
    var remark = this.state.remark;
    return (
      <div>
        <Radio>Radio</Radio>
        <Table columns={columns} dataSource={dataSource} />
        <Input type="textarea" rows={4} value={remark} onChange={(e)=>{this.handleChangeTextarea(e)}}/>
        <a href="#" onClick={(name) => {this.handleSelectTag("智力落后")}}>智力落后</a>
      </div>
    );
  }
};

export default Page;