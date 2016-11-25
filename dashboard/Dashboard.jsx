import React,{Component} from 'react';
import {Button} from '../src/components/Button.jsx';
import {Label} from '../src/components/Label.jsx';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div>
          <Button/>
        </div>
        <div>
          <Label/>
        </div>
      </div>
    );
  }
}
