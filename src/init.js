const fs = require('fs');
const clone = require('git-clone');
const { getCurrentDir } = require('./utils/utils');
const inquirer = require('inquirer');
const fsExtra = require('fs-extra');

const cloneRepo = "https://github.com/chuhangyu/cli-template.git";

module.exports = () => {
  const basePath = process.cwd();
  console.log(getCurrentDir());
  const currentDir = getCurrentDir();

  inquirer
    .prompt([
      {
        type: "list",
        name: 'templateType',
        message: '请选择你要创建的项目类型',
        choices: ['react组件', '工具组件'],
        default: 'react组件',
      },
      {
        type: 'string',
        name: 'name',
        message: `请输入项目名称`,
        default: currentDir
      },
      {
        type: 'string',
        name: 'author',
        message: `请输入用户名`,
        default: ''
      },
      {
        type: 'string',
        name: 'version',
        message: `请输入版本`,
        default: '1.0.0'
      }, 
      {
        type: 'string',
        name: 'description',
        message: `请输入描述`,
        default: ''
      }, 
    ])
    .then(answers=>{
      const tempPath = basePath + '/.temp';
      fs.mkdir(tempPath, () => {
        clone(cloneRepo, tempPath, null, () => {
          const repoTargetPath = answers.templateType === 'react组件' ? basePath + '/.temp/src/react' : basePath + '/.temp/src/util';
          fsExtra.copy(repoTargetPath, basePath + '/', err => {
            if (err) return console.log(err);
            const packagePath = basePath + '/package.json';
            const packageConfig = require(packagePath);
            const options = JSON.parse(JSON.stringify(answers));
            delete options.templateType;
            fs.writeFileSync(packagePath, JSON.stringify(Object.assign(packageConfig, options), null, 2), () => {
              
            })
            fsExtra.remove(tempPath, (err) => {
              if (err) return console.log(err);
            })
          });
        });
      });
    })
}