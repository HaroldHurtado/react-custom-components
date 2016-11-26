import React, { Component, PropTypes } from 'react';

const propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string
}
const defaultProps = {
  type: 'text',
  id: '',
  key: ''
}

export class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
      id: props.id,
      key: props.key
    }
  }
  render() {
    return(
      <input
        type={this.state.type}
        id={this.state.id}
        key={this.state.key}
      >
      </input>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
