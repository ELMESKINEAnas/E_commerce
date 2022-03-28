import express from "express";
const router = express.Router();


import {
    getShippingCompany ,getAllShippingCompany, addShippingCompany, deleteShippingCompany, updateShippingCompany
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/getOne/:id", getShippingCompany)
router.get("/getAll", getAllShippingCompany)
router.post("/create", addShippingCompany)
router.delete("/delete/:id", deleteShippingCompany)
router.patch("/update/:id", updateShippingCompany)

export { router }