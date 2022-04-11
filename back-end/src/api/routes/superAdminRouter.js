import express from "express";
const router = express.Router();


import {
    createSuperAdmin, updateSuperAdmin, getSuperAdmin,loginSuperAdmin,logoutSuperAdmin
} from "../controllers"

import {
    Auth
} from "../middlewares"
router.post("/login", loginSuperAdmin)
router.get("/getOne/:id", getSuperAdmin)
router.post("/create", createSuperAdmin)
router.patch("/update/:id",Auth('SUPERADMIN'), updateSuperAdmin)
router.get("/logout", logoutSuperAdmin)


export { router }