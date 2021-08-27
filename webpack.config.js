const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypescript = require('react-refresh-typescript')

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new ReactRefreshPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [require.resolve('react-refresh/babel')],
                    presets: ['@babel/preset-env', ['@babel/preset-react', {runtime: 'automatic'}]]
                }
            },
            {
                test: /\.(ts|tsx)$/i,
                exclude: ['/node_modules/'],
                loader: 'ts-loader',
                options: {
                  getCustomTransformers: () => ({
                    before: [
                          ReactRefreshTypescript({
                            emitFullSignatures: true
                          })
                        ]
                  }),
                  transpileOnly: true,
                  compilerOptions: {
                    jsx: 'react-jsxdev'
                  }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
