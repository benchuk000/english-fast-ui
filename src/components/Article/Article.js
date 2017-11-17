import React from 'react';
import PropTypes from 'prop-types';

import './Article.css';

const Article = ({ name, content }) => (
  <div className="article">
    <div>
      {name}
    </div>

    <div dangerouslySetInnerHTML={{ __html: content}} />
  </div>
);

Article.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
};

Article.defaultProps = {
  name: '',
  content: '',
};

export default Article;
