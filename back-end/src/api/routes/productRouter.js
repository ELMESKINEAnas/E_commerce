import express from "express";
const router = express.Router();


import {
    getProduct ,getAllProduct, addProduct, deleteProduct, updateProduct
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/getOne/:id", getProduct)
router.get("/getAll", getAllProduct)
router.post("/create", addProduct)
router.delete("/delete/:id", deleteProduct)
router.patch("/update/:id", updateProduct)

export { router }