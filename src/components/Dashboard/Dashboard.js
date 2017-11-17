import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import ArticleList from '../ArticleList/ArticleList';

const Dashboard = ({ articles, }) => (
  <div className="dashboard">
    <div className="dashboard__articles">
      <h3>Suggested articles</h3>

      <ArticleList
        articles={articles}
        renderItemContainerElement={({ _id }) => <Link to={`/article/${_id}`}/>}
      />

      {
        !articles.length && <p className="dashboard__no-articles-message">Article list is empty</p> 
      }
    </div>

    <div className="dashboard__quiz">
      <RaisedButton
        label="Pass test"
        containerElement={<Link to="/skills-test" />}
      />
    </div>
  </div>
);

Dashboard.propsTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    })
  ),
};

Dashboard.defaultProps = {
  articles: [],
};

export default Dashboard;