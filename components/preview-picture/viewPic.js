//预览
import React from 'react';
import Col from '../layout/col';
import Row from '../layout/row';
import Icon from '../icon/index';
class ViewPic extends React.Component {
  constructor(props){
    super(props);
    this.props.fileList[0].active=true;
    this.state={
      fileList:this.props.fileList,
      rightUrl:this.props.fileList.length==0?"":this.props.fileList[0].url
    }
  }
  componentWillReceiveProps(nextProps){
    
    nextProps.fileList[0].active=true;
    this.setState({fileList:nextProps.fileList})
  }
  componentWillMount(){

  }
  componentWillUnmount() {
  
  }
  componentDidMount() {
      var deg=0;
      document.getElementById("rotate").onclick=function(){
        deg+=90;
        document.getElementById("bigImg").style.transform = "rotate(" + deg + "deg)";
      }
  }
  changeUrl(id){
    this.setState({rightUrl:""});
    this.setState({rightUrl:this.leftToRight(id)})
  }
  leftToRight(id){
    let fileList=this.state.fileList;
    let _id="";
    for(let i=0;i<fileList.length;i++){
      if(fileList[i].uid==id){
        fileList[i].active=true;
        _id=fileList[i].url;
      }else
        fileList[i].active=false;
    }
    this.setState({fileList:this.state.fileList})
    return _id;
  }
  render(){
    let fileList=this.state.fileList;
    let delFlag=this.props.delFlag||'block';
    return (
      <Row>
          <Col span={4}>
              <div className="leftNav">
                <ul style={{height:'100%',overflowY:'auto'}}>
                  {
                    fileList.length!=0?(this.state.fileList.map((item,index)=>{
                      return  <li key={item.uid} onClick={()=>this.changeUrl(item.uid)}>
                                  <img
                                      style={{border:item.active?"2px solid red":"2px solid #108ee9"}} 
                                      src={item.thumbUrl}/>
                                  <span style={{display:delFlag}}  
                                        onClick={(e)=>this.props.del(e,item.uid)}>×</span>
                              </li> 
                    })):null
                  }
                </ul>
              </div>
          </Col>
          <Col span={20}>
              <div className="picContainer">
                  <div id="rotate"><Icon type="retweet" />旋转</div>
                  <img src={this.state.rightUrl} id="bigImg"/>
              </div>
          </Col>
      </Row>
    )
  } 
};

module.exports = ViewPic;
