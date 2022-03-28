import express from "express";
const router = express.Router();


import {
    createCustomer ,confirmEmail, createOrder,
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/confirmEmail/:id", confirmEmail)
router.post("/createCustomer", createCustomer)
router.post("/createOrder", createOrder)

export { router }