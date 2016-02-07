import React, {PropTypes} from 'react';
import {link} from 'gatsby-helpers';
import nbem from 'nbem';

const propTypes = {
  blogTitle: PropTypes.string
};


/**
 * Header Component
 */
export default class Header extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    const h = nbem();
    return (
      <div className={h('Header')}>
        <h1 className={h('&title')}>{this.props.blogTitle}</h1>
        <div className={h('&nav')}>
          <a
            className={h('&&item')}
            href={link('/')}
          >Logue</a>
          <a
            className={h('&&item')}
            href={link('/activity/')}
          >Act</a>
        </div>
      </div>
    );
  }
}

Header.propTypes = propTypes;
