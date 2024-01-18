"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authControllers_1 = require("../controller/authControllers");
router.post('/signup', authControllers_1.signup);
router.post('/signin', authControllers_1.signin);
exports.default = router;