import { Strategy as LocalPassportStrategy } from "passport-local"
import Users from "../models/User.model"
import bcryptjs from "bcryptjs"
import { generateTokenModel } from "../utils/jwt"

const localStrategy = new LocalPassportStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async function (email: string, password: string, done: any) {
        const user = await Users.findOne({ email }).select("+password")
        if (!user || !(await bcryptjs.compare(password, user?.password || ""))) {
            return done(null, { message: "Invalid Credentials" })
        }
        return done(null, generateTokenModel(user))
    }
)
export default localStrategy
