import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { DashboardButton } from './moduleButton/DashboardButton.jsx';
import { DashboardLabel } from './moduleLabel/DashboardLabel.jsx';
import { DashboardInput } from './moduleInput/DashboardInput.jsx';
import { DashboardTextArea } from './moduleTextArea/DashboardTextArea.jsx';
import { DashboardCheckBox } from './moduleCheckBox/DashboardCheckBox.jsx';
import { DashboardRadioButton } from './moduleRadioButton/DashboardRadioButton.jsx';
import { Dashboard } from './Dashboard.jsx';
import { Router, Route, IndexRouter, hashHistory } from 'react-router';

const dashboard = document.getElementById("dashboard");

ReactDOM.render(
                <Router history={hashHistory}>
                  <Route path='/' component={Dashboard}/>
                  <Route path='labels' component={DashboardLabel} />
                  <Route path='buttons' component={DashboardButton} />
                  <Route path="inputs" component={DashboardInput} />
                  <Route path="textareas" component={DashboardTextArea} />
                  <Route path="checkboxs" component={DashboardCheckBox} />
                  <Route path="radiobuttons" component={DashboardRadioButton} />
                </Router>
                , dashboard );
