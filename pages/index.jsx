import React, {PropTypes} from 'react';
import {config} from 'config';
import DocumentTitle from 'react-document-title';
import nbem from 'nbem';
import {link} from 'gatsby-helpers';

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
              href={link(page.path)}
            >
              {page.data.title}
            </a>
            <span className={p('&createdAt')}>{page.data.date}</span>
          </li>
        );
      }
    }).reverse();
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="Index">
          <ul className="PageList">{this.getPages()}</ul>
        </div>
      </DocumentTitle>
    );
  }
}

Index.propTypes = propTypes;
