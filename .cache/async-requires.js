// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("/Users/ide/Works/sofar/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-pages-index-js": () => import("/Users/ide/Works/sofar/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ide/Works/sofar/.cache/data.json")

