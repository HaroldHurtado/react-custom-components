import React, { Component } from 'react';
import { TextArea } from '../../src/components/TextArea.jsx';
import { Link } from 'react-router';

export class DashboardTextArea extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return(
      <div className="hbox">
        <div className="nav-bar">
          <Link to="labels">Label</Link>
          <Link to="buttons">Button</Link>
          <Link to="inputs">Input</Link>
          <Link to="textareas">Text Area</Link>
        </div>
        <div className="content">
          <TextArea />
        </div>
      </div>
    );
  }
}
