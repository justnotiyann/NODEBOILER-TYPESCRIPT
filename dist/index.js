"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = require("./src/config");
const connection_1 = __importDefault(require("./src/connection"));
const app = (0, express_1.default)();
const port = parseInt(config_1.PORT_SERVER) || 3000;
connection_1.default;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
// Error Handling
const handleErrorMiddleware_1 = __importDefault(require("./src/middleware/handleErrorMiddleware"));
app.use(handleErrorMiddleware_1.default);
app.listen(port, function () {
    console.log(`Server running at port ${port}`);
});
exports.default = app;
