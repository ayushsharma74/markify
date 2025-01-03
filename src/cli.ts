import blessed from 'blessed';
import { Markify } from './Markify';

const createInterface = (input: string, output?: string) => {
    const screen = blessed.screen({
        smartCSR: true,
        title: 'Markdown to HTML Converter',
    });

    // Create a box to display messages
    const box = blessed.box({
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
        const converter = Markify.fromFile(input);

        if (output) {
            converter.convertToHTMLFile(output);
            box.setContent(`{green-fg}Success! HTML saved to ${output}{/green-fg}`);
        } else {
            const html = converter.convertToHTML();
            box.setContent(`{blue-fg}HTML Output:\n{/blue-fg}${html}`);
        }
    } catch (error) {
        box.setContent(`{red-fg}Error: ${(error as Error).message}{/red-fg}`);
    }

    // Quit on `q` key
    screen.key(['q', 'C-c'], () => {
        return process.exit(0);
    });

    screen.render();
};

export default createInterface;
