const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: 'Google Chrome',
        contentBase: './dist',
        publicPath: '/',
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: 'public/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader', options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.scss'],
    },
    output: {
        filename: 'static/js/[name].bundle.js',
        chunkFilename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
};
