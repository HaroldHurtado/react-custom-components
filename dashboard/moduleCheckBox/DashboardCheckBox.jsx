import React, { Component } from 'react';
import { CheckBoxItem } from '../../src/components/CheckBoxItem.jsx';
import { Link } from 'react-router';

export class DashboardCheckBox extends Component {
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
            </div>
            <div className="content">
              <CheckBoxItem />
            </div>
          </div>
    );
  }
}
