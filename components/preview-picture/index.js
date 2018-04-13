//容器
/*
*
接口设计
参数设计：
visible  //modal hide show
viewData  //图片列表数据
删除图片接口设计
//动态渲染左侧缩略图 and 同时删除外层上传数据和显示数据 and 删除按钮设计
//点击左侧缩略图左侧对应大图展示
// 阻止删除和展示事件传递和冒泡，防止预览触发删除，或删除触发预览
//bug 修复 upload组件删除事件会触发预览事件
*/
import React from 'react';
import Modal from '../modal/index';
import ViewPic from './viewPic';

const getFileList=()=>{
  return {
            type:'标题',
            url:'',
            uid:'',
            thumbUrl:''
          }
}

const noop=()=>{}
class Container extends React.Component {


  constructor(props){
    super(props);
    this.state={
        visible:false,
        fileList:this.props.fileList,
        width:this.props.width?this.props.width:"1000px",//模态框宽度
        top:this.props.top?this.props.top:'100px',//模态框距离顶部高度
        title:this.props.title
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({visible:nextProps.visible,fileList:nextProps.fileList})
  }
  componentWillMount(){

  }
  componentWillUnmount() {
  
  }
  componentDidMount() {

  }
  hideModal(){
    this.setState({visible:false})
  }
  render(){
    let props={
      delFlag:this.props.delFlag,
      del:this.props.del?this.props.del:noop,
      fileList:this.props.fileList
    }
    let fileList=this.state.fileList
    return (
      <Modal
        title={this.state.title}
        visible={this.state.visible}
        footer={null}
        width={this.state.width}
        style={{top:this.state.top}}
        onCancel={()=>this.hideModal()}

        >
        <ViewPic {...props} />
      </Modal>
    )
  } 
};

module.exports = Container;
