import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
var Alert=MonkeyUi.Alert;
var Icon=MonkeyUi.Icon;
const onClose = function (e) {
  console.log(e, 'I was closed.');
};
class Page extends React.Component{
  render() {
    return (
      <div className="mancatain">
	      <h3><Icon type="setting" />基本</h3>
	      <div className="mancatain_div"> 
	        <div>共有四种样式 success、info、warning、error。</div>
			<div>
			  <Alert message="Success Text" type="success" />
			  <Alert message="Info Text" type="info" />
			  <Alert message="Warning Text" type="warning" />
			  <Alert message="Error Text" type="error" />
		    </div>
		  </div>
	      <h3><Icon type="setting" />可关闭警示框</h3>
	      <div  className="mancatain_div">
				<div>显示关闭按钮，点击可关闭警告提示。可以自定义关闭，自定义的文字会替换原先的关闭 Icon</div>
				<div>
				  <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
				    type="warning"
				    closable
				    onClose={onClose}
				  />
				  <Alert message="Error Text"
				    description="Error Description Error Description Error Description Error Description Error Description Error Description"
				    type="error"
				    closable
				    onClose={onClose}
				  />
				  <Alert message="Info Text" type="info" closeText="Close Now" />
			  </div>
		  </div>
		  <h3><Icon type="setting" />带图标警示框</h3>
	      <div>
				<div>可口的图标让信息类型更加醒目。</div>
				<div>
				  <Alert message="Success Tips" type="success" showIcon />
				  <Alert message="Informational Notes" type="info" showIcon />
				  <Alert message="Warning" type="warning" showIcon />
				  <Alert message="Error" type="error" showIcon />
				  <Alert
				    message="success tips"
				    description="Detailed description and advices about successful copywriting."
				    type="success"
				    showIcon
				  />
				  <Alert
				    message="Informational Notes"
				    description="Additional description and informations about copywriting."
				    type="info"
				    showIcon
				  />
				  <Alert
				    message="Warning"
				    description="This is a warning notice about copywriting."
				    type="warning"
				    showIcon
				  />
				  <Alert
				    message="Error"
				    description="This is an error message about copywriting."
				    type="error"
				    showIcon
				  />
		        </div>
		  </div>
		  <h3><Icon type="setting" />顶部公告</h3>
		  <div  className="mancatain_div">
				<div>用作顶部公告时，默认有图标，type 为 'warning'，并有特殊样式。</div>
				<div>
				    <Alert message="Warning text" banner />
				    <br />
				    <Alert message="Very long warning text warning text text text text text text text" banner closable />
			    </div>
		  </div>
		  <h3><Icon type="setting" />含辅助性文字介绍</h3>
		  <div  className="mancatain_div">
				<div>添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</div>
				<div>
				  <Alert
				    message="Success Text"
				    description="Success Description Success Description Success Description"
				    type="success"
				  />
				  <Alert
				    message="Info Text"
				    description="Info Description Info Description Info Description Info Description"
				    type="info"
				  />
				  <Alert
				    message="Warning Text"
				    description="Warning Description Warning Description Warning Description Warning Description"
				    type="warning"
				  />
				  <Alert
				    message="Error Text"
				    description="Error Description Error Description Error Description Error Description"
				    type="error"
				  />
			    </div>
		  </div>
      </div>
    );
  }
};

export default Page;