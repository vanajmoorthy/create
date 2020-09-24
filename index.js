#!/usr/bin/env node

const chalk = require("chalk");
const shell = require("shelljs");
const argv = require("minimist")(process.argv.slice(2));
const path = require("path");
const fs = require("fs");
const fsExtra = require("fs-extra");

const createFile = (filepath) => {
	const dir = path.dirname(filepath);
	console.log("gg");
	if (!fs.existsSync(dir)) {
		const pathToFile = path.join(__dirname, dir);
		fsExtra.ensureDirSync(pathToFile);
	}
	const filePath = `${process.cwd()}/${filepath}`;
	shell.touch(filePath);
	return filePath;
};

const success = (filepath) => {
	console.log(
		chalk.white.bgBlue.bold(`Completed! File/folder created at ${filepath}`)
	);
};

const run = () => {
	console.log(createFile(argv._[0]));
	success(argv._[0]);
};

run();
