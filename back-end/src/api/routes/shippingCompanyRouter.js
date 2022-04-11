import express from "express";
const router = express.Router();


import {
    getShippingCompany ,
    getAllShippingCompany, 
    addShippingCompany, 
    deleteShippingCompany, 
    updateShippingCompany
} from "../controllers"

import {
    Auth
} from "../middlewares"


router.get("/getOne/:id", getShippingCompany)
router.get("/getAll", getAllShippingCompany)
router.post("/create",Auth('ADMIN'), addShippingCompany)
router.delete("/delete/:id",Auth('ADMIN'), deleteShippingCompany)
router.patch("/update/:id",Auth('ADMIN'), updateShippingCompany)

export { router }