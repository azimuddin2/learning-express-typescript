import express, { NextFunction, Request, Response } from "express"
const app = express()

app.use(express.json());
app.use(express.text());

const userRouter = express.Router();

app.use('/api/v1/users', userRouter);

userRouter.post(
    "/",
    (req: Request, res: Response) => {
        const user = req.body;
        console.log(user);

        res.json({
            status: 200,
            success: true,
            message: 'User created successfully',
            data: user,
        })
    });

userRouter.get(
    "/",
    (req: Request, res: Response) => {
        res.json({
            status: 200,
            success: true,
            message: 'Users data load successfully',
        });
    });

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Developer!')
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
        })
    }
});

export default app;