const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/app/main.js", //入口文件

    // entry:{                                 //多个文件分别压缩
    //     main: __dirname + "/app/main.js",
    //     test: __dirname + "/app/test.js"
    // },

    output: {
        path: __dirname + "/build", //打包文件文件存放位置
        filename: "bundle-[hash].min.js" //打包文件名
        // filename: '[name]-[hash].min.js' //多文件压缩出口
    },

    devtool: 'eval-source-map', //生成干净的完整的source map，方便调试

    devServer: {
        contentBase: './public', //本地服务器所加载的页面所在的目录
        port: '3002',
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },

    module: { //配置Loaders,使用es6语法和jsx
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }, {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // new webpack.BannerPlugins('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数

        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
}