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
exports.getSpecificBlog = exports.getBlog = exports.createBlog = void 0;
const express_1 = __importDefault(require("express"));
const blog_1 = __importDefault(require("../models/blog"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
function createBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { blogTitle, blogContent } = req.body;
        const obj = { blogTitle, blogContent };
        const newBlog = new blog_1.default(obj);
        yield newBlog.save();
        res.json({ message: "Blog successfully created" });
    });
}
exports.createBlog = createBlog;
function getBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const allblog = yield blog_1.default.find({});
        res.json(allblog);
    });
}
exports.getBlog = getBlog;
function getSpecificBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const blog = yield blog_1.default.findOne({ _id: id });
        if (blog) {
            res.json({ blog: blog });
        }
        else {
            res.json({ message: "blog not found" });
        }
    });
}
exports.getSpecificBlog = getSpecificBlog;
