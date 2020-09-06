const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssWebpackPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/js/index.js",
    mode: "production",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 9000,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MinCssWebpackPlugin({
            filename: "[name].css",
            output: "css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MinCssWebpackPlugin.loader
                    },
                    "css-loader"
                ]
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
        ],
    },
}
