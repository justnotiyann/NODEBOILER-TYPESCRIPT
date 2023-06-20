import { NextFunction, Request, Response } from "express"
import { getAllUsers } from "./users.repository"

export async function get(req: Request, res: Response, next: NextFunction) {
    const result = await getAllUsers()
}
