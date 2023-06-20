import { Request, Response, NextFunction } from "express"

export default function notFoundMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
    res.status(400).json({
        data: error,
    })
}
