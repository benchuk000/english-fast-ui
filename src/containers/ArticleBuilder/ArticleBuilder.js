import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/articleBuilder';
import ArticleBuilder from '../../components/ArticleBuilder/ArticleBuilder';

class ArticleBuilderContainer extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchArticle();
    }
  }

  componentWillUnmount() {
    this.props.resetArticle();
  }

  render() {
    return (
      <ArticleBuilder
        {...this.props.data}
        onChange={this.props.onChange}
        onSave={this.props.onSave}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: state.articleBuilder.data,
});

const mapDispatchToProps = (dispatch, { match: { params } }) => ({
  fetchArticle: () => dispatch(actions.fetchArticle(params.id)),
  onChange: ({ name, value }) => dispatch(actions.updateArticle({ [name]: value })),
  onSave: () => dispatch(actions.saveArticle()),
  resetArticle: () => dispatch(actions.resetArticle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBuilderContainer);