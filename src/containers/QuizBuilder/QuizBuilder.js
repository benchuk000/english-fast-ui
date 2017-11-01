import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/quizBuilder';
import QuizBuilder from '../../components/QuizBuilder/QuizBuilder';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

class QuizBuilderContainer extends Component {
  componentDidMount() {
    if (this.props.match.params.quizId) {
      this.props.fetchQuiz();
    }
  }

  componentWillUnmount() {
    this.props.resetQuiz();
  }

  onDropEnd = (dropData) => {
    if (Number.isInteger(dropData.fromID)) {
      
    }
  }

  render() {
    return this.props.data.isFetching ? <LoadingSpinner isShowing/> : (
      <QuizBuilder
        {...this.props.data}
        onChange={({ name, value }) => this.props.updateQuiz({ [name]: value })}
        onQuestionChange={(index, { name, value } ) => this.props.updateQuestion(index, { [name]: value })}
        onSave={this.props.saveQuiz}
        onDrop={this.props.addQuestion}
        onDropEnd={this.onDropEnd}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.quizBuilder,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuiz: id => dispatch(actions.fetchQuiz(ownProps.match.params.quizId)),
  saveQuiz: () => dispatch(actions.saveQuiz()),
  resetQuiz: () => dispatch(actions.resetQuiz()),
  updateQuiz: data => dispatch(actions.updateQuiz(data)),
  addQuestion: question => dispatch(actions.addQuizQuestion(question)),
  updateQuestion: (index, data) => dispatch(actions.updateQuizQuestion(index, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizBuilderContainer);