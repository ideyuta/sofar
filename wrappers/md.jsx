import React, {PropTypes} from 'react';
import DocumentTitle from 'react-document-title';

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
    return (
      <DocumentTitle title={`${post.title} | ${this.props.config.blogTitle}`}>
        <div className="markdown-body">
          <h1>{post.title}</h1>
          <span>Created {post.date}</span>
          <div dangerouslySetInnerHTML={{__html: post.body}}/>
        </div>
      </DocumentTitle>
    );
  }
}

Markdown.propTypes = propTypes;
