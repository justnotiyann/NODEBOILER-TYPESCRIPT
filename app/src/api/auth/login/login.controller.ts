import { NextFunction, Request, Response } from "express"
import passport from "passport"

export function local(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("local", { session: false }, function (error: any, user: any, info: any) {
        if (error && !user) return res.status(400).json({ data: "Invalid Credentials" })
        res.status(200).json({ data: user })
    })(req, res, next)
}
