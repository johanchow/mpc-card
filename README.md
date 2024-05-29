## 项目架构
本项目是同时支持PC版和H5版，用lerna管理的大仓模式。其中
- official-common: 公共模块，包括通用组件、公共功能、样式等
- official-pc: PC端的业务逻辑和样式
- official-h5: H5端的业务逻辑和样式
重要的是：上面3个项目都支持独立的开发调试、打包；而且official-pc和official-h5项目开发时候，是引用official-common源码，比起传统的npm link等方式便利很多。

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

