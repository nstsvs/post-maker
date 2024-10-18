const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '/dist'), // the bundle output path
        filename: 'main.js', // the name of the bundle
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html' // to import index.html file inside index.js
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
    },
    devServer: {
        port: 4200 // you can change the port
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.css$/, // CSS файлы
                use: ['style-loader', 'css-loader'], // обработка CSS
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // правило для изображений
                type: 'asset/resource', // Webpack 5 встроенная поддержка ресурсов
            },
        ]
    }
};