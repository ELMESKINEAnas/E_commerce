import express from "express";
const router = express.Router();


import {
    getCategory ,getAllCategory, addCategory, deleteCategory, updateCategory
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/getOne/:id", getCategory)
router.get("/getAll", getAllCategory)
router.post("/create", addCategory)
router.delete("/delete/:id", deleteCategory)
router.patch("/update/:id", updateCategory)

export { router }