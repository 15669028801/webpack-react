import React, { PureComponent } from 'react';
import {hot} from 'react-hot-loader/root';
// import Total from "./Total.jsx";
import style from "./app.scss";
// import Icon from "./icon.png";
// import 'antd/dist/antd.css';
import request from './configs/request.js';
import buildimage from "./static/images/build.png";



class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.getDataList()
  }
  // test
  getDataList() { 
    request.post("/province/province_list").then(res => {
      console.log(res);
    })
  }
  handleClick() {
    this.setState((state) => {
      const { num } = state;
      return { num: num + 1 }
    })
  }
  render() {
    const { num } = this.state;
    return (
      <div className={style.main}>
        <img src={buildimage} alt=""/>
        <h1>网站升级建设中...</h1>
        <p>即将开业，敬请期待</p>
      </div>
    )
  }
}

// export default App;
export default hot(App);
