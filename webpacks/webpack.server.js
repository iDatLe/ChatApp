const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
    entry: {
        server: ['@babel/polyfill', './src/server/server.js']
    },
    target: 'node',
    externals: [webpackNodeExternals()],
});