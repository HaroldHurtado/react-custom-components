import React, { Component } from 'react';
import { SelectMultiple } from '../../src/components/SelectMultiple.jsx';
import { Link } from 'react-router';

export class DashboardSelectMultiple extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return(
      <div>
        <SelectMultiple />
      </div>
    );
  }
}
