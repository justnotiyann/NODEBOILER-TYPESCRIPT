import { Request } from "express"
import { Strategy as PassportGoogleStrategy } from "passport-google-oauth2"
import { GOOGLE_CALLBACK, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config"
import GoogleModel, { IGoogleSchema } from "../models/Google.model"
import { generateTokenModel } from "../utils/jwt"

const googleStrategy = new PassportGoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK,
        scope: ["email", "profile"],
        passReqToCallback: true,
    },
    async function (req: Request, accessToken: string, refreshToken: string, profile: any, done: any) {
        const { id, displayName, photos, email } = profile
        let user = await GoogleModel.findOne({ email })
        if (!user) {
            const newUser = new GoogleModel({
                id,
                email,
                displayName,
                photos: photos[0].value,
            })
            await newUser.save()
        }

        const token = generateTokenModel(user as IGoogleSchema)
        req.user = token
        done(null, token)
    }
)

export default googleStrategy
