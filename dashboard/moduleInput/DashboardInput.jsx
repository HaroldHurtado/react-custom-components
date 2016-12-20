import React,{ Component } from 'react';
import { Input } from '../../src/components/Input.jsx';
import {Link} from 'react-router';

export class DashboardInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Input />
      </div>
    );
  }
}
