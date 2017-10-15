import * as actions from '../../actions/currentQuiz';

import Quiz from '../../components/Quiz/Quiz';
import React from 'react';
import { connect } from 'react-redux';

class QuizContainer extends React.Component {
    onChange = (event, selectedId) => this.props.setCurrentAnswer([ selectedId ]);

    onCheck = (event, isChecked) => {
      let value = Number.parseInt(event.currentTarget.value);
      var answer = [ ...this.props.currentAnswer ];

      isChecked ? answer.push(value) : answer.splice(answer.indexOf(value), 1);

      this.props.setCurrentAnswer(answer);
    }

    onDrop = (dropData) => {
      var answer = [ ...this.props.currentAnswer ];

      answer[dropData.answerIndex] = dropData.id;

      this.props.setCurrentAnswer(answer);
    }

    onDropEnd = (dropData) => {
      if (Number.isInteger(dropData.fromID)) {
        var answer = [ ...this.props.currentAnswer ];

        delete answer[dropData.fromID];

        this.props.setCurrentAnswer(answer);
      }
    }

    onNextButtonClick = () => this.isQuestionLast() ? this.props.submitQuiz() : this.props.toNextQuestion();
    onPrevButtonClick = () => this.isQuestionLast() && this.props.response
      ? this.props.resetCurrentQuiz()
      : this.props.toPrevQuestion();

    isQuestionFirst = () => this.props.currentQuiestionIndex === 0;
    isQuestionLast = () => this.props.currentQuiestionIndex === this.props.questions.length - 1;

    render() {
      return <Quiz {...this.props}
        onChange={this.onChange}
        onCheck={this.onCheck}
        onDrop={this.onDrop}
        onDropEnd={this.onDropEnd}
        onNextButtonClick={this.onNextButtonClick}
        onPrevButtonClick={this.onPrevButtonClick}
        isQuestionFirst={this.isQuestionFirst}
        isQuestionLast={this.isQuestionLast}
      />
    }
}

const mapStateToProps = state => ({
    currentQuiz: state.currentQuiz.data? state.currentQuiz.data : null,
    name: state.currentQuiz.data ? state.currentQuiz.data.name : '',
    questions: state.currentQuiz.data ? state.currentQuiz.data.questions : [],
    questionTitle: state.currentQuiz.data ? state.currentQuiz.data.questions[state.currentQuiz.currentQuiestionIndex].title : '',
    type: state.currentQuiz.data ? state.currentQuiz.data.type : '',
    currentAnswer: state.currentQuiz.currentAnswer ? state.currentQuiz.currentAnswer : [],
    currentQuiestionIndex: state.currentQuiz.currentQuiestionIndex,
    answers: state.currentQuiz.data ? state.currentQuiz.data.questions[state.currentQuiz.currentQuiestionIndex].answers : [],
    data: state.currentQuiz.data ? state.currentQuiz.data.questions[state.currentQuiz.currentQuiestionIndex].data : [],
    response: state.currentQuiz.response
});

const mapDispatchToProps = dispatch => ({
    setCurrentAnswer: answer => dispatch(actions.setCurrentAnswer(answer)),
    toNextQuestion: () => dispatch(actions.toNextQuestion()),
    toPrevQuestion: () => dispatch(actions.toPrevQuestion()),
    resetCurrentQuiz: () => dispatch(actions.resetCurrentQuiz()),
    submitQuiz: () => dispatch(actions.submitQuiz())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizContainer);