"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
userRouter.post("/", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        status: 200,
        success: true,
        message: 'User created successfully',
        data: user,
    });
});
userRouter.get("/", (req, res) => {
    res.json({
        status: 200,
        success: true,
        message: 'Users data load successfully',
    });
});
app.get('/', (req, res) => {
    res.send('Hello Developer!');
});
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
        });
    }
});
exports.default = app;
