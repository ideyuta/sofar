import React, {PropTypes} from 'react';
import {prefixLink} from 'gatsby-helpers';
import nbem from 'nbem';

const propTypes = {
  siteTitle: PropTypes.string
};


/**
 * Header
 *
 * @param {Object} props - props
 * @return {ReactElement}
 */
export default function Header(props) {
  const h = nbem();
  return (
    <div className={h('Header')}>
      <h1 className={h('&title')}>
        <a
          className={h('&&anchor')}
          href={prefixLink('/')}
        >{props.siteTitle}</a>
      </h1>
    </div>
  );
}

Header.propTypes = propTypes;
