import * as skillsTestActions from '../../actions/skillsTest';
import * as testService from '../../services/testService';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';
import Quiz from '../../containers/QuizContainer/QuizContainer';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

class SkillsTestContainer extends Component {
  componentDidMount() {
    this.props.getSkillsTest();
  }

  render() {
    return (
      <Paper>
        <Quiz/>
      </Paper>
    );
  }
}

const mapDispatchToprops = dispatch => ({
  getSkillsTest: () => dispatch(skillsTestActions.getSkillsTest()),
});

export default connect(
  null,
  mapDispatchToprops
)(SkillsTestContainer);