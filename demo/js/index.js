import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
import LeftPage from './LeftPage.js';
import Headdiv from './head.js';
import Page from './Page.js';
import Button from './button.js';
import Icon from './icon.js';
import Alert from './alert.js';
import Checkbox from './checkbox.js';
import Modal from './modal.js';
import Timeline from './timeline.js';
import Carousel from './carousel.js';
import Tree from './tree.js';
import Complete from './complete.js';
import Grid from './grid';
// import TreeSelect from './treeselect.js';
import Upload from './upload.js';
var Row=MonkeyUi.Row;
var Col=MonkeyUi.Col;
var Radio=MonkeyUi.Radio;
var Table=MonkeyUi.Table;
var Input = MonkeyUi.Input;
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
} from 'react-router';


const App = React.createClass({
  render() {
    return (
        <div>
          <header id="header">
            <Headdiv />
          </header>
          <div>
              <Row>
              <Col xs={24} sm={24} md={6} lg={4} >
                <LeftPage />
              </Col>
              <Col xs={24} sm={24} md={18} lg={20}>{this.props.children}</Col>
              </Row>
          </div>
          <footer id="footer"></footer>
        </div> 
    );
  },
});
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Page}/>
      <Route path="/page" component={Page} />
      <Route path="/button" component={Button} />
      <Route path="/icon" component={Icon} />
      <Route path="/alert" component={Alert} />
      <Route path="/checkbox" component={Checkbox} />
      <Route path="/modal" component={Modal} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/tree" component={Tree}/>
      <Route path="/complete" component={Complete}/>
      <Route path="/upload" component={Upload}/>
      <Route path="/grid" component={Grid}/>
    </Route>
  </Router>
,
 document.getElementById('root'));