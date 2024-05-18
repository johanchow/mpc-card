const path = require('path');
const { aliasDangerous } = require('react-app-rewire-alias/lib/aliasDangerous')

module.exports = function override(config, env) {
  // 修改webpack配置的alias到项目外模块
  config = aliasDangerous({
    'official-common': path.resolve(__dirname, '../official-common/src'),
  })(config, env);
  return config;
};
