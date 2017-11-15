import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
// import QuizBuilder from './containers/QuizBuilder/QuizBuilder';

import WelcomePage from './containers/WelcomePage/WelcomePage';
import Profile from './containers/Profile/Profile';
import SkillsTestContainer from './containers/SkillsTestContainer/SkillsTestContainer';
import QuestionBuilder from './containers/QuestionBuilder/QuestionBuilder';
import ArticleBuilder from './containers/ArticleBuilder/ArticleBuilder';
import requireAuth from './helpers/requireAuth';

import Manage from './containers/Manage/Manage';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={requireAuth(Dashboard)}/>
        <Route exact path='/welcome' component={WelcomePage}/>
        <Route exact path='/profile/:userId' component={requireAuth(Profile)}/>
        <Route exact path='/skills-test' component={requireAuth(SkillsTestContainer)}/>
        <Route exact path="/question-builder" component={requireAuth(QuestionBuilder, true)}/>
        <Route exact path="/question-builder/:id" component={requireAuth(QuestionBuilder, true)}/>
        <Route exact path="/article-builder" component={requireAuth(ArticleBuilder, true)}/>
        <Route exact path="/article-builder/:id" component={requireAuth(ArticleBuilder, true)}/>
        {/* <Route exact path="/quiz-builder" component={requireAuth(QuizBuilder, true)}/> */}
        {/* <Route exact path="/quiz-builder/:quizId" component={requireAuth(QuizBuilder, true)}/> */}
        <Route path="/manage/:type" component={requireAuth(Manage, true)}/>
      </Switch>
    );
  }
}

export default Router;
