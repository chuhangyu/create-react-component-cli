"use strict";

var _require = require('child_process'),
    exec = _require.exec;

module.exports = function () {
  // console.log(exec);
  exec('npm run commit', function (err, sto) {
    if (err) return console.log(err);
    console.log(sto);
  }); // exec('npm run commit', () => {});
};