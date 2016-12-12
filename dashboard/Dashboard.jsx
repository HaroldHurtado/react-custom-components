import React,{Component} from 'react';
import { Link } from 'react-router';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props)
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
          I am content Dashboard
        </div>
      </div>
    );
  }
}
