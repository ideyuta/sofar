import React from 'react';
import { withPrefix } from 'gatsby-link';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta
          content="ideyuta <ide.yuta@gmail.com>"
          name="author"
        />
        <meta
          content="IE=edge"
          httpEquiv="X-UA-Compatible"
        />
        <meta
          content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0"
          name="viewport"
        />
        {props.headComponents}
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
          href="https://fonts.googleapis.com/css?family=Inconsolata"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src={withPrefix('/bundle.js')} />
        <script
          dangerouslySetInnerHTML={{__html: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-36151317-1", "auto");ga("send", "pageview");'}} // eslint-disable-line max-len
        />
      </body>
    </html>
  );
}
