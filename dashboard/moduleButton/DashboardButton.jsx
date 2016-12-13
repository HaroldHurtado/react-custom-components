import React, { Component } from 'react';
import { Button } from '../../src/components/Button.jsx';
import { Link } from 'react-router';

export class DashboardButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
          <div className="hbox">
            <div className="nav-bar">
              <Link to="labels">Label</Link>
              <Link to="buttons">Button</Link>
              <Link to="inputs">Input</Link>
              <Link to="textareas">Text Area</Link>
              <Link to="checkboxs">Check Box</Link>
            </div>
            <div className="content">
              <Button />
            </div>
          </div>
    );
  }
}
