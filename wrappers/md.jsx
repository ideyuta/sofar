import React from 'react';
import Helmet from 'react-helmet';
import nbem from 'nbem';
import {config} from 'config';
import {prefixLink} from 'gatsby-helpers';

const propTypes = {
  route: React.PropTypes.object
};


/**
 * Markdown Component
 */
export default class Markdown extends React.Component {

  /**
   * constructor
   *
   * @param {Object} props - props
   */
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
      return null;
    }).filter(p => p)[0];
  }

  /**
   * Render Footer Navigation Item
   *
   * @param {number} id - page id
   * @param {Function} n - nbem closure function
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
        href={prefixLink(page.data.path)}
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
      <div>
        <Helmet
          meta={[{content: post.description, name: 'description'}]}
          title={post.title}
          titleTemplate={`%s | ${config.siteTitle}`}
        />
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
    );
  }
}

Markdown.propTypes = propTypes;
