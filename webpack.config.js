module.exports = {
    entry: __dirname + "/app/main.js", //入口文件
    output: {
        path: __dirname + "/public", //打包文件文件存放位置
        filename: "bundle.js" //打包文件名
    },

    devtool: 'eval-source-map', //生成干净的完整的source map，方便调试

    devServer: {
        contentBase: './public', //本地服务器所加载的页面所在的目录
        port: '3004',
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
}