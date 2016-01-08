import React, {PropTypes} from 'react';
import {link} from 'gatsby-helpers';

const propTypes = {
  body: PropTypes.object.isRequired,
  favicon: PropTypes.any
};


/**
 * Html Component
 */
export default class Html extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta
            content="ideyuta <ide.yuta@gmail.com>"
            name="author"
          />
          <meta
            content="感謝するぜ お前と出会えた これまでの 全てに!!!"
            name="description"
          />
          <meta
            content="IE=edge"
            httpEquiv="X-UA-Compatible"
          />
          <meta
            content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0"
            name="viewport"
          />
          <title>Sofar</title>
          <link
            href={this.props.favicon}
            rel="shortcut icon"
          />
        </head>
        <body>
          <div
            dangerouslySetInnerHTML={{__html: this.props.body}}
            id="react-mount"
          />
          <script src={link('/bundle.js')} />
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;