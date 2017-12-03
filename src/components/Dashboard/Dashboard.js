import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Paper from 'material-ui/Paper';

import './Dashboard.css';
import ArticleList from '../ArticleList/ArticleList';

const Dashboard = ({ articles, }) => (
  <div className="dashboard">
    <Paper zDepth={4}>
      <div className="dashboard__articles">
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
          primary
          label="Pass test"
          icon={<CheckCircle />}
          containerElement={<Link to="/skills-test" />}
        />
      </div>
    </Paper>
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