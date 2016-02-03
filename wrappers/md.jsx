import React, {PropTypes} from 'react';
import DocumentTitle from 'react-document-title';
import nbem from 'nbem';
import {link} from 'gatsby-helpers';

const propTypes = {
  config: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired
};


/**
 * Markdown Component
 */
export default class Markdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pageId: this.getPageId()};
  }

  /**
   * Get page id
   *
   * @return {number}
   */
  getPageId() {
    return this.props.pages.map((page, key) => {
      if (page.path === this.props.page.data.path) {
        return key;
      }
    }).filter(p => p)[0];
  }

  /**
   * Render Footer Navigation Item
   *
   * @param {number} id - page id
   * @param {function} n - nbem closure function
   * @return {ReactElement|null}
   */
  renderNavItem(id, n) {
    const page = this.props.pages[id];
    if (!page.data) {
      return null;
    }
    return (
      <a
        className={n('&anchor')}
        href={link(page.data.path)}
      >
        <p className={n('&&title')}>{page.data.title}</p>
        <p className={n('&&createdAt')}>{page.data.date}</p>
      </a>
    );
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    const post = this.props.page.data;
    const f = nbem();
    const h = nbem();
    const n = nbem();
    return (
      <DocumentTitle title={`${post.title} | ${this.props.config.blogTitle}`}>
        <div>
          <div className="Post">
            <div className={h('PostHeader')}>
              <h1 className={h('&title')}>{post.title}</h1>
              <span className={h('&createdAt')}>Created {post.date}</span>
            </div>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{__html: post.body}}
            />
          </div>
          <div className={f('PageFooter')}>
            <div className={f('&inner')}>
              <div className={n('FooterNav:Prev')}>
                {this.renderNavItem(this.state.pageId - 1, n)}
              </div>
              <div className={n('FooterNav:Next')}>
                {this.renderNavItem(this.state.pageId + 1, n)}
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

Markdown.propTypes = propTypes;
