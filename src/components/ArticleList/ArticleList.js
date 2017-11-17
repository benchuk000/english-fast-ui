import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const ArticleList = ({ articles, renderItemContainerElement }) => (
  <List>
    {
      articles.map(article => (
        <ListItem
          key={article._id}
          primaryText={article.name}
          leftAvatar={<Avatar src={article.avatarUrl} />}
          containerElement={renderItemContainerElement(article)}
        />
      ))
    }
  </List>
);

ArticleList.propsTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    })
  ),
  renderItemContainerElement: PropTypes.func,
};

ArticleList.defaultProps = {
  articles: [],
  renderItemContainerElement: article => null,
};

export default ArticleList;