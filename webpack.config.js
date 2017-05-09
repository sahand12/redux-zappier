const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.join(__dirname, 'src', 'client', 'app');
const BUILD_DIR = path.join(__dirname, 'src', 'client', 'build');

const config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR
    },
    module: {
        rules: [
            {test: /\.jsx?$/, use: 'babel-loader', include: APP_DIR}
        ]
    }
};

module.exports = config;