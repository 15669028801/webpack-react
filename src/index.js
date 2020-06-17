import _ from 'lodash';
import { cube } from './math.js';
// import './styles.css';
// import Icon from './icon.png';
// import Data from './data.xml';
import printMe from './print';
import { file, parse } from './globals.js'
// import "./another-module";

if (process.env.NODE_ENV !== 'production') {
  console.log('当前为开发环境！');
  
  console.log(66666666);
}

console.log("默认请求基础地址", process.env.BASE_URL);
console.log(process);

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['1112226664446', '5 cubed is equal to ' + cube(5)].join("\n\n");
  element.classList.add('hello');

  console.log(this);

  // 引入全局变量
  console.log('全局引入', parse);

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = () => {
    console.log("开始异步加载代码-------------");
    import("lodash").then(res => {
      console.log("动态引入lodash");
      console.log(res);
    })
    console.log("异步代码加载完成-----------------");
  };

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  element.appendChild(btn);
  // console.log(Data);
  printMe();
  return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('接受更新的模块');
//     printMe();
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   });
// }

function test(params) {
  // this.name = "a";
  console.log(`this指向性改变`, this)
  // console.log(this);
  // console.log(this.name)
}

const a = test()

document.body.appendChild(component());
