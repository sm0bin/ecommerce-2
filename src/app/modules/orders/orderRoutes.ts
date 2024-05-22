import express from "express";
const router = express.Router();
import { OrderController } from "./orderController";

router.get("/", OrderController.getAllOrders);
router.post("/", OrderController.createOrder);

export const OrderRoutes = router;
