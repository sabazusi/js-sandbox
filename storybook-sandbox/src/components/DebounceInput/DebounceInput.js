import React from 'react';

class DebounceInputComponent extends React.Component {
  onChangeInput(e) {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          style={{width: 800}}
          onChange={this.onChangeInput.bind(this)}
        />
      </div>
    )
  }
}

export default class DebounceInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }
  }
  render() {
    return (
      <div>
        <DebounceInputComponent
          onChange={(value) => this.setState({value})}
        />

        <div>
          <span>onChange: {this.state.value}</span>
        </div>
      </div>
    );
  }
}
