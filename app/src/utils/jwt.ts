import jwt from "jsonwebtoken"
import { IUserSchema } from "../interface/userSchema"
import { IGoogleSchema } from "../models/Google.model"
import { JWT_SECRET_KEY } from "../config"

export function generateTokenModel(data: IGoogleSchema | IUserSchema) {
    let payload: { id: string; email: string }

    if ("_id" in data) {
        payload = {
            id: data._id,
            email: data.email,
        }
    } else {
        payload = {
            id: data.id,
            email: data.email,
        }
    }

    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10h" })
    return token
}
