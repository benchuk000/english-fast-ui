import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ANSWER_TYPE from '../../constants/answerTypes';
import * as actions from '../../actions/questionBuilder';
import QuiestionBuilder from '../../components/QuestionBuilder/QuestionBuilder';

class QuizBuilderContainer extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchQuestion();
    }
  }

  componentWillUnmount() {
    this.props.resetQuestion();
  }

  onTrueAnswerChange = (answerIndex, value) => {
    let answers = this.props.data.answers;

    switch (this.props.data.answerType) {
      case ANSWER_TYPE.SINGLE_CHOICE:
        answers = answers.map((answer, index) => ({
          ...answer,
          isCorrect: index === answerIndex ? value : false,
        }));
        break;
      case ANSWER_TYPE.MULTI_CHOICE:
        answers = answers.map((answer, index) => ({
          ...answer,
          isCorrect: index === answerIndex ? value : answer.isCorrect,
        }));
        break;
      default:
        break;
    }

    this.props.onChange({ name: 'answers', value: answers });
  }

  render() {
    return (
      <QuiestionBuilder
        {...this.props.data}
        onChange={this.props.onChange}
        onTrueAnswerChange={this.onTrueAnswerChange}
        onSave={this.props.saveQuiz}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: state.questionBuilder.data,
});

const mapDispatchToProps = (dispatch, { match: { params } }) => ({
  fetchQuestion: () => dispatch(actions.fetchQuestion(params.id)),
  onChange: ({ name, value }) => dispatch(actions.updateQuestion({ [name]: value })),
  saveQuiz: () => dispatch(actions.saveQuestion()),
  resetQuestion: () => dispatch(actions.resetQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizBuilderContainer);
