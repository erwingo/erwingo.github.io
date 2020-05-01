const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const googleHelpers = require('helpers/dist/universal/google');

const getAbsPath = (pathStr) => path.resolve(__dirname, pathStr);

const distFolder = getAbsPath('dist');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: {
        index: getAbsPath('src/index.tsx'),
    },
    devServer: {
        contentBase: distFolder,
    },
    output: {
        path: distFolder,
        filename: isProd
            ? '[name].bundle.[contenthash].js'
            : '[name].bundle.js',

        // Prefix path for all the relative-url assets required inside the source code.
        // Eg. if you have a .css file that has background-image: url('a.png') <<Nno absolute path>>
        // and your public path is set to http://cdn.example.com, the bundled
        // file will have background-image: url(http://cdn.example.com/a.png).

        // TODO: webpack default is '' but i have to explicitely set it to './'
        // because of a webfonts-loader issue
        // https://github.com/jeerbl/webfonts-loader/issues/28
        // publicPath: './'
    },

    devtool: 'source-map',

    module: {
        rules: [
            // TYPESCRIPT
            { test: /\.tsx?$/, include: getAbsPath('src'), use: ['ts-loader'] },

            // SCSS
            {
                test: /\.s?css$/,
                include: getAbsPath('src'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },

            // IMAGES
            {
                test: /\.(png|jpg|svg)$/,
                include: getAbsPath('src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash].[ext]',
                        },
                    },
                ],
            },

            // SVG ICONS
            {
                test: /[\\\/]_fonts[\\\/].*[\\\/]font\.js$/,
                include: getAbsPath('src'),
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'webfonts-loader',
                ],
            },
        ],
    },

    plugins: [
        // contentash is the file's checksum, useful for caching purposes
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: getAbsPath('src/index.html'),
            filename: 'index.html',
            templateParameters: {
                title: 'GO Erwin',
                googleAnalyticsScript: googleHelpers.getAnalyticsScript(
                    'UA-102237991-1'
                ),
                googleAdSenseScript: googleHelpers.getAdSenseScript(
                    'ca-pub-3590698513623239'
                ),
            },
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],

        // Where to look when using things like "import 'lodash';"
        modules: [getAbsPath('node_modules')],
    },
};
