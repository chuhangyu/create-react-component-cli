"use strict";

var packageConfig = require('../../package.json');

var version = packageConfig.version,
    name = packageConfig.name;
module.exports = {
  version: version,
  name: name
};