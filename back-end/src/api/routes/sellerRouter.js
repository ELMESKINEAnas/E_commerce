import express from "express";
const router = express.Router();


import {
    createSeller, removeSeller, searchSeller, updateSeller, getAllSellers, getSeller
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/getOne/:id", getSeller)
router.get("/getAll", getAllSellers)
router.post("/create", createSeller)
router.delete("/delete/:id", removeSeller)
router.patch("/update/:id", updateSeller)

export { router }