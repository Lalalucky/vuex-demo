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
            // port: 8080,
            // host: 'localhost',
            // https: false,
            // open:true,
            "/api": {
                target: "http://www.yijiaoyu.net/api", //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "", // 替换target中的请求地址
                },
            },
            "/admin": {
                target: "http://www.a6edu.com/admin", //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/admin": "", // 替换target中的请求地址
                },
            },
            "/yang": {
                target: "http://www.yiedu.cc/admin", //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/yang": "", // 替换target中的请求地址，也就是说，在请求的时候
                },
            },
        },
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery",
            }),
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