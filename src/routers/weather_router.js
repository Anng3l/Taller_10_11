import { Router } from "express";
import { getAllCorteController, getOneCorteController, createCorte, deleteCorte, updateCorte } from "../controllers/corteController.js";

const router = Router();

router.get("/", (req, res) => {
    res.json("Root del ruteo en '/lab'")
})

router.get("/clima", getAllCorteController);

router.get("/clima/:postal", getOneCorteController);

router.post("/clima", createCorte);

router.put("/clima", updateCorte);

router.delete("clima", deleteCorte);



export default router;