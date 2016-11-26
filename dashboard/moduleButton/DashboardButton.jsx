import React, {Component} from 'react';
import {Button} from '../../src/components/Button.jsx';

export class DashboardButton extends Component {
  constructor(props) {
    super(props);
  }
  onClickButtonComponent(buttonState) {
    alert("Button Component id="+buttonState.id+" text="+buttonState.text+" key="+buttonState.key);
  }
  render() {
    return(
          <div>
            <Button 
              onClick={this.onClickButtonComponent.bind(this)}
            />
          </div>
    );
  }
}
