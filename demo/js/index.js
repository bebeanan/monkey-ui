import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page.js';
import MonkeyUi from '../../lib/monkeyui.js';
import LeftPage from './LeftPage.js';
var Row=MonkeyUi.Row;
var Col=MonkeyUi.Col;
var Radio=MonkeyUi.Radio;
var Table=MonkeyUi.Table
var Input = MonkeyUi.Input
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
    <header id="header">头部</header>
    <div>
        <Row>
        <Col xs={24} sm={24} md={6} lg={4} >
          <LeftPage />
        </Col>
        <Col xs={24} sm={24} md={18} lg={20}>.ant-col-12</Col>
        </Row>
    </div>
    <footer id="footer">尾部2</footer>
  </div> 
    );
  },
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path=":page" component={Page} />
    </Route>
  </Router>
,
 document.getElementById('root'));