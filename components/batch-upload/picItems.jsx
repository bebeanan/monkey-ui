import React from	'react';

class PicList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			// fileList:this.props.fileList?this.props.fileList:[]
		}
	}
	componentWillReceiveProps(nextProps){
		// this.setState({fileList:nextProps.fileList}); 
	}
	setPicList(fileList){
		let length=fileList.length;
		if(length==0)
			return null;
		let arr=fileList.map((item)=>{
			return <div className="picWarp" key={item.uid}>
						<div className="picmi">
							<span className="del" onClick={this.removePic.bind(this,item)}>×</span>
							<img src={item.thumbUrl} 
								 className="picThumbUrl"
								 onClick={this.preivewPic.bind(this,fileList)}/>
							<a href={item.url}></a>
						</div>
			</div>
		})
		return arr;
	}
	removePic(file){
		this.props.removePic(file);
	}
	preivewPic(fileList){
		this.props.preivewPic(fileList);
	}
	render(){
		let fileList=this.props.fileList;
		return <div className="showPicContainer">{this.setPicList(fileList)}</div>
	}
}

module.exports=PicList;