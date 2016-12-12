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
        <div>
          <Link to="labels">Label</Link>
          <Link to="buttons">Button</Link>
          <Link to="inputs">Input</Link>
          <Link to="textareas">Text Area</Link>
        </div>
        <div>
          <Input />
        </div>
      </div>
    );
  }
}
