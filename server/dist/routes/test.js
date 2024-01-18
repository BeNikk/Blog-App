"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const best_1 = require("../controller/best");
const router = express_1.default.Router();
router.get('/', best_1.hello);
exports.default = router;
