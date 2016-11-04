/**
 * Created by yyx on 2016/11/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
var Button=MonkeyUi.Button;
var Icon=MonkeyUi.Icon;
var ButtonGroup=Button.ButtonGroup;
var Tree=MonkeyUi.Tree;
var TreeNode=Tree.TreeNode;
var Modal=MonkeyUi.Modal;
var AutoComplete=MonkeyUi.AutoComplete;


const Option = AutoComplete.Option;

const Complete = React.createClass({
    getInitialState() {
    return {
        result: [],
    };
},
handleChange(value) {
    let result;
    if (!value || value.indexOf('@') >= 0) {
        result = [];
    } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
},
render() {
    const { result } = this.state;
    const children = result.map((email) => {
        return <Option key={email}>{email}</Option>;
    });
    return (
        <AutoComplete
            style={{ width: 200 }}
            onChange={this.handleChange}
        >
            {children}
        </AutoComplete>
        );
    },
});


const Complete_2 = React.createClass({
    getInitialState() {
    return {
        result: [],
        data:"",
        data2:[],
        value:""
    };
},
    componentWillMount(){
        let dataList={
            G6PD:[{bt:[{danwei:[1,2]}]},{hlb:[{danwei:[2,3]}]}],
            HAD:[{xhs:[{danwei:[3,4]}]},{bl:[{danwei:[4,5]}]}]
        }
    var list=JSON.stringify([{"PRO":"浙江省","HOS":[{"hosId":"12462","hosName":"杭州省妇保（市级实施单位）"},{"hosId":"12464","hosName":"杭州省妇保（省级管理中心）"}]},{"PRO":"安徽省","HOS":[{"hosId":"12572","hosName":"安徽省宣城市妇幼保健计划生育服务中心（实施单位）"},{"hosId":"12558","hosName":"安徽省妇幼保健所（省级管理中心）"},{"hosId":"12569","hosName":"合肥市妇幼保健所（实施单位）"},{"hosId":"12559","hosName":"安庆市妇幼保健所（市级实施单位）"},{"hosId":"12568","hosName":"芜湖市妇幼保健院（实施单位）"},{"hosId":"12561","hosName":"六安市妇幼保健计划生育服务中心（实施单位）"},{"hosId":"12565","hosName":"阜阳市妇幼保健计划生育服务中心（实施单位）"},{"hosId":"12564","hosName":"马鞍山市妇幼保健院（实施单位）"}]},{"PRO":"河南省","HOS":[{"hosId":"12614","hosName":"河南省人民医院（管理单位）"}]},{"PRO":"甘肃省","HOS":[{"hosId":"12576","hosName":"甘肃省妇幼保健院（管理单位）"},{"hosId":"12575","hosName":"兰州大学第一医院（实施单位）"},{"hosId":"12578","hosName":"天水市妇幼保健院（实施单位）"},{"hosId":"12577","hosName":"平凉市妇幼保健院（实施单位）"},{"hosId":"12579","hosName":"张掖市妇幼保健院（实施单位）"}]},{"PRO":"广西省","HOS":[{"hosId":"12560","hosName":"广西妇幼保健院（管理单位）"},{"hosId":"12613","hosName":"南宁市妇幼保健院（实施单位）"},{"hosId":"12570","hosName":"来宾市妇幼保健院（实施单位）"},{"hosId":"12573","hosName":"贺州市妇幼保健院（实施单位）"},{"hosId":"12574","hosName":"百色市妇幼保健院（实施单位）"},{"hosId":"12571","hosName":"河池市妇幼保健院（实施单位）"}]},{"PRO":"贵州省","HOS":[{"hosId":"12549","hosName":"贵阳市妇幼保健院（市级实施单位）"},{"hosId":"12620","hosName":"安顺市妇幼保健院（实施单位）"},{"hosId":"12621","hosName":"贵州省新生儿疾病筛查中心（管理单位）"},{"hosId":"12622","hosName":"毕节市妇幼中心（实施单位）"},{"hosId":"12623","hosName":"六盘水市妇幼保健院（实施单位）"}]},{"PRO":"河北省","HOS":[{"hosId":"12615","hosName":"河北省妇幼保健中心（管理单位）"},{"hosId":"12618","hosName":"张家口市妇幼保健院（实施单位）"},{"hosId":"12616","hosName":"秦皇岛市妇幼保健院（实施单位）"},{"hosId":"12617","hosName":"保定市妇幼保健院（实施单位）"},{"hosId":"12619","hosName":"承德市妇幼保健院（实施单位）"}]},{"PRO":"湖南省","HOS":[{"hosId":"12608","hosName":"湖南省娄底市妇幼保健院（实施单位）"},{"hosId":"12609","hosName":"怀化市妇幼保健院（实施单位）"},{"hosId":"12610","hosName":"岳阳市妇幼保健院（实施单位）"},{"hosId":"12606","hosName":"长沙市妇幼保健院（实施单位）"},{"hosId":"12611","hosName":"衡阳市妇幼保健院（实施单位）"},{"hosId":"12607","hosName":"湖南省妇幼保健院（管理单位）"},{"hosId":"12679","hosName":"湘潭市妇幼保健院（实施单位）"}]},{"PRO":"山西省","HOS":[{"hosId":"12686","hosName":"山西省卫生计生委（管理单位）"},{"hosId":"12687","hosName":"山西省人口计生委科学研究所（实施单位）"},{"hosId":"12597","hosName":"大同市妇幼保健所（实施单位）"},{"hosId":"12598","hosName":"长治市妇幼保健院（实施单位）"},{"hosId":"12596","hosName":"山西省妇幼保健院（管理单位）"},{"hosId":"12599","hosName":"运城市妇幼保健院（实施单位）"}]},{"PRO":"陕西省","HOS":[{"hosId":"12586","hosName":"汉中市妇幼保健所（实施单位）"},{"hosId":"12681","hosName":"西北妇女儿童医院（管理单位）"},{"hosId":"12587","hosName":"西北妇女儿童医院（实施单位）"},{"hosId":"12589","hosName":"西安市妇幼保健院（实施单位）"},{"hosId":"12588","hosName":"延安市市妇幼保健院（实施单位）"},{"hosId":"12591","hosName":"咸阳市妇幼保健院（实施单位）"},{"hosId":"12592","hosName":"渭南市妇幼保健院（实施单位）"},{"hosId":"12593","hosName":"商洛市妇幼保健院（实施单位）"},{"hosId":"12594","hosName":"宝鸡市妇幼保健院（实施单位）"},{"hosId":"12595","hosName":"铜川市妇幼保健院（实施单位）"}]},{"PRO":"四川省","HOS":[{"hosId":"12580","hosName":"四川省妇幼保健院（管理单位）"},{"hosId":"12582","hosName":"南充市妇幼保健计划生育服务中心（实施单位）"},{"hosId":"12581","hosName":"自贡市妇幼保健院（实施单位）"},{"hosId":"12583","hosName":"绵阳妇幼保健院（实施单位）"},{"hosId":"12584","hosName":"宜宾市妇幼保健计划生育服务中心（实施单位）"},{"hosId":"12677","hosName":"乐山市妇幼保健院（实施单位）"}]},{"PRO":"宁夏省","HOS":[{"hosId":"12682","hosName":"宁夏自治区妇幼保健院（管理单位）"}]},{"PRO":"山东省","HOS":[{"hosId":"12680","hosName":"山东省妇产医院（管理单位）"},{"hosId":"12601","hosName":"德州市妇女儿童医院院（实施单位）"},{"hosId":"12602","hosName":"菏泽市妇幼保健院（实施单位）"},{"hosId":"12604","hosName":"淄博市妇幼保健院（实施单位）"},{"hosId":"12605","hosName":"临沂市妇女儿童医院（实施单位）"},{"hosId":"12667","hosName":"枣庄市妇幼保健院（实施单位）"},{"hosId":"12666","hosName":"济南市妇幼保健院（实施单位）"},{"hosId":"12693","hosName":"济南市妇幼保健院（省级管理中心）"}]},{"PRO":"福建省","HOS":[{"hosId":"12663","hosName":"厦门市妇幼保健院（实施单位）"},{"hosId":"12665","hosName":"泉州市妇幼保健院·儿童医院（实施单位）"},{"hosId":"12692","hosName":"三明市妇幼保健院（省级管理中心）"},{"hosId":"12683","hosName":"福建三明市妇幼保健院（实施单位）"},{"hosId":"12661","hosName":"福建省妇幼保健院（管理单位）"},{"hosId":"12662","hosName":"福州市儿童医院（实施单位）"},{"hosId":"12664","hosName":"漳州市妇幼保健院（实施单位）"}]},{"PRO":"湖北省","HOS":[{"hosId":"12674","hosName":"恩施市妇幼保健院（实施单位）"},{"hosId":"12669","hosName":"恩施州妇幼保健计划生育服务中心（实施单位）"},{"hosId":"12668","hosName":"宜昌市妇幼保健院（实施单位）"},{"hosId":"12672","hosName":"黄冈市妇幼保健院（实施单位）"},{"hosId":"12673","hosName":"咸宁市妇幼保健院（实施单位）"},{"hosId":"12671","hosName":"湖北省妇幼保健院（管理单位）"},{"hosId":"12670","hosName":"十堰市妇幼保健院（实施单位）"},{"hosId":"12675","hosName":"阳新县妇幼保健院（实施单位）"}]}]);
    //this.setState({data:dataList});
    list=JSON.parse(list);
    this.setState({data:list});
    },
    handleChange(value) {
    const datalist=this.state.data;
    var data_2=[];
    for(let i=0;i<datalist.length;i++){
        //找到选中项,解析该项下面的项
        if(datalist[i].PRO==value){
            var arr=datalist[i].HOS;
            for(let j=0;j<arr.length;j++){
                data_2.push(arr[j].hosName);
            }
        }
    }
    this.setState({data2:data_2,value:""});
    },
    handleSelect(value,option){
        console.log('select1'+value);
        const datalist=this.state.data;
        var data_2=[];
        for(let i=0;i<datalist.length;i++){
            //找到选中项,解析该项下面的项
            if(datalist[i].PRO==value){
                var arr=datalist[i].HOS;
                for(let j=0;j<arr.length;j++){
                    data_2.push(arr[j].hosName);
                }
            }
        }
    this.setState({data2:data_2});
    },
render() {
    const dataSource1=[];
    const dataSource2=this.state.data2;
    const data=this.state.data;
    const { result } = this.state;
    //const children = result.map((email) => {
    //    return <Option key={email}>{email}</Option>;
    //});
    for(let i=0;i<data.length;i++){
        dataSource1.push(data[i].PRO);
    }
    return (
            <div>
                <AutoComplete
                    style={{ width: 200 }}
                    dataSource={dataSource1}
                    onChange={this.handleChange}
                    />

                <AutoComplete
                    style={{ width: 200 }}
                    value={this.state.value}
                    dataSource={dataSource2}
                    />
            </div>
);
},
});


class Page5 extends React.Component{
    render() {
        const dataSource = ['12345', '23456', '34567'];

        return (
            <div className="mancatain">
        <h3>AutoComplete自动填充</h3>
        <h3><Icon type="setting" />基本用法</h3>
            <Complete/>
        <h3><Icon type="setting" />DataSource填充数据源</h3>
        <AutoComplete
            style={{ width: 200 }}
            dataSource={dataSource} />
                <h3><Icon type="setting" />配合实现两级联动或三级联动菜单</h3>
         <Complete_2/>
        </div>
    );
    }
};

export default Page5;