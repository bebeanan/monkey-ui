import React, { Component } from 'react'

const noop = () =>{}

class Option extends Component {
    render () {
        let {eq ,value} =this.props;
        return (
                <li key={eq} value={value}>{this.props.children}</li>
        )
    }
}

export default Option;