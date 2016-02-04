var path = require('path')
var webpack = require('webpack')
var px2rem = require('postcss-px2rem')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname) + '/dist', //文件发布路径
        filename: 'bundle.js',
        publicPath: '/dist'             //异步加载文件所在目录
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