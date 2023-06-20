import { Router } from "express"
import { createController, getController, getUserByUsernameController, getUserByIdFunctionController } from "./users.controller"
const router: Router = Router()

router.get("/", getController)
router.post("/register", createController)
router.get("/detail/:id", getUserByIdFunctionController)
router.get("/:username", getUserByUsernameController)

export default router
