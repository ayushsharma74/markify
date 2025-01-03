#!/usr/bin/env node
import { Command } from 'commander';
import createInterface from './cli';

const program = new Command();

program
    .argument('<input>', 'Path to the input Markdown file')
    .option('-o, --output <output>', 'Path to save the output HTML file')
    .action((input, options) => {
        createInterface(input, options.output);
    });

program.parse(process.argv);
