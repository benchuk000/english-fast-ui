import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import QuizBuilder from './containers/QuizBuilder/QuizBuilder';

import WelcomePage from './containers/WelcomePage/WelcomePage';
import Profile from './containers/Profile/Profile';
import SkillsTestContainer from './containers/SkillsTestContainer/SkillsTestContainer';
import ManageUsers from './containers/ManageUsers/ManageUsers';
import requireAuth from './helpers/requireAuth';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={requireAuth(Dashboard)}/>
        <Route exact path='/welcome' component={WelcomePage}/>
        <Route exact path='/profile/:userId' component={requireAuth(Profile)}/>
        <Route exact path='/skills-test' component={requireAuth(SkillsTestContainer)}/>
        <Route path="/manage/users" component={requireAuth(ManageUsers, true)}/>
        <Route exact path="/quiz-builder" component={requireAuth(QuizBuilder, true)}/>
        <Route exact path="/quiz-builder/:quizId" component={requireAuth(QuizBuilder, true)}/>
      </Switch>
    );
  }
}

export default Router;
