const { merge } = require('webpack-merge');
const webpackConfiguration = require('../webpack.config');

module.exports = merge(webpackConfiguration, {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [],
});
