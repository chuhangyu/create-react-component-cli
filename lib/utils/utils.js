"use strict";

function getCurrentDir() {
  // 获取当前所在上级目录文件夹
  var pwd = process.cwd();
  var result = pwd.split("/").pop();
  return result;
}

module.exports = {
  getCurrentDir: getCurrentDir
};