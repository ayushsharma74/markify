"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = __importDefault(require("blessed"));
const Markify_1 = require("./Markify");
const createInterface = (input, output) => {
    const screen = blessed_1.default.screen({
        smartCSR: true,
        title: 'Markdown to HTML Converter',
    });
    // Create a box to display messages
    const box = blessed_1.default.box({
        top: 'center',
        left: 'center',
        width: '80%',
        height: '50%',
        content: 'Converting Markdown...',
        tags: true,
        border: {
            type: 'line',
        },
        style: {
            fg: 'white',
            bg: 'black',
            border: {
                fg: '#f0f0f0',
            },
        },
    });
    screen.append(box);
    screen.render();
    try {
        const converter = Markify_1.Markify.fromFile(input);
        if (output) {
            converter.convertToHTMLFile(output);
            box.setContent(`{green-fg}Success! HTML saved to ${output}{/green-fg}`);
        }
        else {
            const html = converter.convertToHTML();
            box.setContent(`{blue-fg}HTML Output:\n{/blue-fg}${html}`);
        }
    }
    catch (error) {
        box.setContent(`{red-fg}Error: ${error.message}{/red-fg}`);
    }
    // Quit on `q` key
    screen.key(['q', 'C-c'], () => {
        return process.exit(0);
    });
    screen.render();
};
exports.default = createInterface;
