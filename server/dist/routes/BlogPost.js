"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BlogController_1 = require("../controller/BlogController");
const authenticationMiddleware_1 = require("../middleware/authenticationMiddleware");
const router = express_1.default.Router();
router.post('/createblog', authenticationMiddleware_1.authenticateToken, BlogController_1.createBlog);
router.get('/myfeed', authenticationMiddleware_1.authenticateToken, BlogController_1.getBlog);
router.get('/post/:id', BlogController_1.getSpecificBlog);
exports.default = router;
