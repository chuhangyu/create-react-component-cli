#!/usr/bin/env node
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('./utils/common'),
    mapActions = _require.mapActions;

var program = require('commander');

var _require2 = require('./utils/constants'),
    version = _require2.version;

var path = require('path');

Reflect.ownKeys(mapActions).forEach(function (action) {
  program.command(action).alias(mapActions[action].alias).description(mapActions[action].description).action(function () {
    if (action === '*') {
      console.log(mapActions[action].description);
    } else {
      require(path.join(__dirname, action)).apply(void 0, _toConsumableArray(process.argv.slice(3)));
    }
  });
});
program.version(version).parse(process.argv);
program.on("--help", function () {
  console.log('help');
});