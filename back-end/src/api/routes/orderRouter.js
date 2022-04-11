import express from "express";
const router = express.Router();


import {
    createOrder ,getUserOrder, getAllOrder, getMonthlyOrder, deleteOrder,updateOrder

} from "../controllers"

import {
    Auth
} from "../middlewares"

router.get("/getUserOrder/:id", getUserOrder)
router.get("/getAll", getAllOrder)
router.get("/getMonthlyOrder", getMonthlyOrder)
router.post("/create",Auth('ADMIN'), createOrder)
router.delete("/delete/:id",Auth('ADMIN'), deleteOrder)
router.patch("/update/:id",Auth('ADMIN'), updateOrder)

export { router }