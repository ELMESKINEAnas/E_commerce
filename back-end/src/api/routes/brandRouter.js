import express from "express";
const router = express.Router();


import {
    getBrand ,getAllBrand, addBrand, deleteBrand, updateBrand
} from "../controllers"

import {
    Auth
} from "../middlewares"

router.get("/getOne/:id", getBrand)
router.get("/getAll", getAllBrand)
router.post("/create",Auth('ADMIN'), addBrand)
router.delete("/delete/:id",Auth('ADMIN'), deleteBrand)
router.patch("/update/:id",Auth('ADMIN'), updateBrand)

export { router }