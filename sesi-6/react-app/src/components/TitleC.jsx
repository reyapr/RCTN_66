import React from "react";

export default class TitleClass extends React.Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    )
  }
}