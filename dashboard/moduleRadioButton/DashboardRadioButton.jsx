import React, { Component } from 'react';
import { RadioButtonItem } from '../../src/components/RadioButtonItem.jsx';
import { Link } from 'react-router';

export class DashboardRadioButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <RadioButtonItem />
        </div>
    );
  }
}
