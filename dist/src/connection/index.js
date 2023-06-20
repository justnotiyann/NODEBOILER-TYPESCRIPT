"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const connectDB = mongoose_1.default
    .connect(config_1.MONGODB_URL)
    .then((data) => console.log("Connected to Database MongoDB"))
    .catch((error) => console.log(error));
exports.default = connectDB;
