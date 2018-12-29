const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: ['@babel/polyfill', './src/client/client.js'],
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        contentBase: '../dist',
        hot: true,
        inline: true,
        overlay: true,
        port: 8080,
        proxy: {
            '**': {
                target: 'http://[::1]:3000',
                changeOrigin: true,
                secure: false
            }
        }
    }
});