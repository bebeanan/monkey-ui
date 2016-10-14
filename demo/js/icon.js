import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
var Icon=MonkeyUi.Icon;
var Row=MonkeyUi.Row;
var Col=MonkeyUi.Col;
const iconname=["arrow-left","arrow-right","play-circle","play-circle-o","up-square","down-square","left-square","right-square","up-square-o","down-square-o","left-square-o","right-square-o"
] 
const icname=["question","question-circle-o","question-circle","plus","plus-circle-o","plus-circle","pause","pause-circle-o","pause-circle","minus","minus-circle-o","minus-circle","plus-square","plus-square-o","minus-square","minus-square-o","info","info-circle-o","info-circle","exclamation","exclamation-circle-o","exclamation-circle","close","close-circle","close-circle-o","close-square","close-square-o","check","check-circle","check-circle-o","check-square","check-square-o","clock-circle-o","clock-circle"]  //建议性图标
const icname3=["lock","unlock","android","apple","apple-o","area-chart","pie-chart","bar-chart","dot-chart","bars","book","calendar","cloud","cloud-download","code","code-o","copy","credit-card","delete","desktop","download","edit","ellipsis","file","file-text","file-unknown","file-pdf","file-excel","file-jpg","file-ppt","folder","folder-open","github","hdd","frown","frown-o","meh","meh-o","smile","smile-o","inbox","laptop","appstore-o","appstore","line-chart","link","logout","mail","menu-fold","menu-unfold","mobile","notification","paper-clip","picture","poweroff","reload","search","setting","share-alt","shopping-cart","tablet","tag","tag-o","tags","tags-o","to-top","upload","user","video-camera","windows","windows-o","ie","chrome","home","load","cloud-upload-o","cloud-download-o","cloud-upload","cloud-o","star-o","star","heart-o","heart","environment","environment-o","eye","eye-o","camera","camera-o","aliwangwang","aliwangwang-o","save","team","solution","phone","filter","exception","export","customer-service","qrcode","scan","like","dislike","message","pay-circle","pay-circle-o","calculator","pushpin","pushpin-o"]  //网站常用图标
const myrow=iconname.map((typename,i) => {
		return (
			<Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type={typename}  /></Col><Col span={24}>{typename}</Col></Row></div></Col>
		)
})
const myrow2=icname.map((typename,i) => {
		return (
			<Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type={typename} /></Col><Col span={24}>{typename}</Col></Row></div></Col>
		)
})
const myrow3=icname3.map((typename,i) => {
		return (
			<Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type={typename} /></Col><Col span={24}>{typename}</Col></Row></div></Col>
		)
})
class Page3 extends React.Component{
  render() {
    return (
      <div className="mancatain">
      <h3><Icon type="setting" />方向性图标</h3>
      <Row>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="step-backward" /></Col><Col span={24}>step-backward</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="step-forward" /></Col><Col span={24}>step-forward</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="fast-backward" /></Col><Col span={24}>fast-backward</Col></Row></div></Col>
      	  <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="fast-forward" /></Col><Col span={24}>fast-forward</Col></Row></div></Col>
      	  <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="shrink" /></Col><Col span={24}>shrink</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="arrows-alt" /></Col><Col span={24}>arrows-alt</Col></Row></div></Col>

        </Row>
        <Row>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="down" /></Col><Col span={24}>down</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="up" /></Col><Col span={24}>up</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="left" /></Col><Col span={24}>left</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="right" /></Col><Col span={24}>right</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="caret-up" /></Col><Col span={24}>caret-down</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="caret-down" /></Col><Col span={24}>caret-down</Col></Row></div></Col>
	  </Row>
      <Row>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="caret-left" /></Col><Col span={24}>caret-left</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="caret-right" /></Col><Col span={24}>caret-right</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="up-circle" /></Col><Col span={24}>up-circle</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="down-circle" /></Col><Col span={24}>down-circle</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="left-circle" /></Col><Col span={24}>caret-down</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="right-circle" /></Col><Col span={24}>caret-down</Col></Row></div></Col>
      </Row>
      <Row>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="up-circle-o" /></Col><Col span={24}>up-circle-o</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="down-circle-o" /></Col><Col span={24}>down-circle-o</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="right-circle-o" /></Col><Col span={24}>right-circle-o</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="left-circle-o" /></Col><Col span={24}>left-circle-o</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="double-right" /></Col><Col span={24}>double-right</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="double-left" /></Col><Col span={24}>double-left</Col></Row></div></Col>
      </Row>  
      <Row>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="verticle-left" /></Col><Col span={24}>verticle-left</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="verticle-right" /></Col><Col span={24}>verticle-right</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="forward" /></Col><Col span={24}>forward</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="backward" /></Col><Col span={24}>backward</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="rollback" /></Col><Col span={24}>rollback</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="enter" /></Col><Col span={24}>enter</Col></Row></div></Col>
      </Row>     
      <Row>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="retweet" /></Col><Col span={24}>retweet</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="swap" /></Col><Col span={24}>swap</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="swap-left" /></Col><Col span={24}>swap-left</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="swap-right" /></Col><Col span={24}>swap-right</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="arrow-up" /></Col><Col span={24}>arrow-up</Col></Row></div></Col>
	      <Col span={4}><div className="icon_div"><Row><Col span={24}><Icon type="arrow-down" /></Col><Col span={24}>arrow-down</Col></Row></div></Col>
      </Row> 
      <Row> 
      	{myrow} 
      </Row>
      <h3><Icon type="setting" />建议性图标</h3>
      <Row> 
      	{myrow2}
	  </Row> 
	  <h3><Icon type="setting" />网站通用图标</h3>
      <Row> 
      	{myrow3}
	  </Row> 
      </div>
    );
  }
};

export default Page3;