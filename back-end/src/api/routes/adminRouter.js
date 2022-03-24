import express from "express";
const router = express.Router();


import {
    loginAdmin,
    logout,
    createCustomer,
    confirmEmail
} from "../controllers"

import {
    CreatUserValidator,
    Auth
} from "../middlewares"

// router.post("/login", loginAdmin)
router.get("/logout", logout)
router.get("/confirmEmail/:id", confirmEmail)
router.post("/createCustomer", createCustomer)
export { router }