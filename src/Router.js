import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import WelcomePage from './containers/WelcomePage/WelcomePage';
import Profile from './containers/Profile/Profile';
import SkillsTestContainer from './containers/SkillsTestContainer/SkillsTestContainer';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path='/welcome' exact component={WelcomePage}/>
        <Route path='/skills-test' component={SkillsTestContainer}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    );
  }
}

export default Router;
