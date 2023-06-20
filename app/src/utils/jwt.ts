import jwt from "jsonwebtoken"
import { IUserSchema } from "../interface/userSchema"
import { JWT_SECRET_KEY } from "../config"

export function generateTokenModel(data: IUserSchema) {
    const payload = {
        id: data._id,
        email: data.email,
    }
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10h" })
    return token
}
