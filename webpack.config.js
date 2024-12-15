//Required for path resolution in the webpack configuration
const path = require('path');

// Required for HtmlWebpackPlugin to modify the index.html file
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    cache: false,
    // Configuration for webpack to resolve file paths and extensions
    entry: {
        index: './src/index.js',
        main: './src/styles/main.css' // Added entry for main.css
    },

    // Enable inline source maps for easier debugging
    devtool: 'inline-source-map',
    
    // Configuration for webpack-dev-server
    devServer: {
        static: './dist',
    },

    // Plugins to extend webpack's functionality
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    
    // Output configuration
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[name][ext]' // Added output configuration for CSS
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          // ...existing rules...
        ],
      },

    // Runtime Optimization configuration for multiple entry points
    optimization: {
        runtimeChunk: 'single',
    }
};