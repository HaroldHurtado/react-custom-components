import React, { Component } from 'react';
import { Button } from '../../src/components/Button.jsx';
import { Link } from 'react-router';

export class DashboardButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <Button />
        </div>
    );
  }
}
