import React, {PropTypes} from 'react';
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
            <a href={link(page.path)}>{page.data.title}</a>
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
