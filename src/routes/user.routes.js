import { Router } from "express";
import * as userCtrl from "../controllers/userController";
import {authjwt, verifySignup} from "../middlewares";
const router = Router()

router.post('/', [
    authjwt.verifyToken,
    authjwt.isAdmin, verifySignup.checkRolesExisted
],userCtrl.createUser)

export default router;