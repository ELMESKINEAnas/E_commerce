import express from "express";
const router = express.Router();


import {
    createAdmin, removeAdmin, searchAdmin, updateAdmin, getAllAdmins, getAdmin,loginAdmin,logoutAdmin
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"
router.post("/login", loginAdmin)
router.get("/getOne/:id", getAdmin)
router.get("/getAll", getAllAdmins)
router.post("/create", createAdmin)
router.delete("/delete/:id", removeAdmin)
router.patch("/update/:id", updateAdmin)
router.get("/logout", logoutAdmin)


export { router }