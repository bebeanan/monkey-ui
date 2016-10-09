import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page.js';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
} from 'react-router';
ReactDOM.render(
  <div>
    <header id="header">头部</header>
    <div><Page /></div>
    <footer id="footer">尾部</footer>
  </div>
,
 document.getElementById('root'));