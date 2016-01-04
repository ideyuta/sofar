import React from 'react';
import {RouteHandler} from 'react-router';

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
    return <RouteHandler {...this.props} />;
  }
}
