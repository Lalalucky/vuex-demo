// vue.config.js
const path = require("path");
const webpack = require("webpack");
module.exports = {
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    publicPath: '/', // 设置打包文件相对路径
    // webpack-dev-server 相关配置
    devServer: {
        proxy: {
            
        },
    },
    configureWebpack: {
        rules: [
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ],
    },
    // 用来配置less的全局变量
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/global.less")],
        },
    },
};