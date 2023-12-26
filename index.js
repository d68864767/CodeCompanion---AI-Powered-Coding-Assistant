import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import App from './App';
import CodeGenerator from './CodeGenerator';
import Debugger from './Debugger';
import LearningHelper from './LearningHelper';
import DocumentationGenerator from './DocumentationGenerator';
import CodeReviewer from './CodeReviewer';
import WorkflowCustomizer from './WorkflowCustomizer';
import User from './User';

axios.defaults.baseURL = 'http://localhost:5000/api';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/code-generator" component={CodeGenerator} />
        <Route path="/debugger" component={Debugger} />
        <Route path="/learning-helper" component={LearningHelper} />
        <Route path="/documentation-generator" component={DocumentationGenerator} />
        <Route path="/code-reviewer" component={CodeReviewer} />
        <Route path="/workflow-customizer" component={WorkflowCustomizer} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
