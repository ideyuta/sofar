import React from 'react';
import {RouteHandler} from 'react-router';

/**
 * Tmpl Component
 */
export default class Tmpl extends React.Component {

  componentDidMount() {
    this.addTwitterScript();
  }

  componentDidUpdate() {
    this.removeTwitterScript();
    this.addTwitterScript();
  }

  /**
   * add twitter widget script
   */
  addTwitterScript() {
    const script = document.createElement('script');
    script.id = 'twitter';
    script.src = 'https://platform.twitter.com/widgets.js';
    document.head.appendChild(script);
  }

  /**
   * remove twitter widget script
   */
  removeTwitterScript() {
    const script = document.getElementById('twitter');
    script.parentElement.removeChild(script);
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    return <RouteHandler {...this.props} />;
  }
}
