import React from 'react';
import Helmet from 'react-helmet';
import nbem from 'nbem';
import {config} from 'config';
import {prefixLink} from 'gatsby-helpers';

const propTypes = {
  route: React.PropTypes.object
};


/**
 * Index Component
 */
export default class Index extends React.Component {

  /**
   * Get Pages
   *
   * @return {ReactElement[]}
   */
  getPages() {
    const p = nbem();
    return this.props.route.pages.map(page => {
      if (page.requirePath.match(/posts*/)) {
        return (
          <li
            className={p('PageListItem')}
            key={page.path}
          >
            <a
              className={p('&link')}
              href={prefixLink(page.path)}
            >
              {page.data.title}
            </a>
            <span className={p('&createdAt')}>{page.data.date}</span>
          </li>
        );
      }
      return null;
    }).reverse();
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Index">
        <Helmet
          meta={[
            {
              content: '感謝するぜ お前と出会えた これまでの 全てに!!!',
              name: 'description'
            }
          ]}
          title={config.siteTitle}
        />
        <ul className="PageList">{this.getPages()}</ul>
      </div>
    );
  }
}

Index.propTypes = propTypes;
