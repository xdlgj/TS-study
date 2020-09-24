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
