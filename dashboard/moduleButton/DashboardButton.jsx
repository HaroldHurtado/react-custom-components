import React, { Component } from 'react';
import { Button } from '../../src/components/Button.jsx';
import { Link } from 'react-router';

export class DashboardButton extends Component {
  constructor(props) {
    super(props);
  }
  onClickButtonComponent(buttonState) {
    alert("Button Component id="+buttonState.id+" text="+buttonState.text+" key="+buttonState.key);
  }
  render() {
    return(
          <div>
            <div>
              <Link to="labels">Label</Link>
              <Link to="buttons">Button</Link>
              <Link to="inputs">Input</Link>
              <Link to="textareas">Text Area</Link>
            </div>
            <div>
              <Button
                onClick={this.onClickButtonComponent.bind(this)}
                />
            </div>
          </div>
    );
  }
}
