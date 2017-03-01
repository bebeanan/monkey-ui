import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from '../../lib/monkeyui.js';
var Button=MonkeyUi.Button;
var Icon=MonkeyUi.Icon;
var Modal=MonkeyUi.Modal;
const confirm = Modal.confirm;
const LocalizedModal = React.createClass({
  getInitialState() {
    return { visible: false,
    isVisible:false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    this.setState({
      visible: false,
    });
  },
  handleCancel() {
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Show Modal</Button>
        <Modal title="Modal" visible={this.state.visible}
          isVisible={this.state.isVisible}
          transitionName="move-right"
          onOk={this.handleOk} onCancel={this.handleCancel}
          okText="OK" cancelText="Cancel"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    );
  },
});

function confirm2() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: 'OK',
    cancelText: 'Cancel',
  });
}
function showConfirm() {
  confirm({
    title: 'Want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}
const Page7 = React.createClass({
  getInitialState() {
    return { 
      visible: false ,
      loading: false,
      visible: false,
      ModalText: 'Content of the modal dialog',
    };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('Clicked OK');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  handleOk2() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  },
  handleCancel2() {
    this.setState({ visible: false });
  },
  showModal3() {
    this.setState({
      visible: true,
    });
  },
  handleOk3() {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  },
  handleCancel3() {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div className="mancatain">
	      <h3><Icon type="setting" />基本</h3>
	      <div  className="mancatain_div">
			  <div>一个简单的对话框</div>
			  <div>
          <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
          <Modal title="Basic Modal" visible={this.state.visible}
            onOk={this.handleOk} onCancel={this.handleCancel}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
			  </div>
		  </div>
          <h3><Icon type="setting" />自定义页脚</h3>
          <div  className="mancatain_div">
          <div>更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。</div>
          <div>
        <Button type="primary" onClick={this.showModal}>
          Open modal dialog
        </Button>
        <Modal
          visible={this.state.visible}
          title="Title"
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel2}>Return</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk2}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
          </div>
        </div>
          <h3><Icon type="setting" />确认对话框</h3>
          <div  className="mancatain_div">
          <div>使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭</div>
          <div>
            <Button onClick={showConfirm}>
              Confirmation modal dialog
            </Button>
          </div>
          </div>
          <h3><Icon type="setting" />自定义按钮文字</h3>
          <div  className="mancatain_div">
            <div>设置 okText 与 cancelText 以自定义按钮文字。</div>
            <div>
              <LocalizedModal />
              <br />
              <Button onClick={confirm2}>confirm</Button>
            </div>          
          </div>
          <h3><Icon type="setting" />异步关闭</h3>
          <div  className="mancatain_div">
            <div>点击确定后异步关闭对话框，例如提交表单。</div>
            <div>
              <Button type="primary" onClick={this.showModal3}>Open a modal dialog</Button>
              <Modal title="Title of the modal dialog"
                visible={this.state.visible3}
                onOk={this.handleOk3}
                confirmLoading={this.state.confirmLoading3}
                onCancel={this.handleCancel3}
              >
                <p>{this.state.ModalText3}</p>
              </Modal>
            </div>          
          </div>
          <h3><Icon type="setting" />信息提示</h3>
          <div  className="mancatain_div">
            <div>各种类型的信息提示，只提供一个按钮用于关闭。</div>
            <div>
              <Button onClick={info}>Info</Button>
              <Button onClick={success}>Success</Button>
              <Button onClick={error}>Error</Button>
              <Button onClick={warning}>Warning</Button>
            </div>          
          </div>
          <h3><Icon type="setting" />手动移除</h3>
          <div  className="mancatain_div">
            <div>手动关闭modal。</div>
            <div>
              <Button onClick={success2}>Success</Button>
            </div>          
          </div>  
          <div>
<br />
<br />
<br />
<div>参数  说明  类型  默认值</div>
<div>visible 对话框是否可见 Boolean 无</div>
<div>confirmLoading  确定按钮 loading  Boolean 无</div>
<div>title 标题  React.Element 无</div>
<div>closable  是否显示右上角的关闭按钮  Boolean true</div>
<div>onOk  点击确定回调  function  无</div>
<div>onCancel  点击遮罩层或右上角叉或取消按钮的回调  function(e) 无</div>
<div>width 宽度  String or Number  520</div>
<div>footer  底部内容  React.Element 确定取消按钮</div>
<div>okText  确认按钮文字  String  确定</div>
<div>cancelText  取消按钮文字  String  取消</div>
<div>maskClosable  点击蒙层是否允许关闭  Boolean true</div>
<div>style 可用于设置浮层的样式，调整浮层位置等  Object  -</div>
<div>wrapClassName 对话框外层容器的类名  String  -</div>

<div>Modal.xxx()#</div>

<div>包括：</div>
<div>Modal.info</div>
<div>Modal.success</div>
<div>Modal.error</div>
<div>Modal.warning</div>
<div>Modal.confirm</div>
<div>以上均为一个函数，参数为 object，具体属性如下：</div>
<div>参数  说明  类型  默认值</div>
<div>title 标题  React.Element or String 无</div>
<div>content 内容  React.Element or String 无</div>
<div>onOk  点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 function  无</div>
<div>width 宽度  String or Number  416</div>
<div>iconType  图标 Icon 类型  String  question-circle</div>
<div>okText  确认按钮文字  String  确定</div>
<div>cancelText  取消按钮文字  String  取消</div>
          </div>        
      </div>
    );
  }
});
function success2() {
  const modal = Modal.success({
    title: 'This is a notification message',
    content: 'This modal will be destroyed after 1 second',
  });
  setTimeout(() => modal.destroy(), 1000);
}
function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}
export default Page7;