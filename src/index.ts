#!/usr/bin/env node
import { program } from 'commander';
import createInterface from './cli.js';

program
    .argument('<input>', 'Path to the input Markdown file')
    .option('-o, --output <output>', 'Path to save the output HTML file')
    .action((input, options) => {
        createInterface(input, options.output);
    });

program.parse(process.argv);

export default program;
