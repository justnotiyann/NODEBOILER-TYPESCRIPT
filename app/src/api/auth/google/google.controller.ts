import { Request, Response } from "express"
import passport = require("passport")

export const loginGoogle = passport.authenticate("google", { session: false })
export const loginGoogleCallback = function (req: Request, res: Response) {
    const token = req.user
    res.status(200).json({ data: token })
}
