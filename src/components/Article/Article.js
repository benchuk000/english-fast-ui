import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

import './Article.css';

const Article = ({ name, avatarUrl, content }) => (
  <div className="article">
    <Card>
      <CardMedia
        overlay={<CardTitle title={name} />}
        style={{
          overflow: 'hidden',
          maxHeight: 500,
          minHeight: 100,
        }}
      >
        <img src={avatarUrl} />
      </CardMedia>
      <CardText dangerouslySetInnerHTML={{ __html: content}} />
    </Card>
  </div>
);

Article.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  content: PropTypes.string,
};

Article.defaultProps = {
  name: '',
  avatarUrl: '',
  content: '',
};

export default Article;
