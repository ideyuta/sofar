import React, {PropTypes} from 'react';
import {link} from 'gatsby-helpers';

const propTypes = {
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
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href={link('/css/bundle.css')}
            rel="stylesheet"
          />
        </head>
        <body>
          <div id="react-mount" />
          <script src={link('/bundle.js')} />
          <script
            async={true}
            deffer={true}
            src="//platform.instagram.com/jp/embeds.js"
          />
          <script
            async={true}
            src="//platform.twitter.com/widgets.js"
          />
          <script
            async={true}
            defer={true}
            src="//assets.pinterest.com/js/pinit.js"
          />
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;
