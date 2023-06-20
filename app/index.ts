import "express-async-errors"
import express, { Express } from "express"
import cors from "cors"
import helmet from "helmet"

import { PORT_SERVER } from "./src/config"
import connectDB from "./src/connection"

const app: Express = express()
const port: number = parseInt(PORT_SERVER as string) || 3000
connectDB

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())

// Error Handling
import notFoundMiddleware from "./src/middleware/handleErrorMiddleware"
app.use(notFoundMiddleware)

app.listen(port, function () {
    console.log(`Server running at port ${port}`)
})

export default app
