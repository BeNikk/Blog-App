"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const BlogPost_1 = __importDefault(require("./routes/BlogPost"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://nikhilbhatt:nikhilbhatt@cluster0.a4hdcfb.mongodb.net/blog-App');
app.use('/', authRoutes_1.default);
app.use('/', BlogPost_1.default);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
