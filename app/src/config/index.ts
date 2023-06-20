import dotenv from "dotenv"
dotenv.config()

export const MONGODB_URL = process.env.MONGODB_URL!
export const PORT_SERVER = process.env.PORT_SERVER!
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY!
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!
export const GOOGLE_CALLBACK = process.env.GOOGLE_CALLBACK!
