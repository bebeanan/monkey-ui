# monkey-ui
基于react的前端框架，参考antd;
开发适合自己产品的web组件；

[![travis][travis-image]][travis-url]
[![dep][dep-image]][dep-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/then/monkeyui.svg?style=flat
[travis-url]: https://travis-ci.org/then/monkeyui
[dep-image]: https://img.shields.io/david/then/monkeyui.svg?style=flat
[dep-url]: https://david-dm.org/then/monkeyui
[npm-image]: https://img.shields.io/npm/v/monkeyui.svg?style=flat
[npm-url]: https://npmjs.org/package/monkeyui
[downloads-image]: https://img.shields.io/npm/dm/monkeyui.svg?style=flat
[downloads-url]: https://npmjs.org/package/monkeyui

##install:
<code>npm install monkeyui</code>

##build:
<code> npm install </code>

<code> gulp build</code>	

##dev run:
<code> gulp </code>

<code>	http://localhost:3000</code>


## Usage monkeyui 

```javascript
const MonkeyUi from 'monkeyui';
const {Modal,Button,Timeline} = MonkeyUi;

class Time extends React.Component{
  render() {
    return (<div>
                <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
            </div>
        );
    }
    };
```
___________________________________________

##BatchUpload  component usage
图片上传组件接口参数：

	accept      string    默认为空    接受选择文件类型
	multiple    bool      默认true	  是否支持多选
	fileList    array     默认[]      预览图片列表
	uploadUrl   string    not null    图片上传路径
	onChange    func      默认noop    开始上传回调函数
	onSuccess   func      默认noop    图片上传成功回调
	preivewPic  func	  默认noop    预览图片回调
	removePic   func      默认noop    删除图片回调
```javascript
const MonkeyUi from 'monkeyui';
const {BatchUpload} = MonkeyUi;

<BatchUpload
    {...upload_props}
    onChange={(file)=>{}}
    onSuccess={(response, file)=>{}}
    onPreview={(file)=>{}}
    fileList={fileList}
    removePic={(file)=>{}}
    className="upload-list-inline"/>
```
### to run the examples 

 1. Clone this repo
 2. Run   <code>npm install</code>
 3. Start the development server with   <code>gulp</code>
 4. Open your browser to    <code>http://localhost:3000</code>