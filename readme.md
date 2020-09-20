#如何安装
```
npm i fast-create-component-cli
npm link
```

安装完以后可以在命令行输入 `fast --version`查看当前版本

#如何初始化一个脚手架
首先在你的项目目录下面新建一个文件夹，文件夹可以以你想要发布的npm包名字来命名
```
cd workspace
mkdir test-npm-component
cd test-npm-component
fast init
```
然后根据命令行的提示一一选择，目前支持两种npm包脚手架的创建，react组件和普通工具
![使用](use.gif)