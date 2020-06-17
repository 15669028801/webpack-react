import React, { PureComponent } from "react";
import { Button } from 'antd';

class Total extends PureComponent {
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
        <p>num值: {num}</p>
        <Button onClick={this.handleClick}>add</Button>
      </div>
    )
  }
}

export default Total;