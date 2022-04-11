import express from "express";
const router = express.Router();


import {
    getUserCart ,getAllCart, addCart, deleteCart, updateCart

} from "../controllers"

// import {
//     Auth
// } from "../middlewares"

router.get("/getOne/:id", getUserCart)
router.get("/getAll", getAllCart)
router.post("/create", addCart)
router.delete("/delete/:id", deleteCart)
router.patch("/update/:id", updateCart)

export { router }