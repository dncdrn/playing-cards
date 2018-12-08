
const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './index.js'
    ],
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    }
}