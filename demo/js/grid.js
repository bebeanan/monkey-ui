import React, { Component } from 'react'
import MonkeyUi from '../../lib/monkeyui.js';
const {Row,Col,DatePicker} = MonkeyUi;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class Grid extends Component {
    render() {
        return (
            <div>
                <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
                </Row>
                <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                </Row>
                <Row>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                </Row>
                <div>
                    <DatePicker onChange={onChange} />
                    <br />
                    <MonthPicker onChange={onChange} placeholder="Select month" />
                    <br />
                    <RangePicker onChange={onChange} />
                    <br />
                    <WeekPicker onChange={onChange} placeholder="Select week" />
                </div>
            </div>
        )
    }
}
