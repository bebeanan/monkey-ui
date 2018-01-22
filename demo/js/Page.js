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
const Switch=MonkeyUi.Switch;
const Icon=MonkeyUi.Icon;
const Tree=MonkeyUi.Tree;
const NewCascader=MonkeyUi.NewCascader;
const TreeNode=Tree.TreeNode;
const Spin=MonkeyUi.Spin;
const Collapse=MonkeyUi.Collapse;
const Panel = Collapse.Panel;
const TreeSelect=MonkeyUi.TreeSelect;
var Input = MonkeyUi.Input;
var Search = Input.Search;
var Cascader = MonkeyUi.Cascader;

const dataSource = [{name:"yy2222222222222222222222222222222222222222222x",
age:1111111111111111111111111111111111111111111111113,
age1:11111111111111111111111113,
age2:1222222222222223,
age3:12222222222222222222223,
age4:"fdsafdsaaaaaasssssssssssfds",
age5:"fdsafdsafdsaaaaaaafdsfdsfdsfd",age6:13,age7:13,age8:13,address:'12121'}];
var RadioGroup=Radio.Group;
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  fixed:'left',
  width:150
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width:150
} , {
  title: '年龄',
  dataIndex: 'age1',
  key: 'age1',
  width:150
},{
  title: '年龄',
  dataIndex: 'age2',
  key: 'age2',
  width:150
},{
  title: '年龄',
  dataIndex: 'age3',
  key: 'age3',
  width:150
},{
  title: '年龄',
  dataIndex: 'age4',
  key: 'age4',
  width:350
},{
  title: '年龄',
  dataIndex: 'age5',
  key: 'age5',
  width:150
},{
  title: '年龄',
  dataIndex: 'age6',
  key: 'age6',
  width:150
},{
  title: '年龄',
  dataIndex: 'age7',
  key: 'age7',
  width:250
},{
  title: '年龄',
  dataIndex: 'age8',
  key: 'age8',
  width:150
},{
  title: '住址',
  dataIndex: 'address',
  key: 'address',
  fixed:'right'
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
    handleSelect(value){
      console.log(value)
    }
  render() {
    var remark = this.state.remark;
    const onChange=(date, dateString) =>{
  console.log(date, dateString);
}
    const props = {
      action: 'http://172.16.26.19:8090/DT/uploadImage.action',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file);
          console.log(info.fileList);
        }
      },
      onSuccess(response, file){
        console.log(22)
        console.log(response);
        console.log(file)
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
          <Table columns={columns}  dataSource={dataSource} scroll={{x:500,y:800}}/>
          <Input type="textarea" rows={4} value={remark} onChange={(e)=>{this.handleChangeTextarea(e)}}/>
          <a href="#" onClick={(name) => {this.handleSelectTag("智力落后")}}>智力落后</a>
          <Search placeholder="input search text" onSearch={value => console.log(value)} />
          <br/>
          <Collapse defaultActiveKey={['1']}>
            <Panel header="This is panel header 1" key="1">
              <p>11111</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>22222</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>33333</p>
            </Panel>
          </Collapse>
          <br/>
          <br/>
          <p>-------------------------------------------------</p>
          <NewCascader areaTree={[]}/>
          <Upload {...props}>
            <Button type="ghost">
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
          <Cascader options={options}  placeholder="Please select" />
          <br/>
          <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
          <br />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <br />
          <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
          <br/>
          <Spin size="yyx-large" />
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
      <Select
         mode="multiple"
         style={{width:'100px'}}
         onChange={(value)=>this.handleSelect(value)}>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </Select>
      <form className="pure-form"><input type="date"/></form>
      
      </div>
    );
  }
};

export default Page;