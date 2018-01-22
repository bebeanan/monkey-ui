//loading组件
import React from 'react';

/**
  参数说明：

  text:text存在显示文字,无text属性隐藏,
  loading:show 显示；hide 隐藏
  
*/
class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state={
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
  render(){
    let loadingText=this.props.text?this.props.text:'';
    let coverSee=this.props.cover?this.props.cover:'none';
    let loading=this.props.loading;
    return (
      <div>
          <div className="cover" style={{display:loading=='show'?'block':'none'}}></div>
          <div className={"spinner "+this.props.loading} style={{left:'50%',top:'34%'}}>
              <div className="spinner-container container1">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
              </div>
              <div className="spinner-container container2">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
              </div>
              <div className="spinner-container container3">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
              </div>
              <div className="" style={{'position':'absolute','display':'block','top':'46px','left':'-9px','color':'#108ee9','width':'80px'}}>{loadingText}</div>
            
          </div>
        </div>
    )
  } 
};

export default Loading;
