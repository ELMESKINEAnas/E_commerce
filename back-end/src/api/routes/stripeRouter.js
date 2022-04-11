import express from "express";
const router = express.Router();


import {
    payment 
} from "../controllers"

// import {
//     Auth
// } from "../middlewares"


router.post("/payment", payment)

export { router }