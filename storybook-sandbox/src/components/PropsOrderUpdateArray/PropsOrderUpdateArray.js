import React from 'react';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [1, 2, 3, 4, 5]
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ arr: [2, 3, 4, 5, 1] })
          }}
        >
          change
        </button>
        <Order arr={this.state.arr} />
      </div>
    );
  }
}

class Order extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.arr.map((elm) => <div>{elm}</div>)
        }
      </div>
    );
  }
}
