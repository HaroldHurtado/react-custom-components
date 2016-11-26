import React, {Component, PropTypes} from 'react';

const propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  text: PropTypes.string
};
const defaultProps = {
  id: '',
  key: '',
  text: 'Default Text'
};

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      key: props.key,
      text: props.text
    }
  }
  onClick() {
    if(typeof this.props.onClick === 'function') {
      this.props.onClick(this.state);
    }
  }
  render() {
    return(
      <button
        id={this.state.id}
        key={this.state.key}
        onClick={this.onClick.bind(this)}
      >
        {this.state.text}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
