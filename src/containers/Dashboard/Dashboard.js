import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/dashboard';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Dashboard from '../../components/Dashboard/Dashboard';

class DashboardContainer extends Component {
  static propsTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string,
        avatarUrl: PropTypes.string,
      })
    ),
    isLoading: PropTypes.bool,
  };
  
  static defaultProps = {
    articles: [],
    isLoading: false,
  };

  componentDidMount() {
    this.props.getArticles();
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const {
      articles,
      isLoading,
    } = this.props;

    if (isLoading) {
      return <LoadingSpinner isShowing={isLoading} />;
    }

    return (
      <Dashboard
        articles={articles}
      />
    );
  }
}

const mapStateToProps = state => ({
  articles: Object.values(state.dashboard.articles),
  isLoading: state.dashboard.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(actions.getArticles()),
  resetData: () => dispatch(actions.resetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
