import React, { Component } from 'react'

export default class ListView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <image src={this.props.imageUrl}></image>
        <span>{this.props.text}</span>
      </div>
    )
  }
}
