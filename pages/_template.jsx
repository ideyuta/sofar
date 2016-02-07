import React, {PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import Header from '../components/Header';
import 'public/bundle.css';

const propTypes = {
  config: PropTypes.object.isRequired
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
        <Header blogTitle={this.props.config.blogTitle}/>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}

Tmpl.propTypes = propTypes;
