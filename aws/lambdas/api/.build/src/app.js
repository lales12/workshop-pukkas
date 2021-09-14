"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = __importDefault(require("./routes/book.routes"));
const app = (0, express_1.default)();
app.use('/book', book_routes_1.default);
app.use((req, res, next) => {
    console.log(req);
    return res.status(200).json({
        message: "default!",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map