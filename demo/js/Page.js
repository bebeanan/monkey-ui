import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
import LeftPage from './LeftPage.js';
var Row=MonkeyUi.Row;
var Col=MonkeyUi.Col;
var Radio=MonkeyUi.Radio;
var Table=MonkeyUi.Table;
const Select= MonkeyUi.Select;
const Option=Select.Option;
const Button=MonkeyUi.Button;
const Upload=MonkeyUi.Upload;
const Icon=MonkeyUi.Icon;
const Tree=MonkeyUi.Tree;
const TreeNode=Tree.TreeNode;
const TreeSelect=MonkeyUi.TreeSelect;
var Input = MonkeyUi.Input;
var Search = Input.Search;
var Cascader = MonkeyUi.Cascader;
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
          <Cascader options={options}  placeholder="Please select" />

           <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
      <Select>
        <Option value="1">1</Option>
      </Select>
      <form className="pure-form"><input type="date"/></form>
      
      </div>
    );
  }
};

export default Page;