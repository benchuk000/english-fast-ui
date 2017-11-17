import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// import QuizBuilder from './containers/QuizBuilder/QuizBuilder';

import Dashboard from './containers/Dashboard/Dashboard';
import WelcomePage from './containers/WelcomePage/WelcomePage';
import Profile from './containers/Profile/Profile';
import SkillsTestContainer from './containers/SkillsTestContainer/SkillsTestContainer';
import QuestionBuilder from './containers/QuestionBuilder/QuestionBuilder';
import ArticleBuilder from './containers/ArticleBuilder/ArticleBuilder';
import Manage from './containers/Manage/Manage';
import Article from './containers/Article/Article';

import requireAuth from './helpers/requireAuth';

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
        <Route path="/article/:id" component={requireAuth(Article)}/>
      </Switch>
    );
  }
}

export default Router;
