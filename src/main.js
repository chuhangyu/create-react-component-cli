#!/usr/bin/env node
const { mapActions } = require('./utils/common');
const program = require('commander');
const { version } = require('./utils/constants');
const path = require('path');

Reflect.ownKeys(mapActions).forEach(action => {
	program.command(action)
		.alias(mapActions[action].alias)
		.description(mapActions[action].description)
		.action(() => {
			if (action === '*') {
				console.log(mapActions[action].description);
			} else {
				require(path.join(__dirname,action))(...process.argv.slice(3));
			}
		})
})


program.version(version)
	.parse(process.argv);

program.on("--help", () => {
	console.log('help');
})