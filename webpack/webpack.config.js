const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        constentBase: "./public",
        port: 9000
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache:true,
                parallel:true
            }),
            new OptmizeCSSAssetsPlugin({})
        ]
    },
    module:{
        rules: [{
            test: /\.s?[ac]ss$/, 
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }],
    }
}