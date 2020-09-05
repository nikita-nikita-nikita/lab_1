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
            'window.jQuery':'jquery'
        })
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
        ],
    },
}
