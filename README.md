## 项目架构
本项目是1个同时支持PC版和H5版的Defi类项目，采用lerna管理的大仓模式。其中
- official-common: 公共模块，包括通用组件、公共功能、样式等
- official-pc: PC端的业务逻辑和样式
- official-h5: H5端的业务逻辑和样式

优势：
1. 既可以统一管理代码，又能保持每个子项目都支持独立的开发调试、打包、发布
2. 子项目间有依赖时，开发时直接引用源码(如引用依赖official-common)，比起传统的npm link等方式便利很多。

## 项目介绍
本项目的业务场景是，支持用户在PC和移动端进行注册登录、开卡（与中心化钱包一一对应）、充值。之后用户可以在线上用卡进行消费付款。项目主要采用React+zustand(状态管理)+web3js(与合约、插件钱包交互)+uniswap(充值时进行token与usdt兑换)。

## 全部项目整体安装依赖
``` shell
yarn add sass --dev -W
```

## 单个项目独立安装依赖
``` shell
cd packages/official-xxx
yarn add sass
```

## 跨项目引用公共模块资源
webpack本身支持alias配置，从而从其他目录引用源码。
这里有几个配置点: 
1. create-react-app创建项目webpack.config.js是被隐藏的
2. create-react-app使用ModuleScopePlugin限制从项目根路径外引入模块

解决问题：
1. 使用react-app-rewired。不要用官方说的eject，因为配置太难管理了
2. 在config-overrides.js里面使用react-app-rewire-alias/lib/aliasDangerous，突破只能从项目根目录内引用的约束

