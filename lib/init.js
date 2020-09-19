"use strict";

var fs = require('fs');

var clone = require('git-clone');

var _require = require('./utils/utils'),
    getCurrentDir = _require.getCurrentDir;

var inquirer = require('inquirer');

var fsExtra = require('fs-extra');

var cloneRepo = "https://github.com/chuhangyu/cli-template.git";

module.exports = function () {
  var basePath = process.cwd();
  console.log(getCurrentDir());
  var currentDir = getCurrentDir();
  inquirer.prompt([{
    type: "list",
    name: 'templateType',
    message: '请选择你要创建的项目类型',
    choices: ['react组件', '工具组件'],
    "default": 'react组件'
  }, {
    type: 'string',
    name: 'name',
    message: "\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",
    "default": currentDir
  }, {
    type: 'string',
    name: 'author',
    message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
    "default": ''
  }, {
    type: 'string',
    name: 'version',
    message: "\u8BF7\u8F93\u5165\u7248\u672C",
    "default": '1.0.0'
  }, {
    type: 'string',
    name: 'description',
    message: "\u8BF7\u8F93\u5165\u63CF\u8FF0",
    "default": ''
  }]).then(function (answers) {
    var tempPath = basePath + '/.temp';
    fs.mkdir(tempPath, function () {
      clone(cloneRepo, tempPath, null, function () {
        var repoTargetPath = answers.templateType === 'react组件' ? basePath + '/.temp/src/react' : basePath + '/.temp/src/util';
        fsExtra.copy(repoTargetPath, basePath + '/', function (err) {
          if (err) return console.log(err);
          var packagePath = basePath + '/package.json';

          var packageConfig = require(packagePath);

          var options = JSON.parse(JSON.stringify(answers));
          delete options.templateType;
          fs.writeFileSync(packagePath, JSON.stringify(Object.assign(packageConfig, options), null, 2), function () {});
          fsExtra.remove(tempPath, function (err) {
            if (err) return console.log(err);
          });
        });
      });
    });
  });
};