var path = require('path')
var webpack = require('webpack')
var px2rem = require('postcss-px2rem')

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './index'
    ],
    output: {
        path: path.join(__dirname), //文件发布路径
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/' //html中引用的路径
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                  'babel'
                ],
                exclude: /node_modules/,
                include: __dirname
            },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!postcss!less" },
            // { test: /\.md$/, loader: "html!markdown-highlight?+breaks&-smartLists" },
        ]
    },
    postcss: function() {
        return [px2rem({remUnit: 64})];
    }
}