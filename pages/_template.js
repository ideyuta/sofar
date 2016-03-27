import React, {PropTypes} from 'react';
import {config} from 'config';
import Header from '../components/Header';
import 'public/bundle.css';

const propTypes = {
  children: PropTypes.any
};

/**
 * Tmpl Component
 *
 * @param {Object} props - props
 * @return {ReactElement}
 */
export default function Tmpl(props) {
  return (
    <div>
      <Header siteTitle={config.siteTitle} />
      {props.children}
    </div>
  );
}

Tmpl.propTypes = propTypes;
