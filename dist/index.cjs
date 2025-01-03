#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const cli_1 = __importDefault(require("./cli"));
const program = new commander_1.Command();
program
    .argument('<input>', 'Path to the input Markdown file')
    .option('-o, --output <output>', 'Path to save the output HTML file')
    .action((input, options) => {
    (0, cli_1.default)(input, options.output);
});
program.parse(process.argv);
