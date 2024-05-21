## 给大仓安装依赖
``` shell
yarn add sass --dev -W
```

## 给小仓单独安装依赖
``` shell
cd packages/official-xxx
yarn add mmm
```

## 跨项目引用公用模块资源
webpack本身支持alias配置，从而从其他目录引用源码。
这里有几个配置点: 
1. create-react-app创建项目webpack.config.js是被隐藏的
2. create-react-app使用ModuleScopePlugin限制从项目根路径外引入模块

解决问题：
1. 使用react-app-rewired。不要用官方说的eject，因为配置太难管理了
2. 在config-overrides.js里面使用react-app-rewire-alias/lib/aliasDangerous，突破只能从项目根目录内引用的约束

