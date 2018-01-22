module.exports = {
    entry: __dirname + "/app/main.js", //入口文件

    output: {
        path: __dirname + "/public", //打包文件文件存放位置
        filename: "bundle.js" //打包文件名
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
                    }
                ]
            }
        ]
    }
}