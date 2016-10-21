import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
var Button=MonkeyUi.Button;
var Icon=MonkeyUi.Icon;
var Timeline=MonkeyUi.Timeline;
class Time extends React.Component{
  render() {
    return (<div>
    	<h3><Icon type="setting" />时间线条基本语法</h3>
	     <Timeline>
		    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
		    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
		    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
		    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
		 </Timeline>
		 <p>--------------------------------------------</p>
		 <h3><Icon type="setting" />设置不同的icon与其颜色</h3>
		 <Timeline>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green" dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
  </Timeline>
		 </div>
    );
  }
};

export default Time;