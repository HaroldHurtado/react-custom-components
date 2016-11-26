import React,{Component} from 'react';
import {DashboardButton} from './moduleButton/DashboardButton.jsx';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <DashboardButton />
      </div>
    );
  }
}
