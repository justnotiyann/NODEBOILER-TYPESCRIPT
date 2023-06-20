"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET_KEY = exports.PORT_SERVER = exports.MONGODB_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MONGODB_URL = process.env.MONGODB_URL;
exports.PORT_SERVER = process.env.PORT_SERVER;
exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
