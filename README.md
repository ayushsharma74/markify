# Markify

`Markify` is a command-line tool that converts Markdown files into HTML. This tool is designed for developers and non-developers who need a quick and easy way to transform Markdown files into HTML, whether for personal projects, blogs, or web applications.

---

## Features

- 🌟 **Convert Markdown to HTML** in seconds.
- 📂 **File-based input/output** for seamless integration.
- 🎨 **Rich terminal interface** for enhanced user experience using `blessed`.
- 🛠️ **Reusable as a library** in Node.js applications.

---

## Installation

### Global Installation via npm
To use the tool globally, install it directly from npm:

```bash
npm i -g @ayushsharma_npm/markify
```

### Local Installation for Library Use
For use as a library in your project:

```bash
npm install @ayushsharma_npm/markify
```

---

## Usage

### Command-Line Interface (CLI)

#### Convert a Markdown file to HTML
```bash
 @ayushsharma_npm/markify <input> -o <output>
```

**Arguments**:
- `<input>`: Path to the Markdown file you want to convert.
- `-o, --output`: (Optional) Path to save the generated HTML file.

#### Example:
1. Convert a Markdown file and save to an output file:
   ```bash
   @ayushsharma_npm/markify input.md -o output.html
   ```
2. Convert a Markdown file and display the HTML in the terminal:
   ```bash
    @ayushsharma_npm/markify input.md
   ```

#### Quit the terminal interface
Press `q` or `Ctrl+C` to exit the interface.

---

## Installation from Source

To use the tool directly from the source:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/markdown-to-html-cli.git
   cd markdown-to-html-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Link the tool for global use:
   ```bash
   npm link
   ```

5. Run the tool:
   ```bash
   @ayushsharma_npm/markify input.md -o output.html
   ```

---

## Development

### Prerequisites
- Node.js >= 16.x
- npm >= 8.x
- TypeScript

### Scripts
- `npm run build`: Compile the TypeScript code.
- `npm run dev`: Runs the code in dev mode
---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! If you have ideas, features, or bug fixes, feel free to open an issue or submit a pull request.

### Steps to Contribute
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## Acknowledgments

This tool is powered by:
- [Marked.js](https://marked.js.org/) for Markdown parsing.
- [Blessed](https://github.com/chjj/blessed) for creating the terminal UI.

---

## Future Features

- [ ] Support for custom Markdown styles/themes.
- [ ] Live preview of HTML in the terminal.
- [ ] Conversion of multiple files in one command.

---

Feel free to suggest any additional features or improvements! 😊
