import React, {Component, PropTypes} from 'react';


// 接口参数设计：
// 参数属性：areaTree（数据源）
// value
// text
// 函数属性：close（关闭模态框）
// onChange(选择地区后回调函数，返回value，text)


const noop=()=>{}

const getChild=(area,idArr)=>{
	let l=idArr.length;
	var j=0;
	var children=area;
	if(!idArr||l==0)
		return area;
	while(j<l){
		for(let i=0;i<children.length;i++){
			if(children[i].value==idArr[j]){
				children = children[i].children;
				j++;
				break;
			}
		}	
	}
	
	return children;
}

export default class AreaCascader extends Component {  
    constructor(props) {
        super(props); 
        let value;let text;
        if('value' in props)
            value=props.value;
        else if('defaultValue' in props)
            value=props.defaultValue;
        else
            value=[];

        if('text' in props)
            text=props.text;
        else
            text=[];

        if('onChange' in props)
            this.onChange=props.onChange;
        else
            this.onChange=noop;
        this.state={
        	selectedList:value,
        	showList:this.props.areaTree,
        	showText:text,
        	areaTree:this.props.areaTree,
            show:'none'
        }
    }
    componentWillReceiveProps(nextProps){
    	this.setState({areaTree:nextProps.areaTree,showList:nextProps.areaTree,selectedList:nextProps.value,showText:nextProps.text});
    }
    getValue(e){
        e.stopPropagation();
    	let value=e.target.value;
    	let text=e.target.innerText;
    	this.state.showText.push(text);
    	this.state.selectedList.push(value); 
    	let children=getChild(this.state.areaTree,this.state.selectedList);
    	this.setState({selectedList:this.state.selectedList,showText:this.state.showText,showList:children});
        if(children.length==0){
    		this.setState({show:'none'});
            // this.close();//关闭模态框
            this.onChange(this.state.selectedList,this.state.showText);//回调函数
        }
    }
    childToList=(arr)=>{
		if(!arr || arr.length==0)
			return null;
		return arr.map((item)=>{
			return <li key={item.value} value={item.value} onClick={(e)=>this.getValue(e)}>{item.label}</li>
		})
	}
	///////////////
	clickTitle=(e)=>{
		let value=e.target.id;
		let text=e.target.innerText;
		var	selectedList=this.state.selectedList;
		var showText=this.state.showText;
		var index=0;
		var index_t=0;
		// let index=this.state.selectedList.indexOf(value);
		for(let i=0;i<selectedList.length;i++){
			if(selectedList[i]==value){
				index=i;
				break;
			}
		}
		for(let i=0;i<showText.length;i++){
			if(showText[i]==text){
				index_t=i;
				break;
			}
		}
		selectedList=selectedList.slice(0,index);
		showText=showText.slice(0,index_t);
		let children=getChild(this.state.areaTree,selectedList);
		this.setState({showList:children,selectedList:selectedList,showText:showText});
	}
	getSelectTitle=(arr)=>{
		var list=[];
		if(!arr || arr.length==0)
			return null;
		for(let i=0;i<arr.length;i++){
			list.push(<span key={arr[i]} className="title_li" id={this.state.selectedList[i]} onClick={(e)=>this.clickTitle(e)}>{arr[i]}</span>);
		}
		return list;
	}
    onChange=(value,text)=>{
        console.log(1)
    }
	close=(event)=>{
        event.stopPropagation();
        this.state.show='none';
        this.setState(this.state);
	}
    open=()=>{
        this.setState({show:'block'});
    }
    render(){
        let showText=this.state.showText;
        let text=this.state.showText.join('/');
        if(showText.length==0)
            text=this.props.placeholder?this.props.placeholder:"请点击选择地区";
        return  (
                <div onClick={()=>this.open()}>
                    <div className="excluedText">{text}</div>
                	
                    <div style={{display:this.state.show=='block'?'block':'none'}}>
                    	<div className="zhe"></div>
                    	<div  className="main">
                    		<div className="title">户籍所在地<span className="close" onClick={(event)=>this.close(event)}>×</span></div>
                    		<div className="title_border">
                    				{this.getSelectTitle(this.state.showText)}
                    		</div>
                    		<div className="c_body">
                    			<ul>
                    				{this.childToList(this.state.showList)}
                    			</ul>
                    		</div>
                    	</div>
                	</div>
                </div>
            );
    }
}