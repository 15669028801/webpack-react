import React, { PureComponent } from 'react';
import {hot} from 'react-hot-loader/root';
import Total from "./Total.jsx";
import styles from "./app.scss";
import Icon from "./icon.png";
import 'antd/dist/antd.css';



class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
    this.handleClick = this.handleClick.bind(this);
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
      <div>
        <div className="title">
          react-template
        </div>
        <p className={styles.title}>num值: {num}</p>
        <button onClick={this.handleClick}>add</button>
        <br/>

        <Total />
        <br/>
        <img src={Icon} alt=""/>
      </div>
    )
  }
}

// export default App;
export default hot(App);
