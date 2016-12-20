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
        <Label />
      </div>
    );
  }
}
