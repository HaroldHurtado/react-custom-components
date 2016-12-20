import React, { Component } from 'react';
import { Select } from '../../src/components/Select.jsx';
import { Link } from 'react-router';

export class DashboardSelect extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return(
      <div>
        <Select />
      </div>
    );
  }
}
