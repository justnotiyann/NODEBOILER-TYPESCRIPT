import { Router } from "express"
import { get } from "./users.controller"
const router: Router = Router()

router.get("/", get)

export default router
