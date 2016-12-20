import React, { Component } from 'react';
import { TextArea } from '../../src/components/TextArea.jsx';
import { Link } from 'react-router';

export class DashboardTextArea extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return(
      <div>
        <TextArea />
      </div>
    );
  }
}
