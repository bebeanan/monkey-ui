import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
import LeftPage from './LeftPage.js';
var Row=MonkeyUi.Row;
var Col=MonkeyUi.Col;
var Radio=MonkeyUi.Radio;
var Table=MonkeyUi.Table;
const Button=MonkeyUi.Button;
const Upload=MonkeyUi.Upload;
const Icon=MonkeyUi.Icon;
var Input = MonkeyUi.Input;
var Search = Input.Search;
var Cascader = MonkeyUi.Cascader;
var TreeSelect = MonkeyUi.TreeSelect;
const dataSource = [];
var RadioGroup=Radio.Group;
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

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class Page extends React.Component{
  constructor(){
		super();
		this.state={
			remark:"",
      value:1
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
  onChange(e){
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
    selectChange(value){
        console.log("value"+value);
    }
  render() {
    var remark = this.state.remark;
    const onChange=(date, dateString) =>{
  console.log(date, dateString);
}
    const props = {
      action: '/upload.do',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file);
          console.log(info.fileList);
        }
      },
      defaultFileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      }, {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      }],
    };
    return (
      <div>
          <Radio>Radio</Radio>
           <RadioGroup onChange={(e)=>{this.onChange(e)}} value={this.state.value}>
            <Radio key="a" value={1}>A</Radio>
            <Radio key="b" value={2}>B</Radio>
            <Radio key="c" value={3}>C</Radio>
            <Radio key="d" value={4}>D</Radio>
          </RadioGroup>
          <Table columns={columns} dataSource={dataSource} />
          <Input type="textarea" rows={4} value={remark} onChange={(e)=>{this.handleChangeTextarea(e)}}/>
          <a href="#" onClick={(name) => {this.handleSelectTag("智力落后")}}>智力落后</a>
          <Search placeholder="input search text" onSearch={value => console.log(value)} />
          <br/>
          <br/>
          <Upload {...props}>
            <Button type="ghost">
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
      </div>
    );
  }
};

export default Page;