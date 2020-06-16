// import _ from 'lodash';
import { cube } from './math.js';
// import './styles.css';
// import Icon from './icon.png';
// import Data from './data.xml';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['1112226664446', '5 cubed is equal to ' + cube(5)].join("\n\n");
  element.classList.add('hello');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  element.appendChild(btn);
  // console.log(Data);
  return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('接受更新的模块');
    printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  });
}

document.body.appendChild(component());
