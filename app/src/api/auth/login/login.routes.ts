import { Router } from "express"
import { local } from "./login.controller"
const router: Router = Router()

router.post("/login", local)

export default router
