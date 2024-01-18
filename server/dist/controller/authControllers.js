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
exports.signin = exports.signup = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const app = (0, express_1.default)();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
app.use(express_1.default.json());
const secret = '$upera';
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email) {
            res.json({ error: "no email" });
        }
        const user = yield user_1.default.findOne({ email });
        if (user) {
            res.status(200).json({ message: "User already exists" });
        }
        else {
            const obj = { email: email, password: password };
            const newUser = new user_1.default(obj);
            yield newUser.save();
            const token = jsonwebtoken_1.default.sign({ email: email }, secret, { expiresIn: '12h' });
            res.json({ message: "user created successfully", token: token });
        }
    });
}
exports.signup = signup;
function signin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield user_1.default.findOne({ email: email, password: password });
            if (user) {
                const token = jsonwebtoken_1.default.sign({ email: email }, secret, { expiresIn: '24h' });
                res.status(200).json({ token: token });
            }
            else {
                res.status(400).json({ message: 'invalid credentials' });
            }
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.signin = signin;
