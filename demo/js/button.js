import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
import moment from 'moment';
var Button=MonkeyUi.Button;
var Icon=MonkeyUi.Icon;
var ButtonGroup=Button.ButtonGroup;
var TimePicker = MonkeyUi.TimePicker;
class Page4 extends React.Component{
	constructor(){
		super()
		this.state={
			open:false
		}
	}
	handleOpenChange = (open) => {
    this.setState({ open });
  }

  handleClose = () => this.setState({ open: false })
	onChange = (time,timeString) =>{
		console.log(time,timeString);
	}
  render() {
    return (
      <div className="mancatain">
	      <h3><Icon type="setting" />按钮类型</h3>
	      <div className="mancatain_div"> 
	        <div>按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。
	通过设置 type 为 primary ghost dashed 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 type 值则为次按钮。不同的样式可以用来区别其重要程度。
	主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。</div>
			<div>
			    <Button type="primary">Primary</Button>
			    <Button>Default</Button>
			    <Button type="ghost">Ghost</Button>
			    <Button type="dashed">Dashed</Button>
		    </div>
		  </div>
	      <h3><Icon type="setting" />按钮尺寸</h3>
	      <div  className="mancatain_div">
				<div>按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</div>
				<div>
			  <Button type="primary" size="large">Large</Button>
			  <Button type="primary">Default</Button>
			  <Button type="primary" size="small">Small</Button>
			  </div>
		  </div>
		  <h3><Icon type="setting" />加载中状态</h3>
	      <div>
				<div>添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</div>
				<div>
			       <Button type="primary" loading>
			          Loading
			        </Button>
			        <Button type="primary" size="small" loading>
			          Loading
			        </Button>
		        </div>
		  </div>
		  <h3><Icon type="setting" />图标按钮</h3>
		  <div  className="mancatain_div">
				<div>当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。</div>
				<div>
				    <Button type="primary" shape="circle" icon="search" />
				    <Button type="primary" icon="search">Search</Button>
				    <br />
				    <Button type="ghost" shape="circle-outline" icon="search" />
				    <Button type="ghost" icon="search">Search</Button>
			    </div>
		  </div>
		  <h3><Icon type="setting" />不可用状态</h3>
		  <div  className="mancatain_div">
				<div>添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</div>
				<div>
				    <Button type="primary">Primary</Button>
				    <Button type="primary" disabled>Primary</Button>
				    <br />
				    <Button>Default</Button>
				    <Button disabled>Default</Button>
				    <br />
				    <Button type="ghost">Ghost</Button>
				    <Button type="ghost" disabled>Ghost</Button>
				    <br />
				    <Button type="dashed">Dashed</Button>
				    <Button type="dashed" disabled>Dashed</Button>
			    </div>
		  </div>
			<TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
			<TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
				onChange={this.onChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
      </div>
    );
  }
};

export default Page4;