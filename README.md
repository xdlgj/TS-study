# 环境准备
安装typescript
```
npm install -g typescript
或
yarn global add typescript
```
## 开发工具VScode配置
1、创建tsconfig.json文件 
```
tsc --init
```
2、修改配置文件
```
"outDir": "./js",                        /* Redirect output structure to the directory. */
```
3、terminal -> Run Task... -> tsc: watch - tsconfig.json, 之后ts代码将自动转换为js代码
# webpack
1、npm init -y :生成package.json文件
2、npm i(install) -D(--save-dev) webpack webpack-cli typescript ts-loader 安装相关的开发依赖
```json
"devDependencies": {
    "ts-loader": "^8.1.0",
    "typescript": "^4.2.4",
    "webpack": "^5.33.2",
    "webpack-cli": "^4.6.0"
  }
```
2、创建webpack.config.js文件
3、创建tsconfig.json
4、在package.json文件中添加 "build": "webpack"
5、npm i -D html-webpack-plugin： 自动生成html文件 在webpack.config.js中添加
```
// 引入html插件
const HTMLWebpackPluge = require("html-webpack-plugin")s;
//配置webpack插件
plugins: [
    new HTMLWebpackPluge(), // 自动生成html文件并引入相关资源
]
```
6、配置热更新: npm i -D webpack-dev-server
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open chorme.exe"
  },
```
7、npm i -D clean-webpack-plugin： 编译之前清空dist目录， 在webpack.config.js中添加
```
// 引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
plugins: [
    new CleanWebpackPlugin(),
]
```
8、配置适配各种浏览器:npm i -D @babel/core @babel/preset-env babel-loader core-js
```
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
                            "chrome": "50"
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
```