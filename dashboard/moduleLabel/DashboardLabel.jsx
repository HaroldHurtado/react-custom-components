import React, { Component } from 'react';
import { Label } from '../../src/components/Label.jsx';
import { Link } from 'react-router';

export class DashboardLabel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div>
          <Link to="labels">Label</Link>
          <Link to="buttons">Button</Link>
          <Link to="inputs">Input</Link>
        </div>
        <div>
          <Label />
        </div>
      </div>
    );
  }
}
