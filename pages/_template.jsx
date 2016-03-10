import React, {PropTypes} from 'react';
import {config} from 'config';
import Header from '../components/Header';
import 'public/bundle.css';

const propTypes = {
  children: PropTypes.any
};

/**
 * Tmpl Component
 */
export default class Tmpl extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <Header siteTitle={config.siteTitle}/>
        {this.props.children}
      </div>
    );
  }
}

Tmpl.propTypes = propTypes;
