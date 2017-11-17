import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as articleService from '../../services/articleService';

import Atticle from '../../components/Article/Article';

class ArticleContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {};

  componentDidMount() {
    articleService.getArticle(this.props.match.params.id)
      .then(({ data }) => this.setState(data));
  }

  render() {
    return <Atticle {...this.state} />;
  }
};

export default ArticleContainer;
