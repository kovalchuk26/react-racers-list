const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const lessRules = {
    use: [
        {loader: 'css-loader'},
        {loader: 'less-loader'}
    ]
};

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract(lessRules)
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css')
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'source-map'
};