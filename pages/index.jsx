import React, {PropTypes} from 'react';
import DocumentTitle from 'react-document-title';
import nbem from 'nbem';
import {link} from 'gatsby-helpers';

const propTypes = {
  config: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired
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
    return this.props.pages.map(page => {
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
      <DocumentTitle title={this.props.config.blogTitle}>
        <div className="Index">
          <h1>Sofar</h1>
          <ul className="PageList">{this.getPages()}</ul>
          <a href={link('/activity/')}>Activity</a>
        </div>
      </DocumentTitle>
    );
  }
}

Index.propTypes = propTypes;
