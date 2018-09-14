# 电竞赛事 - 小程序

基于: Taro(React) + Typescript + Immutable + Dva 开发的 小程序

## 预览项目

```bash
yarn install

# 小程序 预览模式 => 用 小程序开发工具 打开 ./dist 文件夹 即可预览
yarn dev:weapp 
```

## 打包项目

```bash
# 打包完成的小程序 文件在 ./dist 文件夹内
yarn build:weapp
```

## TODO-LIST
* 全局 lang 配置
* lodash 引用 优化 - 整体引入 会造成项目体积过大, 无法上传
* Pure Component 使用
* 贴合 小程序设计规范 (UI)
* 个人中心
* 资讯新闻 展示
* 前端 展示 gameType 全部为 大写; 提交接口的时候 转换为小写
