/* eslint-disable no-var, no-undef, no-underscore-dangle */
var cssnext = require('postcss-cssnext');
var conditionals = require('postcss-conditionals');
var discardComments = require('postcss-discard-comments');
var fontAwesome = require('postcss-font-awesome');
var atImport = require('postcss-import');
var atMixins = require('postcss-mixins');

exports.modifyWebpackConfig = (rawConfig, env) => {
  const config = rawConfig;

  // eslintの設定を追加
  config.merge({
    eslint: {configFile: '.eslintrc'}
  });

  // postcss-loaderのプラグインを変更
  config._config.postcss = [
    atImport,
    atMixins,
    conditionals,
    cssnext,
    discardComments,
    fontAwesome
  ];

  // css loadersにpostcss-loaderを追加
  if (env === 'static') {
    config.loader('css', cfg => {
      const c = cfg;
      c.loaders = c.loaders.concat(['postcss']);
      return c;
    });
  }

  // preLoaderにeslint-loaderを追加
  config.preLoader('eslint', cfg => {
    const c = cfg;
    c.exclude = /node_modules/;
    c.loader = 'eslint';
    c.test = /\.js$/;
    return c;
  });

  return config;
};
