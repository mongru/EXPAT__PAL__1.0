const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', "postcss-loader"]
            }, {
                test: /\.(woff|woff2|eot|svg|ttf|otf)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', "postcss-loader", 'sass-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        require('autoprefixer'),
        new webpack.SourceMapDevToolPlugin({
            filename: 'bundle.js.map',
            exclude: ['/node_modules/', 'vendor.js']
        })
    ]
};
