import React, { Component } from 'react'

class Person extends Component {
  render() {
    return (
      <div>
        Person name = { this.props.name }
      </div>
    );
  }
};

export default Person;
