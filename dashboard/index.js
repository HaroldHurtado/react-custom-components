import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { DashboardButton } from './moduleButton/DashboardButton.jsx';
import { DashboardLabel } from './moduleLabel/DashboardLabel.jsx';
import { DashboardInput } from './moduleInput/DashboardInput.jsx';
import { DashboardTextArea } from './moduleTextArea/DashboardTextArea.jsx';
import { DashboardCheckBox } from './moduleCheckBox/DashboardCheckBox.jsx';
import { DashboardRadioButton } from './moduleRadioButton/DashboardRadioButton.jsx';
import { DashboardSelect } from './moduleSelect/DashboardSelect.jsx';
import { DashboardSelectMultiple } from './moduleSelectMultiple/DashboardSelectMultiple.jsx';
import { Dashboard } from './Dashboard.jsx';
import { Router, Route, IndexRoute , browserHistory} from 'react-router';

ReactDOM.render(
                <Router history={browserHistory}>
                  <Route path='/' component={Dashboard}>
                    <IndexRoute component = {DashboardLabel} />
                    <Route path='labels' component={DashboardLabel} />
                    <Route path='buttons' component={DashboardButton} />
                    <Route path="inputs" component={DashboardInput} />
                    <Route path="textareas" component={DashboardTextArea} />
                    <Route path="checkboxs" component={DashboardCheckBox} />
                    <Route path="radiobuttons" component={DashboardRadioButton} />
                    <Route path="selects" component={DashboardSelect} />
                    <Route path="selectmultiple" component={DashboardSelectMultiple} />
                  </Route>
                </Router>
                , document.getElementById("dashboard") );
