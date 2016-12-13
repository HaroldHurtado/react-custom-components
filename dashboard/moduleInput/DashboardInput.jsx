import React,{ Component } from 'react';
import { Input } from '../../src/components/Input.jsx';
import {Link} from 'react-router';

export class DashboardInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="hbox">
        <div className="nav-bar">
          <Link to="labels">Label</Link>
          <Link to="buttons">Button</Link>
          <Link to="inputs">Input</Link>
          <Link to="textareas">Text Area</Link>
          <Link to="checkboxs">Check Box</Link>
          <Link to="radiobuttons">Radio Button</Link>
          <Link to="selects">Select</Link>
          <Link to="selectmultiple">Select Multiple</Link>
        </div>
        <div className="content">
          <Input />
        </div>
      </div>
    );
  }
}
