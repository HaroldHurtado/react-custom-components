import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import {Dashboard} from './Dashboard.jsx'

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(<div>
            <Dashboard />
           </div>
          );
  }
}
const dashboard = document.getElementById("dashboard");
ReactDOM.render(<MainPage/>, dashboard );
