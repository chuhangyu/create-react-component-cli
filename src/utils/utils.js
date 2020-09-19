function getCurrentDir() { // 获取当前所在上级目录文件夹
  const pwd = process.cwd();
  const result = pwd.split("/").pop();
  return result;
}

module.exports = {
  getCurrentDir
}