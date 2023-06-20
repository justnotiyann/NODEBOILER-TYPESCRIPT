import "express-async-errors"
import express, { Express } from "express"
import cors from "cors"
import helmet from "helmet"
import passport from "passport"

import localStrategy from "./src/passport/local.passport"
import { PORT_SERVER } from "./src/config"
import connectDB from "./src/connection"

const app: Express = express()
const port: number = parseInt(PORT_SERVER as string) || 3000
connectDB

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())
passport.use(localStrategy)

// Our Routes
import userRoutes from "./src/api/users/users.routes"
import localAuthRoutes from "./src/api/auth/login/login.routes"

app.use("/api/auth/", localAuthRoutes)
app.use("/api/users", userRoutes)

// Error Handling
import errorHandlingMiddleware from "./src/middleware/handleErrorMiddleware"

app.use(errorHandlingMiddleware)

app.listen(port, function () {
    console.log(`Server running at port ${port}`)
})

export default app
