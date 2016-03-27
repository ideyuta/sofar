import React, {PropTypes} from 'react';
import {link} from 'gatsby-helpers';

const propTypes = {
  body: PropTypes.any,
  favicon: PropTypes.any
};


/**
 * Html
 *
 * @param {Object} props - props
 * @return {ReactElement}
 */
export default function Html(props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
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
          href={props.favicon}
          rel="shortcut icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href={link('/bundle.css')}
          rel="stylesheet"
        />
      </head>
      <body>
        <div
          dangerouslySetInnerHTML={{__html: props.body}}
          id="react-mount"
        />
        <script src={link('/bundle.js')} />
        <script dangerouslySetInnerHTML={{__html: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-36151317-1", "auto");ga("send", "pageview");'}} />
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

Html.propTypes = propTypes;
