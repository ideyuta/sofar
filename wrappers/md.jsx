import React, {PropTypes} from 'react';
import {config} from 'config';
import {link} from 'gatsby-helpers';
import DocumentTitle from 'react-document-title';
import nbem from 'nbem';

const propTypes = {
  route: React.PropTypes.object
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
    return this.props.route.pages.map((page, key) => {
      if (page.path === this.props.route.page.data.path) {
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
    const page = this.props.route.pages[id];
    if (!page || !page.requirePath.match(/posts*/)) {
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
    const post = this.props.route.page.data;
    const f = nbem();
    const h = nbem();
    const n = nbem();
    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
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
          {post.layout === 'post' && (
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
          )}
        </div>
      </DocumentTitle>
    );
  }
}

Markdown.propTypes = propTypes;
