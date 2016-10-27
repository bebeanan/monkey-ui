import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
var Carousel=MonkeyUi.Carousel;

class Page11 extends React.Component{
  render() {
    return (
      <div className="mancatain">
	  <Carousel autoplay>
	    <div><h3>1</h3></div>
	    <div><h3>2</h3></div>
	    <div><h3>3</h3></div>
	    <div><h3>4</h3></div>
	  </Carousel>
      </div>
    );
  }
};

export default Page11;