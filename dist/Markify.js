"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markify = void 0;
const fs_1 = __importDefault(require("fs"));
const marked_1 = require("marked");
const path_1 = __importDefault(require("path"));
class Markify {
    constructor(markdown) {
        this.markdown = markdown;
    }
    static fromFile(filePath) {
        const resolvedPath = path_1.default.resolve(filePath);
        const markdown = fs_1.default.readFileSync(resolvedPath, "utf-8");
        return new Markify(markdown);
    }
    convertToHTML() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, marked_1.marked)(this.markdown);
        });
    }
    convertToHTMLFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const html = yield this.convertToHTML();
            const resolvedPath = path_1.default.resolve(filePath);
            fs_1.default.writeFileSync(resolvedPath, html);
        });
    }
}
exports.Markify = Markify;
