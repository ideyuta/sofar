import React, {PropTypes} from 'react';
import DocumentTitle from 'react-document-title';
import nbem from 'nbem';

const propTypes = {
  config: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired
};


/**
 * Markdown Component
 */
export default class Markdown extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    const post = this.props.page.data;
    const h = nbem();
    return (
      <DocumentTitle title={`${post.title} | ${this.props.config.blogTitle}`}>
        <div>
          <div className={h('PostHeader')}>
            <h1 className={h('&title')}>{post.title}</h1>
            <span className={h('&createdAt')}>Created {post.date}</span>
          </div>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{__html: post.body}}
          />
        </div>
      </DocumentTitle>
    );
  }
}

Markdown.propTypes = propTypes;
