const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/ide/Works/sofar/src/templates/post.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ide/Works/sofar/src/pages/index.js")))
}

