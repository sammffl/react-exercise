/**
 * @Author: shenyu <SamMFFL>
 * @Date:   2016/08/30 11:37:47
 * @Email:  shenyu902@pingan.com.cn
 * @Last modified by:   SamMFFL
 * @Last modified time: 2016/08/30 11:42:46
 */


var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var env = process.env.WEBPACK_ENV;
var outputFile;
var plugins = [new HtmlwebpackPlugin({
    title: 'React Biolerplate',
    template: path.resolve(__dirname, 'templates/index.ejs'),
    inject: 'body'
})];

if (env === 'build') {
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins.push(new UglifyJsPlugin({
        minimize: true
    }));
    outputFile = 'bundle.min.js';
} else {
    outputFile = 'bundle.js';
}


var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        './app/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outputFile
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loaders: ['style', 'css', 'less'],
            include: path.resolve(__dirname, 'app')
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    plugins: plugins,
    devtool: 'source-map',
}

module.exports = config;
