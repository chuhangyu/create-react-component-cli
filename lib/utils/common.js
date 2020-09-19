"use strict";

// 根据我们想要实现的功能配置执行动作，遍历产生对应的命令
var mapActions = {
  init: {
    alias: 'i',
    description: 'init project',
    examples: ['fast init']
  },
  '*': {
    alias: '',
    //别名
    description: 'command not found',
    // 描述
    examples: [] //用法

  }
};
module.exports = {
  mapActions: mapActions
};