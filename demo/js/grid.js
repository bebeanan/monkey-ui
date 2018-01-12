import React, { Component } from 'react'
import MonkeyUi from '../../lib/monkeyui.js';
const {Row,Col} = MonkeyUi;

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
            </div>
        )
    }
}
