import express from "express";
const router = express.Router();


import {
    createSeller, removeSeller, searchSeller, updateSeller, getAllSellers, getSeller,getSellerStatus,confirmAccount
} from "../controllers"

import {
    Auth
} from "../middlewares"

router.get("/getOne/:id", getSeller)
router.get("/getAll",Auth('ADMIN'), getAllSellers)
router.get("/getSellerStatus",Auth('ADMIN'), getSellerStatus)
router.post("/create", createSeller)
router.delete("/delete/:id",Auth('ADMIN'), removeSeller)
router.patch("/update/:id", updateSeller)
router.post("/confirmAccount/:id", confirmAccount)

export { router }