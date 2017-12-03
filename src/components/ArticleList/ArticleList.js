import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const ArticleList = ({ articles, renderItemContainerElement }) => (
  <GridList
    cellHeight={180}
    cols={3}
  >
    <Subheader>Вам необходимо изучить следущие темы перед тестом:</Subheader>

    {
      articles.map(article => (
        <GridTile
          key={article._id}
          title={article.name}
          style={{
            borderRadius: 10,
          }}
          containerElement={renderItemContainerElement(article)}
        >
          <img src={article.avatarUrl} />
        </GridTile>
      ))
    }
  </GridList>
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