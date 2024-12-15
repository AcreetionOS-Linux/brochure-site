//Required for path resolution in the webpack configuration
const path = require('path');

// Required for HtmlWebpackPlugin to modify the index.html file
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { runtime } = require('webpack');

module.exports = {
    mode: 'development',
        // TODO Configuration for webpack to resolve file paths and extensions
        entry: {
        index: './src/index.js',
        print: './src/print.js',
        },

        // Enable inline source maps for easier debugging
    devtool: 'inline-source-map',
    
        // TODO Configuration for webpack-dev-server
    devServer: {
        static: '/dist',
        },

        // TODO Plugins to extend webpack's functionality
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            }),
        ],
    
        // TODO Output configuration (to be completed)
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        },

        // Runtime Optimization configuration for multiple entry points
    optimization: {
        runtimeChunk: 'single',
    }

    };