import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
// Upload, Icon, Modal
const {Upload,Icon,Modal,Button,PreviewPicture}=MonkeyUi;
/*
  资助图片列表
  诊疗图片列表
  [
    {
      name:'typeName',
      zlList:[]
    }
  ]
*/
class PicturesWall extends React.Component {
  constructor(props){
    super(props);
    this.state={
        visible:false
    }
  }
  componentWillReceiveProps(nextProps){
  }
  componentWillMount(){

  }
  componentWillUnmount() {
  
  }
  componentDidMount() {

  }
  onPreview(file,type){
    this.setState({visible:true})
    console.log('yulan')
    console.log(type)
  }
  onRemove(e,file){
    console.log('remove');
    console.log(e)
    console.log(file)
  }
  del(e,data){
    e.preventDefault();
    e.stopPropagation();
    console.log('del')
    console.log(e)
    console.log(data)
  }
  render() {
    const props = {
          action: '/upload.do',
          listType: 'picture',
          defaultFileList: [{
            uid: -1,
            name: 'xxx.png',
            type:'资助申请表',
            status: 'done',
            fileId:'001',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }, {
            uid: -2,
            name: 'yyy.png',
            status: 'done',
            type:'资助申请表',
            fileId:'002',
            url: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
            thumbUrl: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
          },{
            uid: -3,
            name: 'xxx.png',
            type:'资助申请表',
            status: 'done',
            fileId:'001',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }, {
            uid: -4,
            name: 'yyy.png',
            status: 'done',
            type:'资助申请表',
            fileId:'002',
            url: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
            thumbUrl: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
          },
          {
            uid: -5,
            name: 'xxx.png',
            type:'资助申请表',
            status: 'done',
            fileId:'001',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }, {
            uid: -6,
            name: 'yyy.png',
            status: 'done',
            type:'资助申请表',
            fileId:'002',
            url: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
            thumbUrl: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
          },{
            uid: -7,
            name: 'xxx.png',
            type:'资助申请表',
            status: 'done',
            fileId:'001',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }, {
            uid: -8,
            name: 'yyy.png',
            status: 'done',
            type:'资助申请表',
            fileId:'002',
            url: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
            thumbUrl: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
          },{
            uid: -9,
            name: 'xxx.png',
            type:'资助申请表',
            status: 'done',
            fileId:'001',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }, {
            uid: -10,
            name: 'yyy.png',
            status: 'done',
            type:'资助申请表',
            fileId:'002',
            url: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
            thumbUrl: 'http://pic17.nipic.com/20111122/6759425_152002413138_2.jpg',
          }],
        };
    let _props={
      fileList:props.defaultFileList,
      visible:this.state.visible,
      del:this.del,
      delFlag:'block',
      title:"诊疗图片列表/住院报告单"
    }
    return (
      <div>
        <Upload {...props} 
                className="upload-list-inline"
                onPreview={(file)=>this.onPreview(file,"资助申请表")}
                onRemove={(e,file)=>this.onRemove(e,file)}
                >
          <Button>
            <Icon type="upload" /> upload
          </Button>
        </Upload>
        <PreviewPicture {..._props}/>
      </div>
    );
  }
}

export default PicturesWall;
