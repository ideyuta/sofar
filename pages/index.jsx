import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import DocumentTitle from 'react-document-title';
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
    return this.props.pages.map(page => {
      if (page.path && page.path !== '/') {
        return (
          <li key={page.path}>
            <Link to={link(page.path)}>{page.data.title}</Link>
            <span>{page.data.date}</span>
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
        <div>
          <h1>Sofar</h1>
          {this.getPages()}
        </div>
      </DocumentTitle>
    );
  }
}

Index.propTypes = propTypes;
