var path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                use: ['style-loader','css-loader','postcss-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?name=[name].[ext]&limit=100000&minetype=application/font-woff'
            }
        ]
    }

};