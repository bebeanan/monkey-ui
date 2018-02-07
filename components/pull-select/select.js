import React, { Component } from 'react'

import {Motion, spring} from 'react-motion';

const classNames = require('classnames');

const noop = () => {}


class PullSelect extends Component {
    constructor (props, context) {
        super(props, context)
        this.state={
            pullTop:true,
            pullType:true,
            value:'',
            text:'',
            height:this.props.height?this.props.height:38
        }
    }
    componentWillReceiveProps(nextProps){

    }
    animate = () => {
        let length = this.props.children.length;
        const stander = this.props.height ? this.props.height : 38;
        let top = stander * length ;
        this.setState((state) => ({ height: state.height === stander ? top : stander,pullType:!state.pullType }))
    }
    click(event){
        event = event || window.event;
        let {onChange,noReturn,onSelect} = this.props;
        let {nodeName,value,innerText}=event.target;
        nodeName = nodeName.toLowerCase();
        onChange = onChange ? onChange : noop;
        onSelect = onSelect ? onSelect : noop;
        if(nodeName === 'div'){
            this.animate();
        }else if(nodeName === 'li'){
            /**
             * 是否回填默认值
             */
            if(noReturn){
                onSelect();
                this.animate();
                return;
            }
            //回填 && 两次选中不一样
            if(value!=this.state.value){
                onChange(value);
                onSelect(value);
                this.animate();
                this.setState({value:value,text:innerText});
            }else{
                onSelect(value);
                this.animate();
                return;
            }
                
        }
    }
    render () {
        let {pullTop,pullType, text} = this.state;
        let {value,defaultValue,defautText,conBoderColor,conTextColor,conHeight,
            conIconColor,dropSpeed,top ,onChange,onSelect,noReturn,disabled,
        pullTextColor,pullBorderColor,iconColor,fontSize,width} = this.props;
        
        width = width ? width : '250';
        /**
         * 默认文案
         */
        value = defautText ? defautText : text;

        let warpClass = classNames("special-warp",
            { 
                "arrow-up": pullType ,
                "arrow-down":!pullType
             }
        )
        return (
            <div className={warpClass} 
                 onClick={(e)=>this.click(e)}>
                <Motion style={{ height: spring(this.state.height) }} >
                {
                    ({ height }) => <div style={Object.assign({}, { height ,width} )}>
                        {this.props.children}
                  </div>
                }
                </Motion>
            </div>
        )
    }
}

export default PullSelect ;