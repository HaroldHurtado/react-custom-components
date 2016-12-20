import React, { Component } from 'react';
import { CheckBoxItem } from '../../src/components/CheckBoxItem.jsx';
import { Link } from 'react-router';

export class DashboardCheckBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <CheckBoxItem />
        </div>
    );
  }
}
