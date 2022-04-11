import express from "express";
const router = express.Router();


import {
    getCategory ,getAllCategory, addCategory, deleteCategory, updateCategory
} from "../controllers"

import {
    Auth
} from "../middlewares"

router.get("/getOne/:id", getCategory)
router.get("/getAll", getAllCategory)
router.post("/create",Auth('ADMIN'), addCategory)
router.delete("/delete/:id",Auth('ADMIN'), deleteCategory)
router.patch("/update/:id",Auth('ADMIN'), updateCategory)

export { router }