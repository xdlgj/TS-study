// 引入一个包
const path = require('path')

// 引入html插件
const HTMLWebpackPluge = require("html-webpack-plugin");

// 引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
    // 入口文件
    entry: "./src/index.ts",
    //指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'), 
        // 指定打包后的文件
        filename: 'bundle.js',
        // 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
            // test指定的是规则生效的文件
            test: /\.ts$/,
            // 要使用的loader,执行顺序从后往前执行
            use: [
                // 配置babel
                {
                    // 指定加载器
                    "loader": 'babel-loader',
                    // 设置babel
                    "options": {
                        // 设置预定义的环境
                        presets: [
                            [
                                //指定环境插件
                                "@babel/preset-env",
                                //配置信息
                                {
                                    //要兼容的目标浏览器
                                    targets: {
                                        "chrome": "50",
                                        "ie": "11",
                                    },
                                    //指定corejs的版本
                                    "corejs": "3",
                                    // 使用corejs的方式"usage" 表示按需加载
                                    "useBuiltIns": "usage",
                                }
                            ]
                        ]
                    } 
                },
                'ts-loader'
            ],
            // 要排除的文件
            exclude: /node-modules/

            }, 
            { // 设置less相关配置
                test: /\.less$/,
                use: [ // 顺序从后向前
                    "style-loader",
                    "css-loader",
                    // 引入postcss, 将css降级处理以便适配低版本的浏览器，顺序在less-loader之后，css-loader之前
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions", // 适配每种浏览器的最新的两个版本
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },
    // The 'mode' option has not been set, webpack will fallback to 'production' for this value.
    mode: "production",
    //配置webpack插件
    plugins: [
        new HTMLWebpackPluge({
            //title: "自定义title",
            template: "./src/index.html"
        }), // 自动生成html文件并引入相关资源
        new CleanWebpackPlugin(),
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}