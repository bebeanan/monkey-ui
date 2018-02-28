/*
    previewpic 预览图片
    removepic 删除图片
    fileList 图片列表

*/

import React from 'react';
import Loading from '../loading/index';
import PicList from './picItems';
import Icon from '../icon/index';
import Button from '../button/index';

const getFileList=()=>{
  return {
            type:'标题',
            url:'',
            uid:'',
            thumbUrl:''
          }
}
const noop=()=>{}

class UploadPic extends React.Component {

  constructor(props){
    super(props);
    this.state={
        length:0,
        index:0,
        loading:'hide',
        loadingText:''
    }
  }
  componentWillReceiveProps(nextProps){
    // if('fileList' in nextProps){
    //     this.setState({fileList:nextProps.fileList});
    // }
  }
  setFileObj(data,index){
    let obj={};
    obj.file_id=data.file_id;
    obj.status='done';
    obj.fileLength=this.state.length;
    obj.index=index?index:undefined;
    return obj;
  }
  _change(e){
    let files=e.target.files;
    let length=files.length;
    var index=0;
    this.props.onChange?this.props.onChange(files):noop();
    this.setState({length:length});
    //loading组件初始化
    this.setLoadingComponent(1,length,'init');
    //追加文件数据    
    for(let i=0;i<length;i++){      
         
         this.upload_ajax(files[i]).then(
            (data)=>{
                        this.props.onSuccess?this.props.onSuccess(data,this.setFileObj(data.data,++index)):noop();
                        this.setLoadingComponent(index,length);
                    }
        ).catch((error)=>{alert(error);this.setState({loading:'hide'})});     
    }
    //清空input value
    e.target.value="";
    
  }
  setLoadingComponent(index,length,type){
    let str='';
    let stateObj=this.state;
    stateObj.loading='show';
    stateObj.loadingText='上传中'+index+'/'+length+'...';
    this.setState(stateObj);
    
    if((index==length)&&type!='init'){
        setTimeout(()=>{
            stateObj.loading='hide';
            this.setState(stateObj);
        },500)
    }

  }
  onChange(e){
    let checkd=e.target.checked;
    let MyStorage=[sessionStorage,localStorage];
    let index=this.props.MyStorage?this.props.MyStorage:0;
    let _MyStorage=MyStorage[index];
  }
  submit(){
    return true;
  }
  cancel(){
    return false;
  }
  info(){
      Modal.confirm({
        title: '注意！',
        content:  <Checkbox onChange={(e)=>this.onChange(e)}>以后不再提醒</Checkbox>,
        okText:"确定",
        cancelText:"取消",
        onOk:()=>this.submit(),
        onCancel:()=>this.cancel()
      });
  }
  upload_ajax(file){
    /*
        需要用原生xhr发送请求，不依赖于jquery
    */
    let formData = new FormData();
    formData.append("file", file);
    return new Promise((resolve,reject)=>{
        let  xhr = new XMLHttpRequest();//第一步
        xhr.open('POST', this.props.uploadUrl); //第二步骤    
        //发送请求    
        xhr.send(formData);  //第三步骤    
        //ajax返回    
        xhr.onreadystatechange = function(){ //第四步    
    　　　　if ( xhr.readyState == 4 && xhr.status == 200 ) {    
    　　　　　　let data=xhr.responseText;    
                data=JSON.parse(data);
                data.result=='success'?resolve(data):reject(data.reason);
    　　　　}    
    　　};    
        //设置超时时间    
        xhr.timeout = 20000;    
        xhr.ontimeout = function(event){    
    // 　　　　alert('请求超时！');    
              reject('上传超时！');
    　　} 
    })
    
  }
  upClick(e){
    e.preventDefault();
    let inputFile=this.refs.inputFile;
    inputFile.click();
  }
  render(){
    //是否多选
    let multiple=this.props.multiple?this.props.multiple:false;
    //接受图片类型
    let accept=this.props.accept?this.props.accept:"";

    let loadingProps={
        loading:this.state.loading,
        text:this.state.loadingText
    }

    let inputFileProps={
        multiple:multiple,
        accept:accept
    }

    let picListProps={
        fileList:this.props.fileList,
        preivewPic:this.props.preivewPic?this.props.preivewPic:noop,
        removePic:this.props.removePic?this.props.removePic:noop
    }
    return <div>
                <Loading {...loadingProps}/>

                <Button type="default" onClick={(e)=>this.upClick(e)}  icon="upload">上传</Button>
                <input type="file"
                        {...inputFileProps} 
                        ref="inputFile" 
                        onChange={(e)=>this._change(e)} 
                        style={{display:'none'}}/>
                <PicList {...picListProps}/>
    </div>
  }
}

module.exports = UploadPic;