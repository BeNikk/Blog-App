"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader;
    if (!token) {
        res.json({ message: "signup/signin" });
    }
    else {
        jsonwebtoken_1.default.verify(token, '$upera', (err, user) => {
            if (err) {
                return res.status(400).json({ message: "invalid token" });
            }
        });
        next();
    }
}
exports.authenticateToken = authenticateToken;
