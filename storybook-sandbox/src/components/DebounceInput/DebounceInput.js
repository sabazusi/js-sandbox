import React from 'react';
import debounce from 'lodash.debounce';

class DebounceInputComponent extends React.Component {
  componentWillMount() {
    this.onChangeInput = debounce(this.props.onChange, 200);
  }

  onChangeInputForDebounce(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          style={{width: 800}}
          onChange={(e) => this.onChangeInput(e.target.value)}
        />
      </div>
    )
  }
}

export default class DebounceInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      updateCount: 0
    }
  }
  render() {
    return (
      <div>
        <DebounceInputComponent
          onChange={(value) => this.setState({
            value,
            updateCount: this.state.updateCount+1
          })}
        />

        <div>
          <span>onChange: {this.state.value}</span>
        </div>
        <div>
          <span>updateCount: {this.state.updateCount}</span>
        </div>
      </div>
    );
  }
}
