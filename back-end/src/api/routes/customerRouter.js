import express from "express";
const router = express.Router();


import {
    createCustomer,
    confirmEmail,
    createOrder,
    deleteCustomer,
    updateCustomer
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/confirmEmail/:id", confirmEmail)
router.post("/createCustomer", createCustomer)
router.post("/createOrder", createOrder)
router.delete("/deleteCustomer/:id",Auth('SUPERADMIN'), deleteCustomer)
router.patch("/updateCustomer/:id", updateCustomer)

export { router }