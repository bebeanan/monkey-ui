import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
import LeftPage from './LeftPage.js';
var Row=MonkeyUi.Row;
var Col=MonkeyUi.Col;
const Page = React.createClass({
  render() {
    return (
      <div>
        <Row>
        <Col span={12}>
          <LeftPage />
        </Col>
        <Col span={12}>.ant-col-12</Col>
        </Row>
      </div>
    );
  },
});

export default Page;