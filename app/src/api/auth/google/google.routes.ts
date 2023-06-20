import { Router } from "express"
import { loginGoogle, loginGoogleCallback } from "./google.controller"
const router: Router = Router()

router.get("/", loginGoogle)
router.get("/callback", loginGoogle, loginGoogleCallback)

export default router
