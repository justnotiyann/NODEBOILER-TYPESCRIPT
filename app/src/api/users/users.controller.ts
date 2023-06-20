import { NextFunction, Request, Response } from "express"
import { createUser, getUserByEmailServices, getUserByUsernameServices, getUserByIdServices } from "./users.repository"
import Users from "../../models/User.model"

export async function getController(req: Request, res: Response, next: NextFunction) {
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10

    const result = await Users.getAllUsers(page, limit)
    res.status(200).json({ data: result })
}

export async function createController(req: Request, res: Response, next: NextFunction) {
    const { username, email, password } = req.body

    const checkEmail = await getUserByEmailServices(email)
    if (checkEmail) return res.status(400).json({ data: "Email already in used" })

    const result = await createUser(username, email, password)
    res.status(200).json({ data: result })
}

export async function getUserByUsernameController(req: Request, res: Response, next: NextFunction) {
    const username = req.params.username
    const result = await getUserByUsernameServices(username)
    res.status(200).json({ data: result })
}

export async function getUserByIdFunctionController(req: Request, res: Response, next: NextFunction) {
    const id = req.body.id
    const result = await getUserByIdServices(id)
    res.status(200).json({ data: result })
}
export async function getUserByEmailController(req: Request, res: Response, next: NextFunction) {
    const id = req.body.id
    const result = await getUserByEmailServices(id)
    res.status(200).json({ data: result })
}
