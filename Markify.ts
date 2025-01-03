import fs from "fs";
import { marked } from "marked";
import path from "path";


export class Markify {
    private markdown: string;

    constructor(markdown: string) {
        this.markdown = markdown;
    }

    static fromFile(filePath: string): Markify {
        const resolvedPath = path.resolve(filePath);
        const markdown = fs.readFileSync(resolvedPath, "utf-8");
        return new Markify(markdown);
    }

    async convertToHTML(): Promise<string> {
        return await marked(this.markdown);
    }

    async convertToHTMLFile(filePath: string): Promise<void> {
        const html = await this.convertToHTML();
        const resolvedPath = path.resolve(filePath);
        fs.writeFileSync(resolvedPath, html);
    }

}

